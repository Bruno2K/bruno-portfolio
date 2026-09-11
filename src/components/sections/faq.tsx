import { faq } from "@/content/faq";
import { Container } from "@/components/layout/container";
import { FaqList } from "@/components/ui/faq-list";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section className="section-block">
      <Container className="mid:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] grid gap-12">
        <Reveal>
          <SectionHeading index="(07) FAQ" title="How I think about engineering." />
        </Reveal>
        <Reveal>
          <FaqList items={faq} />
        </Reveal>
      </Container>
    </section>
  );
}
