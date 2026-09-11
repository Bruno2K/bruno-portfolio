# AGENTS.md

## Mission

This repository implements the professional portfolio of Bruno. Milestone 1 is a faithful reconstruction of the Portfoliox visual system using placeholder persona copy (Jack Frisman). Later work replaces content, not the design system, unless a spec change is explicit.

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

## Content vs design

Until a personalization task is opened, keep Jack Frisman placeholder copy. Changing names, projects, or colors to “improve” the portfolio is out of scope.

## Commits

Use Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `style:`). One concern per commit. Never force-push `main`. Never rewrite remote history.
