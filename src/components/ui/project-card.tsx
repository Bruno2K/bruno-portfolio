import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder, type Accent } from "@/components/ui/media-placeholder";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function ProjectCard({
  project,
  locale,
  copy,
}: {
  project: Dictionary["projects"][number];
  locale: Locale;
  copy: Dictionary["ui"]["projectCard"];
}) {
  return (
    <article className="flex flex-col gap-5">
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="group block overflow-hidden rounded-[var(--radius-card)]"
      >
        <div className="overflow-hidden rounded-[var(--radius-card)]">
          <div className="transition-transform duration-500 ease-[var(--ease-standard)] group-hover:scale-[1.04]">
            <MediaPlaceholder
              title={project.title}
              category={project.category}
              accent={project.accent as Accent}
              image={
                project.cover
                  ? {
                      src: project.cover.src,
                      alt: project.cover.alt,
                      sizes: "(max-width: 809px) 100vw, (max-width: 1439px) 46vw, 580px",
                      objectPosition: "object-top",
                    }
                  : undefined
              }
            />
          </div>
        </div>
        <span className="sr-only">
          {copy.readStoryPrefix} {project.title}
        </span>
      </Link>
      <div className="flex flex-col gap-3 px-1">
        <p className="text-eyebrow">{project.category}</p>
        <h3 className="text-h3">
          <Link href={`/${locale}/projects/${project.slug}`} className="hover:text-ink">
            {project.title}
          </Link>
        </h3>
        <p className="text-body max-w-[46ch]">{project.summary}</p>
        <p className="text-ink text-[14px] font-medium">{project.stack}</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Button href={project.liveUrl} variant="secondary" external>
            {copy.explore}
          </Button>
          <Button href={`/${locale}/projects/${project.slug}`} variant="ghost">
            {copy.readStory}
          </Button>
        </div>
      </div>
    </article>
  );
}
