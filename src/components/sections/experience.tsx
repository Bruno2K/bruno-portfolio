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
          <SectionHeading index="(03) Experience" title="Where I’ve been building." />
          <div className="border-line mt-4 border-t">
            {experience.map((role) => (
              <ExperienceItem key={role.company} role={role} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
