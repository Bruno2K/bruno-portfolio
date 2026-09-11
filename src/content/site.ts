export const site = {
  name: "Bruno Ferreira",
  role: "Senior Backend Engineer",
  location: "Brazil · Remote",
  contactAvailability: "Open to backend and software engineering conversations",
  tagline:
    "I build backend systems that stay correct when concurrency, money, failures, and production reality show up.",
  lead:
    "I’m a Senior Backend Engineer focused on TypeScript, Node.js, PostgreSQL, system design, and production readiness. I turn architecture decisions into verifiable code, tests, operational evidence, and explicit trade-offs.",
  description:
    "Senior Backend Engineer focused on reliable systems, data consistency, system design, and AI-augmented engineering.",
  footerBlurb:
    "Backend engineer building reliable systems with explicit trade-offs, measurable evidence, and production-minded design.",
  ogTitle: "Bruno Ferreira — Senior Backend Engineer",
  social: {
    github: "https://github.com/Bruno2K",
    linkedin: "https://www.linkedin.com/in/bruno-patrick-a70a5115a/",
  },
  portrait: {
    src: "/images/portfolio/bruno-ferreira-portrait.jpg",
    alt: "Bruno Ferreira smiling on a wooden outdoor deck, wearing glasses and a white T-shirt.",
  },
} as const;

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Focus", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "About", href: "/#about" },
  { label: "Engineering Focus", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const trustedBy = [
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "GitHub Actions",
  "OpenAPI",
  "Prisma",
  "k6",
  "AWS",
  "Redis",
  "Kafka",
  "AI Engineering",
] as const;
