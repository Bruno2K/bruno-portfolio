# Portfolio Reconstruction Spec

## Objective

Rebuild the Portfoliox Framer template as an original Next.js application that matches the reference’s information architecture, layout, typography, color, interaction, and motion — without copying Framer source, embedding PP Neue Montreal, or hotlinking template images.

Milestone 1 is a visually close reconstruction using the template’s placeholder persona (Jack Frisman). Personalization for Bruno is out of scope.

## Reference

- Live: https://numerous-meeting-038256.framer.app/
- Supporting notes: `docs/discovery.md`
- Visual source of truth: the live site at 1440 / 1280 / 390 / 375 CSS pixels

Do not treat Framer’s floating badge, editor chrome, or custom cursor utilities that hide the OS cursor globally as mandatory product UI. Reconstruct the **page**, not the Framer runtime.

## Routes

| Route | Type | Purpose |
| --- | --- | --- |
| `/` | static page | Home with in-page sections |
| `/projects` | static page | Selected work index |
| `/projects/[slug]` | static, `generateStaticParams` | Case study |
| `/side-projects` | static page | Open-source index |
| `/side-projects/[slug]` | static, `generateStaticParams` | Side-project detail |
| `/contact` | static page | Contact + form |
| `not-found` | App Router `not-found.tsx` | 404 |

In-page anchors on `/`: `#top`, `#about`, `#experience`, `#projects`. Smooth scroll, offset for the sticky header.

Nav **Blog** must navigate to `/` (template behavior). It must not create a blog.

Unknown slugs render the 404 page.

## Page Structure

### Global chrome

- Skip link “Skip to content” focusing `#main`, visible on keyboard focus.
- Sticky header on all pages.
- Footer on all pages.
- Main landmark wrapping page content.

### Home

Rendered in this order:

1. **Hero** — occupies approximately the first viewport on desktop (`min-height: 100vh`). Left column: eyebrow “Full Stack Developer”, H1, lead paragraph, primary CTA “View Projects” (`/#projects`), secondary CTA “Download Resume”. Optional right-column media placeholder on desktop; stacks under copy on phone.
2. **Trusted by** — label “Trusted by teams building at” + infinite logo ticker.
3. **About (`#about`)** — `(01) About`, H2, two body paragraphs, four stats.
4. **Stack** — `(02) Stack`, H3 “The tools I reach for, day to day.”, chip row.
5. **Experience (`#experience`)** — `(03) Experience`, H2 “Where I’ve been building.”, four role rows (dates | title — company | summary | stack).
6. **Selected work (`#projects`)** — `(04) Selected Work`, H2, four project cards in a 2-column grid from 810px, 1 column below.
7. **Side projects** — `(05) On the Side`, H2, six items with name, star count, description, tech, GitHub, Live Demo.
8. **Testimonials** — `(06) Testimonials`, infinite quote ticker (three unique quotes, duplicated for loop).
9. **FAQ** — `(07) FAQ`, H2 “Frequently asked.”, five accordion items. Only one open at a time is acceptable; multiple-open is also acceptable if height animation is stable.

### Projects index

Eyebrow `Work`. H1 `Selected projects & case studies.` Four cards. Text link `Back to Home` → `/`.

### Case study

Minimum structure (same for every slug):

- Category eyebrow
- Title (H1)
- One-paragraph summary
- Tech list
- Hero media placeholder
- Overview / role / year metadata row
- Two to four body sections with headings
- Visit Live + back-to-work links
- Next project link

Copy may be authored as original placeholder equivalent to the index card, because the live CMS body is not statically extractable.

### Side-project index and detail

Index lists the six experiments. Detail: title, stars, description, tech, GitHub, Live Demo, back link.

### Contact

Eyebrow `Contact`. H1 `Let’s build something great together.` Supporting paragraph. `hello@jack.dev` mailto. Line `Remote · Available worldwide`. Form: Name, Email, Message, `Send Message`.

No backend. Client validation. On valid submit, replace the form with a success state that does not navigate away. Do not claim the message was emailed if it was not.

### 404

Eyebrow `Oops`. Explanation sentence from the reference. CTA `Back to home`.

## Components

Extract only when there is reuse, distinct visual identity, or real behavior.

Expected:

- `SiteHeader`, `SiteFooter`, `MobileNav`
- `Container`
- `Button` (primary / secondary / ghost)
- `SectionHeading` (index + title)
- `StatGrid`
- `SkillChip`
- `ExperienceItem`
- `ProjectCard`
- `SideProjectItem`
- `LogoTicker`, `QuoteTicker`
- `FaqItem` / `FaqList`
- `ContactForm`
- `MediaPlaceholder` (never a raw hotlinked `<img>` to Framer)

Do not wrap every `div`. Do not add a component library (no shadcn, no Radix unless a primitive is otherwise painful — prefer native `<details>`/`<button>` for FAQ).

## Design Tokens

Source of truth: CSS custom properties on `:root`, mapped into Tailwind theme.

```
--color-canvas: #fafafa;
--color-surface: #ffffff;
--color-ink: #111111;
--color-ink-deep: #0e0e0e;
--color-muted: #777777;
--color-muted-2: #9a9a9a;
--color-line: #ececec;
--color-wash: #f5f5f5;
--color-accent: #2b4bf2;
--color-accent-ink: #ffffff;

--radius-card: 22px;
--radius-chip: 999px;
--radius-media: 18px;
--radius-control: 14px;

--container-max: 1200px;
--gutter-desktop: 36px;   /* 72px total inset */
--gutter-phone: 22px;     /* 44px total inset */
--header-height: 72px;

--ease-standard: cubic-bezier(0.44, 0, 0.56, 1);
--ease-appear: cubic-bezier(0.42, 0, 0.58, 1);
```

Spacing scale used in layout: 4, 6, 8, 10, 12, 14, 16, 20, 22, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 88, 96, 110, 120, 130. Do not invent a new 7px / 13px / 19px value without updating this spec.

Do not use `#fb460d` (Framer badge).

## Typography

Load via `next/font`:

- **Display / headings:** Geist, weight 500 (and 600 italic if a true italic is needed). Licensed alternative to PP Neue Montreal. Documented in ADR-0002.
- **Body / UI:** Inter, weights 400, 500, 700.

Apply the scale from discovery:

| Token | Desktop ≥1440 | Mid 810–1439 | Phone ≤809 |
| --- | --- | --- | --- |
| `text-display` | 62 / 1.02 / -0.03em | 64 / 1.02 / -0.03em | 44 / 1.02 / -0.03em |
| `text-h2` | 42 / 1.06 / -0.025em | 48 / 1.06 / -0.025em | 36 / 1.06 / -0.025em |
| `text-h3` | 36 / 1.12 / -0.02em | 30 / 1.12 / -0.02em | 26 / 1.12 / -0.02em |
| `text-h4` | 22 / 1.2 / -0.01em | same | same |
| `text-lead` | 20 / 1.55 / 0 | 16 / 1.55 / 0 | 16 / 1.55 / 0 |
| `text-body` | 17 / 1.6 / 0 | same | same |
| `text-eyebrow` | 12 / 1 / 0.14em uppercase | same | same |
| `text-stat` | 52 / 1 / -0.03em tabular | same, slightly smaller on phone if overflow | |

Headings: `--color-ink`. Body, lead, eyebrows, nav idle: `--color-muted`. Nav hover / current: `--color-ink`.

## Layout Rules

- Centered container, max 1200px.
- Horizontal gutter 36px from 810px; 22px below.
- Hero `min-height: 100vh` including the header overlay (content padded below the sticky header).
- Section vertical padding desktop ≈ 72–120px; phone ≈ 64–88px.
- Numbered labels use format `(01)` with a space before the section name.
- Project card media: landscape ~ 16:10, rounded `--radius-media` / `--radius-card`, no layout shift on hover.
- Experience rows: full-width, separated by 1px `--color-line`. Dates muted, title ink, company inline after an em dash.
- Footer: 3–4 columns from 810px, stacked on phone. Extra bottom padding (≥120px desktop) so the last line is not tight to the viewport.

## Responsive Behaviour

Breakpoints must match the template, not Tailwind defaults, for layout switches:

- `phone`: `max-width: 809px`
- `mid`: `810px–1439px`
- `wide`: `min-width: 1440px`

Requirements:

- Header desktop links hidden on phone; menu button visible only on phone.
- Stats: 4 columns ≥810px, 2×2 below.
- Project cards: 2 columns ≥810px, 1 below.
- Side projects: 2 columns ≥810px, 1 below.
- Hero media hidden or stacked full-width on phone; two-column on ≥810px if a media slot exists.
- Tickers remain horizontal and do not wrap; they may slow slightly on phone but must not overflow the page width (`overflow-x: hidden` on the section, not on `body` in a way that kills sticky).
- Type sizes follow the table above — H1 actually **increases** 62→64 between wide and mid, matching the template. Do not “fix” this.

## Interactions

- All clickable elements are `<a>` or `<button>`, not `<div onClick>`.
- Focus: 2px accent outline, offset 2–3px, visible on keyboard only (`:focus-visible`).
- Nav links: color `#777` → `#111` in 300ms `--ease-standard`.
- Primary button: filled ink or accent pill, hover darkens without changing box size. Radius 999px.
- Secondary button: transparent / outlined pill, same padding as primary.
- Project card hover: image scales ≤1.04 inside `overflow: hidden`; optional overlay opacity change; **no** width/height/margin change.
- FAQ: keyboard operable (Enter/Space). Chevron rotates. Answer height animates; `overflow: hidden` during animation. Closed items show question only.
- Mobile nav: `aria-expanded`, `aria-controls`, focus trap not required if the panel is in-flow; restore focus to the toggle on close. Escape closes it. Body scroll locked while open.
- Contact form: native `required`, email type, accessible labels. Disable submit while pending. Success text is a live region (`role="status"`).
- Custom cursor: optional, desktop-only, disabled when `pointer: coarse` or `prefers-reduced-motion: reduce`. Default OS cursor must remain usable if the custom cursor is off.

## Animation Behaviour

Implement with CSS first. Add a client component only for intersection observe / ticker duplication / accordion height if CSS cannot do it cleanly.

- Initial hero reveal: fade + 26px rise, 700ms `--ease-appear`. Media: fade + scale 1.04→1, 900ms. Play once per page load.
- Logo ticker and quote ticker: linear infinite translate. Pause on hover and when `prefers-reduced-motion: reduce` (show a static row instead).
- Scroll-reveal for later sections: opacity 0→1 and 16–24px rise when ~15% visible. Disabled under reduced motion (elements start visible).
- No parallax that moves backgrounds independently of scroll in a way that causes jank.
- No animation library unless CSS + a <2KB helper is insufficient. If Motion is introduced, it requires an ADR update.

## Accessibility Requirements

- Semantic landmarks: header, nav, main, footer.
- Heading order: one H1 per page; section titles H2; card titles H3; role titles H4.
- Color contrast: ink on canvas and muted `#777` on `#fafafa` must remain AA for body-sized text. If a muted size fails, darken to `#5e5e5e` and record the deviation.
- Images / placeholders: meaningful `alt` (empty alt only for decorative ticker logos).
- Form labels are visible, not placeholder-only.
- Target size ≥ 24px (pill buttons exceed this).
- `prefers-reduced-motion` honored as above.
- Language `lang="en"` on `<html>` (template copy is English).

## Performance Requirements

- App Router, React Server Components by default.
- Client components: header (mobile menu), tickers, FAQ, form, reveal observer, optional cursor.
- `next/font` with subsetting; no Google Fonts `<link>` tags.
- Placeholders are local SVG/CSS, not remote Framer URLs.
- LCP: hero heading or hero placeholder, not a third-party image.
- No analytics, no auth, no CMS client.

## SEO Requirements

- Root metadata: title template `%s · Jack Frisman`, default title matching the persona, description “Full-stack developer building digital products people actually enjoy using.”
- Per-route `title` + `description`.
- Open Graph: title, description, type `website`. OG image: locally generated or a simple `opengraph-image` route — not the Framer CDN PNG.
- Favicon placeholder in `app/`.
- Semantic HTML; no duplicate H1s.

## Acceptance Criteria

Milestone 1 is done when all of the following are true:

1. Routes in the table exist and internal links resolve.
2. Home section order matches this spec.
3. Desktop 1440 and 1280: header, hero, about stats, project grid, footer align with the reference within a small typographic delta caused by Geist vs Neue Montreal.
4. Phone 390 and 375: single-column cards, 2×2 stats, working menu, no horizontal page scroll.
5. FAQ opens/closes with visible answers from discovery.
6. Contact form validates and shows a success state without a server.
7. `npm run lint` and `npm run build` succeed.
8. Keyboard can reach every interactive control; focus is visible.
9. Reduced-motion users get no infinite tickers and no large translate reveals.
10. No Framer-hosted image URLs in the shipped app.
11. Documentation (`AGENTS.md`, spec, ADRs, plan, README) is present.
12. Work is committed on `main`.

## Known Unknowns

- Case-study long-form copy and exact media sequence on `/projects/[slug]` and `/side-projects/[slug]`.
- Pixel-perfect custom cursor artwork.
- Exact SVG paths of trusted-by logos (intentionally replaced with generic wordmarks).
- Whether mid-size H1 64px vs wide 62px is an optical quirk; we reproduce it.
- Canonical GitHub repository is `https://github.com/Bruno2K/bruno-portfolio` (`main` published).
