"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { nav, site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { cx } from "@/lib/cx";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="border-line/80 bg-canvas/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-ink text-[17px] font-medium tracking-[-0.02em]"
        >
          {site.name}
        </Link>
        <div className="mid:flex hidden items-center gap-8">
          <nav aria-label="Primary" className="flex items-center gap-7">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link"
                data-active={
                  item.href !== "/" && pathname === item.href ? "true" : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href="/contact" icon="out">
            Let’s Talk
          </Button>
        </div>
        <button
          type="button"
          className="mid:hidden flex h-10 w-10 items-center justify-center"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span
              className={cx(
                "bg-ink block h-px w-4 transition-transform",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cx(
                "bg-ink block h-px w-4 transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cx(
                "bg-ink block h-px w-4 transition-transform",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>
      <div
        id={panelId}
        hidden={!open}
        className="mid:hidden border-line bg-canvas border-t"
      >
        <Container className="flex flex-col gap-6 py-8">
          <nav aria-label="Mobile" className="flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-display text-ink text-[22px] tracking-[-0.01em]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div onClick={() => setOpen(false)}>
            <Button href="/contact" icon="out" className="w-full">
              Let’s Talk
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
