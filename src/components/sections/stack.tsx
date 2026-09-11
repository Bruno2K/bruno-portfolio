import { stack } from "@/content/stack";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillChip } from "@/components/ui/skill-chip";

export function Stack() {
  return (
    <section className="section-block pt-0">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <SectionHeading
            index="(02) Stack"
            title="The tools I reach for, day to day."
            as="h3"
          />
          <ul className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <SkillChip key={item} label={item} />
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
