import { stackGroups } from "@/content/stack";
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
            index="(04) Technical Surface"
            title="Capabilities first. Tools second."
            as="h3"
          />
          <div className="grid gap-8">
            {stackGroups.map((group) => (
              <div key={group.label}>
                <p className="text-eyebrow mb-3">{group.label}</p>
                <ul className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <SkillChip key={item} label={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
