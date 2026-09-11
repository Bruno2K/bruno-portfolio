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
            index="(04) Selected Work"
            title="A few products I’m proud to have shipped."
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
