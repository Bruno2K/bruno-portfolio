import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and case studies by Jack Frisman.",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="section-block">
      <Container>
        <p className="text-eyebrow">Work</p>
        <h1 className="text-display mt-5 max-w-[18ch]">
          Selected projects & case studies.
        </h1>
        <div className="mid:grid-cols-2 mid:gap-8 mt-16 grid gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p className="mt-16">
          <Link href="/" className="nav-link text-[15px]">
            Back to Home
          </Link>
        </p>
      </Container>
    </main>
  );
}
