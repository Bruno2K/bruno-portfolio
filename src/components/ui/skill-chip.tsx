export function SkillChip({ label }: { label: string }) {
  return (
    <li className="rounded-chip border-line bg-surface text-ink border px-4 py-2 text-[14px] font-medium">
      {label}
    </li>
  );
}
