import { about } from "../../content/about.ts";
import { experience } from "../../content/experience.ts";
import { faq } from "../../content/faq.ts";
import { professionalSystems } from "../../content/professional-systems.ts";
import { projects } from "../../content/projects.ts";
import { sideProjects } from "../../content/side-projects.ts";
import { footerNav, nav, site, trustedBy } from "../../content/site.ts";
import { stackGroups } from "../../content/stack.ts";
import { testimonials } from "../../content/testimonials.ts";

export const en = {
  site,
  nav,
  footerNav,
  trustedBy,
  about,
  experience,
  faq,
  professionalSystems,
  projects,
  sideProjects,
  stackGroups,
  testimonials,
  ui: {
    skipLink: "Skip to content",
    header: {
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      contact: "Contact",
      languageSelector: "Language selector",
      english: "EN",
      portuguese: "PT",
      switchToEnglish: "Switch to English",
      switchToPortuguese: "Mudar para português",
    },
    footer: {
      navigation: "Navigation",
      contact: "Contact",
      email: "Email",
      copyright: "© 2026 Bruno Ferreira. All rights reserved.",
    },
    home: {
      heroPrimary: "View Engineering Work",
      heroSecondary: "Contact Bruno",
      trustedBy: "Core stack & systems I work with",
      trustedByAccessible: "Technologies and practices",
      selectedWorkIndex: "(02) Engineering Case Studies",
      selectedWorkTitle: "Systems, trade-offs, and evidence you can inspect.",
      professionalSystemsIndex: "Professional Experience",
      professionalSystemsTitle: "Professional Systems & Delivery",
      professionalSystemsIntro:
        "A selection of professional systems I implemented or helped lead. Client identities and implementation artifacts remain private; roles and technical decisions are described without overstating outcomes.",
      businessProblem: "Business problem",
      myRole: "My role",
      technicalApproach: "Technical approach",
      delivery: "Delivery",
      experienceIndex: "(03) Professional Experience",
      experienceTitle:
        "From full-stack engineering to leadership — and back to hands-on delivery.",
      stackIndex: "(04) Technical Surface",
      stackTitle: "Capabilities first. Tools second.",
      evidenceIndex: "(05) Engineering Evidence",
      evidenceTitle: "Claims should be one click away from proof.",
      allSideProjects: "View all side projects",
      principlesIndex: "(06) Engineering Principles",
      faqIndex: "(07) FAQ",
      faqTitle: "How I think about engineering.",
    },
    projectCard: {
      readStoryPrefix: "Read the story of",
      explore: "Explore Project",
      readStory: "Read the Story",
    },
    contact: {
      metadataTitle: "Contact",
      metadataDescription:
        "Contact Bruno Ferreira about senior software engineering, backend architecture, reliable APIs, integrations, and system design.",
      eyebrow: "Contact",
      title: "Let’s talk about hard engineering problems.",
      intro:
        "Backend architecture, reliability, system design, AI-assisted development, or a role where those things matter — the best starting points are email, LinkedIn, and GitHub.",
      form: {
        help: "This form opens a pre-filled draft in your email app. Nothing is sent automatically.",
        name: "Name",
        namePlaceholder: "Jane Smith",
        email: "Email",
        emailPlaceholder: "jane@studio.com",
        message: "Message",
        messagePlaceholder: "Tell me about the project.",
        submit: "Open Email Draft",
        errorBeforeEmail: "Your email app could not be opened. Email me directly at",
        subjectPrefix: "Portfolio contact from",
        bodyName: "Name",
        bodyEmail: "Email",
      },
    },
    projectsIndex: {
      metadataTitle: "Projects",
      metadataDescription:
        "Backend engineering case studies by Bruno Ferreira, with architecture decisions, reliability trade-offs, and inspectable evidence.",
      eyebrow: "Work",
      title: "Selected projects & case studies.",
      backHome: "Back to Home",
    },
    projectPage: {
      fallbackTitle: "Project",
      role: "Role",
      year: "Year",
      architecture: "Architecture",
      criticalFlows: "Critical flows",
      criticalFlowsTitle: "Where correctness is won or lost.",
      evidence: "Engineering evidence",
      evidenceTitle: "Inspect the claims.",
      evidenceIntro:
        "These links point to the repository artifacts behind the architecture and reliability claims above.",
      viewLiveProduct: "View Live Product",
      exploreProject: "Explore Project",
      inspectSource: "Inspect Source",
      exploreArchitecture: "Explore Architecture",
      allProjects: "All projects",
      liveProductNote:
        "The live product shows the customer experience. The repository and architecture links show the engineering decisions, failure handling, and evidence behind it.",
      next: "Next",
    },
    sideProjectsIndex: {
      metadataTitle: "Engineering evidence",
      metadataDescription:
        "Architecture decisions, performance evidence, and implementation artifacts from Bruno Ferreira's software engineering work.",
      eyebrow: "Engineering evidence",
      title: "Claims backed by inspectable artifacts.",
      backHome: "Back to Home",
    },
    sideProjectPage: {
      fallbackTitle: "Engineering evidence",
      back: "Back to engineering evidence",
    },
    notFound: {
      eyebrow: "Oops",
      title: "The link may be broken.",
      description: "The page may have moved. Let’s get you back on track.",
      backHome: "Back to home",
    },
  },
  neonDossier: {
    evidenceGroups: [
      {
        title: "Architecture",
        labels: [
          "C4 architecture",
          "Sequence diagrams",
          "Failure modes",
          "Domain invariants",
        ],
      },
      {
        title: "Reliability",
        labels: [
          "Payment reliability ADR",
          "Order idempotency ADR",
          "Transactional outbox ADR",
        ],
      },
      { title: "Operations", labels: ["Observability", "Operations runbook"] },
      {
        title: "Performance",
        labels: [
          "Performance evidence",
          "Load-testing procedure",
          "Controlled CI load workflow",
        ],
      },
    ],
    reviewerProof: [
      {
        label: "Reviewer guide",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/portfolio/reviewer-guide.md",
        description:
          "A 5–15 minute path for hiring managers and Senior/Staff/Principal reviewers.",
      },
      {
        label: "Backend case study",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/portfolio/case-study.md",
        description:
          "The canonical problem, decisions, hardest failure modes, trade-offs, and final engineering result.",
      },
      {
        label: "Evidence index",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/portfolio/evidence-index.md",
        description:
          "A claim-to-proof map connecting invariants and decisions to implementation, tests, and operational evidence.",
      },
      {
        label: "Final Senior Backend audit",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/verification/final-senior-backend-audit-2026-09-14.md",
        description:
          "Adversarial review across 28 dimensions and 34 findings; all seven P0 findings were corrected and re-verified.",
      },
      {
        label: "Production & operational proof",
        href: "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/verification/production-operational-proof-2026-09-15.md",
        description:
          "Bounded evidence for topology, probes, recovery, SLO targets, game days, runbooks, and explicit unknowns.",
      },
    ],
    guarantees: [
      "Two concurrent buyers cannot both acquire the same unique listing.",
      "Replaying the same valid order request does not create a second order.",
      "Duplicate verified PayPal webhook delivery converges to a no-op after the event is persisted.",
      "A lost payment webhook can be recovered through reconciliation against PayPal.",
      "Captured money that cannot be fulfilled becomes an explicit refund obligation instead of hidden state drift.",
      "Background side effects are coordinated through durable PostgreSQL records before a broker is justified.",
    ],
    decisions: [
      {
        title: "PostgreSQL owns the invariant",
        decision:
          "Keep unique-inventory correctness in conditional database state transitions.",
        why: "Process memory cannot safely coordinate competing buyers once more than one request or API replica is involved.",
      },
      {
        title: "Modular monolith before microservices",
        decision:
          "Keep one deployable API while domain boundaries remain explicit inside the codebase.",
        why: "The current product does not justify the operational cost of distributed ownership, networking, deployment, and recovery.",
      },
      {
        title: "Reconciliation over webhook trust",
        decision:
          "Treat webhooks as an unreliable signal, not the only path to payment truth.",
        why: "Delivery can be duplicated, delayed, or lost, so recovery must converge through persisted state and provider reconciliation.",
      },
      {
        title: "Durable outbox before a broker",
        decision:
          "Commit business state and outbox records together, then publish from an idempotent in-process job.",
        why: "A queue should arrive when measured backlog, replay, ordering, throughput, or independent-consumer requirements make it necessary.",
      },
    ],
    frozenLimits: [
      {
        title: "Confirmed-order cancellation policy",
        detail:
          "The customer cancellation/refund semantics for already-confirmed orders remain an explicit product decision rather than a hidden implementation gap.",
      },
      {
        title: "Deeper payment-link and capture recovery",
        detail:
          "Two legitimate recovery-depth improvements remain frozen because they do not create a duplicate economic effect in the current system.",
      },
      {
        title: "Standalone reservation abuse hardening",
        detail:
          "Authenticated standalone reserve can still create TTL-bounded inventory griefing; closing it requires an explicit product/API decision.",
      },
      {
        title: "Production evidence boundaries",
        detail:
          "Production OTLP reception, managed backup/restore, sustained production SLOs, HA, and multi-region capacity are not claimed because they were not proven.",
      },
    ],
    glance: {
      eyebrow: "At a glance",
      title: "The case in under a minute.",
      status: "Portfolio Complete · Maintenance Mode",
      items: [
        { label: "System", value: "Marketplace for unique inventory" },
        {
          label: "Core challenge",
          value: "Prevent double-selling while payment state remains recoverable",
        },
        { label: "Architecture", value: "Modular monolith · PostgreSQL source of truth" },
        {
          label: "Engineering focus",
          value: "Concurrency · Idempotency · Payments · Recovery · Operability",
        },
      ],
      description:
        "The functional roadmap is closed. The project is intentionally frozen as a portfolio case study; future architecture work requires a measured problem and a new engineering decision, not a larger technology stack.",
    },
    architecture: {
      eyebrow: "Architecture",
      title: "Current system, without decorative infrastructure.",
      description:
        "The current deployment is intentionally small: browser traffic reaches a Vite SPA, the SPA calls one Express API, and PostgreSQL owns business truth. External providers remain outside that trust boundary.",
      client: "Client",
      browser: "Browser",
      staticFrontend: "Static frontend. Not a security boundary.",
      sourceOfTruth: "Source of truth",
      databaseDetail:
        "Orders, listings, payments, ledger, idempotency, webhook and outbox state.",
      externalBoundaries: "External boundaries",
      integrationsDetail:
        "Untrusted integrations around the authoritative database state.",
      limitation:
        "Redis, Kafka, SQS, a separate worker service, ECS/Fargate, RDS, and an ALB are not presented as live architecture because they are not part of the current canonical deployment.",
    },
    guaranteeSection: {
      eyebrow: "What the design guarantees",
      title: "Engineering outcomes, not feature claims.",
    },
    flows: {
      eyebrow: "Critical flows",
      title: "Where correctness is won or lost.",
      concurrency: {
        eyebrow: "01 · Concurrency",
        title: "Two buyers. One listing. One winner.",
        buyerA: "Buyer A",
        buyerB: "Buyer B",
        sameListing: "same listing",
        transition: "PostgreSQL conditional transition",
        winner: "Winner",
        winnerResult: "201 · order committed",
        loser: "Loser",
        loserResult: "409 · reservation conflict",
        outcome:
          "The invariant lives in PostgreSQL, so correctness does not depend on which API process receives the request.",
      },
      partialFailure: {
        eyebrow: "02 · Partial failure",
        title: "Money moved. Fulfillment did not.",
        captured: "PayPal capture COMPLETED",
        failure: "Local fulfillment path fails",
        persist: "Persist, do not hide",
        obligation: "Durable refund obligation",
        recovery: "Reconciliation / compensation",
        outcome:
          "Payment truth is recoverable even when delivery is duplicated, delayed, lost, or interrupted halfway through a workflow.",
      },
      durableEffects: "03 · Durable side effects",
    },
    decisionsSection: {
      eyebrow: "Key engineering decisions",
      title: "The important part is what was deliberately not added.",
      decision: "Decision",
      why: "Why",
    },
    scaling: {
      eyebrow: "Scaling path",
      title: "Scale from measured pressure, not from a technology checklist.",
      items: [
        {
          label: "Today",
          body: "One modular-monolith API, one PostgreSQL source of truth, and idempotent in-process jobs.",
        },
        {
          label: "Triggers",
          body: "Database saturation, connection pressure, shared rate-limit needs, sustained job lag, or an outbox backlog that requires independent scaling.",
        },
        {
          label: "Possible next steps",
          body: "Redis for demonstrated shared coordination, a separate worker for independent background throughput, and a broker only when replay, ordering, throughput, or multi-consumer requirements justify it.",
        },
      ],
    },
    unfinished: {
      eyebrow: "What was deliberately left unfinished",
      title: "Known limits are frozen, not disguised.",
      description:
        "The final audit separates credible future improvements from portfolio theater. These limits remain visible because closing them would require a real product, operational, or scale requirement.",
    },
    implementation: {
      eyebrow: "Implementation notes",
      title: "How the design is enforced in code and operations.",
    },
    reviewer: {
      eyebrow: "Reviewer proof",
      title: "Start with the high-signal artifacts.",
      description:
        "The project has a dedicated review path, a canonical case study, a claim-to-proof index, an adversarial Senior Backend audit, and a bounded operational-proof phase.",
      audit:
        "Final audit scope: 28 dimensions, 34 findings, seven P0 findings corrected and re-verified, unresolved P0 = 0. Remaining P1 limitations are documented and frozen rather than presented as completed work.",
    },
    evidence: {
      eyebrow: "Engineering evidence",
      title: "Inspect the implementation details.",
      description:
        "The reviewer path above is the fast route; these repository artifacts expose the deeper architecture, reliability, operations, and performance proof.",
    },
    finalNote:
      "This project is intentionally frozen. Further architecture work requires a measured problem, not a larger technology stack.",
  },
} as const;
