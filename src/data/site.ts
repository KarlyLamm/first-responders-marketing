// Single source of truth for business facts (NAP). Every listing on the web
// (Google Business Profile, BBB, Yelp, Angi, HomeAdvisor, GuildQuality, Birdeye)
// must match these values exactly.
//
// Values marked CONFIRM came from public listings and must be verified with
// the owner before launch. Values set to null are hidden on the site until filled.

export const site = {
  name: 'First Responders Roofing & Restoration',
  shortName: 'First Responders',
  legalName: 'First Responders Roofing and Restoration LLC',
  url: 'https://firstrespondersrestoration.us',
  phone: '(314) 644-8800',
  phoneHref: 'tel:+13146448800',
  sms: '(314) 943-6606', // CONFIRM: listed on BBB as SMS line
  smsHref: 'sms:+13149436606',
  email: null as string | null, // CONFIRM: add office email
  address: {
    street: '11785 Lackland Rd',
    city: 'St. Louis',
    region: 'MO',
    postal: '63146',
    country: 'US',
  },
  geo: { lat: 38.6967, lng: -90.4387 }, // CONFIRM: drop pin from Google Business Profile
  foundedYear: 2016, // BBB: business started 5/9/2016
  owner: 'Jeffrey Lamm',
  manager: 'Marissa Goldsmith',
  responseHours: 2, // public listings: "we respond to emergency calls within two hours"
  serviceRegion: 'St. Louis, St. Louis County and Jefferson County, Missouri; Madison and St. Clair counties, Illinois; Lake Charles and Calcasieu Parish, Louisiana; and Carolina Beach, North Carolina',
  // Credentials: only shown when filled in. Do not list anything not actually held.
  credentials: [] as { name: string; detail: string }[],
  // e.g. { name: 'IICRC Certified Firm', detail: 'Water Damage Restoration (WRT), Applied Structural Drying (ASD)' }
  // e.g. { name: 'GAF Certified Contractor', detail: 'Eligible for GAF System Plus warranty' }
  responderOffer: null as string | null,
  // CONFIRM with owner, e.g. 'Active and retired police, fire and EMS get 10% off labor'
  giveback: 'A portion of every project goes back to St. Louis law enforcement.', // CONFIRM exact wording/amount
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    yelp: 'https://www.yelp.com/biz/first-responders-roofing-st-louis',
    bbb: 'https://www.bbb.org/us/mo/saint-louis/profile/general-contractor/first-responders-roofing-and-restoration-0734-1000017184',
    angi: 'https://www.angi.com/companylist/us/mo/saint-louis/first-responders-restoration-llc-reviews-9434256.htm',
    google: null as string | null, // CONFIRM: Google Business Profile share link
  },
  googleReviewUrl: null as string | null, // CONFIRM: g.page/r/... review link
  // Where the lead form posts JSON. Point at n8n, Make, Zapier, HubSpot or Formspree.
  leadEndpoint: import.meta.env.PUBLIC_LEAD_ENDPOINT || '',
  gaId: import.meta.env.PUBLIC_GA_ID || '',
};

export const yearsInBusiness = new Date().getFullYear() - site.foundedYear;
