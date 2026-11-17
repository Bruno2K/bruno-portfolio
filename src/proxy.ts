import { NextResponse, type NextRequest } from "next/server.js";
import { isLocale, localeCookieName } from "./i18n/config.ts";
import {
  getLocaleFromPathname,
  looksLikeLocaleSegment,
  negotiateLocale,
} from "./i18n/routing.ts";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const explicitLocale = getLocaleFromPathname(pathname);

  if (explicitLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-portfolio-locale", explicitLocale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  if (looksLikeLocaleSegment(pathname)) {
    return NextResponse.next();
  }

  const cookieValue = request.cookies.get(localeCookieName)?.value;
  const locale = negotiateLocale({
    cookieLocale: isLocale(cookieValue) ? cookieValue : undefined,
    acceptLanguage: request.headers.get("accept-language"),
  });
  const destination = request.nextUrl.clone();
  destination.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(destination);
}

export const config = {
  matcher: ["/((?!_next|api|sitemap.xml|robots.txt|favicon.ico|icon|.*\\..*).*)"],
};
