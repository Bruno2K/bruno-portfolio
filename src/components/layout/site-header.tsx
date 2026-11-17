"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/routing";
import type { Dictionary } from "@/i18n/types";
import { cx } from "@/lib/cx";

type SiteHeaderProps = {
  locale: Locale;
  site: Dictionary["site"];
  nav: Dictionary["nav"];
  copy: Dictionary["ui"]["header"];
};

export function SiteHeader({ locale, site, nav, copy }: SiteHeaderProps) {
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
          href={`/${locale}`}
          className="font-display text-ink text-[17px] font-medium tracking-[-0.02em]"
        >
          {site.name}
        </Link>
        <div className="mid:flex hidden items-center gap-8">
          <nav aria-label={copy.primaryNavigation} className="flex items-center gap-7">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={localizePath(locale, item.href)}
                className="nav-link"
                data-active={pathname === item.href ? "true" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} labels={copy} />
          <Button href={`/${locale}/contact`} icon="out">
            {copy.contact}
          </Button>
        </div>
        <button
          type="button"
          className="mid:hidden flex h-11 w-11 shrink-0 items-center justify-center"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? copy.closeMenu : copy.openMenu}</span>
          <span aria-hidden="true" className="relative block h-4 w-4">
            <span
              className={cx(
                "bg-ink absolute top-1/2 left-0 block h-px w-4 transition-transform",
                open ? "rotate-45" : "-translate-y-[5px]",
              )}
            />
            <span
              className={cx(
                "bg-ink absolute top-1/2 left-0 block h-px w-4 transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cx(
                "bg-ink absolute top-1/2 left-0 block h-px w-4 transition-transform",
                open ? "-rotate-45" : "translate-y-[5px]",
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
          <nav aria-label={copy.mobileNavigation} className="flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={localizePath(locale, item.href)}
                className="font-display text-ink text-[22px] tracking-[-0.01em]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher
            locale={locale}
            labels={copy}
            onNavigate={() => setOpen(false)}
          />
          <div onClick={() => setOpen(false)}>
            <Button href={`/${locale}/contact`} icon="out" className="w-full">
              {copy.contact}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
