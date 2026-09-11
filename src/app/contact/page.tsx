import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/layout/container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bruno about backend and software engineering.",
};

export default function ContactPage() {
  return (
    <main id="main" className="section-block min-h-[70vh]">
      <Container className="mid:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] grid gap-16">
        <div className="flex max-w-[520px] flex-col gap-6">
          <p className="text-eyebrow">Contact</p>
          <h1 className="text-display">Let’s talk about hard engineering problems.</h1>
          <p className="text-lead">
            Backend architecture, reliability, system design, AI-native engineering, or a role where those things matter — the best starting points are LinkedIn and GitHub.
          </p>
          <div className="flex gap-5 text-[15px] font-medium">
            <a href={site.social.linkedin} className="nav-link" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.social.github} className="nav-link" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <p className="text-eyebrow">{site.contactAvailability}</p>
        </div>
        <ContactForm />
      </Container>
    </main>
  );
}
