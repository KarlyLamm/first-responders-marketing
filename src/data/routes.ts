import { services, cityServiceSlugs } from './services';
import { cities, placeName } from './cities';
// Every indexable URL, with priority hints. Used by sitemap.xml and the HTML sitemap.
export function allRoutes() {
  const posts = Object.values(import.meta.glob('../pages/resources/*.md', { eager: true })) as any[];
  return [
    { path: '/', name: 'Home', priority: 1.0, freq: 'weekly' },
    { path: '/emergency/', name: 'Emergency', priority: 0.9, freq: 'monthly' },
    { path: '/services/', name: 'Services', priority: 0.8, freq: 'monthly' },
    ...services.map((s) => ({ path: `/services/${s.slug}/`, name: s.name, priority: 0.9, freq: 'monthly' })),
    { path: '/areas/', name: 'Service areas', priority: 0.8, freq: 'monthly' },
    ...cities.map((c) => ({ path: `/areas/${c.slug}/`, name: placeName(c), priority: 0.8, freq: 'monthly' })),
    ...cities.flatMap((c) => services.filter((s) => cityServiceSlugs.includes(s.slug)).map((s) => ({ path: `/areas/${c.slug}/${s.slug}/`, name: `${s.name} in ${c.name}`, priority: 0.7, freq: 'monthly' }))),
    { path: '/insurance-claims/', name: 'Insurance claims', priority: 0.8, freq: 'monthly' },
    { path: '/first-responders/', name: 'First responder program', priority: 0.6, freq: 'monthly' },
    { path: '/reviews/', name: 'Reviews', priority: 0.6, freq: 'weekly' },
    { path: '/about/', name: 'About', priority: 0.5, freq: 'yearly' },
    { path: '/contact/', name: 'Contact', priority: 0.6, freq: 'yearly' },
    { path: '/resources/', name: 'Homeowner guides', priority: 0.6, freq: 'weekly' },
    ...posts.map((p) => ({ path: p.url.replace(/\/?$/, '/'), name: p.frontmatter.title, priority: 0.6, freq: 'monthly', lastmod: p.frontmatter.updated || p.frontmatter.date })),
    { path: '/sitemap/', name: 'Site map', priority: 0.3, freq: 'monthly' },
  ];
}
