import type { SideProject } from "@/content/side-projects";

export function SideProjectItem({ project }: { project: SideProject }) {
  return (
    <article className="border-line flex flex-col gap-4 border-t py-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-h4">
          <a href={`/side-projects/${project.slug}`} className="hover:text-ink">
            {project.title}
          </a>
        </h3>
      </div>
      <p className="text-body">{project.description}</p>
      <p className="text-ink text-[14px] font-medium">{project.tech}</p>
      <div className="flex gap-5 text-[14px] font-medium">
        <a
          href={project.github}
          className="text-muted hover:text-ink"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            className="text-muted hover:text-ink"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
