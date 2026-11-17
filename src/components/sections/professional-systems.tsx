import { professionalSystems } from "@/content/professional-systems";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProfessionalSystems() {
  return (
    <section id="professional-systems" className="section-block pt-0">
      <Container>
        <Reveal>
          <SectionHeading
            index="Professional Experience"
            title="Professional Systems & Delivery"
          />
          <p className="text-lead mt-6 max-w-[68ch]">
            A selection of professional systems I implemented or helped lead. Client
            identities and implementation artifacts remain private; roles and technical
            decisions are described without overstating outcomes.
          </p>
          <div className="mid:grid-cols-2 wide:grid-cols-3 mt-12 grid gap-6">
            {professionalSystems.map((system) => (
              <article
                key={system.title}
                className="border-line flex flex-col rounded-[var(--radius-card)] border p-6"
              >
                <p className="text-eyebrow">{system.domain}</p>
                <h3 className="text-h4 mt-4">{system.title}</h3>
                <dl className="mt-8 flex flex-1 flex-col gap-6">
                  <div>
                    <dt className="text-eyebrow">Business problem</dt>
                    <dd className="text-body mt-2 text-[15px]">{system.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow">My role</dt>
                    <dd className="text-body mt-2 text-[15px]">{system.role}</dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow">Technical approach</dt>
                    <dd className="text-body mt-2 text-[15px]">{system.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow">Delivery</dt>
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
