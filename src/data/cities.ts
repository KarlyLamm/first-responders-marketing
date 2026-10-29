export type Region = 'stl' | 'gulf' | 'coast';
export type City = {
  slug: string;
  name: string;
  state: 'MO' | 'IL' | 'LA' | 'NC';
  county: string; // county or parish
  region: Region;
  zips: string[];
  nearby: string[];
  local: string; // city-specific paragraph so each page is genuinely useful, not a template swap
};

// Service footprint confirmed by the owner (Oct 2026):
// St. Louis, MO · St. Louis County, MO · Jefferson County, MO · Madison County, IL ·
// St. Clair County, IL · Lake Charles, LA · Calcasieu Parish, LA · Carolina Beach, NC
export const regions: Record<Region, { name: string; blurb: string }> = {
  stl: {
    name: 'St. Louis metro',
    blurb: 'Dispatched 24/7 from our shop on Lackland Road in St. Louis County, on both sides of the river.',
  },
  gulf: {
    name: 'Southwest Louisiana',
    blurb: 'Storm, hurricane and water damage response for Lake Charles and Calcasieu Parish.',
  },
  coast: {
    name: 'North Carolina coast',
    blurb: 'Hurricane, wind and water damage response for Carolina Beach and Pleasure Island.',
  },
};

export const stateNames = { MO: 'Missouri', IL: 'Illinois', LA: 'Louisiana', NC: 'North Carolina' } as const;

export const cities: City[] = [
  // St. Louis City
  {
    slug: 'st-louis', name: 'St. Louis', state: 'MO', county: 'St. Louis City', region: 'stl',
    zips: ['63104', '63109', '63110', '63116', '63139'],
    nearby: ['Soulard', 'Tower Grove', 'South City', 'Central West End', 'The Hill'],
    local: 'Much of the city is brick homes built before 1940, with original slate or older layered roofs, deep stone or brick foundations and basements that take on water in heavy rain. Old galvanized and cast-iron plumbing is a common source of sudden leaks.',
  },
  // St. Louis County, MO
  {
    slug: 'maryland-heights', name: 'Maryland Heights', state: 'MO', county: 'St. Louis County', region: 'stl',
    zips: ['63043', '63146'],
    nearby: ['Westport', 'Creve Coeur', 'Bridgeton', 'Overland'],
    local: 'Our shop is on Lackland Road, minutes from Maryland Heights. That makes it one of the fastest places we reach, for homes, apartment communities and the offices and warehouses around Westport and the Page Avenue corridor.',
  },
  {
    slug: 'creve-coeur', name: 'Creve Coeur', state: 'MO', county: 'St. Louis County', region: 'stl',
    zips: ['63141', '63146'],
    nearby: ['Olivette', 'Town and Country', 'Maryland Heights', 'Ladue'],
    local: 'Creve Coeur has a mix of 1960s and 1970s ranch and two-story homes, many with finished basements, plus medical and office buildings along Olive Boulevard and New Ballas.',
  },
  {
    slug: 'chesterfield', name: 'Chesterfield', state: 'MO', county: 'St. Louis County', region: 'stl',
    zips: ['63005', '63017'],
    nearby: ['Wildwood', 'Ballwin', 'Town and Country', 'Clarkson Valley'],
    local: 'Chesterfield ranges from larger homes with complex rooflines on the hills to businesses in Chesterfield Valley, which sits in the Missouri River floodplain. Big, multi-slope roofs take a beating in hail, and valley properties need fast water response.',
  },
  {
    slug: 'town-and-country', name: 'Town and Country', state: 'MO', county: 'St. Louis County', region: 'stl',
    zips: ['63017', '63131'],
    nearby: ['Chesterfield', 'Des Peres', 'Frontenac', 'Creve Coeur'],
    local: 'Large homes on wooded lots mean more roof area, more valleys and more trees over the house. Fallen limbs and storm debris are a common cause of emergency roof calls here.',
  },
  {
    slug: 'ladue', name: 'Ladue', state: 'MO', county: 'St. Louis County', region: 'stl',
    zips: ['63124'],
    nearby: ['Frontenac', 'Clayton', 'Olivette', 'Richmond Heights'],
    local: 'Ladue has many older, high-value homes, some with slate, tile or cedar roofs and plaster walls. These need careful repair and drying methods so original materials are saved where possible.',
  },
  {
    slug: 'kirkwood', name: 'Kirkwood', state: 'MO', county: 'St. Louis County', region: 'stl',
    zips: ['63122'],
    nearby: ['Webster Groves', 'Glendale', 'Sunset Hills', 'Des Peres'],
    local: 'Kirkwood’s historic homes and mature tree canopy are part of its charm, and also why storm damage and older plumbing leaks are frequent calls here.',
  },
  {
    slug: 'ballwin', name: 'Ballwin', state: 'MO', county: 'St. Louis County', region: 'stl',
    zips: ['63011', '63021'],
    nearby: ['Manchester', 'Ellisville', 'Wildwood', 'Chesterfield'],
    local: 'Ballwin is full of 1970s to 1990s subdivisions, many reaching the age where original roofs, water heaters and supply lines start to fail.',
  },
  {
    slug: 'florissant', name: 'Florissant', state: 'MO', county: 'St. Louis County', region: 'stl',
    zips: ['63031', '63033', '63034'],
    nearby: ['Hazelwood', 'Black Jack', 'Ferguson', 'Spanish Lake'],
    local: 'Florissant has thousands of mid-century brick ranch homes with full basements. Basement water from heavy rain, sump failures and sewer backups is one of the most common calls we get in North County.',
  },
  // Jefferson County, MO
  {
    slug: 'arnold', name: 'Arnold', state: 'MO', county: 'Jefferson County', region: 'stl',
    zips: ['63010'],
    nearby: ['Imperial', 'Fenton', 'Barnhart', 'Oakville'],
    local: 'Arnold sits where the Meramec meets the Mississippi, and low-lying neighborhoods here know river flooding well. Away from the river, the subdivisions off Jeffco Boulevard see the same hail, wind and basement water as the rest of the metro.',
  },
  {
    slug: 'imperial', name: 'Imperial', state: 'MO', county: 'Jefferson County', region: 'stl',
    zips: ['63052'],
    nearby: ['Arnold', 'Barnhart', 'Kimmswick', 'Festus'],
    local: 'Imperial’s subdivisions grew fast in the 1990s and 2000s. Those roofs and water heaters are now at the age where storm damage and sudden leaks add up.',
  },
  {
    slug: 'festus', name: 'Festus', state: 'MO', county: 'Jefferson County', region: 'stl',
    zips: ['63028'],
    nearby: ['Crystal City', 'Herculaneum', 'Pevely', 'Hillsboro'],
    local: 'Festus and neighboring Crystal City have many older homes near downtown, where aging roofs and plumbing are common sources of water damage, plus newer homes on open lots exposed to wind.',
  },
  {
    slug: 'hillsboro', name: 'Hillsboro', state: 'MO', county: 'Jefferson County', region: 'stl',
    zips: ['63050'],
    nearby: ['De Soto', 'Festus', 'Victoria', 'Cedar Hill'],
    local: 'Hillsboro is the Jefferson County seat, with homes spread across rural and wooded lots. Wind, falling trees and well and pipe failures are the calls we see most.',
  },
  // Madison County, IL
  {
    slug: 'edwardsville', name: 'Edwardsville', state: 'IL', county: 'Madison County', region: 'stl',
    zips: ['62025'],
    nearby: ['Glen Carbon', 'Maryville', 'Collinsville', 'Granite City'],
    local: 'Edwardsville mixes historic homes near downtown with newer subdivisions around SIUE. Both see hail and wind damage from storms that cross the Metro East.',
  },
  {
    slug: 'alton', name: 'Alton', state: 'IL', county: 'Madison County', region: 'stl',
    zips: ['62002'],
    nearby: ['Godfrey', 'East Alton', 'Wood River', 'Bethalto'],
    local: 'Alton’s historic brick homes on the river bluffs often have older roofs, chimneys and plumbing. Riverfront properties need fast response when the Mississippi rises.',
  },
  {
    slug: 'granite-city', name: 'Granite City', state: 'IL', county: 'Madison County', region: 'stl',
    zips: ['62040'],
    nearby: ['Pontoon Beach', 'Madison', 'Mitchell', 'Edwardsville'],
    local: 'Granite City has many mid-century homes with basements, where heavy rain, sump pump failures and sewer backups are frequent sources of water damage.',
  },
  {
    slug: 'collinsville', name: 'Collinsville', state: 'IL', county: 'Madison County', region: 'stl',
    zips: ['62234'],
    nearby: ['Maryville', 'Caseyville', 'Fairview Heights', 'Edwardsville'],
    local: 'Collinsville’s hillside neighborhoods and older homes near Uptown face wind exposure and aging roofs, and lower areas take on water in heavy storms.',
  },
  // St. Clair County, IL
  {
    slug: 'belleville', name: 'Belleville', state: 'IL', county: 'St. Clair County', region: 'stl',
    zips: ['62220', '62221', '62226'],
    nearby: ['Swansea', 'Shiloh', 'Millstadt', 'Fairview Heights'],
    local: 'Belleville is one of the oldest cities in Illinois, with a large stock of historic brick homes. Original roofs, chimneys and old plumbing make storm and water damage common here.',
  },
  {
    slug: 'ofallon-il', name: "O'Fallon", state: 'IL', county: 'St. Clair County', region: 'stl',
    zips: ['62269'],
    nearby: ['Shiloh', 'Lebanon', 'Fairview Heights', 'Scott Air Force Base'],
    local: "O'Fallon, Illinois sits next to Scott Air Force Base and grew quickly with newer subdivisions. Those roofs are exposed to the hail and wind storms that cross the Metro East, and many military families here move on tight timelines.",
  },
  {
    slug: 'fairview-heights', name: 'Fairview Heights', state: 'IL', county: 'St. Clair County', region: 'stl',
    zips: ['62208'],
    nearby: ['Belleville', 'Swansea', 'Collinsville', "O'Fallon"],
    local: 'Fairview Heights has a busy retail corridor along Highway 159 and neighborhoods of 1960s to 1980s homes now reaching the age for roof replacement.',
  },
  // Calcasieu Parish, LA
  {
    slug: 'lake-charles', name: 'Lake Charles', state: 'LA', county: 'Calcasieu Parish', region: 'gulf',
    zips: ['70601', '70605', '70607', '70611'],
    nearby: ['Moss Bluff', 'Westlake', 'Sulphur', 'Prien Lake'],
    local: 'Hurricanes Laura and Delta hit Lake Charles back to back in 2020, and the region has been rebuilding roofs ever since. Hurricane season, heavy Gulf rain and high humidity mean wind damage, roof leaks and mold are constant risks.',
  },
  {
    slug: 'sulphur', name: 'Sulphur', state: 'LA', county: 'Calcasieu Parish', region: 'gulf',
    zips: ['70663', '70665'],
    nearby: ['Lake Charles', 'Westlake', 'Carlyss', 'Vinton'],
    local: 'Sulphur sits just west of Lake Charles and was hit by the same 2020 hurricanes. Wind-driven rain, roof damage and fast-growing mold in the Gulf humidity drive most calls here.',
  },
  // New Hanover County, NC
  {
    slug: 'carolina-beach', name: 'Carolina Beach', state: 'NC', county: 'New Hanover County', region: 'coast',
    zips: ['28428'],
    nearby: ['Kure Beach', 'Pleasure Island', 'Wilmington', 'Myrtle Grove'],
    local: 'On Pleasure Island, homes face hurricanes, nor’easters and constant salt air. Many are vacation rentals or second homes, so storm damage and leaks can go unnoticed until the next guest or owner arrives.',
  },
];

export const cityBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]));
export const placeName = (c: City) => `${c.name}, ${c.state}`;
export const countyName = (c: City) => `${c.county}, ${c.state}`;
