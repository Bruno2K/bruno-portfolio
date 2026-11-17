import assert from "node:assert/strict";
import test from "node:test";
import {
  getLocaleFromPathname,
  localizePath,
  negotiateLocale,
  parseAcceptLanguage,
  serializeLocaleCookie,
} from "../src/i18n/routing.ts";

test("maps Portuguese browser preferences to pt-br", () => {
  assert.equal(negotiateLocale({ acceptLanguage: "pt-BR,pt;q=0.9,en;q=0.8" }), "pt-br");
});

test("maps English browser preferences to en", () => {
  assert.equal(negotiateLocale({ acceptLanguage: "en-US,en;q=0.8" }), "en");
});

test("honors q weights before header order", () => {
  assert.equal(negotiateLocale({ acceptLanguage: "en;q=0.5,pt-BR;q=0.9" }), "pt-br");
  assert.deepEqual(
    parseAcceptLanguage("en;q=0.5,pt-BR;q=0.9").map(({ language }) => language),
    ["pt-br", "en"],
  );
});

test("falls back to English for unsupported languages", () => {
  assert.equal(negotiateLocale({ acceptLanguage: "de-DE,fr;q=0.8" }), "en");
});

test("manual cookie wins over Accept-Language and invalid cookies are ignored", () => {
  assert.equal(negotiateLocale({ cookieLocale: "en", acceptLanguage: "pt-BR" }), "en");
  assert.equal(
    negotiateLocale({ cookieLocale: "invalid", acceptLanguage: "pt-BR" }),
    "pt-br",
  );
});

test("explicit URL locales are identified independently from preferences", () => {
  assert.equal(getLocaleFromPathname("/pt-br/projects"), "pt-br");
  assert.equal(getLocaleFromPathname("/en/contact"), "en");
  assert.equal(getLocaleFromPathname("/fr/projects"), undefined);
});

test("language switching preserves path, query, and fragment", () => {
  assert.equal(
    localizePath("pt-br", "/en/projects/team-scrapbook?source=nav#evidence"),
    "/pt-br/projects/team-scrapbook?source=nav#evidence",
  );
  assert.equal(localizePath("en", "/pt-br/side-projects"), "/en/side-projects");
});

test("manual preference cookie is persistent, site-wide, Lax, and Secure on HTTPS", () => {
  assert.equal(
    serializeLocaleCookie("pt-br", true),
    "NEXT_LOCALE=pt-br; Max-Age=31536000; Path=/; SameSite=Lax; Secure",
  );
  assert.equal(
    serializeLocaleCookie("en", false),
    "NEXT_LOCALE=en; Max-Age=31536000; Path=/; SameSite=Lax",
  );
});
