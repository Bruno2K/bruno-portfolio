export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Who do you work with?",
    answer:
      "Startups, scale-ups, founders, and product teams who value craft over noise and want a partner who sweats the details.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Mostly React, Next.js and TypeScript on the front end, with Node.js and Go powering the back end — plus Postgres and AWS.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Anywhere from a focused two-week sprint to a multi-month build. We scope it together honestly up front, with no surprises.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Always. I’ve collaborated with teams across twelve time zones and keep communication tight, async, and documented.",
  },
  {
    question: "Can you join an existing team?",
    answer:
      "Yes — I’m comfortable embedding into your codebase, rituals, and tooling from day one, and ramping up fast.",
  },
];
