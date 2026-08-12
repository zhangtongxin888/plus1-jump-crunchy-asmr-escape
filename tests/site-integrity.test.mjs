import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const source = (path) => readFile(new URL(path, root), "utf8");

test("ships all required guide pages and verified identifiers", async () => {
  const [home, beginner, progression, codes, faq, sources, content] = await Promise.all([
    source("app/page.tsx"),
    source("app/beginner-guide/page.tsx"),
    source("app/progression/page.tsx"),
    source("app/codes/page.tsx"),
    source("app/faq/page.tsx"),
    source("app/sources/page.tsx"),
    source("app/lib/content.ts"),
  ]);
  for (const text of ["THE CORE LOOP", "GUIDE HUB", "QUICK DIAGNOSIS", "FAST ANSWERS"]) assert.match(home, new RegExp(text));
  for (const text of ["COMMON MISTAKES", "Your first complete run"]) assert.match(beginner, new RegExp(text));
  assert.match(progression, /WORLD 2/);
  assert.match(codes, /No verified active codes/);
  assert.match(faq, /FAQPage/);
  for (const id of ["83264774625004", "10547918402"]) assert.match(`${sources}\n${content}`, new RegExp(id));
  assert.match(`${home}\n${sources}`, /Sky High Sims/);
  assert.doesNotMatch(`${home}\n${beginner}\n${progression}`, /active players|visits|rating/i);
});

test("ships SEO, social preview, artwork, and accessible navigation", async () => {
  const [page, shell, layout, css] = await Promise.all([source("app/page.tsx"), source("app/components/site-shell.tsx"), source("app/layout.tsx"), source("app/globals.css")]);
  await Promise.all(["app/robots.ts", "app/sitemap.ts", "app/manifest.ts", "public/og.png", "public/images/official-game-icon.png", "public/images/official-game-landscape.png", ".next/BUILD_ID"].map((path) => access(new URL(path, root))));
  assert.match(shell, /className="skip-link"/);
  assert.match(page, /Open the beginner guide/);
  assert.match(page, /href="\/beginner-guide\/"/);
  assert.doesNotMatch(page, /PRIORITY → MULTIPLIER|available multiplier/i);
  assert.match(layout, /https:\/\/plus1jumpcrunchyasmrescape\.wiki\/og\.png/);
  assert.match(css, /prefers-reduced-motion/);
});

test("redirects www to the canonical domain", async () => {
  const config = await source("next.config.ts");
  assert.match(config, /www\.plus1jumpcrunchyasmrescape\.wiki/);
  assert.match(config, /permanent: true/);
});
