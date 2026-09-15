import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SideProjectItem } from "@/components/ui/side-project-item";
import { sideProjects } from "@/content/side-projects";

export const metadata: Metadata = {
  title: "Engineering evidence",
  description: "Architecture decisions, performance evidence, and implementation artifacts you can inspect.",
};

export default function SideProjectsPage() {
  return (
    <main id="main" className="section-block">
      <Container>
        <p className="text-eyebrow">Engineering evidence</p>
        <h1 className="text-display mt-5">Claims backed by inspectable artifacts.</h1>
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
