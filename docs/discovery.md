# Discovery notes — Portfoliox (Framer reference)

Captured 2026-09-11 from `https://numerous-meeting-038256.framer.app/`.

This file records observations used to write `spec.md`. It is not a license to copy Framer source, assets, or proprietary fonts.

## Identity

- Template name: **Portfoliox – Free Framer Portfolio Template**
- Persona: **Jack Frisman**, Full Stack Developer
- Tone: light, editorial, generous whitespace, black/gray type on off-white
- Framer badge overlay (“Helping Small Starups Become Unicorn”) is **not** part of the product UI and must not be reconstructed

## Routes (from sitemap.xml)

| Path | Role |
| --- | --- |
| `/` | Home (single long page with hash sections) |
| `/projects` | Selected work index |
| `/projects/[slug]` | Case study (helio-analytics, drift-finance, atlas-docs, northwind-commerce) |
| `/side-projects` | Open-source index |
| `/side-projects/[slug]` | Side-project detail (lumen, pico-router, cron-studio, usethrottle, inkwell, palette-cli) |
| `/contact` | Contact + form |
| `/404` | Not found |

Hash targets on home: `#top`, `#about`, `#experience`, `#projects`.

Nav item **Blog** points at `/` (home). Treat as a placeholder link, not a blog system.

## Homepage sections (in order)

1. Header (sticky)
2. Hero (`#top`) — eyebrow, H1, lead, two CTAs
3. Trusted-by ticker (12 logo slots, infinite marquee)
4. About (`#about`) — numbered label, H2, two body paragraphs, 4 stats
5. Stack — numbered label, H3, skill chips
6. Experience (`#experience`) — numbered label, H2, 4 role rows
7. Selected Work (`#projects`) — numbered label, H2, 4 project cards
8. Side projects — numbered label, H2, 6 experiment rows/cards
9. Testimonials — numbered label, infinite quote ticker
10. FAQ — numbered label, H2, 5 accordion items
11. Footer

## Header

Desktop: wordmark `Jack Frisman` left; links About / Experience / Projects / Blog / Contact; pill CTA `Let’s Talk` → `/contact`.

Mobile (`max-width: 809px`): compact header with a menu trigger (`data-framer-name="Phone"`). Overlay menu repeats the same links plus CTA.

Header is sticky. Backdrop/blur tokens are present.

## Footer

Four conceptual columns:

- Brand blurb: “Full-stack developer building considered digital products for startups and teams worldwide.” plus `hello@jack.dev` and `Remote · GMT+5`
- Navigation: About, Experience, Projects, Contact
- Social: GitHub, LinkedIn, X / Twitter
- Copyright: `© 2026 Jack. All rights reserved.`

Mail: `mailto:hello@jack.dev`. Socials are generic `https://github.com`, `https://linkedin.com`, `https://x.com`.

## Contact page

Eyebrow `Contact`. H1 “Let’s build something great together.” Supporting copy. Email + “Remote · Available worldwide”. Form fields:

- Name (required, placeholder `Jane Smith`)
- Email (required)
- Message
- Submit `Send Message`

## Projects index

Eyebrow `Work`. H1 “Selected projects & case studies.” Four cards linking to case studies. `Back to Home`.

## 404

Eyebrow `Oops`. Body: “The link may be broken or the page may have moved. Let’s get you back on track.” CTA `Back to home`.

## Breakpoints (Framer variants)

- Desktop large: `min-width: 1440px`
- Desktop / tablet: `810px – 1439px`
- Phone: `max-width: 809px`

Container: `min(100vw - 72px, 1200px)` from 810px up; `min(100vw - 44px, 1200px)` on phone.

## Color tokens (Framer CSS variables)

| Token | Hex | Use |
| --- | --- | --- |
| canvas | `#fafafa` | page background |
| surface | `#ffffff` | cards / header surface |
| ink | `#111111` | headings, primary text |
| ink-deep | `#0e0e0e` | near-black accents |
| muted | `#777777` | body, nav, captions |
| muted-2 | `#9a9a9a` | tertiary |
| line | `#ececec` | borders, FAQ rules, stats dividers |
| wash | `#f5f5f5` | subtle fills |
| accent | `#2b4bf2` | primary actions / focus |
| orange | `#fb460d` | Framer chrome only — ignore |

## Typography (computed from style presets)

Display family in the template is **PP Neue Montreal** (Medium 500, Bold 700, SemiBold italic 600). This is a commercial font and **must not** be embedded. Body family is **Inter** 400/500/700.

| Role | Family (template) | Size ≥1440 | 810–1439 | ≤809 | Weight | Tracking | Leading |
| --- | --- | --- | --- | --- | --- | --- | --- |
| H1 display | PP Neue Montreal | 62px | 64px | 44px | 500 | -0.03em | 1.02em |
| H2 | PP Neue Montreal | 42px | 48px | 36px | 500 | -0.025em | 1.06em |
| H3 | PP Neue Montreal | 36px | 30px | 26px | 500 | -0.02em | 1.12em |
| H4 / FAQ / roles | PP Neue Montreal | 22px | 22px | 22px | 500 | -0.01em | 1.2–1.25em |
| Lead | Inter | 20px | 16px | 16px | 400 | 0 | 1.55em |
| Body | Inter | 17px | 17px | 17px | 400 | 0 | 1.6em |
| Eyebrow / meta | Inter | 12px | 12px | 12px | 500 | 0.14em | 1em uppercase |
| Stats numerals | PP Neue Montreal | 52px | 52px | ~36–44px | 500 | -0.03em | 1em, `tnum` |
| Nav | Inter Medium | ~14–15px | | | 500 | 0 | 1em |

Link color `#777`; hover/current `#111`. Transition `color .3s cubic-bezier(.44, 0, .56, 1)`.

## Layout rhythm (observed paddings)

- Hero: `min-height: 100vh`; padding around `96px 48px 40px` (desktop), tighter on phone (`96px 22px 64px`)
- Section blocks: roughly `72px–120px` vertical padding
- Footer: `40px 48px 130px` desktop, `40px 48px 120px` variant, phone `24px 22px 80px`
- Primary pill: `14px 22px` or `16px 26px`; radius `100px`
- Logo ticker gap: `64px`
- Stats grid: 4 columns desktop, 2 columns phone (`repeat(2, minmax(120px, 1fr))`)
- Project cards: 2 columns from 810px, 1 column on phone; image `sizes` imply a 2-up split inside 1200px with 64px gap
- Card radii: 14 / 18 / 22 / 24px
- FAQ: bottom border 1px `#ececec`; chevron; `tabindex="0"`

## Motion

Hero appear:

- Copy block: opacity 0.001 → 1, `y: 26 → 0`, 0.7s, ease `[0.42, 0, 0.58, 1]`
- Media block: opacity 0.001 → 1, `scale: 1.04 → 1`, 0.9s, same ease

Also present: logo ticker, testimonials ticker, FAQ open/close, likely card hover (image scale / overlay without layout shift), custom cursor (`cursor: none` utility exists).

## Content inventory (placeholders to preserve)

**Stats:** `8+` Years Experience · `40+` Projects Delivered · `12` Countries Worked With · `∞` Cups of Coffee

**Stack chips:** React, Next.js, TypeScript, Node.js, Go, Postgres, Supabase, AWS, Docker, Framer Motion, Tailwind, GraphQL

**Experience**

| Dates | Title | Company | Summary | Stack |
| --- | --- | --- | --- | --- |
| 2023 — Present | Senior Software Engineer | Helio | Lead front-end for a real-time analytics platform — owning the design system, performance budget, and the team’s engineering standards. | React · Next.js · TypeScript |
| 2021 — 2023 | Full-Stack Engineer | Drift Finance | Built core banking flows end to end, from Postgres schema to pixel, for a consumer fintech used by half a million people. | Node.js · GraphQL · AWS |
| 2019 — 2021 | Front-End Engineer | Atlas | Shipped a documentation platform with instant search and an editor experience built to keep writers in flow. | React · Supabase |
| 2018 — 2019 | Junior Developer | Northwind | My first role — where I learned to ship small, review carefully, and treat every millisecond as a feature. | JavaScript · CSS |

**Selected work:** Helio Analytics, Drift Finance, Atlas Docs, Northwind Commerce (categories SaaS Platform / Fintech App / Developer Tools / E-commerce). CTAs: Visit Live (`https://example.com`), Read the Story (internal).

**Side projects:** Lumen (1240), Pico Router (2100), Cron Studio (1730), useThrottle (860), Inkwell (540), Palette CLI (690).

**Testimonials (looped):** Mara Vance · Helio; Daniel Okoro · Drift; Sofia Lindqvist · Atlas.

**FAQ answers**

- Who do you work with? — Startups, scale-ups, founders, and product teams who value craft over noise and want a partner who sweats the details.
- What technologies do you use? — Mostly React, Next.js and TypeScript on the front end, with Node.js and Go powering the back end — plus Postgres and AWS.
- How long does a project take? — Anywhere from a focused two-week sprint to a multi-month build. We scope it together honestly up front, with no surprises.
- Do you work remotely? — Always. I’ve collaborated with teams across twelve time zones and keep communication tight, async, and documented.
- Can you join an existing team? — Yes — I’m comfortable embedding into your codebase, rituals, and tooling from day one, and ramping up fast.

## Images

Reference uses Framer-hosted photos for project cards and a portrait/media in the hero. Those files are not reused. Reconstruction uses original geometric/gradient placeholders with matching aspect ratios.

## Known unknowns at discovery time

- Exact case-study body copy (detail routes returned a JS shell / 422 without the Framer runtime). Structure will be inferred from index metadata plus a standard case-study layout, then corrected during visual verification.
- Exact trusted-by brand list (logos are CSS masks). Reconstruction uses generic wordmarks, not copied SVG trademarks.
- Precise custom-cursor graphic and hover delta on cards — to be confirmed in the visual pass.
- Resume file is not hosted; CTA will use a local placeholder PDF.
