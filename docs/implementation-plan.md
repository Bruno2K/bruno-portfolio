# Implementation plan

Work is sequential. Each task ends with lint/typecheck of the touched surface, a diff review, and a Conventional Commit. Do not start a task whose dependencies are open.

## TASK-001 — Bootstrap the application

- **Objective:** Next.js + TypeScript (strict) + Tailwind + ESLint + App Router + `src/`.
- **Files:** `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.*`, Tailwind/PostCSS, `src/app/layout.tsx`, `src/app/page.tsx`, `.gitignore`, `.prettierrc`.
- **Depends on:** none (docs already exist).
- **Accept:** `npm run lint` and `npm run build` succeed on the scaffold. `strict: true`. Import alias `@/*` → `./src/*`.
- **Validate:** `npx tsc --noEmit` if not included in build.

## TASK-002 — Design tokens

- **Objective:** CSS variables + Tailwind theme mapping per spec.
- **Files:** `src/styles/tokens.css`, `src/app/globals.css`.
- **Depends on:** TASK-001.
- **Accept:** canvas background `#fafafa` on `body`. Utilities exist for ink, muted, line, accent, container, radii.
- **Validate:** inspect compiled CSS or a smoke page using the utilities.

## TASK-003 — Typography system

- **Objective:** Geist + Inter via `next/font`; type utilities for display/h2/h3/h4/lead/body/eyebrow/stat.
- **Files:** `src/app/layout.tsx`, `src/styles/typography.css` (or token file).
- **Depends on:** TASK-002.
- **Accept:** H1 at 62px ≥1440, 64px mid, 44px phone. Eyebrows uppercase 12px / 0.14em.
- **Validate:** computed styles at 1440 and 390.

## TASK-004 — Global layout

- **Objective:** `Container`, skip link, `main` id, sticky header slot, footer slot, metadata, favicon.
- **Files:** `src/components/layout/*`, `src/app/layout.tsx`, `src/app/icon.tsx` or `public/favicon.ico`.
- **Depends on:** TASK-003.
- **Accept:** max-width 1200px centered; gutters 36px / 22px; skip link works.
- **Validate:** resize 1440 → 375; no horizontal scroll.

## TASK-005 — Header

- **Objective:** Wordmark, in-page + route nav, Let’s Talk CTA, mobile overlay.
- **Files:** `src/components/layout/site-header.tsx`, `src/components/layout/mobile-nav.tsx`.
- **Depends on:** TASK-004.
- **Accept:** desktop links visible ≥810px; menu ≥ phone; Escape closes; `aria-expanded` toggles; Let’s Talk → `/contact`.
- **Validate:** keyboard, 390px screenshot vs reference.

## TASK-006 — Hero

- **Objective:** First-viewport hero with eyebrow, H1, lead, two CTAs, media placeholder, appear animation.
- **Files:** `src/components/sections/hero.tsx`, `src/components/ui/button.tsx`, `src/content/site.ts`.
- **Depends on:** TASK-005.
- **Accept:** `min-height: 100vh`; View Projects scrolls to `#projects`; resume links to local placeholder; reduced motion skips translate.
- **Validate:** 1440 and 390 vs reference.

## TASK-007 — Project and home sections

- **Objective:** Trusted-by, About, Stack, Experience, Selected Work, Side projects, Testimonials, FAQ.
- **Files:** `src/components/sections/*`, `src/components/ui/*`, `src/content/*.ts`.
- **Depends on:** TASK-006.
- **Accept:** section order and copy match spec; 2-col cards ≥810px; stats 4/2; FAQ answers visible; tickers pause on reduced motion.
- **Validate:** full-page screenshot 1440; FAQ keyboard; no layout shift on card hover.

## TASK-008 — Footer

- **Objective:** Blurb, email, timezone, nav, social, copyright.
- **Files:** `src/components/layout/site-footer.tsx`.
- **Depends on:** TASK-004.
- **Accept:** links resolve; mailto works; columns stack on phone.
- **Validate:** 1440 and 390.

## TASK-009 — Secondary pages

- **Objective:** `/projects`, `/projects/[slug]`, `/side-projects`, `/side-projects/[slug]`, `/contact`, `not-found`.
- **Files:** `src/app/**/page.tsx`, `src/app/not-found.tsx`, `src/components/sections/contact-form.tsx`.
- **Depends on:** TASK-007, TASK-008.
- **Accept:** `generateStaticParams` covers all slugs; unknown slug → 404; form success state; contact metadata set.
- **Validate:** crawl all sitemap paths; 404 for `/nope`.

## TASK-010 — Animations

- **Objective:** Hero appear, section reveal, tickers, FAQ height, card hover — all spec-compliant.
- **Files:** `src/components/ui/reveal.tsx`, CSS in globals/tokens.
- **Depends on:** TASK-007.
- **Accept:** reduced-motion branch verified; no Motion dependency.
- **Validate:** DevTools emulate reduced motion; hover cards.

## TASK-011 — Responsive refinement

- **Objective:** Close remaining deltas at 1440, 1280, 390, 375.
- **Files:** layout/section CSS as needed.
- **Depends on:** TASK-009, TASK-010.
- **Accept:** no horizontal scroll; mid breakpoint uses 810/1440 rules, not Tailwind `lg`.
- **Validate:** screenshot pairs vs reference.

## TASK-012 — Accessibility

- **Objective:** landmarks, headings, labels, focus, skip link, live region on form.
- **Files:** components touched in 005–009.
- **Depends on:** TASK-011.
- **Accept:** tab order is logical; FAQ and menu operable; images have alt.
- **Validate:** keyboard pass; axe or equivalent if available.

## TASK-013 — Visual regression pass

- **Objective:** Side-by-side with the Framer URL; list and fix structural deltas.
- **Files:** whatever the delta requires; notes in the final report.
- **Depends on:** TASK-012.
- **Accept:** remaining differences are documented (font, photos, logos, Framer badge).
- **Validate:** 1440, 1280, 390, 375.

## TASK-014 — Production hardening

- **Objective:** README, metadata/OG, lint, build, remove dead code, favicon.
- **Files:** `README.md`, metadata routes, leftover TODOs.
- **Depends on:** TASK-013.
- **Accept:** `npm run lint` and `npm run build` clean; README matches the required sections.
- **Validate:** production build start or `next build` only.

## Task graph

```
001 → 002 → 003 → 004 → 005 → 006 → 007 → 010
                         ↓              ↓
                        008            009 → 011 → 012 → 013 → 014
```
