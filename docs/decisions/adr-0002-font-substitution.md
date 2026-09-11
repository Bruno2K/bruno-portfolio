# ADR-0002 — Font substitution

Status: Accepted

Context:
The Framer template uses **PP Neue Montreal** (Pangram Pangram, commercial) for display and **Inter** for body, eyebrows, and UI. Embedding the Neue Montreal files from Framer’s CDN would both violate license terms and create a fragile remote dependency.

Decision:
- Headings / display / stats: **Geist** via `next/font/google`, weight 500 as the default heading face (weight 600/700 only for strong emphasis).
- Body / nav / eyebrows / forms: **Inter** via `next/font/google`, weights 400, 500, 700.
- Apply the measured size / line-height / letter-spacing scale from `docs/spec.md` so the substitution is optical, not a new type system.
- Enable `'tnum'` on statistic numerals.

Consequences:
- Glyph width will differ slightly from Neue Montreal; tracking and sizes stay identical so hierarchy matches.
- No `@font-face` pointing at `framerusercontent.com`.
- If Bruno later licenses Neue Montreal, swap the display variable in `src/app/layout.tsx` only.
