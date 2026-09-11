import { Container } from "@/components/layout/container";
import { LogoTicker } from "@/components/ui/logo-ticker";

export function TrustedBy() {
  return (
    <section className="py-12 max-[809px]:py-10">
      <Container className="flex flex-col items-center gap-8">
        <p className="text-eyebrow text-center">Core stack & systems I work with</p>
        <LogoTicker />
      </Container>
    </section>
  );
}
