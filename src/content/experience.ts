export type Role = {
  dates: string;
  title: string;
  company: string;
  summary: string;
  stack: string;
};

export const experience: Role[] = [
  {
    dates: "CORE",
    title: "Backend Engineering",
    company: "Correctness & APIs",
    summary:
      "Designing APIs and business workflows around explicit invariants, transactional boundaries, idempotency, and data consistency instead of relying on happy-path behavior.",
    stack: "TypeScript · Node.js · PostgreSQL",
  },
  {
    dates: "SYSTEMS",
    title: "System Design",
    company: "Architecture & Reliability",
    summary:
      "Choosing boundaries and infrastructure from actual requirements, failure modes, and operational cost — not adding distributed complexity just to make a system look sophisticated.",
    stack: "Distributed systems · Messaging · Caching · Recovery",
  },
  {
    dates: "PRODUCTION",
    title: "Operational Engineering",
    company: "Evidence & Performance",
    summary:
      "Treating tests, contracts, observability, CI, load testing, and runbooks as part of the design so reliability claims can be inspected and reproduced.",
    stack: "Docker · GitHub Actions · OpenAPI · k6",
  },
  {
    dates: "AI-NATIVE",
    title: "AI-Augmented Engineering",
    company: "Agents & Verification",
    summary:
      "Using coding agents to accelerate implementation and review while keeping requirements, architecture, trade-offs, verification, and final acceptance human-owned.",
    stack: "LLMs · Agent workflows · Specs · ADRs",
  },
];
