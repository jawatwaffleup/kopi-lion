import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KOPI LION",
    short_name: "KOPI LION",
    description: "Tradition, brewed precisely.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1ea",
    theme_color: "#ef3340",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
