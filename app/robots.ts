import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://plus1jumpcrunchyasmrescape.wiki/sitemap.xml" };
}
