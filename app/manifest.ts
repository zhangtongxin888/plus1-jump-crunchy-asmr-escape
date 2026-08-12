import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "+1 Jump Crunchy ASMR Escape Wiki",
    short_name: "Jump Crunchy Guide",
    description: "A source-checked beginner guide for +1 Jump Crunchy ASMR Escape.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff7e8",
    theme_color: "#122337",
    icons: [{ src: "/images/official-game-icon.png", sizes: "512x512", type: "image/png" }],
  };
}
