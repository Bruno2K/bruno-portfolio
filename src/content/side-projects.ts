export type SideProject = {
  slug: string;
  title: string;
  stars: number;
  description: string;
  tech: string;
  github: string;
  demo: string;
};

export const sideProjects: SideProject[] = [
  {
    slug: "lumen",
    title: "Lumen",
    stars: 1240,
    description: "A tiny theme-aware syntax highlighter for the web.",
    tech: "TypeScript",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    slug: "pico-router",
    title: "Pico Router",
    stars: 2100,
    description: "A 1kb client-side router with zero config.",
    tech: "JavaScript",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    slug: "cron-studio",
    title: "Cron Studio",
    stars: 1730,
    description: "A visual editor and validator for cron expressions.",
    tech: "Next.js",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    slug: "usethrottle",
    title: "useThrottle",
    stars: 860,
    description: "A dependency-free React hook for throttled values.",
    tech: "React",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    slug: "inkwell",
    title: "Inkwell",
    stars: 540,
    description: "Markdown to beautiful PDF, from the command line.",
    tech: "Go",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    slug: "palette-cli",
    title: "Palette CLI",
    stars: 690,
    description: "Generate accessible color scales from a single hex.",
    tech: "Node.js",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export function getSideProject(slug: string): SideProject | undefined {
  return sideProjects.find((project) => project.slug === slug);
}
