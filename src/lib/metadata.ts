import type { Metadata } from "next";
import { site } from "../content/site.ts";
import type { Locale } from "../i18n/config.ts";
import { localizePath } from "../i18n/routing.ts";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

function resolveSiteUrl() {
  if (!configuredSiteUrl) {
    return undefined;
  }

  const url = new URL(configuredSiteUrl);
  if (
    url.protocol !== "https:" ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an HTTPS origin without a path, query, or hash.",
    );
  }

  return url;
}

export const siteUrl = resolveSiteUrl();

export function getCanonicalUrl(path: string) {
  return siteUrl ? new URL(path, siteUrl).toString() : undefined;
}

export function getLocalizedCanonicalUrl(locale: Locale, path: string) {
  return getCanonicalUrl(localizePath(locale, path));
}

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  const canonicalUrl = getCanonicalUrl(path);
  const socialTitle = title === site.ogTitle ? title : `${title} · ${site.name}`;

  return {
    title,
    description,
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      siteName: site.name,
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

type LocalizedPageMetadata = PageMetadata & {
  locale: Locale;
  siteName: string;
  defaultTitle: string;
};

export function createLocalizedPageMetadata({
  title,
  description,
  path,
  locale,
  siteName,
  defaultTitle,
}: LocalizedPageMetadata): Metadata {
  const canonicalUrl = getLocalizedCanonicalUrl(locale, path);
  const englishUrl = getLocalizedCanonicalUrl("en", path);
  const portugueseUrl = getLocalizedCanonicalUrl("pt-br", path);
  const defaultUrl = getCanonicalUrl(path === "/" ? "/" : path);
  const socialTitle = title === defaultTitle ? title : `${title} · ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: englishUrl,
        "pt-BR": portugueseUrl,
        "x-default": defaultUrl,
      },
    },
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      siteName,
      locale: locale === "pt-br" ? "pt_BR" : "en_US",
      alternateLocale: locale === "pt-br" ? ["en_US"] : ["pt_BR"],
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
