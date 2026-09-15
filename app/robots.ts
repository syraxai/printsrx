import type { MetadataRoute } from "next";
import { business } from "@/src/config/business";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(business.canonical ? { allow: "/" } : { disallow: "/" }),
    },
    ...(business.canonical
      ? { sitemap: new URL("/sitemap.xml", business.canonical).href }
      : {}),
  };
}
