import type { MetadataRoute } from "next";
import { business } from "@/src/config/business";
export default function sitemap(): MetadataRoute.Sitemap {
  return business.canonical
    ? [{ url: business.canonical, changeFrequency: "monthly", priority: 1 }]
    : [];
}
