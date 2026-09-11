import type { Role } from "@/content/experience";

export function ExperienceItem({ role }: { role: Role }) {
  return (
    <article className="border-line mid:grid-cols-[200px_1fr] mid:gap-10 wide:grid-cols-[240px_1fr_220px] grid gap-4 border-b py-8">
      <p className="text-eyebrow pt-1">{role.dates}</p>
      <div className="flex flex-col gap-3">
        <h3 className="text-h4">
          {role.title}
          <span className="text-muted"> — {role.company}</span>
        </h3>
        <p className="text-body max-w-[52ch]">{role.summary}</p>
        <p className="text-ink mid:hidden text-[14px] font-medium">{role.stack}</p>
      </div>
      <p className="text-ink wide:block hidden self-start pt-1 text-right text-[14px] font-medium">
        {role.stack}
      </p>
    </article>
  );
}
