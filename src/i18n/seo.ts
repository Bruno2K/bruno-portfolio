import type { MetadataRoute } from "next";
import { isLocale, locales } from "./config.ts";
import { en } from "./dictionaries/en.ts";
import { ptBr } from "./dictionaries/pt-br.ts";
import { getCanonicalUrl, getLocalizedCanonicalUrl } from "../lib/metadata.ts";

export function getSocialImageAlt(locale: string) {
  return isLocale(locale) && locale === "pt-br"
    ? ptBr.site.ogImageAlt
    : en.site.ogImageAlt;
}

export function createLocalizedSitemap(paths: readonly string[]): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.flatMap((locale) => {
      const url = getLocalizedCanonicalUrl(locale, path);
      if (!url) {
        return [];
      }

      return [
        {
          url,
          alternates: {
            languages: {
              en: getLocalizedCanonicalUrl("en", path),
              "pt-BR": getLocalizedCanonicalUrl("pt-br", path),
              "x-default": getCanonicalUrl(path),
            },
          },
        },
      ];
    }),
  );
}
