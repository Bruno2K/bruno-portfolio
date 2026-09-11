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
    slug: "neon-arsenal-market",
    category: "Backend Systems · Marketplace",
    title: "Neon Arsenal Market",
    summary:
      "A backend-first marketplace built around the failure modes CRUD demos avoid: concurrent inventory, idempotent orders, payment reconciliation, financial compensation, and operational evidence.",
    stack: "TypeScript · Node.js · Express · PostgreSQL · Prisma · Docker · k6",
    liveUrl: "https://neon-arsenal-market.vercel.app",
    year: "2026",
    role: "Backend architecture & implementation",
    overview:
      "Neon Arsenal is my main backend engineering case study. The product is a marketplace for unique Counter-Strike 2 items, but the real subject is correctness: what happens when two buyers race for one listing, a payment provider succeeds while local state fails, a webhook is duplicated, or a process crashes halfway through a workflow.",
    sections: [
      {
        heading: "Correctness under concurrency",
        body: "Unique listings are reserved through PostgreSQL transactions and conditional state transitions so concurrent buyers cannot both acquire the same item. Order creation is customer-scoped and idempotent, with the key, canonical request hash, order, and reservation effects converging in the database.",
      },
      {
        heading: "Failure-aware money flows",
        body: "PayPal is treated as an unreliable external boundary. Capture, webhook processing, reconciliation, and compensation are designed around retries and partial failure. When money is captured but fulfillment can no longer complete, the system creates a durable refund obligation; seller financial history remains append-only through compensating entries.",
      },
      {
        heading: "Evidence over claims",
        body: "The repository includes integration and concurrency tests, OpenAPI contract checks, structured logs, request IDs, optional OpenTelemetry, runbooks, and a reproducible k6 harness. In a controlled CI topology, the catalog workload held 150 RPS for 60 seconds across three equivalent repetitions with zero HTTP failures and zero dropped iterations — evidence for that test environment, not a production-capacity claim.",
      },
    ],
    accent: "blue",
  },
  {
    slug: "team-scrapbook",
    category: "Real-time Systems · Social Platform",
    title: "Team Scrapbook",
    summary:
      "A Team Fortress 2-inspired social platform exploring real-time communication, authentication, external integrations, communities, and AI-assisted interactions.",
    stack: "TypeScript · React · Express · Prisma · Socket.io · PostgreSQL",
    liveUrl: "https://github.com/Bruno2K/team-scrapbook",
    year: "2026",
    role: "Full-stack architecture & implementation",
    overview:
      "Team Scrapbook is a broader systems project: a social application where HTTP APIs, real-time state, identity, media, external services, and community features have to coexist. It gives me a different engineering surface from Neon Arsenal, with more emphasis on long-lived connections and integration boundaries.",
    sections: [
      {
        heading: "Real-time state",
        body: "Socket.io powers chat, typing indicators, presence-oriented behavior, and notifications. The project explores how request/response APIs and bidirectional communication fit into the same product without turning the codebase into one undifferentiated event layer.",
      },
      {
        heading: "Identity and integrations",
        body: "The backend includes JWT-based authentication, password hashing, Steam OpenID and Steam Web API integration, plus typed validation with Zod. Those boundaries force explicit decisions about trust, synchronization, authentication state, and failure handling.",
      },
      {
        heading: "Product breadth without losing contracts",
        body: "Feeds, reactions, threaded comments, communities, uploads, chat, and AI-assisted users create a wide domain surface. OpenAPI documentation, Prisma-backed data modeling, and shared TypeScript contracts keep that breadth inspectable as the project evolves.",
      },
    ],
    accent: "ink",
  },
  {
    slug: "pokedex-98-agent",
    category: "AI Product · Interactive Web",
    title: "Pokédex 98 Agent",
    summary:
      "A Windows 98-inspired interactive Pokédex combining a desktop-like UI, typed Pokémon data, and a Gemini-powered Professor Oak assistant.",
    stack: "Next.js 16 · React 19 · TypeScript · Gemini · PokeAPI",
    liveUrl: "https://github.com/Bruno2K/pokedex-98-agent",
    year: "2026",
    role: "Product engineering & AI integration",
    overview:
      "Pokédex 98 Agent is an experiment in making AI feel like part of a product rather than a chat box bolted onto a page. The application recreates a Windows 98-like desktop, exposes the original 151 Pokémon through typed data flows, and places a character-driven AI assistant inside that interaction model.",
    sections: [
      {
        heading: "Interface as a system",
        body: "The desktop coordinates draggable, resizable, minimizable windows, taskbar state, context menus, sounds, and small applications. Reusable hooks isolate window movement and resizing instead of embedding interaction logic into every surface.",
      },
      {
        heading: "Typed data and rendering strategy",
        body: "PokeAPI responses are normalized into typed application models. Next.js App Router is used with static generation for the 151 Pokémon detail routes, while cached external data and on-demand windows keep the experience responsive.",
      },
      {
        heading: "AI as product behavior",
        body: "Gemini powers the Professor Oak conversation and a simulated browser through server-side API routes. Conversation history and character context are treated as application state, making the model one component of the product experience rather than the product itself.",
      },
    ],
    accent: "wash",
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
