import { experience } from "@/content/experience";
import { Container } from "@/components/layout/container";
import { ExperienceItem } from "@/components/ui/experience-item";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="section-block">
      <Container>
        <Reveal>
          <SectionHeading
            index="(03) Professional Experience"
            title="From full-stack engineering to leadership — and back to hands-on delivery."
          />
          <div className="border-line mt-4 border-t">
            {experience.map((phase) => (
              <ExperienceItem key={`${phase.period}-${phase.title}`} phase={phase} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
