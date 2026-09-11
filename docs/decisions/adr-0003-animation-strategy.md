# ADR-0003 — Animation strategy

Status: Accepted

Context:
The reference uses Framer Motion for appear, tickers, and accordion-like FAQ items. Adding `motion` would increase the client bundle for effects that CSS can express.

Decision:
1. Hero appear, hover, focus, chevron rotation, and reduced-motion fallbacks: CSS transitions/animations + Tailwind.
2. Infinite tickers: CSS `translateX` on a duplicated row; pause via `:hover` and `@media (prefers-reduced-motion: reduce)`.
3. Scroll reveal: a small client wrapper using `IntersectionObserver`. No library.
4. FAQ: native button + CSS grid `0fr`/`1fr` height animation (or `<details>` if the visual match is equivalent).
5. Do not add `framer-motion` / `motion` unless a later visual gap cannot be closed in CSS. That would require a new ADR.

Consequences:
- Fewer client components and a smaller JS payload.
- Ticker duplication is done in markup, not by measuring in JS.
- Some spring physics from Framer will become tweens; durations and easings are copied from the appear JSON (`0.7s` / `0.9s`, cubic-bezier 0.42,0,0.58,1).
