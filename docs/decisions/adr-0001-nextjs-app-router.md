# ADR-0001 — Next.js App Router

Status: Accepted

Context:
The reconstruction must be a sustainable TypeScript web app with file-based routing, metadata, and a path to Vercel-style deployment. The template is a small multi-page marketing site (home, indexes, CMS-like detail pages, contact, 404).

Decision:
Use the current stable Next.js App Router with the `src/` directory, React Server Components by default, and static generation for all known routes. Do not introduce the Pages Router, a custom Express server, or a meta-framework.

Consequences:
- Routes map 1:1 to `src/app/**/page.tsx`.
- Detail pages use `generateStaticParams`.
- Client JS is opt-in via `"use client"` only where interaction requires it.
- Lint/build are `next lint` / `next build`.
