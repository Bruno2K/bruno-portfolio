<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# AGENTS.md

## Mission

This repository implements Bruno's professional portfolio. Its primary purpose is to present verifiable evidence of senior backend engineering work to international recruiters and hiring managers. Its secondary purpose is to support freelancing opportunities in Brazil without diluting the international positioning.

The existing Portfoliox-inspired visual system is the design baseline. Evolve the professional content and product journeys without replacing that system unless an explicit specification change requires it.

## Engineering Principles

- Preserve simplicity.
- Avoid speculative abstractions.
- Prefer explicit code.
- Prefer reusable components only when there is real repetition, distinct identity, or non-trivial behavior.
- Do not add dependencies without a justification recorded in `docs/decisions/`.
- Do not modify the design without a requirement.
- Do not break existing responsive behaviour.
- Keep accessibility intact.
- Keep TypeScript `strict`. Do not use `any` or unexplained suppressions.

## Visual Rules

`docs/spec.md` is the source of truth for color, type, space, breakpoints, and motion.

Never invent:

- new spacings
- new colors
- new radii
- new animation patterns

without updating the spec in the same change.

Framer breakpoints are `809px` / `810px` / `1440px`. Do not substitute Tailwind `sm`/`md`/`lg` for those layout switches.

Do not hotlink `framerusercontent.com`. Do not embed PP Neue Montreal.

## Agent Workflow

Before implementing:

1. Read this file.
2. Read `docs/spec.md`.
3. Read relevant ADRs in `docs/decisions/`.
4. Identify the task in `docs/implementation-plan.md`.
5. Implement the smallest change that satisfies the task.
6. Run the validations listed on the task (`lint`, `build`, visual check).
7. Review the diff; keep it on-task.
8. Commit with Conventional Commits.

## Definition of Done

A task is not done if:

- `npm run build` fails
- `npm run lint` fails
- TypeScript fails
- responsiveness is broken at 1440 / 1280 / 390 / 375
- the browser console shows relevant errors
- acceptance criteria in the spec or task are unmet
- the Framer badge, analytics, auth, or a CMS were added “for later”

## Professional content and design

- Use Bruno's verified professional identity and evidence-based project content; do not restore or preserve template personas.
- Keep the primary experience in English for international hiring. Portuguese content may support the distinct Brazilian freelancing journey.
- Do not invent employers, responsibilities, metrics, production claims, language proficiency, availability, or project outcomes.
- Treat content work as separate from visual redesign. Preserve existing tokens, layout rules, responsiveness, accessibility, and interaction conventions unless the task explicitly changes the spec.

## Commits

Use Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `style:`). One concern per commit. Never force-push `main`. Never rewrite remote history.
