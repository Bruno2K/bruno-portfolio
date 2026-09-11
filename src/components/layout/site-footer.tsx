import { footerNav, site } from "@/content/site";
import { Container } from "@/components/layout/container";

export function SiteFooter() {
  return (
    <footer className="border-line bg-canvas border-t pt-10 pb-[130px] max-[809px]:pt-8 max-[809px]:pb-20">
      <Container className="mid:grid-cols-4 grid gap-12">
        <div className="mid:col-span-2 flex max-w-[320px] flex-col gap-4">
          <p className="text-body">{site.footerBlurb}</p>
          <p className="text-eyebrow">{site.location}</p>
        </div>
        <div>
          <p className="text-eyebrow mb-5">Navigation</p>
          <ul className="flex flex-col gap-3">
            {footerNav.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-eyebrow mb-5">Social</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a href={site.social.github} className="nav-link" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={site.social.linkedin} className="nav-link" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="mt-16">
        <p className="text-muted-2 text-[13px]">© 2026 Bruno Ferreira. All rights reserved.</p>
      </Container>
    </footer>
  );
}
