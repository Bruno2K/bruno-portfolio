export type Role = {
  dates: string;
  title: string;
  company: string;
  summary: string;
  stack: string;
};

export const experience: Role[] = [
  {
    dates: "2023 — Present",
    title: "Senior Software Engineer",
    company: "Helio",
    summary:
      "Lead front-end for a real-time analytics platform — owning the design system, performance budget, and the team’s engineering standards.",
    stack: "React · Next.js · TypeScript",
  },
  {
    dates: "2021 — 2023",
    title: "Full-Stack Engineer",
    company: "Drift Finance",
    summary:
      "Built core banking flows end to end, from Postgres schema to pixel, for a consumer fintech used by half a million people.",
    stack: "Node.js · GraphQL · AWS",
  },
  {
    dates: "2019 — 2021",
    title: "Front-End Engineer",
    company: "Atlas",
    summary:
      "Shipped a documentation platform with instant search and an editor experience built to keep writers in flow.",
    stack: "React · Supabase",
  },
  {
    dates: "2018 — 2019",
    title: "Junior Developer",
    company: "Northwind",
    summary:
      "My first role — where I learned to ship small, review carefully, and treat every millisecond as a feature.",
    stack: "JavaScript · CSS",
  },
];
