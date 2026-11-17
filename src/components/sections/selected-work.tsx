import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function SelectedWork({
  locale,
  projects,
  copy,
}: {
  locale: Locale;
  projects: Dictionary["projects"];
  copy: Dictionary["ui"];
}) {
  const featuredProjects = projects.filter(
    (project) =>
      project.slug === "neon-arsenal-market" || project.slug === "team-scrapbook",
  );
  return (
    <section id="projects" className="section-block">
      <Container>
        <Reveal>
          <SectionHeading
            index={copy.home.selectedWorkIndex}
            title={copy.home.selectedWorkTitle}
          />
          <div className="mid:grid-cols-2 mid:gap-8 mt-12 grid gap-16">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                copy={copy.projectCard}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
