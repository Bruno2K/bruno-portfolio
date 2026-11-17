import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillChip } from "@/components/ui/skill-chip";
import type { Dictionary } from "@/i18n/types";

export function Stack({
  groups,
  copy,
}: {
  groups: Dictionary["stackGroups"];
  copy: Dictionary["ui"]["home"];
}) {
  return (
    <section className="section-block pt-0">
      <Container>
        <Reveal className="grid items-start gap-10 mid:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHeading
            index={copy.stackIndex}
            title={copy.stackTitle}
            as="h3"
          />
          <div className="grid gap-8">
            {groups.map((group) => (
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
