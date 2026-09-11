# Bruno Portfolio

## Overview

Reconstruction of the Portfoliox Framer portfolio template as an original Next.js application. Milestone 1 matches the reference layout, type, color, and interaction using placeholder persona copy (Jack Frisman). Later work will replace that copy with Bruno’s professional content.

This is not a fork of Framer source. See `docs/spec.md`.

## Stack

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- ESLint (and Prettier)

## Architecture

See `docs/implementation-plan.md` and `docs/decisions/`. High-level layout:

- `src/app` — routes, metadata, fonts
- `src/components/layout` — header, footer, container
- `src/components/sections` — page sections
- `src/components/ui` — small primitives
- `src/content` — typed placeholder copy
- `src/styles` — tokens and global CSS
- `docs/` — spec, ADRs, plan

## Local Development

Requirements: Node 22+, npm.

```bash
npm install
npm run dev
```

## Commands

```bash
npm run dev      # development server
npm run build    # production build
npm run lint     # ESLint
npm run start    # serve the production build
```

## Project Structure

Established during TASK-001 and following tasks. Prefer the folders above.

## Engineering Workflow

Read `AGENTS.md` before changing code. Spec first, then implementation, then lint/build, then commit.

## Documentation

- `docs/spec.md` — verifiable visual and product requirements
- `docs/discovery.md` — observations from the Framer reference
- `docs/implementation-plan.md` — task list
- `docs/decisions/` — ADRs

## Deployment

Static-friendly App Router site. Deployable on Vercel or any Node host that can run `next build`. No database, no required secrets for Milestone 1.

Publishing this workspace to GitHub as `bruno-portfolio` is done from the Cursor Create repo control (see ADR-0008). The preferred GitHub name is `bruno-portfolio` under account `Bruno-Patrick`; do not rename it if that name is taken.
