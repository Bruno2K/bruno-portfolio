import { notFound } from "next/navigation";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { ProfessionalSystems } from "@/components/sections/professional-systems";
import { SelectedWork } from "@/components/sections/selected-work";
import { SideProjects } from "@/components/sections/side-projects";
import { Stack } from "@/components/sections/stack";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedBy } from "@/components/sections/trusted-by";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <main id="main">
      <Hero locale={locale} site={dictionary.site} copy={dictionary.ui.home} />
      <TrustedBy
        items={dictionary.trustedBy}
        label={dictionary.ui.home.trustedBy}
        accessibleLabel={dictionary.ui.home.trustedByAccessible}
      />
      <About about={dictionary.about} />
      <SelectedWork locale={locale} projects={dictionary.projects} copy={dictionary.ui} />
      <ProfessionalSystems
        systems={dictionary.professionalSystems}
        copy={dictionary.ui.home}
      />
      <Experience experience={dictionary.experience} copy={dictionary.ui.home} />
      <Stack groups={dictionary.stackGroups} copy={dictionary.ui.home} />
      <SideProjects
        locale={locale}
        projects={dictionary.sideProjects}
        copy={dictionary.ui.home}
      />
      <Testimonials
        items={dictionary.testimonials}
        label={dictionary.ui.home.principlesIndex}
      />
      <Faq faq={dictionary.faq} copy={dictionary.ui.home} />
    </main>
  );
}
