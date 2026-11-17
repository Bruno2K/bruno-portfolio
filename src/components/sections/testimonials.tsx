import { Container } from "@/components/layout/container";
import { QuoteTicker } from "@/components/ui/quote-ticker";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/i18n/types";

export function Testimonials({
  items,
  label,
}: {
  items: Dictionary["testimonials"];
  label: string;
}) {
  return (
    <section className="section-block">
      <Container className="mb-10">
        <Reveal>
          <p className="text-eyebrow">{label}</p>
        </Reveal>
      </Container>
      <QuoteTicker items={items} />
    </section>
  );
}
