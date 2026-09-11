export const about = {
  index: "(01) About",
  heading:
    "Backend-first engineering for systems where correctness, recovery, and operability matter.",
  paragraphs: [
    "I work closest to the parts of software where small mistakes become expensive: data consistency, API contracts, concurrency, authentication, payments, integrations, and production failure modes.",
    "My approach is evidence-driven. Architecture decisions should survive implementation, tests, observability, benchmarks, and explanation. I use AI aggressively to accelerate engineering, while keeping requirements, trade-offs, verification, and final ownership human.",
  ],
  stats: [
    { value: "Backend", label: "Primary axis" },
    { value: "Postgres", label: "Data consistency" },
    { value: "System Design", label: "Architecture" },
    { value: "AI-native", label: "Engineering workflow" },
  ],
} as const;
