import { Container } from "@/components/layout/container";
import { FaqList } from "@/components/ui/faq-list";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/types";

export function Faq({
  faq,
  copy,
}: {
  faq: Dictionary["faq"];
  copy: Dictionary["ui"]["home"];
}) {
  return (
    <section className="section-block">
      <Container className="mid:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] grid gap-12">
        <Reveal>
          <SectionHeading index={copy.faqIndex} title={copy.faqTitle} />
        </Reveal>
        <Reveal>
          <FaqList items={faq} />
        </Reveal>
      </Container>
    </section>
  );
}
