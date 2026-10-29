import { site } from '../data/site';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export function GET() {
  const posts = Object.values(import.meta.glob('./resources/*.md', { eager: true })) as any[];
  const items = posts.map((p) => `<item><title>${esc(p.frontmatter.title)}</title><link>${site.url}${p.url.replace(/\/?$/, '/')}</link><guid>${site.url}${p.url.replace(/\/?$/, '/')}</guid><pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate><description>${esc(p.frontmatter.answer)}</description></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(site.name)} homeowner guides</title><link>${site.url}/resources/</link><description>Water damage, storm and insurance guides for St. Louis homeowners.</description>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
