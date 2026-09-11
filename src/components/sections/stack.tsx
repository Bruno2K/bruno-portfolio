import { stack } from "@/content/stack";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillChip } from "@/components/ui/skill-chip";

export function Stack() {
  return (
    <section className="section-block pt-0">
      <Container>
        <Reveal className="grid items-start gap-10 mid:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHeading
            index="(02) Stack"
            title="The tools I reach for, day to day."
            as="h3"
          />
          <ul className="flex flex-wrap gap-3 mid:justify-end">
            {stack.map((item) => (
              <SkillChip key={item} label={item} />
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
