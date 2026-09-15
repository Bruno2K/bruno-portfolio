export type ProjectImage = {
  src: string;
  alt: string;
};

export type EvidenceLink = {
  label: string;
  href: string;
  description: string;
};

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
  cover?: ProjectImage;
  detail?: ProjectImage;
  architecture?: {
    heading: string;
    intro: string;
    nodes: { label: string; detail: string }[];
    note?: string;
  };
  criticalFlows?: {
    title: string;
    steps: string[];
    outcome: string;
  }[];
  evidence?: EvidenceLink[];
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
    architecture: {
      heading: "Current architecture",
      intro:
        "The current system is deliberately a modular monolith, not a microservice showcase. A Vite SPA runs on Vercel, an Express API runs as one Dockerized Render service, and PostgreSQL is the authoritative business state. PayPal, Resend, and an optional catalog importer sit outside the process.",
      nodes: [
        {
          label: "Vercel · Vite SPA",
          detail: "Static frontend and browser interaction. Not a security boundary.",
        },
        {
          label: "Render · Express API",
          detail:
            "Single Node.js deployable containing HTTP modules plus idempotent in-process jobs for expiry, payment reconciliation, ledger reconciliation, and outbox publication.",
        },
        {
          label: "Render · PostgreSQL",
          detail:
            "Source of truth for listings, orders, payments, users, seller ledger state, idempotency records, webhook events, and outbox events.",
        },
        {
          label: "External boundaries",
          detail:
            "PayPal for create/capture/GET/webhooks, Resend for transactional email, and optional cs2.sh catalog import.",
        },
      ],
      note:
        "Redis, Kafka, SQS, a separate worker service, ECS/Fargate, RDS, and an ALB are explicitly not presented as current architecture because they are not live in the repository's canonical deployment.",
    },
    criticalFlows: [
      {
        title: "Concurrent purchase of one unique listing",
        steps: [
          "Two buyers submit POST /orders for the same listing.",
          "Each request attempts a conditional ACTIVE → RESERVED update inside PostgreSQL.",
          "Only one update can affect the row; the losing request observes a reservation conflict.",
          "The winning transaction persists the order, items, idempotency record, and reservation atomically.",
        ],
        outcome:
          "The invariant lives in PostgreSQL, so the same protocol remains valid if multiple API replicas race for the item.",
      },
      {
        title: "Payment succeeds but delivery path is unreliable",
        steps: [
          "PayPal is treated as an external ledger, never as a trusted client-side paid flag.",
          "Webhook events are signature-verified and deduplicated by provider + external event id.",
          "A lost webhook is recovered by periodic PayPal GET reconciliation using the same confirmPayment path.",
          "If money is captured but fulfillment cannot complete, the system records a durable refund obligation instead of silently diverging.",
        ],
        outcome:
          "Retries, duplicate delivery, and partial failure converge on persisted state rather than hidden in-memory assumptions.",
      },
      {
        title: "Durable side effects without pretending there is a queue",
        steps: [
          "Business state and OutboxEvent are committed in PostgreSQL.",
          "An in-process job claims outbox rows using database coordination.",
          "Publication is retriable and idempotent against durable records.",
          "A separate broker is deferred until measured backlog, ordering, replay, or throughput needs justify one.",
        ],
        outcome:
          "The design keeps failure recovery explicit without adding distributed infrastructure solely for appearance.",
      },
    ],
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
        heading: "Operational design",
        body: "The API exposes health and readiness probes, structured logs, request IDs, optional OpenTelemetry, runbooks, explicit shutdown behavior, reconciliation jobs, and database-backed invariants. Operational behavior is documented alongside application behavior rather than treated as deployment trivia.",
      },
      {
        heading: "Performance evidence, not marketing",
        body: "The repository separates query-plan evidence from load-test evidence. PostgreSQL hot paths are measured with EXPLAIN ANALYZE and service timing, while k6 capacity runs use isolated disposable environments and record offered load, achieved RPS, latency, failures, dropped iterations, resource usage, and domain invariants. Controlled CI results are explicitly not presented as Render or production capacity.",
      },
    ],
    evidence: [
      {
        label: "C4 architecture",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/architecture/c4.md",
        description: "Canonical deployables, API components, external boundaries, and what is explicitly not live.",
      },
      {
        label: "Sequence diagrams",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/architecture/sequences.md",
        description: "Checkout, concurrent reservation, webhook verification, and reconciliation flows matched to current code.",
      },
      {
        label: "Failure modes",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/architecture/failure-modes.md",
        description: "Documented failure scenarios and recovery behavior.",
      },
      {
        label: "Domain invariants",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/architecture/domain-invariants.md",
        description: "The invariants the implementation is expected to preserve under retries, concurrency, and partial failure.",
      },
      {
        label: "Payment reliability ADR",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/adr/0002-paypal-webhook-reliability.md",
        description: "Webhook trust boundary, duplication, and recovery choices.",
      },
      {
        label: "Order idempotency ADR",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/adr/0003-order-creation-idempotency.md",
        description: "Customer-scoped idempotency and request convergence strategy.",
      },
      {
        label: "Transactional outbox ADR",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/adr/0012-transactional-outbox.md",
        description: "Durable side-effect coordination without claiming a broker that does not exist.",
      },
      {
        label: "Observability",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/observability.md",
        description: "Logging, request correlation, metrics, tracing, and operational signals.",
      },
      {
        label: "Operations runbook",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/operations/runbook.md",
        description: "Recovery and operational procedures for the deployed system.",
      },
      {
        label: "Performance evidence",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/performance.md",
        description: "Measured PostgreSQL query plans, service timings, bottlenecks, and scaling triggers.",
      },
      {
        label: "Load-testing procedure",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/performance/load-testing.md",
        description: "Reproducible k6 methodology, evidence requirements, and claim boundaries.",
      },
      {
        label: "Controlled CI load workflow",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/.github/workflows/load-test-catalog-claim.yml",
        description: "Inspectable workflow for repeatable isolated catalog-capacity evidence.",
      },
    ],
    accent: "blue",
    cover: {
      src: "/images/portfolio/neon-arsenal-market.png",
      alt: "Neon Arsenal market grid of unique Counter-Strike 2 listings with prices in Brazilian reais.",
    },
    detail: {
      src: "/images/portfolio/neon-arsenal-checkout.png",
      alt: "Neon Arsenal checkout with five unique CS2 items in the cart and a payment summary before PayPal capture.",
    },
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
    cover: {
      src: "/images/portfolio/pokedex-98-agent.png",
      alt: "Pokédex 98 Agent Windows 98-style desktop with Professor Oak chat, Pac-Man, a calendar, and a Pokémon battle window.",
    },
  },
];

export function getProjectMedia(project: Project): ProjectImage | undefined {
  return project.detail ?? project.cover;
}

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
