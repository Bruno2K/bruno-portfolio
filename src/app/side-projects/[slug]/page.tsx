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
    return { title: "Engineering evidence" };
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
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href={project.href} external>
            {project.linkLabel}
          </Button>
        </div>
        <p className="pt-8">
          <Link href="/side-projects" className="nav-link text-[15px]">
            Back to engineering evidence
          </Link>
        </p>
      </Container>
    </main>
  );
}
