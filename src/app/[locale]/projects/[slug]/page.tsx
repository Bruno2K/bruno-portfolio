import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { MediaPlaceholder, type Accent } from "@/components/ui/media-placeholder";
import { NeonEngineeringDossier } from "@/components/projects/neon-engineering-dossier";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { createLocalizedPageMetadata } from "@/lib/metadata";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  return getDictionary(params.locale).projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  const project = dictionary.projects.find((item) => item.slug === slug);
  if (!project) return { title: dictionary.ui.projectPage.fallbackTitle };
  return createLocalizedPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    locale,
    siteName: dictionary.site.name,
    defaultTitle: dictionary.site.ogTitle,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const project = dictionary.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const featuredProjects = dictionary.projects.filter(
    (item) => item.slug === "neon-arsenal-market" || item.slug === "team-scrapbook",
  );
  const currentIndex = featuredProjects.findIndex((item) => item.slug === project.slug);
  const next =
    currentIndex === -1
      ? undefined
      : featuredProjects[(currentIndex + 1) % featuredProjects.length];
  const media = project.detail ?? project.cover;
  const isNeon = project.slug === "neon-arsenal-market";
  const copy = dictionary.ui.projectPage;

  return (
    <main id="main" className="section-block">
      <Container className="flex max-w-[820px] flex-col gap-6">
        <p className="text-eyebrow">{project.category}</p>
        <h1 className="text-display">{project.title}</h1>
        <p className="text-lead">{project.summary}</p>
        <p className="text-ink text-[14px] font-medium">{project.stack}</p>
        <dl className="mt-4 flex flex-wrap gap-10">
          <div>
            <dt className="text-eyebrow">{copy.role}</dt>
            <dd className="text-ink mt-2 text-[15px]">{project.role}</dd>
          </div>
          <div>
            <dt className="text-eyebrow">{copy.year}</dt>
            <dd className="text-ink mt-2 text-[15px]">{project.year}</dd>
          </div>
        </dl>
      </Container>

      <Container className="mt-12">
        <MediaPlaceholder
          title={project.title}
          category={project.category}
          accent={project.accent as Accent}
          ratio="wide"
          className="rounded-[var(--radius-card)]"
          image={
            media
              ? {
                  src: media.src,
                  alt: media.alt,
                  sizes: "(max-width: 809px) 100vw, 1200px",
                  objectPosition: "object-top",
                }
              : undefined
          }
        />
      </Container>

      <Container className="mt-16 flex max-w-[720px] flex-col gap-12">
        <p className="text-body text-[18px]">{project.overview}</p>

        {isNeon ? (
          <NeonEngineeringDossier project={project} copy={dictionary.neonDossier} />
        ) : (
          <>
            {project.architecture ? (
              <section className="border-line flex flex-col gap-6 border-y py-10">
                <div className="flex flex-col gap-3">
                  <p className="text-eyebrow">{copy.architecture}</p>
                  <h2 className="text-h3">{project.architecture.heading}</h2>
                  <p className="text-body">{project.architecture.intro}</p>
                </div>
                <div className="mid:grid-cols-2 grid gap-3">
                  {project.architecture.nodes.map((node, index) => (
                    <article key={node.label} className="border-line border p-5">
                      <p className="text-eyebrow">0{index + 1}</p>
                      <h3 className="text-h4 mt-3">{node.label}</h3>
                      <p className="text-body mt-3 text-[15px]">{node.detail}</p>
                    </article>
                  ))}
                </div>
                {project.architecture.note ? (
                  <p className="text-muted border-accent border-l-2 pl-4 text-[14px] leading-6">
                    {project.architecture.note}
                  </p>
                ) : null}
              </section>
            ) : null}

            {project.criticalFlows?.length ? (
              <section className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <p className="text-eyebrow">{copy.criticalFlows}</p>
                  <h2 className="text-h3">{copy.criticalFlowsTitle}</h2>
                </div>
                {project.criticalFlows.map((flow) => (
                  <article key={flow.title} className="border-line border-t pt-6">
                    <h3 className="text-h4">{flow.title}</h3>
                    <ol className="mt-5 flex flex-col gap-3">
                      {flow.steps.map((step, index) => (
                        <li
                          key={step}
                          className="text-body grid grid-cols-[36px_1fr] gap-3"
                        >
                          <span className="text-eyebrow pt-1">0{index + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="text-ink border-accent mt-5 border-l-2 pl-4 text-[15px] leading-6 font-medium">
                      {flow.outcome}
                    </p>
                  </article>
                ))}
              </section>
            ) : null}

            {project.sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-4">
                <h2 className="text-h3">{section.heading}</h2>
                <p className="text-body">{section.body}</p>
              </section>
            ))}

            {project.evidence?.length ? (
              <section className="border-line flex flex-col gap-6 border-y py-10">
                <div className="flex flex-col gap-3">
                  <p className="text-eyebrow">{copy.evidence}</p>
                  <h2 className="text-h3">{copy.evidenceTitle}</h2>
                  <p className="text-body">{copy.evidenceIntro}</p>
                </div>
                <div className="mid:grid-cols-2 grid gap-3">
                  {project.evidence.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="border-line hover:border-ink group border p-5 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-h4">{item.label}</h3>
                        <span
                          className="text-muted group-hover:text-ink"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </div>
                      <p className="text-body mt-3 text-[15px]">{item.description}</p>
                    </a>
                  ))}
                </div>
              </section>
            ) : null}
          </>
        )}

        <div className="flex flex-wrap gap-3">
          <Button href={project.liveUrl} external>
            {isNeon ? copy.viewLiveProduct : copy.exploreProject}
          </Button>
          {isNeon ? (
            <>
              <Button
                href="https://github.com/Bruno2K/neon-arsenal-market"
                variant="secondary"
                external
              >
                {copy.inspectSource}
              </Button>
              <Button
                href="https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/architecture/c4.md"
                variant="secondary"
                external
              >
                {copy.exploreArchitecture}
              </Button>
            </>
          ) : (
            <Button href={`/${locale}/projects`} variant="secondary">
              {copy.allProjects}
            </Button>
          )}
        </div>

        {isNeon ? (
          <p className="text-body border-line border-t pt-8 text-[15px]">
            {copy.liveProductNote}
          </p>
        ) : null}

        {next ? (
          <p className="text-h4 border-line border-t pt-10">
            {copy.next}:{" "}
            <a
              href={`/${locale}/projects/${next.slug}`}
              className="underline-offset-4 hover:underline"
            >
              {next.title}
            </a>
          </p>
        ) : null}
      </Container>
    </main>
  );
}
