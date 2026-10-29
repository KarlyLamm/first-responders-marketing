import { site } from '../data/site';
import { allRoutes } from '../data/routes';
export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = allRoutes().map((r: any) => `<url><loc>${site.url}${r.path}</loc><lastmod>${r.lastmod ? new Date(r.lastmod).toISOString().slice(0, 10) : today}</lastmod><changefreq>${r.freq}</changefreq><priority>${r.priority.toFixed(1)}</priority></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
