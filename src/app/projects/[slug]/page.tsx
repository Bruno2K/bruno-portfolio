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
        {project.sections.map((section) => (
          <section key={section.heading} className="flex flex-col gap-4">
            <h2 className="text-h3">{section.heading}</h2>
            <p className="text-body">{section.body}</p>
          </section>
        ))}
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
