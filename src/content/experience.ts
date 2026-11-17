export type ExperiencePhase = {
  period: string;
  title: string;
  context: string;
  summary: string;
  focus: string;
};

export const experience: ExperiencePhase[] = [
  {
    period: "2024 — PRESENT",
    title: "Hands-on Software Engineering & Systems Maintenance",
    context: "Private-sector Software Engineering",
    summary:
      "Following an organizational restructuring, returned to individual technical delivery while continuing to maintain existing business systems and build independent projects. Current work emphasizes end-to-end implementation, backend reliability, integrations, and disciplined AI-assisted development with review and testing retained as engineering responsibilities.",
    focus: "Implementation · Maintenance · Reliability · AI-assisted",
  },
  {
    period: "2019 — 2024",
    title: "Engineering Leadership & Architecture",
    context: "Private-sector Software Engineering",
    summary:
      "Progressed into system architecture and development leadership, coordinating three teams with up to 15 developers while directly managing their tech leads. Worked with stakeholders from discovery through delivery and contributed to hiring, mentoring, planning, estimates, and scope negotiation, while remaining hands-on on selected systems and integrations.",
    focus: "Architecture · Discovery · Team Leadership · Delivery",
  },
  {
    period: "2017 — 2019",
    title: "Full-stack Engineering",
    context: "Private-sector Software Engineering",
    summary:
      "Started working professionally in software engineering across frontend, backend, databases, APIs, and integrations. Grew from implementation work into broader responsibility for data models, legacy modernization, automation workflows, and the maintenance of business-critical software.",
    focus: "Frontend · Backend · Databases · APIs · Integrations",
  },
];
