// /llms-full.txt: the full text of every service, area and guide in one file for AI assistants.
import { site } from '../data/site';
import { services } from '../data/services';
import { cities } from '../data/cities';
export function GET() {
  const posts = Object.values(import.meta.glob('./resources/*.md', { eager: true })) as any[];
  const svc = services.map((s) => `## ${s.name}
URL: ${site.url}/services/${s.slug}/
${s.emergency ? 'Available 24/7.\n' : ''}
${s.answer}

Signs: ${s.signs.join('; ')}.

How it works:
${s.steps.map((st, i) => `${i + 1}. ${st.name}: ${st.text}`).join('\n')}

Insurance: ${s.insurance}

${s.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}`).join('\n\n---\n\n');
  const areas = cities.map((c) => `## ${c.name}, MO (${c.county})
URL: ${site.url}/areas/${c.slug}/
ZIP codes: ${c.zips.join(', ')}. Nearby: ${c.nearby.join(', ')}.
${c.local}`).join('\n\n');
  const guides = posts.map((p) => `## ${p.frontmatter.title}
URL: ${site.url}${p.url.replace(/\/?$/, '/')}
${p.frontmatter.answer}`).join('\n\n');
  const body = `# ${site.name}: full reference

${site.name} is a locally owned roofing and property restoration company in St. Louis, Missouri, operating since ${site.foundedYear}. It answers 24/7 at ${site.phone} and is typically on-site within about ${site.responseHours} hours across ${site.serviceRegion}. Address: ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}. ${site.giveback}

# Services

${svc}

# Service areas

${areas}

# Guides

${guides}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
