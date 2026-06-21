import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/portfolio";

// Single-page site: one canonical URL. Section anchors (#about, #projects, …)
// are not separate documents, so they are intentionally not listed.
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
