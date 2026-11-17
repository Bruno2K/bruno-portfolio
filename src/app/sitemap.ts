import type { MetadataRoute } from "next";
import { en } from "@/i18n/dictionaries/en";
import { createLocalizedSitemap } from "@/i18n/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/projects", "/side-projects", "/contact"];
  const projectPaths = en.projects.map((project) => `/projects/${project.slug}`);
  const evidencePaths = en.sideProjects.map(
    (project) => `/side-projects/${project.slug}`,
  );

  return createLocalizedSitemap([
    ...staticPaths,
    ...projectPaths,
    ...evidencePaths,
  ]);
}
