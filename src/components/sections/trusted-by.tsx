import { Container } from "@/components/layout/container";
import { LogoTicker } from "@/components/ui/logo-ticker";
import type { Dictionary } from "@/i18n/types";

export function TrustedBy({
  items,
  label,
  accessibleLabel,
}: {
  items: Dictionary["trustedBy"];
  label: string;
  accessibleLabel: string;
}) {
  return (
    <section className="py-12 max-[809px]:py-10">
      <Container className="flex flex-col items-center gap-8">
        <p className="text-eyebrow text-center">{label}</p>
        <LogoTicker items={items} accessibleLabel={accessibleLabel} />
      </Container>
    </section>
  );
}
