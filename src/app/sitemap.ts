import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { sideProjects } from "@/content/side-projects";
import { getCanonicalUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/projects", "/side-projects", "/contact"];
  const projectPaths = projects.map((project) => `/projects/${project.slug}`);
  const evidencePaths = sideProjects.map(
    (project) => `/side-projects/${project.slug}`,
  );

  return [...staticPaths, ...projectPaths, ...evidencePaths].flatMap((path) => {
    const url = getCanonicalUrl(path);
    return url ? [{ url }] : [];
  });
}
