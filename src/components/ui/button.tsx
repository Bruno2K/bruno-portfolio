import Link from "next/link";
import { cx } from "@/lib/cx";

const variants = {
  primary: "bg-ink text-accent-ink hover:bg-ink-deep border border-ink",
  secondary:
    "bg-surface text-ink border border-line hover:border-ink hover:bg-wash",
  ghost: "bg-transparent text-muted hover:text-ink border border-transparent",
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  download?: boolean;
  external?: boolean;
  icon?: "down" | "out" | "none";
};

function Icon({ type }: { type: "down" | "out" }) {
  if (type === "down") {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <path
          d="M7 2.5v9M3.5 8.5 7 12l3.5-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M4 10 10 4M5 4h5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  download,
  external,
  icon = "none",
}: ButtonProps) {
  const classes = cx(
    "inline-flex items-center justify-center gap-2 rounded-chip px-[22px] py-[14px] text-[14px] font-medium leading-none transition-colors duration-300",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {icon !== "none" ? <Icon type={icon} /> : null}
    </>
  );

  const isFile = href.endsWith(".pdf");

  if (external || isFile || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        download={download || isFile || undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
