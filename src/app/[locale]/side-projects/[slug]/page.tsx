import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { createLocalizedPageMetadata } from "@/lib/metadata";

type SideProjectPageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  return getDictionary(params.locale).sideProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: SideProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  const project = dictionary.sideProjects.find((item) => item.slug === slug);
  if (!project) return { title: dictionary.ui.sideProjectPage.fallbackTitle };
  return createLocalizedPageMetadata({
    title: project.title,
    description: project.description,
    path: `/side-projects/${project.slug}`,
    locale,
    siteName: dictionary.site.name,
    defaultTitle: dictionary.site.ogTitle,
  });
}

export default async function SideProjectPage({ params }: SideProjectPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const project = dictionary.sideProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  const external = project.href.startsWith("http");
  const href = external ? project.href : `/${locale}${project.href}`;

  return (
    <main id="main" className="section-block min-h-[60vh]">
      <Container className="flex max-w-[640px] flex-col gap-6">
        <p className="text-eyebrow">{project.tech}</p>
        <h1 className="text-display">{project.title}</h1>
        <p className="text-lead">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href={href} external={external}>
            {project.linkLabel}
          </Button>
        </div>
        <p className="pt-8">
          <Link href={`/${locale}/side-projects`} className="nav-link text-[15px]">
            {dictionary.ui.sideProjectPage.back}
          </Link>
        </p>
      </Container>
    </main>
  );
}
