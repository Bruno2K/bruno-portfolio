import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { getSideProject, sideProjects } from "@/content/side-projects";

type SideProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sideProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: SideProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getSideProject(slug);
  if (!project) {
    return { title: "Side project" };
  }
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function SideProjectPage({ params }: SideProjectPageProps) {
  const { slug } = await params;
  const project = getSideProject(slug);
  if (!project) {
    notFound();
  }

  return (
    <main id="main" className="section-block min-h-[60vh]">
      <Container className="flex max-w-[640px] flex-col gap-6">
        <p className="text-eyebrow">{project.tech}</p>
        <h1 className="text-display">{project.title}</h1>
        <p className="text-lead">{project.description}</p>
        <p className="text-eyebrow tabular-nums">
          {project.stars.toLocaleString("en-US")} stars
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href={project.github} external>
            GitHub
          </Button>
          <Button href={project.demo} variant="secondary" external>
            Live Demo
          </Button>
        </div>
        <p className="pt-8">
          <Link href="/side-projects" className="nav-link text-[15px]">
            Back to side projects
          </Link>
        </p>
      </Container>
    </main>
  );
}
