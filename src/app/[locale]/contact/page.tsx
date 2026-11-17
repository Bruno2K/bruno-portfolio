import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/layout/container";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { createLocalizedPageMetadata } from "@/lib/metadata";

type ContactPageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = getDictionary(locale);
  return createLocalizedPageMetadata({
    title: dictionary.ui.contact.metadataTitle,
    description: dictionary.ui.contact.metadataDescription,
    path: "/contact",
    locale,
    siteName: dictionary.site.name,
    defaultTitle: dictionary.site.ogTitle,
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const copy = dictionary.ui.contact;

  return (
    <main id="main" className="section-block min-h-[70vh]">
      <Container className="mid:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] grid gap-16">
        <div className="flex max-w-[520px] flex-col gap-6">
          <p className="text-eyebrow">{copy.eyebrow}</p>
          <h1 className="text-display">{copy.title}</h1>
          <p className="text-lead">{copy.intro}</p>
          <div className="flex gap-5 text-[15px] font-medium">
            <a href={`mailto:${dictionary.site.contactEmail}`} className="nav-link">
              Email
            </a>
            <a
              href={dictionary.site.social.linkedin}
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={dictionary.site.social.github}
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <p className="text-eyebrow">{dictionary.site.contactAvailability}</p>
        </div>
        <ContactForm recipient={dictionary.site.contactEmail} copy={copy.form} />
      </Container>
    </main>
  );
}
