import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/layout/container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jack to discuss your next project.",
};

export default function ContactPage() {
  return (
    <main id="main" className="section-block min-h-[70vh]">
      <Container className="mid:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] grid gap-16">
        <div className="flex max-w-[520px] flex-col gap-6">
          <p className="text-eyebrow">Contact</p>
          <h1 className="text-display">Let’s build something great together.</h1>
          <p className="text-lead">
            Have a project in mind, a role to fill, or just want to say hello? Drop a
            message and I’ll get back to you within a couple of days.
          </p>
          <a href={`mailto:${site.email}`} className="text-ink text-[17px] font-medium">
            {site.email}
          </a>
          <p className="text-eyebrow">{site.contactAvailability}</p>
        </div>
        <ContactForm />
      </Container>
    </main>
  );
}
