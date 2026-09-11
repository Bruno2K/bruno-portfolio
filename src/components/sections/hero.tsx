import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function Hero() {
  return (
    <section id="top" className="pt-10 pb-8 max-[809px]:pt-8 max-[809px]:pb-6">
      <Container className="grid items-start gap-12 mid:grid-cols-[minmax(0,1fr)_minmax(280px,0.86fr)] mid:gap-16 wide:gap-20">
        <div className="hero-rise flex max-w-[720px] flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="text-eyebrow">{site.role}</p>
          </div>
          <h1 className="text-display">{site.tagline}</h1>
          <p className="text-lead max-w-[52ch]">{site.lead}</p>
          <div className="flex flex-col items-stretch gap-3 pt-2 min-[480px]:flex-row min-[480px]:items-center">
            <Button href="/#projects" icon="down">
              View Projects
            </Button>
            <Button href={site.social.github} variant="secondary" icon="out" external>
              View GitHub
            </Button>
          </div>
        </div>
        <div className="hero-media-in w-full">
          <MediaPlaceholder
            title={site.name}
            category={site.role}
            accent="wash"
            ratio="portrait"
            className="max-[809px]:aspect-square mid:aspect-square"
            image={{
              src: site.portrait.src,
              alt: site.portrait.alt,
              priority: true,
              sizes: "(max-width: 809px) 100vw, (max-width: 1439px) 42vw, 480px",
              objectPosition: "object-[28%_16%]",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
