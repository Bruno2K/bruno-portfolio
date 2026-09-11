import { about } from "@/content/about";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="section-block">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <div className="grid gap-10 mid:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] mid:gap-20">
            <SectionHeading index={about.index} title={about.heading} />
            <div className="flex flex-col gap-6 pt-8 max-[809px]:pt-0">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <dl className="grid grid-cols-2 overflow-hidden border-y border-line mid:grid-cols-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-line px-0 py-8 max-[809px]:py-6 mid:border-r mid:px-8 mid:last:border-r-0 max-[809px]:odd:pr-6 max-[809px]:even:border-l max-[809px]:even:pl-6"
              >
                <dt className="text-stat">{stat.value}</dt>
                <dd className="text-eyebrow mt-3">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
