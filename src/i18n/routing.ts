import {
  defaultLocale,
  isLocale,
  localeCookieMaxAge,
  localeCookieName,
  type Locale,
} from "./config.ts";

type LanguagePreference = {
  language: string;
  quality: number;
  order: number;
};

export function getLocaleFromPathname(pathname: string): Locale | undefined {
  const firstSegment = pathname.split("/").filter(Boolean)[0]?.toLowerCase();
  return isLocale(firstSegment) ? firstSegment : undefined;
}

export function looksLikeLocaleSegment(pathname: string): boolean {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment ? /^[a-z]{2}(?:-[a-z]{2})?$/i.test(firstSegment) : false;
}

export function parseAcceptLanguage(header: string | null): LanguagePreference[] {
  if (!header) {
    return [];
  }

  return header
    .split(",")
    .map((entry, order) => {
      const [rawLanguage, ...parameters] = entry.trim().split(";");
      const language = rawLanguage?.trim().toLowerCase() ?? "";
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().toLowerCase().startsWith("q="),
      );
      const parsedQuality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;

      return {
        language,
        quality:
          Number.isFinite(parsedQuality) && parsedQuality >= 0 && parsedQuality <= 1
            ? parsedQuality
            : 0,
        order,
      };
    })
    .filter((preference) => preference.language && preference.quality > 0)
    .sort((left, right) => right.quality - left.quality || left.order - right.order);
}

export function mapLanguageToLocale(language: string): Locale | undefined {
  const normalized = language.toLowerCase();
  if (normalized === "pt" || normalized.startsWith("pt-")) {
    return "pt-br";
  }
  if (normalized === "en" || normalized.startsWith("en-")) {
    return "en";
  }
  return undefined;
}

export function negotiateLocale({
  cookieLocale,
  acceptLanguage,
}: {
  cookieLocale?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  for (const preference of parseAcceptLanguage(acceptLanguage ?? null)) {
    const locale = mapLanguageToLocale(preference.language);
    if (locale) {
      return locale;
    }
  }

  return defaultLocale;
}

export function stripLocale(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (!locale) {
    return pathname || "/";
  }

  const withoutLocale = pathname.slice(locale.length + 1);
  return withoutLocale || "/";
}

export function localizePath(locale: Locale, path: string): string {
  const [pathAndSearch = "/", hash] = path.split("#", 2);
  const [pathname = "/", search] = pathAndSearch.split("?", 2);
  const normalizedPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const localizedPathname = `/${locale}${stripLocale(normalizedPathname)}`;
  const query = search ? `?${search}` : "";
  const fragment = hash ? `#${hash}` : "";

  return `${localizedPathname}${query}${fragment}`;
}

export function serializeLocaleCookie(locale: Locale, secure: boolean): string {
  return `${localeCookieName}=${locale}; Max-Age=${localeCookieMaxAge}; Path=/; SameSite=Lax${secure ? "; Secure" : ""}`;
}
