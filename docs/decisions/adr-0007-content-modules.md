# ADR-0007 — Content as typed modules

Status: Accepted

Context:
The Framer template is CMS-backed. This reconstruction has no CMS, database, or auth requirement. Copy must stay easy for a later personalization pass.

Decision:
- Store site copy, projects, roles, FAQs, and socials in `src/content/*.ts` with exported types.
- Pages map slugs from those modules; they do not hardcode article bodies in JSX beyond layout.
- Contact submit is client-only (validate + success). No form backend, no third-party form service.

Consequences:
- Replacing Jack Frisman with Bruno is a content-module change plus metadata, not a redesign.
- Case-study long-form is authored here as original placeholder prose equivalent in length and tone, because the live CMS body is not statically available.
