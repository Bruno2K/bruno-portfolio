import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { geist, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found · Bruno Ferreira",
  description: "The requested page does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <main id="main" className="flex min-h-screen items-center">
          <Container className="flex max-w-[640px] flex-col gap-6 py-24">
            <p className="text-eyebrow">Oops</p>
            <h1 className="text-display">The link may be broken.</h1>
            <p className="text-lead">
              The page may have moved. Let’s get you back on track.
            </p>
            <div>
              <Button href="/">Back to home</Button>
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}
