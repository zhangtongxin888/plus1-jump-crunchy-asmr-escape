import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const source = (path) => readFile(new URL(path, root), "utf8");

test("ships all required beginner content and verified identifiers", async () => {
  const page = await source("app/page.tsx");
  for (const text of ["QUICK START", "CORE GAMEPLAY LOOP", "GET UNSTUCK", "COMMON MISTAKES", "FAQ", "SOURCE DESK"]) assert.match(page, new RegExp(text));
  for (const id of ["83264774625004", "10547918402"]) assert.match(page, new RegExp(id));
  assert.match(page, /Sky High Sims/);
  assert.doesNotMatch(page, /active players|visits|rating/i);
});

test("ships SEO, social preview, artwork, and accessible navigation", async () => {
  const [page, layout, css] = await Promise.all([source("app/page.tsx"), source("app/layout.tsx"), source("app/globals.css")]);
  await Promise.all(["app/robots.ts", "app/sitemap.ts", "app/manifest.ts", "public/og.png", "public/images/official-game-icon.png", "public/images/official-game-landscape.png", ".next/BUILD_ID"].map((path) => access(new URL(path, root))));
  assert.match(page, /className="skip-link"/);
  assert.match(page, /FAQPage/);
  assert.match(page, /Start step 1: build Jump/);
  assert.doesNotMatch(page, /PRIORITY → MULTIPLIER|available multiplier/i);
  assert.match(layout, /https:\/\/plus1jumpcrunchyasmrescape\.wiki\/og\.png/);
  assert.match(css, /prefers-reduced-motion/);
});

test("redirects www to the canonical domain", async () => {
  const config = await source("next.config.ts");
  assert.match(config, /www\.plus1jumpcrunchyasmrescape\.wiki/);
  assert.match(config, /permanent: true/);
});
