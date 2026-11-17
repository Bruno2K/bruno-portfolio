import type { Metadata } from "next";
import { site } from "@/content/site";

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
