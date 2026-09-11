export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "One of the rare engineers who can hold the whole product in their head — the architecture, the pixels, and the business. Everything shipped felt inevitable.",
    name: "Mara Vance",
    role: "VP of Product",
    company: "Helio",
  },
  {
    quote:
      "He turned a tangled legacy front end into something our whole team is proud to work in. Performance and polish, without the drama.",
    name: "Daniel Okoro",
    role: "CTO",
    company: "Drift",
  },
  {
    quote:
      "Thoughtful, fast, and genuinely kind to collaborate with. The kind of partner who makes the work better and the process calmer.",
    name: "Sofia Lindqvist",
    role: "Design Lead",
    company: "Atlas",
  },
];
