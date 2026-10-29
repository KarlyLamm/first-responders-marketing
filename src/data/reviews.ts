// Real, public reviews only, quoted as written, with their source.
// Add new ones as they come in. Never write or edit review text.
export type Review = { quote: string; author: string; source: string; url: string; date?: string; service?: string };

export const reviews: Review[] = [
  {
    quote:
      'This is a great company to work with. They were on site within hours of first phone call. Management maintained constant contact until all work was complete which took several months. There were multiple crews all were very professional.',
    author: 'Bill H.',
    source: 'Angi',
    url: 'https://www.angi.com/companylist/us/mo/saint-louis/first-responders-restoration-llc-reviews-9434256.htm',
    date: 'August 2022',
    service: 'Water mitigation',
  },
  {
    quote:
      'I love they give back to our local law enforcement, I love the work they did, I really loved my overall experience from beginning to end.',
    author: 'BBB reviewer',
    source: 'BBB',
    url: 'https://www.bbb.org/us/mo/saint-louis/profile/general-contractor/first-responders-roofing-and-restoration-0734-1000017184/customer-reviews',
    date: 'July 2023',
  },
  {
    quote: 'I had a great experience with First Responders after my kitchen flooded.',
    author: 'Angi reviewer',
    source: 'Angi',
    url: 'https://www.angi.com/companylist/us/mo/saint-louis/first-responders-restoration-llc-reviews-9434256.htm',
    service: 'Water damage',
  },
];
