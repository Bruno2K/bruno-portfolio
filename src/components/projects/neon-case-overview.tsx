import type { Dictionary } from "@/i18n/types";

type NeonCaseOverviewProps = {
  copy: Dictionary["neonDossier"]["overview90"];
};

export function NeonCaseOverview({ copy }: NeonCaseOverviewProps) {
  return (
    <section
      id="neon-overview"
      className="border-line flex scroll-mt-24 flex-col gap-10 border-y py-10"
    >
      <div className="flex flex-col gap-3">
        <p className="text-eyebrow">{copy.eyebrow}</p>
        <h2 className="text-h3">{copy.title}</h2>
        <p className="text-body">{copy.intro}</p>
      </div>

      <dl className="mid:grid-cols-2 grid gap-3">
        {copy.sections.map((section) => (
          <div key={section.label} className="border-line border p-5">
            <dt className="text-eyebrow">{section.label}</dt>
            <dd className="text-body mt-3 text-[15px]">{section.body}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">{copy.decisions.eyebrow}</p>
          <h3 className="text-h4">{copy.decisions.title}</h3>
        </div>
        <ol className="flex flex-col gap-4">
          {copy.decisions.items.map((item, index) => (
            <li key={item} className="grid grid-cols-[32px_1fr] gap-3">
              <span className="text-eyebrow pt-1">0{index + 1}</span>
              <p className="text-body">{item}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="border-accent border-l-2 pl-4">
        <p className="text-eyebrow">{copy.limits.label}</p>
        <p className="text-muted mt-3 text-[14px] leading-6">{copy.limits.body}</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-eyebrow">{copy.evidence.eyebrow}</p>
          <h3 className="text-h4">{copy.evidence.title}</h3>
          <p className="text-body">{copy.evidence.intro}</p>
        </div>
        <div className="mid:grid-cols-3 grid gap-3">
          {copy.evidence.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="border-line hover:border-ink group border p-5 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-h4">{item.label}</h4>
                <span className="text-muted group-hover:text-ink" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p className="text-body mt-3 text-[15px]">{item.description}</p>
            </a>
          ))}
        </div>
      </div>

      <a
        href="#technical-dossier"
        className="text-ink w-fit text-[15px] font-medium underline underline-offset-4"
      >
        {copy.dossierLink}
      </a>
    </section>
  );
}
