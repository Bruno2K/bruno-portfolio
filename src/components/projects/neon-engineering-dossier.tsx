import type { Project } from "@/content/projects";

const evidenceGroups = [
  {
    title: "Architecture",
    labels: ["C4 architecture", "Sequence diagrams", "Failure modes", "Domain invariants"],
  },
  {
    title: "Reliability",
    labels: ["Payment reliability ADR", "Order idempotency ADR", "Transactional outbox ADR"],
  },
  {
    title: "Operations",
    labels: ["Observability", "Operations runbook"],
  },
  {
    title: "Performance",
    labels: ["Performance evidence", "Load-testing procedure", "Controlled CI load workflow"],
  },
] as const;

const guarantees = [
  "Two concurrent buyers cannot both acquire the same unique listing.",
  "Replaying the same valid order request does not create a second order.",
  "Duplicate verified PayPal webhook delivery converges to a no-op after the event is persisted.",
  "A lost payment webhook can be recovered through reconciliation against PayPal.",
  "Captured money that cannot be fulfilled becomes an explicit refund obligation instead of hidden state drift.",
  "Background side effects are coordinated through durable PostgreSQL records before a broker is justified.",
] as const;

const decisions = [
  {
    title: "PostgreSQL owns the invariant",
    decision: "Keep unique-inventory correctness in conditional database state transitions.",
    why: "Process memory cannot safely coordinate competing buyers once more than one request or API replica is involved.",
  },
  {
    title: "Modular monolith before microservices",
    decision: "Keep one deployable API while domain boundaries remain explicit inside the codebase.",
    why: "The current product does not justify the operational cost of distributed ownership, networking, deployment, and recovery.",
  },
  {
    title: "Reconciliation over webhook trust",
    decision: "Treat webhooks as an unreliable signal, not the only path to payment truth.",
    why: "Delivery can be duplicated, delayed, or lost, so recovery must converge through persisted state and provider reconciliation.",
  },
  {
    title: "Durable outbox before a broker",
    decision: "Commit business state and outbox records together, then publish from an idempotent in-process job.",
    why: "A queue should arrive when measured backlog, replay, ordering, throughput, or independent-consumer requirements make it necessary.",
  },
] as const;

export function NeonEngineeringDossier({ project }: { project: Project }) {
  const evidence = project.evidence ?? [];

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6 border-y border-line py-10">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">At a glance</p>
          <h2 className="text-h3">The case in under a minute.</h2>
        </div>
        <dl className="grid gap-3 mid:grid-cols-2">
          <div className="border border-line p-5">
            <dt className="text-eyebrow">System</dt>
            <dd className="text-h4 mt-3">Marketplace for unique inventory</dd>
          </div>
          <div className="border border-line p-5">
            <dt className="text-eyebrow">Core challenge</dt>
            <dd className="text-h4 mt-3">Prevent double-selling while payment state remains recoverable</dd>
          </div>
          <div className="border border-line p-5">
            <dt className="text-eyebrow">Architecture</dt>
            <dd className="text-h4 mt-3">Modular monolith · PostgreSQL source of truth</dd>
          </div>
          <div className="border border-line p-5">
            <dt className="text-eyebrow">Engineering focus</dt>
            <dd className="text-h4 mt-3">Concurrency · Idempotency · Payments · Recovery · Operability</dd>
          </div>
        </dl>
      </section>

      <section className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">Architecture</p>
          <h2 className="text-h3">Current system, without decorative infrastructure.</h2>
          <p className="text-body">
            The current deployment is intentionally small: browser traffic reaches a Vite SPA, the SPA calls one Express API, and PostgreSQL owns business truth. External providers remain outside that trust boundary.
          </p>
        </div>

        <div className="border border-line p-5 mid:p-7">
          <div className="mx-auto flex max-w-[620px] flex-col items-center gap-3 text-center">
            <div className="w-full max-w-[280px] border border-line p-4">
              <p className="text-eyebrow">Client</p>
              <p className="text-h4 mt-2">Browser</p>
            </div>
            <span className="text-muted text-[18px]" aria-hidden="true">↓</span>
            <div className="w-full max-w-[360px] border border-line p-4">
              <p className="text-eyebrow">Vercel</p>
              <p className="text-h4 mt-2">Vite SPA</p>
              <p className="text-body mt-2 text-[14px]">Static frontend. Not a security boundary.</p>
            </div>
            <span className="text-muted text-[18px]" aria-hidden="true">↓ HTTPS JSON · JWT</span>
            <div className="w-full border-2 border-ink p-5">
              <p className="text-eyebrow">Render</p>
              <p className="text-h3 mt-2">Express API</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-left text-[14px] text-muted mid:grid-cols-4">
                <span>Auth</span><span>Orders</span><span>Listings</span><span>Payments</span>
                <span>Ledger</span><span>Reconcile</span><span>Outbox</span><span>Jobs</span>
              </div>
            </div>
            <div className="grid w-full gap-3 mid:grid-cols-2">
              <div className="border border-line p-4">
                <p className="text-eyebrow">Source of truth</p>
                <p className="text-h4 mt-2">PostgreSQL</p>
                <p className="text-body mt-2 text-[14px]">Orders, listings, payments, ledger, idempotency, webhook and outbox state.</p>
              </div>
              <div className="border border-line p-4">
                <p className="text-eyebrow">External boundaries</p>
                <p className="text-h4 mt-2">PayPal · Resend · cs2.sh</p>
                <p className="text-body mt-2 text-[14px]">Untrusted integrations around the authoritative database state.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-muted border-l-2 border-accent pl-4 text-[14px] leading-6">
          Redis, Kafka, SQS, a separate worker service, ECS/Fargate, RDS, and an ALB are not presented as live architecture because they are not part of the current canonical deployment.
        </p>
      </section>

      <section className="flex flex-col gap-7 border-y border-line py-10">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">What the design guarantees</p>
          <h2 className="text-h3">Engineering outcomes, not feature claims.</h2>
        </div>
        <div className="grid gap-x-8 gap-y-5 mid:grid-cols-2">
          {guarantees.map((guarantee, index) => (
            <div key={guarantee} className="grid grid-cols-[32px_1fr] gap-3">
              <span className="text-eyebrow pt-1">0{index + 1}</span>
              <p className="text-body">{guarantee}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">Critical flows</p>
          <h2 className="text-h3">Where correctness is won or lost.</h2>
        </div>

        <article className="flex flex-col gap-6">
          <div>
            <p className="text-eyebrow">01 · Concurrency</p>
            <h3 className="text-h3 mt-2">Two buyers. One listing. One winner.</h3>
          </div>
          <div className="border border-line p-5 mid:p-7">
            <div className="grid items-center gap-3 text-center mid:grid-cols-[1fr_auto_1fr]">
              <div className="border border-line p-4"><p className="text-h4">Buyer A</p></div>
              <span className="text-muted" aria-hidden="true">→</span>
              <div className="border border-line p-4"><p className="text-h4">POST /orders</p></div>
              <div className="border border-line p-4"><p className="text-h4">Buyer B</p></div>
              <span className="text-muted" aria-hidden="true">→</span>
              <div className="border border-line p-4"><p className="text-h4">same listing</p></div>
            </div>
            <div className="my-3 text-center text-muted" aria-hidden="true">↓</div>
            <div className="mx-auto max-w-[480px] border-2 border-ink p-5 text-center">
              <p className="text-eyebrow">PostgreSQL conditional transition</p>
              <p className="text-h3 mt-2">ACTIVE → RESERVED</p>
            </div>
            <div className="my-3 text-center text-muted" aria-hidden="true">↓</div>
            <div className="grid gap-3 mid:grid-cols-2">
              <div className="border border-line p-4 text-center">
                <p className="text-eyebrow">Winner</p>
                <p className="text-h4 mt-2">201 · order committed</p>
              </div>
              <div className="border border-line p-4 text-center">
                <p className="text-eyebrow">Loser</p>
                <p className="text-h4 mt-2">409 · reservation conflict</p>
              </div>
            </div>
          </div>
          <p className="text-ink border-l-2 border-accent pl-4 text-[15px] font-medium leading-6">
            The invariant lives in PostgreSQL, so correctness does not depend on which API process receives the request.
          </p>
        </article>

        <article className="flex flex-col gap-6 border-line border-t pt-8">
          <div>
            <p className="text-eyebrow">02 · Partial failure</p>
            <h3 className="text-h3 mt-2">Money moved. Fulfillment did not.</h3>
          </div>
          <div className="border border-line p-5 mid:p-7">
            <div className="mx-auto flex max-w-[520px] flex-col items-center gap-3 text-center">
              <div className="w-full border border-line p-4"><p className="text-h4">PayPal capture COMPLETED</p></div>
              <span className="text-muted" aria-hidden="true">↓</span>
              <div className="w-full border border-line p-4"><p className="text-h4">Local fulfillment path fails</p></div>
              <span className="text-muted" aria-hidden="true">↓</span>
              <div className="w-full border-2 border-ink p-4">
                <p className="text-eyebrow">Persist, do not hide</p>
                <p className="text-h4 mt-2">Durable refund obligation</p>
              </div>
              <span className="text-muted" aria-hidden="true">↓</span>
              <div className="w-full border border-line p-4"><p className="text-h4">Reconciliation / compensation</p></div>
            </div>
          </div>
          <p className="text-ink border-l-2 border-accent pl-4 text-[15px] font-medium leading-6">
            Payment truth is recoverable even when delivery is duplicated, delayed, lost, or interrupted halfway through a workflow.
          </p>
        </article>

        {project.criticalFlows?.[2] ? (
          <article className="flex flex-col gap-4 border-line border-t pt-8">
            <p className="text-eyebrow">03 · Durable side effects</p>
            <h3 className="text-h3">{project.criticalFlows[2].title}</h3>
            <ol className="flex flex-col gap-3">
              {project.criticalFlows[2].steps.map((step, index) => (
                <li key={step} className="grid grid-cols-[36px_1fr] gap-3 text-body">
                  <span className="text-eyebrow pt-1">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-ink border-l-2 border-accent pl-4 text-[15px] font-medium leading-6">
              {project.criticalFlows[2].outcome}
            </p>
          </article>
        ) : null}
      </section>

      <section className="flex flex-col gap-7 border-y border-line py-10">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">Key engineering decisions</p>
          <h2 className="text-h3">The important part is what was deliberately not added.</h2>
        </div>
        <div className="grid gap-3 mid:grid-cols-2">
          {decisions.map((item) => (
            <article key={item.title} className="border border-line p-5">
              <h3 className="text-h4">{item.title}</h3>
              <p className="text-ink mt-4 text-[14px] font-medium">Decision</p>
              <p className="text-body mt-1 text-[15px]">{item.decision}</p>
              <p className="text-ink mt-4 text-[14px] font-medium">Why</p>
              <p className="text-body mt-1 text-[15px]">{item.why}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">Scaling path</p>
          <h2 className="text-h3">Scale from measured pressure, not from a technology checklist.</h2>
        </div>
        <div className="grid gap-3 mid:grid-cols-3">
          <article className="border border-line p-5">
            <p className="text-eyebrow">Today</p>
            <p className="text-body mt-3">One modular-monolith API, one PostgreSQL source of truth, and idempotent in-process jobs.</p>
          </article>
          <article className="border border-line p-5">
            <p className="text-eyebrow">Triggers</p>
            <p className="text-body mt-3">Database saturation, connection pressure, shared rate-limit needs, sustained job lag, or an outbox backlog that requires independent scaling.</p>
          </article>
          <article className="border border-line p-5">
            <p className="text-eyebrow">Possible next steps</p>
            <p className="text-body mt-3">Redis for demonstrated shared coordination, a separate worker for independent background throughput, and a broker only when replay, ordering, throughput, or multi-consumer requirements justify it.</p>
          </article>
        </div>
      </section>

      {project.sections.length ? (
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-eyebrow">Implementation notes</p>
            <h2 className="text-h3">How the design is enforced in code and operations.</h2>
          </div>
          {project.sections.map((section) => (
            <article key={section.heading} className="flex flex-col gap-3 border-line border-t pt-6">
              <h3 className="text-h4">{section.heading}</h3>
              <p className="text-body">{section.body}</p>
            </article>
          ))}
        </section>
      ) : null}

      {evidence.length ? (
        <section className="flex flex-col gap-8 border-y border-line py-10">
          <div className="flex flex-col gap-3">
            <p className="text-eyebrow">Engineering evidence</p>
            <h2 className="text-h3">Inspect the claims.</h2>
            <p className="text-body">The case study stays concise; the repository holds the deeper proof.</p>
          </div>
          {evidenceGroups.map((group) => {
            const items = evidence.filter((item) => group.labels.includes(item.label as never));
            if (!items.length) return null;
            return (
              <div key={group.title} className="flex flex-col gap-3">
                <h3 className="text-eyebrow">{group.title}</h3>
                <div className="grid gap-3 mid:grid-cols-2">
                  {items.map((item) => (
                    <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="group border border-line p-5 transition-colors hover:border-ink">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-h4">{item.label}</h4>
                        <span className="text-muted group-hover:text-ink" aria-hidden="true">↗</span>
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
    </div>
  );
}
