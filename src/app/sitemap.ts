import { MetadataRoute } from "next";
import { CHARACTERS } from "@/data/characters";

const BASE = "https://frieren-site-theta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const characterUrls = CHARACTERS.map((c) => ({
    url: `${BASE}/characters/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/characters`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...characterUrls,
    { url: `${BASE}/magic`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/episodes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lore`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
