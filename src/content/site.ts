export const site = {
  name: "Bruno Ferreira",
  role: "Senior Software Engineer",
  location: "Brazil · Remote",
  contactEmail: "brunoharry2009@gmail.com",
  contactAvailability: "Open to senior software engineering conversations",
  tagline:
    "I build software systems from business discovery to delivery, with a strong foundation in backend engineering, architecture, data, and integrations.",
  lead:
    "From hands-on implementation to leading engineering teams, I focus on clear trade-offs, dependable workflows, and evidence-backed delivery — now strengthened by AI-assisted development.",
  description:
    "Senior Software Engineer with a backend foundation, delivering business systems across architecture, data, APIs, and integrations.",
  footerBlurb:
    "Senior Software Engineer building business systems from discovery through reliable delivery.",
  ogTitle: "Bruno Ferreira — Senior Software Engineer",
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
  "Python",
  "Redis",
  "Linux",
  "AI-assisted Development",
] as const;
