import Link from "next/link";
import type { Project } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-5">
      <Link
        href={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-[var(--radius-card)]"
      >
        <div className="overflow-hidden rounded-[var(--radius-card)]">
          <div className="transition-transform duration-500 ease-[var(--ease-standard)] group-hover:scale-[1.04]">
            <MediaPlaceholder
              title={project.title}
              category={project.category}
              accent={project.accent}
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
        <span className="sr-only">Read the story of {project.title}</span>
      </Link>
      <div className="flex flex-col gap-3 px-1">
        <p className="text-eyebrow">{project.category}</p>
        <h3 className="text-h3">
          <Link href={`/projects/${project.slug}`} className="hover:text-ink">
            {project.title}
          </Link>
        </h3>
        <p className="text-body max-w-[46ch]">{project.summary}</p>
        <p className="text-ink text-[14px] font-medium">{project.stack}</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Button href={project.liveUrl} variant="secondary" external>
            Explore Project
          </Button>
          <Button href={`/projects/${project.slug}`} variant="ghost">
            Read the Story
          </Button>
        </div>
      </div>
    </article>
  );
}
