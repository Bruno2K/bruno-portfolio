import assert from "node:assert/strict";
import test from "node:test";
import { htmlLanguages } from "../src/i18n/config.ts";
import { en } from "../src/i18n/dictionaries/en.ts";

process.env.NEXT_PUBLIC_SITE_URL = "https://portfolio.example";

test("localized metadata uses self-canonicals and reciprocal language alternates", async () => {
  const { createLocalizedPageMetadata } = await import("../src/lib/metadata.ts");
  const metadata = createLocalizedPageMetadata({
    title: "Projects",
    description: "Inspectable engineering work.",
    path: "/projects",
    locale: "pt-br",
    siteName: "Bruno Ferreira",
    defaultTitle: "Bruno Ferreira — Engenheiro de Software Sênior",
  });

  assert.equal(
    metadata.alternates?.canonical,
    "https://portfolio.example/pt-br/projects",
  );
  assert.deepEqual(metadata.alternates?.languages, {
    en: "https://portfolio.example/en/projects",
    "pt-BR": "https://portfolio.example/pt-br/projects",
    "x-default": "https://portfolio.example/projects",
  });
  assert.equal(
    metadata.openGraph && "locale" in metadata.openGraph
      ? metadata.openGraph.locale
      : undefined,
    "pt_BR",
  );
});

test("localized sitemap contains both languages and reciprocal alternates", async () => {
  const { createLocalizedSitemap } = await import("../src/i18n/seo.ts");
  const entries = createLocalizedSitemap(["/", "/projects/neon-arsenal-market"]);

  assert.equal(entries.length, 4);
  assert.deepEqual(
    entries.map((entry) => entry.url),
    [
      "https://portfolio.example/en/",
      "https://portfolio.example/pt-br/",
      "https://portfolio.example/en/projects/neon-arsenal-market",
      "https://portfolio.example/pt-br/projects/neon-arsenal-market",
    ],
  );
  for (const entry of entries) {
    assert.ok(entry.alternates?.languages?.en);
    assert.ok(entry.alternates?.languages?.["pt-BR"]);
    assert.ok(entry.alternates?.languages?.["x-default"]);
  }
});

test("sitemap covers every public static and dynamic route in both languages", async () => {
  const { createLocalizedSitemap } = await import("../src/i18n/seo.ts");
  const paths = [
    "/",
    "/projects",
    "/side-projects",
    "/contact",
    ...en.projects.map((project) => `/projects/${project.slug}`),
    ...en.sideProjects.map((project) => `/side-projects/${project.slug}`),
  ];
  const entries = createLocalizedSitemap(paths);

  assert.equal(entries.length, paths.length * 2);
  for (const path of paths) {
    assert.ok(
      entries.some(
        (entry) =>
          entry.url === `https://portfolio.example/en${path === "/" ? "/" : path}`,
      ),
    );
    assert.ok(
      entries.some(
        (entry) =>
          entry.url === `https://portfolio.example/pt-br${path === "/" ? "/" : path}`,
      ),
    );
  }
});

test("HTML language values match the semantic locales", () => {
  assert.deepEqual(htmlLanguages, { en: "en", "pt-br": "pt-BR" });
});
