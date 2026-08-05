import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const previewRoot = new URL("../app/_sites-preview/", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Speedy Fingers marketing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Speedy Fingers/);
  assert.match(html, /Learn the letters/);
  assert.match(html, /Beat your best/);
  assert.match(html, /learning ASL or already sign/);
  assert.match(html, /Coming soon to the/);
  assert.match(html, /See how to play/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("ships final metadata, legal routes, and removes the starter preview", async () => {
  const [page, layout, packageJson, privacy, terms, support] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/privacy/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/terms/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/support/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /export const metadata:\s*Metadata/);
  assert.match(layout, /Speedy Fingers/);
  assert.match(layout, /og\.png/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(privacy, /Privacy policy/);
  assert.match(terms, /Terms of use/);
  assert.match(support, /SupportPage/);
  await assert.rejects(access(previewRoot));
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/speedyfingers-bg.svg", import.meta.url));
});
