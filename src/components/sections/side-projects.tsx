import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SideProjectItem } from "@/components/ui/side-project-item";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function SideProjects({
  locale,
  projects,
  copy,
}: {
  locale: Locale;
  projects: Dictionary["sideProjects"];
  copy: Dictionary["ui"]["home"];
}) {
  return (
    <section className="section-block">
      <Container>
        <Reveal>
          <SectionHeading
            index={copy.evidenceIndex}
            title={copy.evidenceTitle}
          />
          <div className="mid:grid-cols-2 mt-4 grid gap-x-16">
            {projects.map((project) => (
              <SideProjectItem key={project.slug} project={project} locale={locale} />
            ))}
          </div>
          <Link href={`/${locale}/side-projects`} className="nav-link mt-8 inline-flex">
            {copy.allSideProjects}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
