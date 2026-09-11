export const site = {
  name: "Jack Frisman",
  role: "Full Stack Developer",
  email: "hello@jack.dev",
  location: "Remote · GMT+5",
  contactAvailability: "Remote · Available worldwide",
  tagline: "Hi, I'm Jack. I build beautiful software that performs as well as it looks.",
  lead: "I’m a full-stack engineer with eight years building SaaS platforms, startup products, and scalable web applications — from first commit to production at scale.",
  description:
    "Full-stack developer building digital products people actually enjoy using.",
  footerBlurb:
    "Full-stack developer building considered digital products for startups and teams worldwide.",
  ogTitle: "Jack Frisman — Full Stack Developer",
  resumeHref: "/jack-frisman-resume.pdf",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
  },
} as const;

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const trustedBy = [
  "Helio",
  "Drift",
  "Atlas",
  "Northwind",
  "Linear",
  "Stripe",
  "Notion",
  "Figma",
  "Vercel",
  "Supabase",
  "Framer",
  "AWS",
] as const;
