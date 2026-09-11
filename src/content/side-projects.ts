export type SideProject = {
  slug: string;
  title: string;
  description: string;
  tech: string;
  github: string;
  demo?: string;
};

export const sideProjects: SideProject[] = [
  {
    slug: "bruno-portfolio",
    title: "Bruno Portfolio",
    description:
      "This portfolio itself: a Next.js reconstruction driven by specs, ADRs, reusable content modules, and an AI-assisted implementation workflow.",
    tech: "Next.js · TypeScript · Tailwind CSS",
    github: "https://github.com/Bruno2K/bruno-portfolio",
  },
  {
    slug: "team-scrapbook-repo",
    title: "Team Scrapbook",
    description:
      "A full-stack social systems playground for WebSockets, Steam integration, communities, notifications, and AI-assisted interactions.",
    tech: "TypeScript · Socket.io · Prisma",
    github: "https://github.com/Bruno2K/team-scrapbook",
  },
  {
    slug: "pokedex-98-repo",
    title: "Pokédex 98 Agent",
    description:
      "An interactive Windows 98-style product experiment combining typed external data, desktop-like state, and Gemini-powered character interaction.",
    tech: "Next.js · TypeScript · Gemini",
    github: "https://github.com/Bruno2K/pokedex-98-agent",
  },
];

export function getSideProject(slug: string): SideProject | undefined {
  return sideProjects.find((project) => project.slug === slug);
}
