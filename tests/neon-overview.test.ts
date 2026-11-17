import assert from "node:assert/strict";
import test from "node:test";
import { en } from "../src/i18n/dictionaries/en.ts";
import { ptBr } from "../src/i18n/dictionaries/pt-br.ts";

const expectedEvidenceUrls = [
  "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/domain/invariants.md#inv-listing-exclusive-reserve",
  "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/adr/0002-paypal-webhook-reliability.md",
  "https://github.com/Bruno2K/neon-arsenal-market/blob/main/docs/performance/load-test-report-2026-09-10-catalog.md",
];

test("Neon overview is complete and equivalent in both locales", () => {
  for (const dictionary of [en, ptBr]) {
    const overview = dictionary.neonDossier.overview90;

    assert.equal(overview.sections.length, 4);
    assert.equal(overview.decisions.items.length, 3);
    assert.deepEqual(
      overview.evidence.items.map((item) => item.href),
      expectedEvidenceUrls,
    );
    assert.match(overview.limits.body, /150 RPS/);

    // The quick review is additive: the detailed dossier remains populated.
    assert.ok(dictionary.neonDossier.guarantees.length >= 6);
    assert.ok(dictionary.neonDossier.reviewerProof.length >= 5);
    assert.ok(dictionary.neonDossier.evidenceGroups.length >= 4);
  }
});

test("header navigation has one localized contact entry point", () => {
  for (const dictionary of [en, ptBr]) {
    assert.equal(
      dictionary.nav.some((item) => item.href === "/contact"),
      false,
    );
    assert.ok(dictionary.ui.header.contact);
    assert.equal(
      dictionary.footerNav.some((item) => item.href === "/contact"),
      true,
    );
  }
});
