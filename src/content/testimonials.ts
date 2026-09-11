export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Correctness is a feature. Concurrency, retries, duplicated requests, and partial failure should be modeled before production forces the lesson.",
    name: "Correctness first",
    role: "Concurrency · Idempotency",
    company: "Backend",
  },
  {
    quote:
      "External systems fail in inconvenient ways. Reliable software needs a path back to a valid state, not just a successful happy path.",
    name: "Design for recovery",
    role: "Retries · Reconciliation",
    company: "Reliability",
  },
  {
    quote:
      "A technical claim becomes useful when someone else can inspect or reproduce it. Tests, contracts, traces, benchmarks, and ADRs turn confidence into evidence.",
    name: "Evidence over claims",
    role: "Tests · Observability · Load",
    company: "Operations",
  },
];
