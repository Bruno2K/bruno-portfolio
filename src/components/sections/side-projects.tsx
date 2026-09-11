import { sideProjects } from "@/content/side-projects";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SideProjectItem } from "@/components/ui/side-project-item";

export function SideProjects() {
  return (
    <section className="section-block">
      <Container>
        <Reveal>
          <SectionHeading
            index="(05) Repositories"
            title="More code you can inspect."
          />
          <div className="mid:grid-cols-2 mt-4 grid gap-x-16">
            {sideProjects.map((project) => (
              <SideProjectItem key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
