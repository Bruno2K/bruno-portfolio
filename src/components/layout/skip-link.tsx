export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main"
      className="bg-ink text-accent-ink focus:rounded-chip sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2"
    >
      {label}
    </a>
  );
}
