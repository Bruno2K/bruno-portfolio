# ADR-0004 — Design tokens

Status: Accepted

Context:
The template encodes color and type as opaque Framer token UUIDs. Agents will otherwise invent one-off hex values.

Decision:
- Define semantic CSS custom properties in `src/styles/tokens.css`.
- Map them into `@theme` (Tailwind v4) or `theme.extend` (Tailwind v3), whichever the scaffold generates.
- Components consume Tailwind utilities (`bg-canvas`, `text-ink`, `border-line`, `max-w-container`) rather than raw hex.
- Breakpoints `phone`/`mid`/`wide` are documented in the spec; layout switches that must match Framer use `max-[809px]` / `min-[810px]` / `min-[1440px]` rather than Tailwind’s `md`/`lg`.

Consequences:
- Changing a color is a one-line token edit.
- Using `md:` for a Framer 810px switch is a spec violation.
- Magic numbers that repeat become tokens; one-off values that are truly unique may stay local but should be rare.
