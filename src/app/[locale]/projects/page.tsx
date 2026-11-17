import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/ui/project-card";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { createLocalizedPageMetadata } from "@/lib/metadata";

type ProjectsPageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  return createLocalizedPageMetadata({
    title: dictionary.ui.projectsIndex.metadataTitle,
    description: dictionary.ui.projectsIndex.metadataDescription,
    path: "/projects",
    locale,
    siteName: dictionary.site.name,
    defaultTitle: dictionary.site.ogTitle,
  });
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const featuredProjects = dictionary.projects.filter(
    (project) =>
      project.slug === "neon-arsenal-market" || project.slug === "team-scrapbook",
  );

  return (
    <main id="main" className="section-block">
      <Container>
        <p className="text-eyebrow">{dictionary.ui.projectsIndex.eyebrow}</p>
        <h1 className="text-display mt-5 max-w-[18ch]">
          {dictionary.ui.projectsIndex.title}
        </h1>
        <div className="mid:grid-cols-2 mid:gap-8 mt-16 grid gap-16">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              copy={dictionary.ui.projectCard}
            />
          ))}
        </div>
        <p className="mt-16">
          <Link href={`/${locale}`} className="nav-link text-[15px]">
            {dictionary.ui.projectsIndex.backHome}
          </Link>
        </p>
      </Container>
    </main>
  );
}
