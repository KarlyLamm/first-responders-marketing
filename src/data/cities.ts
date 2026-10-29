export type City = {
  slug: string;
  name: string;
  county: string;
  zips: string[];
  nearby: string[];
  local: string; // a city-specific paragraph so each page is genuinely useful, not a template swap
  lake?: boolean;
};

// CONFIRM: owner to confirm every city below is actually served, and add a
// recent job, photo and review from each city as they come in (see README).
export const cities: City[] = [
  {
    slug: 'st-louis', name: 'St. Louis', county: 'St. Louis City',
    zips: ['63104', '63109', '63110', '63116', '63139'],
    nearby: ['Soulard', 'Tower Grove', 'South City', 'Central West End', 'The Hill'],
    local: 'Much of the city is brick homes built before 1940, with original slate or older layered roofs, deep stone or brick foundations and basements that take on water in heavy rain. Old galvanized and cast-iron plumbing is a common source of sudden leaks.',
  },
  {
    slug: 'maryland-heights', name: 'Maryland Heights', county: 'St. Louis County',
    zips: ['63043', '63146'],
    nearby: ['Westport', 'Creve Coeur', 'Bridgeton', 'Overland'],
    local: 'Our shop is on Lackland Road, minutes from Maryland Heights. That makes it one of the fastest places we reach, for homes, apartment communities and the offices and warehouses around Westport and the Page Avenue corridor.',
  },
  {
    slug: 'creve-coeur', name: 'Creve Coeur', county: 'St. Louis County',
    zips: ['63141', '63146'],
    nearby: ['Olivette', 'Town and Country', 'Maryland Heights', 'Ladue'],
    local: 'Creve Coeur has a mix of 1960s and 1970s ranch and two-story homes, many with finished basements, plus medical and office buildings along Olive Boulevard and New Ballas.',
  },
  {
    slug: 'chesterfield', name: 'Chesterfield', county: 'St. Louis County',
    zips: ['63005', '63017'],
    nearby: ['Wildwood', 'Ballwin', 'Town and Country', 'Clarkson Valley'],
    local: 'Chesterfield ranges from larger homes with complex rooflines on the hills to businesses in Chesterfield Valley, which sits in the Missouri River floodplain. Big, multi-slope roofs take a beating in hail, and valley properties need fast water response.',
  },
  {
    slug: 'town-and-country', name: 'Town and Country', county: 'St. Louis County',
    zips: ['63017', '63131'],
    nearby: ['Chesterfield', 'Des Peres', 'Frontenac', 'Creve Coeur'],
    local: 'Large homes on wooded lots mean more roof area, more valleys and more trees over the house. Fallen limbs and storm debris are a common cause of emergency roof calls here.',
  },
  {
    slug: 'ladue', name: 'Ladue', county: 'St. Louis County',
    zips: ['63124'],
    nearby: ['Frontenac', 'Clayton', 'Olivette', 'Richmond Heights'],
    local: 'Ladue has many older, high-value homes, some with slate, tile or cedar roofs and plaster walls. These need careful repair and drying methods so original materials are saved where possible.',
  },
  {
    slug: 'kirkwood', name: 'Kirkwood', county: 'St. Louis County',
    zips: ['63122'],
    nearby: ['Webster Groves', 'Glendale', 'Sunset Hills', 'Des Peres'],
    local: 'Kirkwood’s historic homes and mature tree canopy are part of its charm, and also why storm damage and older plumbing leaks are frequent calls here.',
  },
  {
    slug: 'ballwin', name: 'Ballwin', county: 'St. Louis County',
    zips: ['63011', '63021'],
    nearby: ['Manchester', 'Ellisville', 'Wildwood', 'Chesterfield'],
    local: 'Ballwin is full of 1970s to 1990s subdivisions, many reaching the age where original roofs, water heaters and supply lines start to fail.',
  },
  {
    slug: 'florissant', name: 'Florissant', county: 'St. Louis County',
    zips: ['63031', '63033', '63034'],
    nearby: ['Hazelwood', 'Black Jack', 'Ferguson', 'Spanish Lake'],
    local: 'Florissant has thousands of mid-century brick ranch homes with full basements. Basement water from heavy rain, sump failures and sewer backups is one of the most common calls we get in North County.',
  },
  {
    slug: 'st-charles', name: 'St. Charles', county: 'St. Charles County',
    zips: ['63301', '63303', '63304'],
    nearby: ['St. Peters', 'Harvester', 'Cottleville', 'Weldon Spring'],
    local: 'From historic homes near Main Street to newer subdivisions off Highway 94, St. Charles sees regular hail and wind damage, and properties near the Missouri River need fast water response in heavy rain.',
  },
  {
    slug: 'st-peters', name: 'St. Peters', county: 'St. Charles County',
    zips: ['63376'],
    nearby: ['St. Charles', "O'Fallon", 'Cottleville', 'Dardenne Prairie'],
    local: 'St. Peters sits squarely in the path of the spring hail and wind storms that cross St. Charles County. Asphalt shingle roofs here are frequently damaged and often qualify for an insurance replacement.',
  },
  {
    slug: 'ofallon', name: "O'Fallon", county: 'St. Charles County',
    zips: ['63366', '63368'],
    nearby: ['St. Peters', 'Lake Saint Louis', 'Dardenne Prairie', 'Wentzville'],
    local: "O'Fallon grew quickly over the last 25 years, so many of its homes were built in the same era. Those roofs and plumbing systems are now reaching the age where storm damage and supply line failures add up.",
  },
  {
    slug: 'lake-saint-louis', name: 'Lake Saint Louis', county: 'St. Charles County',
    zips: ['63367'],
    nearby: ["O'Fallon", 'Wentzville', 'Dardenne Prairie'],
    local: 'Lakefront and wooded lots bring wind exposure and falling limbs, and many homes have walkout basements that need quick drying after a leak or heavy rain.',
  },
  {
    slug: 'wentzville', name: 'Wentzville', county: 'St. Charles County',
    zips: ['63385'],
    nearby: ['Lake Saint Louis', "O'Fallon", 'Foristell', 'Troy'],
    local: 'Wentzville’s newer subdivisions sit on open ground where wind and hail hit roofs and siding hard. We inspect and repair storm damage throughout western St. Charles County.',
  },
  {
    slug: 'osage-beach', name: 'Osage Beach', county: 'Camden County',
    zips: ['65065'],
    nearby: ['Lake Ozark', 'Camdenton', 'Sunrise Beach', 'Village of Four Seasons'],
    local: 'At the Lake of the Ozarks, many homes are second homes, so a leak can run for days before anyone notices. We handle water damage, storm repairs and roofing for lake homeowners and property managers.',
    lake: true,
  },
];

export const cityBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]));
