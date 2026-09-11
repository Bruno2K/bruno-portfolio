# ADR-0006 — Server Components vs Client Components

Status: Accepted

Context:
The site is mostly static copy. Interactivity is localized (menu, accordion, form, tickers, reveal).

Decision:
- Pages, layouts, section composition, and content reads are Server Components.
- Content lives in typed modules under `src/content/` imported on the server.
- `"use client"` is allowed for: `SiteHeader` (menu + scroll state), `MobileNav`, tickers, `FaqList`, `ContactForm`, `Reveal`, optional `CustomCursor`.
- Pass serializable props only. Do not import content fetchers into client files; pass the already-resolved data.

Consequences:
- The JS bundle stays limited to interaction islands.
- A section that is only markup stays a server component even if a child is a client island.
