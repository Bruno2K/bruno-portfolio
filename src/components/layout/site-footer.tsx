import Link from "next/link";
import { Container } from "@/components/layout/container";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/routing";
import type { Dictionary } from "@/i18n/types";

type SiteFooterProps = {
  locale: Locale;
  site: Dictionary["site"];
  footerNav: Dictionary["footerNav"];
  copy: Dictionary["ui"]["footer"];
};

export function SiteFooter({ locale, site, footerNav, copy }: SiteFooterProps) {
  return (
    <footer className="border-line bg-canvas border-t pt-10 pb-[130px] max-[809px]:pt-8 max-[809px]:pb-20">
      <Container className="mid:grid-cols-4 grid gap-12">
        <div className="mid:col-span-2 flex max-w-[320px] flex-col gap-4">
          <p className="text-body">{site.footerBlurb}</p>
          <p className="text-eyebrow">{site.location}</p>
        </div>
        <div>
          <p className="text-eyebrow mb-5">{copy.navigation}</p>
          <ul className="flex flex-col gap-3">
            {footerNav.map((item) => (
              <li key={item.label}>
                <Link href={localizePath(locale, item.href)} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-eyebrow mb-5">{copy.contact}</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a href={`mailto:${site.contactEmail}`} className="nav-link">
                {copy.email}
              </a>
            </li>
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
        <p className="text-muted-2 text-[13px]">{copy.copyright}</p>
      </Container>
    </footer>
  );
}
