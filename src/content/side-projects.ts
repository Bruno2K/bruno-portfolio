export type SideProject = {
  slug: string;
  title: string;
  description: string;
  tech: string;
  href: string;
  linkLabel: string;
};

export const sideProjects: SideProject[] = [
  {
    slug: "neon-architecture-decisions",
    title: "Neon Arsenal ADRs",
    description:
      "Architecture decisions covering order idempotency, webhook reliability, OpenTelemetry, hot-path indexes, seller ledger design, transactional outbox, pagination, and other production concerns.",
    tech: "Architecture · Reliability · Data consistency",
    href: "https://github.com/Bruno2K/neon-arsenal-market/tree/main/docs/adr",
    linkLabel: "Inspect ADRs",
  },
  {
    slug: "neon-load-testing",
    title: "Load-test evidence",
    description:
      "The reproducible CI workflow behind the Neon Arsenal catalog performance claim, including the controlled test topology and repeated k6 execution.",
    tech: "k6 · GitHub Actions · Performance",
    href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/.github/workflows/load-test-catalog-claim.yml",
    linkLabel: "Inspect workflow",
  },
  {
    slug: "portfolio-decisions",
    title: "Portfolio engineering decisions",
    description:
      "ADRs for this site covering the App Router, server/client boundaries, content modules, design tokens, image handling, animation strategy, and publishing workflow.",
    tech: "Next.js · ADRs · AI-assisted delivery",
    href: "https://github.com/Bruno2K/bruno-portfolio/tree/main/docs/decisions",
    linkLabel: "Inspect ADRs",
  },
];

export function getSideProject(slug: string): SideProject | undefined {
  return sideProjects.find((project) => project.slug === slug);
}
