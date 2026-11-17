import type { SideProject } from "@/content/side-projects";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/routing";

export function SideProjectItem({
  project,
  locale,
}: {
  project: SideProject;
  locale: Locale;
}) {
  const external = project.href.startsWith("http");
  const href = external ? project.href : localizePath(locale, project.href);

  return (
    <article className="border-line flex flex-col gap-4 border-t py-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-h4">{project.title}</h3>
      </div>
      <p className="text-body">{project.description}</p>
      <p className="text-ink text-[14px] font-medium">{project.tech}</p>
      <div className="flex gap-5 text-[14px] font-medium">
        <a
          href={href}
          className="text-muted hover:text-ink"
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          {project.linkLabel}
        </a>
      </div>
    </article>
  );
}
