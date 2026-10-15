import type { MetadataRoute } from "next";
import { SITE } from "@/utils/site";
import { SOLUTION_PAGES } from "@/utils/solution-pages";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/nosotros", "/soluciones", "/cotizaciones", ...SOLUTION_PAGES.map((p) => `/soluciones/${p.slug}`)]
    .map((path) => ({ url: `${SITE.baseUrl}${path}` }));
}
