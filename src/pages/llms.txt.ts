// /llms.txt: a plain-text summary for AI assistants (ChatGPT, Perplexity, Claude, Gemini).
import { site } from '../data/site';
import { services } from '../data/services';
import { cities, placeName } from '../data/cities';
export function GET() {
  const body = `# ${site.name}

> Locally owned roofing and property restoration company in St. Louis, Missouri, since ${site.foundedYear}. 24/7 emergency response, typically on-site in about ${site.responseHours} hours. Handles both roofing/exteriors and interior water, fire, sewage and mold damage, and works directly with insurance adjusters. ${site.giveback}

- Phone (24/7): ${site.phone}
- Address: ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}
- Service area: ${site.serviceRegion}
- Website: ${site.url}

## Services
${services.map((s) => `- [${s.name}](${site.url}/services/${s.slug}/): ${s.answer.split('. ')[0]}.`).join('\n')}

## Service areas
${cities.map((c) => `- [${placeName(c)}](${site.url}/areas/${c.slug}/) (${c.county})`).join('\n')}

## Guides
- [Insurance claims, explained](${site.url}/insurance-claims/)
- [What to do in the first hour after a burst pipe](${site.url}/resources/burst-pipe-first-hour/)
- [Does homeowners insurance cover hail damage in Missouri?](${site.url}/resources/does-insurance-cover-hail-damage-missouri/)
- [What affects the cost of water damage restoration?](${site.url}/resources/water-damage-restoration-cost/)
- [How to choose a restoration company](${site.url}/resources/choosing-a-restoration-company/)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
