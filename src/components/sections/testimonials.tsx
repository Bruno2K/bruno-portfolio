import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/layout/container";
import { QuoteTicker } from "@/components/ui/quote-ticker";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  return (
    <section className="section-block">
      <Container className="mb-10">
        <Reveal>
          <p className="text-eyebrow">(06) Testimonials</p>
        </Reveal>
      </Container>
      <QuoteTicker items={testimonials} />
    </section>
  );
}
