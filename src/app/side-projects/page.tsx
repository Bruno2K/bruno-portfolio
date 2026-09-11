import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SideProjectItem } from "@/components/ui/side-project-item";
import { sideProjects } from "@/content/side-projects";

export const metadata: Metadata = {
  title: "Side projects",
  description: "Open-source experiments and tools.",
};

export default function SideProjectsPage() {
  return (
    <main id="main" className="section-block">
      <Container>
        <p className="text-eyebrow">On the side</p>
        <h1 className="text-display mt-5">Open-source experiments & tools.</h1>
        <div className="mid:grid-cols-2 mt-8 grid gap-x-16">
          {sideProjects.map((project) => (
            <SideProjectItem key={project.slug} project={project} />
          ))}
        </div>
        <p className="mt-12">
          <Link href="/" className="nav-link text-[15px]">
            Back to Home
          </Link>
        </p>
      </Container>
    </main>
  );
}
