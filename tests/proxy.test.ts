import assert from "node:assert/strict";
import test from "node:test";
import { NextRequest } from "next/server.js";
import { proxy } from "../src/proxy.ts";

function request(path: string, headers?: HeadersInit) {
  return new NextRequest(`https://portfolio.example${path}`, { headers });
}

test("redirects legacy paths using Accept-Language and preserves query strings", () => {
  const response = proxy(
    request("/projects?source=legacy", { "accept-language": "pt-BR,pt;q=0.9" }),
  );
  assert.equal(response.status, 307);
  assert.equal(
    response.headers.get("location"),
    "https://portfolio.example/pt-br/projects?source=legacy",
  );
});

test("manual cookie wins over browser language", () => {
  const response = proxy(
    request("/contact", {
      "accept-language": "pt-BR",
      cookie: "NEXT_LOCALE=en",
    }),
  );
  assert.equal(response.headers.get("location"), "https://portfolio.example/en/contact");
});

test("explicit localized routes are not redirected", () => {
  const response = proxy(
    request("/pt-br/projects/team-scrapbook", {
      "accept-language": "en-US",
      cookie: "NEXT_LOCALE=en",
    }),
  );
  assert.equal(response.headers.get("location"), null);
  assert.equal(response.headers.get("x-middleware-next"), "1");
});

test("unsupported locale-like segments are left for the router to reject", () => {
  const response = proxy(request("/fr/projects"));
  assert.equal(response.headers.get("location"), null);
  assert.equal(response.headers.get("x-middleware-next"), "1");
});
