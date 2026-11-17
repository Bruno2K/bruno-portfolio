export type ProfessionalSystem = {
  title: string;
  domain: string;
  problem: string;
  role: string;
  approach: string;
  delivery: string;
  evidenceBoundary: string;
};

export const professionalSystems: ProfessionalSystem[] = [
  {
    title: "Manufacturing Operations Platform",
    domain: "Manufacturing operations",
    problem:
      "A domain-rich operation needed one system to coordinate production workflows, business rules, and data across connected modules.",
    role:
      "Implemented the application end to end across backend APIs, relational data models, and the operational web interface.",
    approach:
      "Modeled production flows and business rules in a relational core, exposed them through APIs, and connected the frontend across application modules.",
    delivery:
      "The implementation brought data, services, and operator-facing workflows together in one cohesive application.",
    evidenceBoundary:
      "Professional experience; client identity and implementation artifacts remain private.",
  },
  {
    title: "Omnichannel Messaging Platform",
    domain: "Messaging & customer operations",
    problem:
      "A legacy customer-support platform needed channel integrations separated from central workflows so the product could evolve with clearer boundaries.",
    role:
      "Led the initial technical reconstruction, defined channel and data boundaries, and later guided architectural evolution with engineering teams.",
    approach:
      "Separated channel adapters from core message and service workflows, modeled customer and operational contexts, and integrated external systems.",
    delivery:
      "The rebuilt foundation supported continued evolution across communication channels and operational workflows.",
    evidenceBoundary:
      "Professional experience; client identity and implementation artifacts remain private.",
  },
  {
    title: "Customer Feedback Automation",
    domain: "Operational automation",
    problem:
      "Manual feedback operations required repeatable data ingestion, scheduled processing, state tracking, and result consolidation across external systems.",
    role:
      "Designed and implemented the automation pipeline, including Python jobs, integrations, persisted states, and operational result consolidation.",
    approach:
      "Ingested files and data, scheduled processing jobs, persisted state transitions, and used state-aware retries to prevent duplicate processing.",
    delivery:
      "The system replaced a manual sequence with an automated workflow that made processing and recovery explicit.",
    evidenceBoundary:
      "Professional experience; client identity and implementation artifacts remain private.",
  },
];
