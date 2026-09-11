import { about } from "@/content/about";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="section-block">
      <Container>
        <Reveal>
          <div className="mid:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] mid:gap-16 grid gap-12">
            <div className="flex flex-col gap-6">
              <SectionHeading index={about.index} title={about.heading} />
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body max-w-[54ch]">
                  {paragraph}
                </p>
              ))}
            </div>
            <dl className="border-line bg-line grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border">
              {about.stats.map((stat) => (
                <div key={stat.label} className="bg-canvas px-6 py-8">
                  <dt className="text-stat">{stat.value}</dt>
                  <dd className="text-eyebrow mt-3">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
