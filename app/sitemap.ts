import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/seo";

const routes = [
  "/",
  "/about",
  "/services/glp-3-peptides",
  "/services/body-composition",
  "/services/skin-tightening",
  "/services/pain-management",
  "/products",
  "/contact",
  "/free-scan",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/free-scan" || path === "/contact"
          ? 0.9
          : 0.8,
  }));
}
