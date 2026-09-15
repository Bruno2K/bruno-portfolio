import { projects } from "@/content/projects";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function SelectedWork() {
  return (
    <section id="projects" className="section-block">
      <Container>
        <Reveal>
          <SectionHeading
            index="(02) Engineering Case Studies"
            title="Systems, trade-offs, and evidence you can inspect."
          />
          <div className="mid:grid-cols-2 mid:gap-8 mt-12 grid gap-16">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
