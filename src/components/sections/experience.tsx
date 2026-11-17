import { Container } from "@/components/layout/container";
import { ExperienceItem } from "@/components/ui/experience-item";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/types";

export function Experience({
  experience,
  copy,
}: {
  experience: Dictionary["experience"];
  copy: Dictionary["ui"]["home"];
}) {
  return (
    <section id="experience" className="section-block">
      <Container>
        <Reveal>
          <SectionHeading
            index={copy.experienceIndex}
            title={copy.experienceTitle}
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
