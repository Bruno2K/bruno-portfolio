"use client";

import { useState } from "react";

type Status = "idle" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  if (status === "success") {
    return (
      <p role="status" className="text-h4">
        Thanks — I’ll get back to you within a couple of days.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        setStatus("success");
      }}
    >
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
      <div>
        <button
          type="submit"
          className="rounded-chip border-ink bg-ink text-accent-ink hover:bg-ink-deep inline-flex items-center justify-center border px-[22px] py-[14px] text-[14px] leading-none font-medium transition-colors duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
