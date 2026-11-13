import type { MetadataRoute } from "next";
import { navLinks, site } from "@/lib/site";
import { apps } from "@/lib/apps";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navLinks.map((l) => ({
      url: `${site.url}${l.href === "/" ? "" : l.href}`,
      changeFrequency: "monthly" as const,
      priority: l.href === "/" ? 1 : 0.8,
    })),
    ...apps.map((a) => ({ url: `${site.url}/apps/${a.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
