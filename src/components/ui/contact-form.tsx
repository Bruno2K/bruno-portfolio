"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/types";

type Status = "idle" | "error";

type ContactFormProps = {
  recipient: string;
  copy: Dictionary["ui"]["contact"]["form"];
};

export function ContactForm({ recipient, copy }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("idle");

        const form = event.currentTarget;
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const formData = new FormData(form);
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();
        const subject = `${copy.subjectPrefix} ${name}`;
        const body = [
          `${copy.bodyName}: ${name}`,
          `${copy.bodyEmail}: ${email}`,
          "",
          message,
        ].join("\n");
        const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        try {
          window.location.assign(mailto);
        } catch {
          setStatus("error");
        }
      }}
      aria-describedby="contact-form-help"
    >
      <p id="contact-form-help" className="text-muted text-[15px] leading-6">
        {copy.help}
      </p>
      <label className="flex flex-col gap-2">
        <span className="text-eyebrow">{copy.name}</span>
        <input
          name="name"
          type="text"
          required
          placeholder={copy.namePlaceholder}
          autoComplete="name"
          className="border-line bg-surface text-ink placeholder:text-muted-2 rounded-[var(--radius-control)] border px-4 py-3 text-[16px] outline-none"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-eyebrow">{copy.email}</span>
        <input
          name="email"
          type="email"
          required
          placeholder={copy.emailPlaceholder}
          autoComplete="email"
          className="border-line bg-surface text-ink placeholder:text-muted-2 rounded-[var(--radius-control)] border px-4 py-3 text-[16px] outline-none"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-eyebrow">{copy.message}</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder={copy.messagePlaceholder}
          className="border-line bg-surface text-ink placeholder:text-muted-2 resize-y rounded-[var(--radius-control)] border px-4 py-3 text-[16px] outline-none"
        />
      </label>
      {status === "error" ? (
        <p role="alert" className="text-muted text-[15px] leading-6">
          {copy.errorBeforeEmail}{" "}
          <a className="nav-link font-medium" href={`mailto:${recipient}`}>
            {recipient}
          </a>
          .
        </p>
      ) : null}
      <div>
        <button
          type="submit"
          className="rounded-chip border-ink bg-ink text-accent-ink hover:bg-ink-deep inline-flex items-center justify-center border px-[22px] py-[14px] text-[14px] leading-none font-medium transition-colors duration-300"
        >
          {copy.submit}
        </button>
      </div>
    </form>
  );
}
