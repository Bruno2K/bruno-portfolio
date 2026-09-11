export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "What kind of engineer are you?",
    answer:
      "Backend-first. I focus on APIs, data consistency, system design, integrations, reliability, and the production behavior behind business-critical workflows.",
  },
  {
    question: "What do you optimize for?",
    answer:
      "Correctness first, then maintainability and operability. I prefer explicit invariants, measurable evidence, and simple architectures that can evolve when real requirements justify more complexity.",
  },
  {
    question: "How do you approach distributed systems?",
    answer:
      "Skeptically. Queues, caches, event streams, and service boundaries are tools, not seniority badges. I add them when scale, isolation, latency, ownership, or failure recovery makes the trade-off worthwhile.",
  },
  {
    question: "How do you use AI in engineering?",
    answer:
      "As an implementation and review accelerator. Agents can write, investigate, test, and challenge ideas, but requirements, architecture, trade-offs, verification, and final acceptance remain human-owned.",
  },
  {
    question: "Which project should I inspect first?",
    answer:
      "Start with Neon Arsenal for backend correctness, payments, failure recovery, observability, and performance evidence. Team Scrapbook shows real-time and integration breadth; Pokédex 98 Agent shows product-oriented AI integration.",
  },
];
