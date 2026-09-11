export type Project = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  stack: string;
  liveUrl: string;
  year: string;
  role: string;
  overview: string;
  sections: { heading: string; body: string }[];
  accent: "blue" | "ink" | "wash" | "line";
};

export const projects: Project[] = [
  {
    slug: "helio-analytics",
    category: "SaaS Platform",
    title: "Helio Analytics",
    summary:
      "A real-time analytics suite handling millions of events a day, rebuilt for sub-second dashboards and a calmer information hierarchy.",
    stack: "Next.js · TypeScript · Postgres · ClickHouse",
    liveUrl: "https://example.com",
    year: "2024",
    role: "Lead front-end",
    overview:
      "Helio needed dashboards that stayed readable while ingesting a firehose of events. The rebuild focused on query latency, visual density, and a design system the team could actually keep consistent.",
    sections: [
      {
        heading: "The problem",
        body: "The previous interface treated every metric as an emergency. Charts competed, filters hid in menus, and the slowest widgets set the pace for the whole page. Operators could not trust what they were looking at during incidents.",
      },
      {
        heading: "The approach",
        body: "We split hot and cold paths, streamed aggregates from ClickHouse, and designed a quieter hierarchy: one primary number, supporting context, then the chart. The design system encoded spacing, type, and motion so new panels did not invent their own language.",
      },
      {
        heading: "The outcome",
        body: "Dashboards now settle in well under a second on typical queries. The same components power both the product and internal tools, and the performance budget is part of code review rather than a poster on the wall.",
      },
    ],
    accent: "blue",
  },
  {
    slug: "drift-finance",
    category: "Fintech App",
    title: "Drift Finance",
    summary:
      "End-to-end product design and front-end for a consumer banking experience focused on trust, speed, and clarity.",
    stack: "React · Node.js · GraphQL · AWS",
    liveUrl: "https://example.com",
    year: "2022",
    role: "Full-stack engineer",
    overview:
      "Drift asked for a retail banking surface that felt as considered as a well-set type specimen — numbers you can trust, flows you can finish on the first try.",
    sections: [
      {
        heading: "The problem",
        body: "Legacy screens leaked uncertainty: pending states looked like errors, fees appeared late, and the checkout-like transfer flow asked for the same data twice.",
      },
      {
        heading: "The approach",
        body: "We modelled money movement as a single GraphQL contract, designed empty and pending states as first-class screens, and kept every confirmation in plain language. The front end owned optimistic UI only where the ledger allowed it.",
      },
      {
        heading: "The outcome",
        body: "Transfer completion rose without adding steps. Support tickets about “where did my money go” dropped, and the same primitives later covered cards, payees, and statements.",
      },
    ],
    accent: "ink",
  },
  {
    slug: "atlas-docs",
    category: "Developer Tools",
    title: "Atlas Docs",
    summary:
      "A documentation platform with instant search and a writing experience engineered to keep teams in flow.",
    stack: "Next.js · Supabase · Framer Motion",
    liveUrl: "https://example.com",
    year: "2020",
    role: "Front-end engineer",
    overview:
      "Atlas is a writing environment for teams who live in docs. Search had to feel instant, and the editor had to disappear once a writer was mid-sentence.",
    sections: [
      {
        heading: "The problem",
        body: "Authors bounced between a CMS preview and a separate published site. Search lagged a beat behind keystrokes, which was enough to break the habit of looking things up.",
      },
      {
        heading: "The approach",
        body: "We shipped a single Next.js surface for draft and publish, indexed headings as you typed, and kept motion limited to spatial cues — never decoration in the typing path.",
      },
      {
        heading: "The outcome",
        body: "Writers stayed in one window. Search became the default navigation, and the same layout scaled from a startup handbook to a public product docs site.",
      },
    ],
    accent: "wash",
  },
  {
    slug: "northwind-commerce",
    category: "E-commerce",
    title: "Northwind Commerce",
    summary:
      "A headless storefront delivering a 98 Lighthouse score and a checkout that converts on the first tap.",
    stack: "React · Go · Stripe · Docker",
    liveUrl: "https://example.com",
    year: "2019",
    role: "Engineer",
    overview:
      "Northwind needed a storefront that felt native on a phone and boringly fast on a mid-range laptop. Checkout was the product.",
    sections: [
      {
        heading: "The problem",
        body: "The previous theme shipped hundreds of kilobytes before the first product image. Mobile conversion leaked at the payment step, mostly from layout shift and a sluggish Stripe mount.",
      },
      {
        heading: "The approach",
        body: "A Go API served a thin React storefront. Images were sized per slot, checkout was a single column with early address validation, and Stripe loaded only when the user reached pay.",
      },
      {
        heading: "The outcome",
        body: "Lighthouse settled at 98 on the category template. Completed checkouts on mobile recovered without adding a promotional banner or a darker pattern.",
      },
    ],
    accent: "line",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return undefined;
  }
  return projects[(index + 1) % projects.length];
}
