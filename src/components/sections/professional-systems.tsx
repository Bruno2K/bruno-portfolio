import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/types";

export function ProfessionalSystems({
  systems,
  copy,
}: {
  systems: Dictionary["professionalSystems"];
  copy: Dictionary["ui"]["home"];
}) {
  return (
    <section id="professional-systems" className="section-block pt-0">
      <Container>
        <Reveal>
          <SectionHeading
            index={copy.professionalSystemsIndex}
            title={copy.professionalSystemsTitle}
          />
          <p className="text-lead mt-6 max-w-[68ch]">
            {copy.professionalSystemsIntro}
          </p>
          <div className="mid:grid-cols-2 wide:grid-cols-3 mt-12 grid gap-6">
            {systems.map((system) => (
              <article
                key={system.title}
                className="border-line flex flex-col rounded-[var(--radius-card)] border p-6"
              >
                <p className="text-eyebrow">{system.domain}</p>
                <h3 className="text-h4 mt-4">{system.title}</h3>
                <dl className="mt-8 flex flex-1 flex-col gap-6">
                  <div>
                    <dt className="text-eyebrow">{copy.businessProblem}</dt>
                    <dd className="text-body mt-2 text-[15px]">{system.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow">{copy.myRole}</dt>
                    <dd className="text-body mt-2 text-[15px]">{system.role}</dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow">{copy.technicalApproach}</dt>
                    <dd className="text-body mt-2 text-[15px]">{system.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow">{copy.delivery}</dt>
                    <dd className="text-body mt-2 text-[15px]">{system.delivery}</dd>
                  </div>
                </dl>
                <p className="text-muted border-line mt-8 border-t pt-5 text-[13px] leading-5">
                  {system.evidenceBoundary}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
