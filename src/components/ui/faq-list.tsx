"use client";

import { useState } from "react";
import type { FaqItem as FaqItemType } from "@/content/faq";
import { cx } from "@/lib/cx";

export function FaqList({ items }: { items: FaqItemType[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question} className="border-line border-b">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="text-h4">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cx(
                    "relative block h-4 w-4 shrink-0 transition-transform duration-300",
                    open && "rotate-45",
                  )}
                >
                  <span className="bg-ink absolute top-1/2 left-0 h-px w-full" />
                  <span className="bg-ink absolute top-0 left-1/2 h-full w-px" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cx(
                "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[var(--ease-standard)]",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <p className="text-body min-h-0 pb-6">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
