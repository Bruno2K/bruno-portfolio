import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { SideProjectItem } from "@/components/ui/side-project-item";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { createLocalizedPageMetadata } from "@/lib/metadata";

type SideProjectsPageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({
  params,
}: SideProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  return createLocalizedPageMetadata({
    title: dictionary.ui.sideProjectsIndex.metadataTitle,
    description: dictionary.ui.sideProjectsIndex.metadataDescription,
    path: "/side-projects",
    locale,
    siteName: dictionary.site.name,
    defaultTitle: dictionary.site.ogTitle,
  });
}

export default async function SideProjectsPage({ params }: SideProjectsPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  return (
    <main id="main" className="section-block">
      <Container>
        <p className="text-eyebrow">{dictionary.ui.sideProjectsIndex.eyebrow}</p>
        <h1 className="text-display mt-5">{dictionary.ui.sideProjectsIndex.title}</h1>
        <div className="mid:grid-cols-2 mt-8 grid gap-x-16">
          {dictionary.sideProjects.map((project) => (
            <SideProjectItem key={project.slug} project={project} locale={locale} />
          ))}
        </div>
        <p className="mt-12">
          <Link href={`/${locale}`} className="nav-link text-[15px]">
            {dictionary.ui.sideProjectsIndex.backHome}
          </Link>
        </p>
      </Container>
    </main>
  );
}
