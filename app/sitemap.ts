import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/what-is-kopi", "/our-roast", "/menu", "/locations", "/franchise"];
  return routes.map((route) => ({
    url: `https://kopilion.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
