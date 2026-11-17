export const locales = ["en", "pt-br"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "NEXT_LOCALE";
export const localeCookieMaxAge = 60 * 60 * 24 * 365;

export const htmlLanguages: Record<Locale, string> = {
  en: "en",
  "pt-br": "pt-BR",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return locales.includes(value as Locale);
}
