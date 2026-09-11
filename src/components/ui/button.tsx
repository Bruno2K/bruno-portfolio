import Link from "next/link";
import { cx } from "@/lib/cx";

const variants = {
  primary: "bg-ink text-accent-ink hover:bg-ink-deep border border-ink",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-accent-ink",
  ghost: "bg-transparent text-muted hover:text-ink border border-transparent",
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  download?: boolean;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  download,
  external,
}: ButtonProps) {
  const classes = cx(
    "inline-flex items-center justify-center rounded-chip px-[22px] py-[14px] text-[14px] font-medium leading-none transition-colors duration-300",
    variants[variant],
    className,
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
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
