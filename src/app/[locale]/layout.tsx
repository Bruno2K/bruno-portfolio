import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { getDictionary } from "@/i18n/dictionaries";
import { htmlLanguages, isLocale, locales } from "@/i18n/config";
import { geist, inter } from "@/lib/fonts";
import { createLocalizedPageMetadata, siteUrl } from "@/lib/metadata";
import "../globals.css";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<LocaleLayoutProps, "children">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);
  return {
    ...createLocalizedPageMetadata({
      title: dictionary.site.ogTitle,
      description: dictionary.site.description,
      path: "/",
      locale,
      siteName: dictionary.site.name,
      defaultTitle: dictionary.site.ogTitle,
    }),
    title: {
      default: dictionary.site.ogTitle,
      template: `%s · ${dictionary.site.name}`,
    },
    metadataBase: siteUrl,
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  return (
    <html lang={htmlLanguages[locale]} className={`${geist.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <SkipLink label={dictionary.ui.skipLink} />
        <SiteHeader
          locale={locale}
          site={dictionary.site}
          nav={dictionary.nav}
          copy={dictionary.ui.header}
        />
        {children}
        <SiteFooter
          locale={locale}
          site={dictionary.site}
          footerNav={dictionary.footerNav}
          copy={dictionary.ui.footer}
        />
      </body>
    </html>
  );
}
