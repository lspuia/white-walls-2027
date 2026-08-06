import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/site";

/**
 * Only the two routes that actually exist behind the holding page. The retired
 * old-site routes redirect to `/` (see next.config.ts) and are deliberately
 * absent — listing redirects in a sitemap is a crawl-quality warning in Search
 * Console. They go back in when the redesigned pages ship.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
