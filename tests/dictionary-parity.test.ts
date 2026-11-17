import assert from "node:assert/strict";
import test from "node:test";
import { en } from "../src/i18n/dictionaries/en.ts";
import { ptBr } from "../src/i18n/dictionaries/pt-br.ts";

function assertParity(left: unknown, right: unknown, path = "dictionary") {
  if (typeof left === "string") {
    assert.equal(typeof right, "string", `${path} must be a string`);
    assert.ok(left.trim(), `${path} English value must not be empty`);
    assert.ok((right as string).trim(), `${path} Portuguese value must not be empty`);
    return;
  }

  if (Array.isArray(left)) {
    assert.ok(Array.isArray(right), `${path} must be an array`);
    assert.equal(right.length, left.length, `${path} must have matching entries`);
    left.forEach((item, index) => assertParity(item, right[index], `${path}[${index}]`));
    return;
  }

  if (left && typeof left === "object") {
    assert.ok(
      right && typeof right === "object" && !Array.isArray(right),
      `${path} must be an object`,
    );
    const leftKeys = Object.keys(left).sort();
    const rightKeys = Object.keys(right as object).sort();
    assert.deepEqual(rightKeys, leftKeys, `${path} must have identical keys`);
    for (const key of leftKeys) {
      assertParity(
        (left as Record<string, unknown>)[key],
        (right as Record<string, unknown>)[key],
        `${path}.${key}`,
      );
    }
  }
}

test("English and Portuguese dictionaries have complete non-empty parity", () => {
  assertParity(en, ptBr);
});

test("confirmed preview and external evidence URLs are unchanged across locales", () => {
  for (const dictionary of [en, ptBr]) {
    assert.equal(
      dictionary.projects.find((project) => project.slug === "neon-arsenal-market")
        ?.liveUrl,
      "https://neon.brunoalgumacoisa.com/",
    );
    assert.equal(
      dictionary.projects.find((project) => project.slug === "team-scrapbook")?.liveUrl,
      "https://scrapbook.brunoalgumacoisa.com/",
    );
  }

  assert.deepEqual(
    ptBr.projects.map((project) => project.evidence?.map((item) => item.href)),
    en.projects.map((project) => project.evidence?.map((item) => item.href)),
  );
  assert.deepEqual(
    ptBr.sideProjects.map((project) => project.href),
    en.sideProjects.map((project) => project.href),
  );
  assert.deepEqual(ptBr.site.social, en.site.social);
});
