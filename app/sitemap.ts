import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-12");
  const pages = [
    ["", 1],
    ["/beginner-guide/", 0.95],
    ["/progression/", 0.85],
    ["/codes/", 0.7],
    ["/faq/", 0.8],
    ["/sources/", 0.55],
  ] as const;

  return pages.map(([path, priority]) => ({
    url: `https://plus1jumpcrunchyasmrescape.wiki${path || "/"}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority,
  }));
}
