import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function LocalizedNotFound() {
  const localeHeader = (await headers()).get("x-portfolio-locale");
  const locale = isLocale(localeHeader) ? localeHeader : "en";
  const copy = getDictionary(locale).ui.notFound;
  return (
    <main id="main" className="flex min-h-[70vh] items-center">
      <Container className="flex max-w-[640px] flex-col gap-6 py-24">
        <p className="text-eyebrow">{copy.eyebrow}</p>
        <h1 className="text-display">{copy.title}</h1>
        <p className="text-lead">{copy.description}</p>
        <div>
          <Button href={`/${locale}`}>{copy.backHome}</Button>
        </div>
      </Container>
    </main>
  );
}
