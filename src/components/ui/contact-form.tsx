"use client";

import { useState } from "react";

type Status = "idle" | "error";

type ContactFormProps = {
  recipient: string;
};

export function ContactForm({ recipient }: ContactFormProps) {
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
        const subject = `Portfolio contact from ${name}`;
        const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
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
        This form opens a pre-filled draft in your email app. Nothing is sent
        automatically.
      </p>
      <label className="flex flex-col gap-2">
        <span className="text-eyebrow">Name</span>
        <input
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          autoComplete="name"
          className="border-line bg-surface text-ink placeholder:text-muted-2 rounded-[var(--radius-control)] border px-4 py-3 text-[16px] outline-none"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-eyebrow">Email</span>
        <input
          name="email"
          type="email"
          required
          placeholder="jane@studio.com"
          autoComplete="email"
          className="border-line bg-surface text-ink placeholder:text-muted-2 rounded-[var(--radius-control)] border px-4 py-3 text-[16px] outline-none"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-eyebrow">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about the project."
          className="border-line bg-surface text-ink placeholder:text-muted-2 resize-y rounded-[var(--radius-control)] border px-4 py-3 text-[16px] outline-none"
        />
      </label>
      {status === "error" ? (
        <p role="alert" className="text-muted text-[15px] leading-6">
          Your email app could not be opened. Email me directly at{" "}
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
          Open Email Draft
        </button>
      </div>
    </form>
  );
}
