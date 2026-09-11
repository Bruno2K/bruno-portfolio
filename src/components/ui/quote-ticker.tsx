import type { Testimonial } from "@/content/testimonials";
import { cx } from "@/lib/cx";

export function QuoteTicker({ items }: { items: Testimonial[] }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <ul className={cx("ticker-track-slow flex gap-8 pr-8")} aria-hidden="true">
        {loop.map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className="border-line bg-surface w-[min(420px,80vw)] shrink-0 rounded-[var(--radius-card)] border p-8"
          >
            <p className="text-h4 mb-8">{item.quote}</p>
            <p className="text-ink text-[15px] font-medium">{item.name}</p>
            <p className="text-eyebrow mt-2">
              {item.role} · {item.company}
            </p>
          </li>
        ))}
      </ul>
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item.name}>
            {item.quote} — {item.name}, {item.role}, {item.company}
          </li>
        ))}
      </ul>
    </div>
  );
}
