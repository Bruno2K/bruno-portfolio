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

Canonical GitHub repository: [Bruno2K/bruno-portfolio](https://github.com/Bruno2K/bruno-portfolio).

Static-friendly App Router site. Deployable on Vercel (`next build`) with no database and no required secrets for Milestone 1.

To publish local `main` to GitHub (normal push, never `--force`):

```bash
git remote add github https://github.com/Bruno2K/bruno-portfolio.git
git push -u github main
```
