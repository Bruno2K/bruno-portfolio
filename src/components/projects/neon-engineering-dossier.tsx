import type { Dictionary } from "@/i18n/types";

type NeonEngineeringDossierProps = {
  project: Dictionary["projects"][number];
  copy: Dictionary["neonDossier"];
};

export function NeonEngineeringDossier({ project, copy }: NeonEngineeringDossierProps) {
  const evidence = project.evidence ?? [];

  return (
    <div id="technical-dossier" className="flex scroll-mt-24 flex-col gap-16">
      <section className="border-line flex flex-col gap-6 border-y py-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col gap-3">
            <p className="text-eyebrow">{copy.glance.eyebrow}</p>
            <h2 className="text-h3">{copy.glance.title}</h2>
          </div>
          <span className="border-line text-eyebrow border px-3 py-2">{copy.glance.status}</span>
        </div>
        <dl className="mid:grid-cols-2 grid gap-3">
          {copy.glance.items.map((item) => (
            <div key={item.label} className="border-line border p-5">
              <dt className="text-eyebrow">{item.label}</dt>
              <dd className="text-h4 mt-3">{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className="text-body">{copy.glance.description}</p>
      </section>

      <section className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">{copy.architecture.eyebrow}</p>
          <h2 className="text-h3">{copy.architecture.title}</h2>
          <p className="text-body">{copy.architecture.description}</p>
        </div>
        <div className="border-line border p-5 mid:p-7">
          <div className="mx-auto flex max-w-[620px] flex-col items-center gap-3 text-center">
            <div className="border-line w-full max-w-[280px] border p-4">
              <p className="text-eyebrow">{copy.architecture.client}</p>
              <p className="text-h4 mt-2">{copy.architecture.browser}</p>
            </div>
            <span className="text-muted text-[18px]" aria-hidden="true">↓</span>
            <div className="border-line w-full max-w-[360px] border p-4">
              <p className="text-eyebrow">Vercel</p>
              <p className="text-h4 mt-2">Vite SPA</p>
              <p className="text-body mt-2 text-[14px]">{copy.architecture.staticFrontend}</p>
            </div>
            <span className="text-muted text-[18px]" aria-hidden="true">↓ HTTPS JSON · JWT</span>
            <div className="border-ink w-full border-2 p-5">
              <p className="text-eyebrow">Render</p>
              <p className="text-h3 mt-2">Express API</p>
              <div className="text-muted mid:grid-cols-4 mt-4 grid grid-cols-2 gap-2 text-left text-[14px]">
                <span>Auth</span><span>Orders</span><span>Listings</span><span>Payments</span>
                <span>Ledger</span><span>Reconcile</span><span>Outbox</span><span>Jobs</span>
              </div>
            </div>
            <div className="mid:grid-cols-2 grid w-full gap-3">
              <div className="border-line border p-4">
                <p className="text-eyebrow">{copy.architecture.sourceOfTruth}</p>
                <p className="text-h4 mt-2">PostgreSQL</p>
                <p className="text-body mt-2 text-[14px]">{copy.architecture.databaseDetail}</p>
              </div>
              <div className="border-line border p-4">
                <p className="text-eyebrow">{copy.architecture.externalBoundaries}</p>
                <p className="text-h4 mt-2">PayPal · Resend · cs2.sh</p>
                <p className="text-body mt-2 text-[14px]">{copy.architecture.integrationsDetail}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted border-accent border-l-2 pl-4 text-[14px] leading-6">{copy.architecture.limitation}</p>
      </section>

      <section className="border-line flex flex-col gap-7 border-y py-10">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">{copy.guaranteeSection.eyebrow}</p>
          <h2 className="text-h3">{copy.guaranteeSection.title}</h2>
        </div>
        <div className="mid:grid-cols-2 grid gap-x-8 gap-y-5">
          {copy.guarantees.map((guarantee, index) => (
            <div key={guarantee} className="grid grid-cols-[32px_1fr] gap-3">
              <span className="text-eyebrow pt-1">0{index + 1}</span>
              <p className="text-body">{guarantee}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">{copy.flows.eyebrow}</p>
          <h2 className="text-h3">{copy.flows.title}</h2>
        </div>
        <article className="flex flex-col gap-6">
          <div>
            <p className="text-eyebrow">{copy.flows.concurrency.eyebrow}</p>
            <h3 className="text-h3 mt-2">{copy.flows.concurrency.title}</h3>
          </div>
          <div className="border-line border p-5 mid:p-7">
            <div className="mid:grid-cols-[1fr_auto_1fr] grid items-center gap-3 text-center">
              <div className="border-line border p-4"><p className="text-h4">{copy.flows.concurrency.buyerA}</p></div>
              <span className="text-muted" aria-hidden="true">→</span>
              <div className="border-line border p-4"><p className="text-h4">POST /orders</p></div>
              <div className="border-line border p-4"><p className="text-h4">{copy.flows.concurrency.buyerB}</p></div>
              <span className="text-muted" aria-hidden="true">→</span>
              <div className="border-line border p-4"><p className="text-h4">{copy.flows.concurrency.sameListing}</p></div>
            </div>
            <div className="text-muted my-3 text-center" aria-hidden="true">↓</div>
            <div className="border-ink mx-auto max-w-[480px] border-2 p-5 text-center">
              <p className="text-eyebrow">{copy.flows.concurrency.transition}</p>
              <p className="text-h3 mt-2">ACTIVE → RESERVED</p>
            </div>
            <div className="text-muted my-3 text-center" aria-hidden="true">↓</div>
            <div className="mid:grid-cols-2 grid gap-3">
              <div className="border-line border p-4 text-center">
                <p className="text-eyebrow">{copy.flows.concurrency.winner}</p>
                <p className="text-h4 mt-2">{copy.flows.concurrency.winnerResult}</p>
              </div>
              <div className="border-line border p-4 text-center">
                <p className="text-eyebrow">{copy.flows.concurrency.loser}</p>
                <p className="text-h4 mt-2">{copy.flows.concurrency.loserResult}</p>
              </div>
            </div>
          </div>
          <p className="text-ink border-accent border-l-2 pl-4 text-[15px] leading-6 font-medium">{copy.flows.concurrency.outcome}</p>
        </article>

        <article className="border-line flex flex-col gap-6 border-t pt-8">
          <div>
            <p className="text-eyebrow">{copy.flows.partialFailure.eyebrow}</p>
            <h3 className="text-h3 mt-2">{copy.flows.partialFailure.title}</h3>
          </div>
          <div className="border-line border p-5 mid:p-7">
            <div className="mx-auto flex max-w-[520px] flex-col items-center gap-3 text-center">
              <div className="border-line w-full border p-4"><p className="text-h4">{copy.flows.partialFailure.captured}</p></div>
              <span className="text-muted" aria-hidden="true">↓</span>
              <div className="border-line w-full border p-4"><p className="text-h4">{copy.flows.partialFailure.failure}</p></div>
              <span className="text-muted" aria-hidden="true">↓</span>
              <div className="border-ink w-full border-2 p-4">
                <p className="text-eyebrow">{copy.flows.partialFailure.persist}</p>
                <p className="text-h4 mt-2">{copy.flows.partialFailure.obligation}</p>
              </div>
              <span className="text-muted" aria-hidden="true">↓</span>
              <div className="border-line w-full border p-4"><p className="text-h4">{copy.flows.partialFailure.recovery}</p></div>
            </div>
          </div>
          <p className="text-ink border-accent border-l-2 pl-4 text-[15px] leading-6 font-medium">{copy.flows.partialFailure.outcome}</p>
        </article>

        {project.criticalFlows?.[2] ? (
          <article className="border-line flex flex-col gap-4 border-t pt-8">
            <p className="text-eyebrow">{copy.flows.durableEffects}</p>
            <h3 className="text-h3">{project.criticalFlows[2].title}</h3>
            <ol className="flex flex-col gap-3">
              {project.criticalFlows[2].steps.map((step, index) => (
                <li key={step} className="text-body grid grid-cols-[36px_1fr] gap-3">
                  <span className="text-eyebrow pt-1">0{index + 1}</span><span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-ink border-accent border-l-2 pl-4 text-[15px] leading-6 font-medium">{project.criticalFlows[2].outcome}</p>
          </article>
        ) : null}
      </section>

      <section className="border-line flex flex-col gap-7 border-y py-10">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">{copy.decisionsSection.eyebrow}</p>
          <h2 className="text-h3">{copy.decisionsSection.title}</h2>
        </div>
        <div className="mid:grid-cols-2 grid gap-3">
          {copy.decisions.map((item) => (
            <article key={item.title} className="border-line border p-5">
              <h3 className="text-h4">{item.title}</h3>
              <p className="text-ink mt-4 text-[14px] font-medium">{copy.decisionsSection.decision}</p>
              <p className="text-body mt-1 text-[15px]">{item.decision}</p>
              <p className="text-ink mt-4 text-[14px] font-medium">{copy.decisionsSection.why}</p>
              <p className="text-body mt-1 text-[15px]">{item.why}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">{copy.scaling.eyebrow}</p>
          <h2 className="text-h3">{copy.scaling.title}</h2>
        </div>
        <div className="mid:grid-cols-3 grid gap-3">
          {copy.scaling.items.map((item) => (
            <article key={item.label} className="border-line border p-5">
              <p className="text-eyebrow">{item.label}</p>
              <p className="text-body mt-3">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-line flex flex-col gap-7 border-y py-10">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">{copy.unfinished.eyebrow}</p>
          <h2 className="text-h3">{copy.unfinished.title}</h2>
          <p className="text-body">{copy.unfinished.description}</p>
        </div>
        <div className="mid:grid-cols-2 grid gap-3">
          {copy.frozenLimits.map((item) => (
            <article key={item.title} className="border-line border p-5">
              <h3 className="text-h4">{item.title}</h3>
              <p className="text-body mt-3 text-[15px]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {project.sections.length ? (
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-eyebrow">{copy.implementation.eyebrow}</p>
            <h2 className="text-h3">{copy.implementation.title}</h2>
          </div>
          {project.sections.map((section) => (
            <article key={section.heading} className="border-line flex flex-col gap-3 border-t pt-6">
              <h3 className="text-h4">{section.heading}</h3><p className="text-body">{section.body}</p>
            </article>
          ))}
        </section>
      ) : null}

      <section className="border-line flex flex-col gap-8 border-y py-10">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">{copy.reviewer.eyebrow}</p>
          <h2 className="text-h3">{copy.reviewer.title}</h2>
          <p className="text-body">{copy.reviewer.description}</p>
        </div>
        <div className="mid:grid-cols-2 grid gap-3">
          {copy.reviewerProof.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="border-line hover:border-ink group border p-5 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-h4">{item.label}</h3><span className="text-muted group-hover:text-ink" aria-hidden="true">↗</span>
              </div>
              <p className="text-body mt-3 text-[15px]">{item.description}</p>
            </a>
          ))}
        </div>
        <p className="text-muted border-accent border-l-2 pl-4 text-[14px] leading-6">{copy.reviewer.audit}</p>
      </section>

      {evidence.length ? (
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-eyebrow">{copy.evidence.eyebrow}</p>
            <h2 className="text-h3">{copy.evidence.title}</h2>
            <p className="text-body">{copy.evidence.description}</p>
          </div>
          {copy.evidenceGroups.map((group) => {
            const items = evidence.filter((item) => group.labels.includes(item.label));
            if (!items.length) return null;
            return (
              <div key={group.title} className="flex flex-col gap-3">
                <h3 className="text-eyebrow">{group.title}</h3>
                <div className="mid:grid-cols-2 grid gap-3">
                  {items.map((item) => (
                    <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="border-line hover:border-ink group border p-5 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-h4">{item.label}</h4><span className="text-muted group-hover:text-ink" aria-hidden="true">↗</span>
                      </div>
                      <p className="text-body mt-3 text-[15px]">{item.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      ) : null}

      <section className="border-line border-t pt-8"><p className="text-h4">{copy.finalNote}</p></section>
    </div>
  );
}
