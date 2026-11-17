export const site = {
  name: "Bruno Ferreira",
  role: "Senior Backend Engineer",
  location: "Brazil · Remote",
  contactEmail: "brunoharry2009@gmail.com",
  contactAvailability: "Open to backend and software engineering conversations",
  tagline:
    "I design backend systems that keep critical data and workflows correct when concurrency and failures hit.",
  lead:
    "I turn business-critical workflows into reliable APIs and integrations, with explicit decisions around data integrity, failure recovery, and operational trade-offs. The work is backed by code, tests, and documented engineering evidence.",
  description:
    "Senior Backend Engineer focused on APIs, data integrity, system design, integrations, and reliable delivery.",
  footerBlurb:
    "Senior Backend Engineer building reliable APIs and integrations with explicit trade-offs and verifiable evidence.",
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
