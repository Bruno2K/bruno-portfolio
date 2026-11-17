import type { MetadataRoute } from "next";
import { locales } from "./config.ts";
import { getCanonicalUrl, getLocalizedCanonicalUrl } from "../lib/metadata.ts";

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
