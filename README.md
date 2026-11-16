# Bruno Portfolio

## Overview

Professional portfolio for Bruno, positioned primarily for international Senior Backend Engineer opportunities and secondarily for freelancing work in Brazil. The site presents evidence-based engineering cases, professional experience, and clear contact paths without overstating unverified results.

The application began as an original Next.js reconstruction of the Portfoliox Framer visual system. That established layout, typography, color, interaction, responsiveness, and accessibility baseline remains in place while the content evolves around Bruno's professional identity.

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
- `src/content` — typed professional content
- `src/styles` — tokens and global CSS
- `docs/` — spec, ADRs, plan

## Local Development

Requirements: Node 22+, npm.

```bash
npm install
npm run dev
```

The dev server binds to `0.0.0.0:43127`.

## Commands

```bash
npm run dev           # http://127.0.0.1:43127
npm run build         # production build
npm run start         # serve the production build on 43127
npm run lint          # ESLint
npm run typecheck     # tsc --noEmit
npm run format        # Prettier
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

Canonical GitHub repository: [Bruno2K/bruno-portfolio](https://github.com/Bruno2K/bruno-portfolio) (`main`).

Static-friendly App Router site. Deployable on Vercel (`next build`) with no database or required secrets for the current static experience.

Canonical remote is `origin`. Publish feature branches normally and never use `--force`:

```bash
git push -u origin <branch>
```
