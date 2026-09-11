import { trustedBy } from "@/content/site";
import { cx } from "@/lib/cx";

export function LogoTicker() {
  const items = [...trustedBy, ...trustedBy];

  return (
    <div className="overflow-hidden">
      <ul
        className={cx("ticker-track flex items-center gap-16 pr-16")}
        aria-hidden="true"
      >
        {items.map((name, index) => (
          <li
            key={`${name}-${index}`}
            className="font-display text-ink/35 shrink-0 text-[22px] font-medium tracking-[-0.03em]"
          >
            {name}
          </li>
        ))}
      </ul>
      <p className="sr-only">Trusted by {trustedBy.join(", ")}</p>
    </div>
  );
}
