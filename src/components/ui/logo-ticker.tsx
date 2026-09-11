import { trustedBy } from "@/content/site";

const icons = [
  function Cube() {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3z M12 12 20 7.5 M12 12 4 7.5 M12 12v9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  },
  function Bloom() {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  },
  function Orbit() {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  },
  function Stack() {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 8h14v10H5zM8 8V6h8v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  },
  function Diamond() {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 4 20 12 12 20 4 12z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  },
  function Bolt() {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13 3 6 14h6l-1 7 7-11h-6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
];

export function LogoTicker() {
  const items = [...trustedBy, ...trustedBy];

  return (
    <div className="w-full overflow-hidden">
      <ul className="ticker-track flex items-center gap-14 pr-14" aria-hidden="true">
        {items.map((name, index) => {
          const Icon = icons[index % icons.length] ?? icons[0];
          return (
            <li key={`${name}-${index}`} className="flex shrink-0 text-ink/30">
              {Icon ? <Icon /> : null}
            </li>
          );
        })}
      </ul>
      <p className="sr-only">Trusted by {trustedBy.join(", ")}</p>
    </div>
  );
}
