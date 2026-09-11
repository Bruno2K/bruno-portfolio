import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[70vh] items-center">
      <Container className="flex max-w-[640px] flex-col gap-6 py-24">
        <p className="text-eyebrow">Oops</p>
        <h1 className="text-display">The link may be broken.</h1>
        <p className="text-lead">The page may have moved. Let’s get you back on track.</p>
        <div>
          <Button href="/">Back to home</Button>
        </div>
      </Container>
    </main>
  );
}
