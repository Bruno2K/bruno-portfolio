import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { SideProjects } from "@/components/sections/side-projects";
import { Stack } from "@/components/sections/stack";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedBy } from "@/components/sections/trusted-by";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TrustedBy />
      <About />
      <Stack />
      <Experience />
      <SelectedWork />
      <SideProjects />
      <Testimonials />
      <Faq />
    </main>
  );
}
