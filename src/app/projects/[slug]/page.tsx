import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { getNextProject, getProject, getProjectMedia, projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  const next = getNextProject(project.slug);
  const media = getProjectMedia(project);

  return (
    <main id="main" className="section-block">
      <Container className="flex max-w-[820px] flex-col gap-6">
        <p className="text-eyebrow">{project.category}</p>
        <h1 className="text-display">{project.title}</h1>
        <p className="text-lead">{project.summary}</p>
        <p className="text-ink text-[14px] font-medium">{project.stack}</p>
        <dl className="mt-4 flex flex-wrap gap-10">
          <div>
            <dt className="text-eyebrow">Role</dt>
            <dd className="text-ink mt-2 text-[15px]">{project.role}</dd>
          </div>
          <div>
            <dt className="text-eyebrow">Year</dt>
            <dd className="text-ink mt-2 text-[15px]">{project.year}</dd>
          </div>
        </dl>
      </Container>

      <Container className="mt-12">
        <MediaPlaceholder
          title={project.title}
          category={project.category}
          accent={project.accent}
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

        {project.architecture ? (
          <section className="flex flex-col gap-6 border-y border-line py-10">
            <div className="flex flex-col gap-3">
              <p className="text-eyebrow">Architecture</p>
              <h2 className="text-h3">{project.architecture.heading}</h2>
              <p className="text-body">{project.architecture.intro}</p>
            </div>
            <div className="grid gap-3 mid:grid-cols-2">
              {project.architecture.nodes.map((node, index) => (
                <article key={node.label} className="border border-line p-5">
                  <p className="text-eyebrow">0{index + 1}</p>
                  <h3 className="text-h4 mt-3">{node.label}</h3>
                  <p className="text-body mt-3 text-[15px]">{node.detail}</p>
                </article>
              ))}
            </div>
            {project.architecture.note ? (
              <p className="text-muted border-l-2 border-accent pl-4 text-[14px] leading-6">
                {project.architecture.note}
              </p>
            ) : null}
          </section>
        ) : null}

        {project.criticalFlows?.length ? (
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-eyebrow">Critical flows</p>
              <h2 className="text-h3">Where correctness is won or lost.</h2>
            </div>
            {project.criticalFlows.map((flow) => (
              <article key={flow.title} className="border-line border-t pt-6">
                <h3 className="text-h4">{flow.title}</h3>
                <ol className="mt-5 flex flex-col gap-3">
                  {flow.steps.map((step, index) => (
                    <li key={step} className="grid grid-cols-[36px_1fr] gap-3 text-body">
                      <span className="text-eyebrow pt-1">0{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-ink mt-5 border-l-2 border-accent pl-4 text-[15px] font-medium leading-6">
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
          <section className="flex flex-col gap-6 border-y border-line py-10">
            <div className="flex flex-col gap-3">
              <p className="text-eyebrow">Engineering evidence</p>
              <h2 className="text-h3">Inspect the claims.</h2>
              <p className="text-body">
                These links point to the repository artifacts behind the architecture and reliability claims above.
              </p>
            </div>
            <div className="grid gap-3 mid:grid-cols-2">
              {project.evidence.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group border border-line p-5 transition-colors hover:border-ink"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-h4">{item.label}</h3>
                    <span className="text-muted group-hover:text-ink" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <p className="text-body mt-3 text-[15px]">{item.description}</p>
                </a>
              ))}
            </div>
          </section>
        ) : null}

        <div className="flex flex-wrap gap-3">
          <Button href={project.liveUrl} external>
            Explore Project
          </Button>
          <Button href="/projects" variant="secondary">
            All projects
          </Button>
        </div>
        {next ? (
          <p className="text-h4 border-line border-t pt-10">
            Next:{" "}
            <a href={`/projects/${next.slug}`} className="underline-offset-4 hover:underline">
              {next.title}
            </a>
          </p>
        ) : null}
      </Container>
    </main>
  );
}
