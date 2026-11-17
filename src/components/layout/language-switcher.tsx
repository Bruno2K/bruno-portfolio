"use client";

import { usePathname } from "next/navigation";
import { type Locale } from "@/i18n/config";
import { localizePath, serializeLocaleCookie } from "@/i18n/routing";
import { cx } from "@/lib/cx";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: {
    languageSelector: string;
    english: string;
    portuguese: string;
    switchToEnglish: string;
    switchToPortuguese: string;
  };
  onNavigate?: () => void;
};

export function LanguageSwitcher({ locale, labels, onNavigate }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const selectLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = serializeLocaleCookie(
      nextLocale,
      window.location.protocol === "https:",
    );
    const currentLocation = `${pathname}${window.location.search}${window.location.hash}`;
    onNavigate?.();
    window.location.assign(localizePath(nextLocale, currentLocation));
  };

  return (
    <div
      className="flex items-center gap-2 text-[12px] font-medium tracking-[0.08em]"
      role="group"
      aria-label={labels.languageSelector}
    >
      <button
        type="button"
        className={cx(
          "min-h-6 min-w-6 transition-colors",
          locale === "en" ? "text-ink" : "text-muted hover:text-ink",
        )}
        aria-current={locale === "en" ? "true" : undefined}
        aria-label={labels.switchToEnglish}
        onClick={() => selectLocale("en")}
      >
        {labels.english}
      </button>
      <span className="text-muted-2" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        className={cx(
          "min-h-6 min-w-6 transition-colors",
          locale === "pt-br" ? "text-ink" : "text-muted hover:text-ink",
        )}
        aria-current={locale === "pt-br" ? "true" : undefined}
        aria-label={labels.switchToPortuguese}
        onClick={() => selectLocale("pt-br")}
      >
        {labels.portuguese}
      </button>
    </div>
  );
}
