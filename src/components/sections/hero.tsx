import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[100vh] items-center pt-[96px] pb-10 max-[809px]:pt-20 max-[809px]:pb-16"
    >
      <Container className="mid:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.7fr)] grid items-center gap-16">
        <div className="hero-rise flex max-w-[760px] flex-col gap-7">
          <div className="flex items-center gap-3">
            <span className="bg-accent h-1.5 w-1.5 rounded-full" aria-hidden="true" />
            <p className="text-eyebrow">{site.role}</p>
          </div>
          <h1 className="text-display">{site.tagline}</h1>
          <p className="text-lead max-w-[52ch]">{site.lead}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/#projects">View Projects</Button>
            <Button href={site.resumeHref} variant="secondary">
              Download Resume
            </Button>
          </div>
        </div>
        <div className="hero-media-in mx-auto w-full max-w-[360px] max-[809px]:max-w-[280px]">
          <MediaPlaceholder
            title={site.name}
            category={site.role}
            accent="ink"
            ratio="portrait"
          />
        </div>
      </Container>
    </section>
  );
}
