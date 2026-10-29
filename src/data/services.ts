export type Faq = { q: string; a: string };
export type Service = {
  slug: string;
  name: string;
  group: 'restoration' | 'roofing';
  emergency: boolean;
  title: string; // <title>
  h1: string;
  description: string; // meta description
  answer: string; // first paragraph, written to be quoted by AI answers
  signs: string[];
  steps: { name: string; text: string }[];
  insurance: string;
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'water-damage-restoration',
    name: 'Water damage restoration',
    group: 'restoration',
    emergency: true,
    title: 'Water Damage Restoration St. Louis | 24/7, On-Site in 2 Hours',
    h1: 'Water damage restoration in St. Louis',
    description:
      'Burst pipe, leak or flood? First Responders extracts water, dries your home and rebuilds. 24/7 in St. Louis and the Metro East. Call (314) 644-8800.',
    answer:
      'First Responders Roofing & Restoration provides 24/7 water damage restoration across the St. Louis metro, with a crew on-site within about two hours of your call. We stop the source, extract standing water, dry the structure with commercial dehumidifiers and air movers, document everything for your insurance company, and rebuild what had to be removed.',
    signs: [
      'Standing water on floors or in the basement',
      'Wet carpet, swollen baseboards or bubbling paint',
      'Water stains spreading on ceilings or walls',
      'A musty smell that was not there last week',
      'Soft or warped flooring near a sink, toilet, dishwasher or water heater',
    ],
    steps: [
      { name: 'Call and dispatch', text: 'Tell us what happened. We send a crew and tell you how to stay safe and limit damage until we arrive.' },
      { name: 'Stop and extract', text: 'We find and stop the source, then pump and extract standing water from floors, carpet and pad.' },
      { name: 'Measure and dry', text: 'Moisture meters and thermal imaging show where water traveled. Dehumidifiers and air movers dry the structure, checked daily.' },
      { name: 'Document for insurance', text: 'Photos, moisture readings and an itemized estimate go to your adjuster so the claim reflects the real damage.' },
      { name: 'Rebuild', text: 'Drywall, flooring, cabinets and paint are replaced by the same team, so you do not have to hire a second contractor.' },
    ],
    insurance:
      'Most homeowners policies cover sudden and accidental water damage, like a burst pipe or a failed supply line. Gradual leaks and outside flooding are often treated differently. We document the damage and write an itemized estimate in the same format insurers use, and we walk the property with your adjuster.',
    faqs: [
      { q: 'How fast should water damage be dried out?', a: 'Start within 24 to 48 hours. After that, mold can begin to grow and materials like drywall and subfloor swell and have to be replaced instead of dried. Call us as soon as you see water.' },
      { q: 'Does homeowners insurance cover water damage in Missouri?', a: 'Usually yes when the water was sudden and accidental, such as a burst pipe or appliance failure. Flooding from outside typically needs separate flood coverage, and slow leaks may be excluded. Check your policy, and we can walk through it with you and your adjuster.' },
      { q: 'How long does water damage restoration take?', a: 'Drying usually takes 3 to 5 days once equipment is set. Rebuild time depends on what was removed, from a few days for drywall to several weeks for kitchens or full basements.' },
      { q: 'Can I stay in my home during drying?', a: 'Often yes. If the water was contaminated, such as a sewer backup, or the damage affects electrical systems, we will tell you which rooms to avoid.' },
    ],
    related: ['flooded-basement-cleanup', 'mold-remediation', 'sewage-cleanup'],
  },
  {
    slug: 'flooded-basement-cleanup',
    name: 'Flooded basement cleanup',
    group: 'restoration',
    emergency: true,
    title: 'Flooded Basement Cleanup St. Louis | 24/7 Water Removal',
    h1: 'Flooded basement cleanup and water removal',
    description:
      'Flooded basement in the St. Louis area? We pump it out, dry it and restore it, day or night. Call First Responders at (314) 644-8800.',
    answer:
      'A flooded basement needs water removed and the space dried fast to stop mold and structural damage. First Responders pumps out the water, removes wet carpet and drywall that cannot be saved, dries the space with commercial equipment, and handles the rebuild, 24 hours a day across the St. Louis area.',
    signs: [
      'Water coming up through a floor drain or around the sump pit',
      'A sump pump that is running nonstop or has stopped',
      'Wet carpet or drywall along the bottom of finished walls',
      'Water seeping in where the wall meets the floor after heavy rain',
    ],
    steps: [
      { name: 'Make it safe', text: 'We check for electrical hazards and identify whether the water is clean, rain or sewage, which changes how it is handled.' },
      { name: 'Pump out', text: 'Truck-mounted and submersible pumps remove standing water.' },
      { name: 'Remove what cannot be saved', text: 'Wet pad, insulation and the bottom of drywall are cut out so walls can dry from the inside.' },
      { name: 'Dry and sanitize', text: 'Dehumidifiers and air movers run until readings hit dry standards, then surfaces are treated.' },
      { name: 'Restore the space', text: 'We rebuild finished basements, including drywall, trim, flooring and paint.' },
    ],
    insurance:
      'Coverage depends on the cause. A burst pipe is usually covered. A sump pump failure or sewer backup is often only covered with a specific endorsement. Outside surface flooding usually requires flood insurance. We help you find out quickly.',
    faqs: [
      { q: 'Should I run a shop vac or wait for a pro?', a: 'If the water is shallow, clean and there is no electrical risk, a shop vac helps. If water is deeper than an inch, near outlets, or smells like sewage, stay out and call us.' },
      { q: 'Will my basement carpet be saved?', a: 'Carpet sometimes can be dried in place after clean water. Pad usually cannot. Carpet soaked by sewage or floodwater must be removed.' },
      { q: 'Does insurance cover a sump pump failure?', a: 'Only if your policy has water backup or sump overflow coverage. It is a common add-on, so check your declarations page.' },
    ],
    related: ['water-damage-restoration', 'sewage-cleanup', 'mold-remediation'],
  },
  {
    slug: 'sewage-cleanup',
    name: 'Sewage cleanup',
    group: 'restoration',
    emergency: true,
    title: 'Sewage Backup Cleanup St. Louis | 24/7 Emergency Service',
    h1: 'Sewage backup cleanup',
    description:
      'Sewer backup in your home or business? First Responders removes contaminated water, sanitizes and rebuilds. 24/7 St. Louis service: (314) 644-8800.',
    answer:
      'Sewage backup is contaminated water and should be handled by a trained crew with protective equipment. First Responders removes the sewage, cuts out porous materials it touched, disinfects every surface, dries the area and rebuilds, 24/7 across the St. Louis metro.',
    signs: [
      'Dark water coming up through floor drains, toilets or tubs',
      'Gurgling drains or a sewage smell in the basement',
      'Multiple fixtures backing up at once',
    ],
    steps: [
      { name: 'Contain', text: 'We isolate the area so contamination does not spread to the rest of the house.' },
      { name: 'Remove', text: 'Sewage is extracted and porous materials it reached, like carpet and drywall, are removed and disposed of properly.' },
      { name: 'Disinfect', text: 'All remaining surfaces are cleaned and treated with antimicrobial products.' },
      { name: 'Dry and verify', text: 'The structure is dried and checked before anything is closed back up.' },
      { name: 'Rebuild', text: 'We restore the space to how it was.' },
    ],
    insurance:
      'Sewer backup is excluded from many standard policies unless you added a water backup endorsement. If a city main caused it, there may be other options. We document everything either way.',
    faqs: [
      { q: 'Is sewage backup dangerous?', a: 'Yes. Sewage carries bacteria and viruses. Keep children and pets away, do not touch it without protection, and turn off HVAC that pulls air from the area.' },
      { q: 'Who pays for a sewer backup?', a: 'Usually your homeowners policy if you have backup coverage. If the backup came from a public sewer line, contact your sewer district as well.' },
    ],
    related: ['flooded-basement-cleanup', 'water-damage-restoration', 'mold-remediation'],
  },
  {
    slug: 'fire-smoke-damage-restoration',
    name: 'Fire and smoke damage restoration',
    group: 'restoration',
    emergency: true,
    title: 'Fire & Smoke Damage Restoration St. Louis | Board-Up to Rebuild',
    h1: 'Fire and smoke damage restoration',
    description:
      'After a fire, First Responders secures your property, removes smoke and soot, handles water from firefighting and rebuilds. St. Louis, 24/7: (314) 644-8800.',
    answer:
      'After a fire, the job is three problems at once: an open structure, smoke and soot residue, and water from firefighting. First Responders boards up and tarps the property, cleans and deodorizes smoke damage, dries the water, and rebuilds, so one company handles it from the first night to the final walkthrough.',
    signs: [
      'Soot on walls, ceilings or inside cabinets',
      'Smoke odor that returns after cleaning',
      'Water damage from hoses or sprinklers',
      'Broken windows, doors or roof openings after the fire',
    ],
    steps: [
      { name: 'Secure', text: 'Emergency board-up and roof tarping keep weather and intruders out.' },
      { name: 'Assess', text: 'We document structure, contents and smoke spread for your insurer.' },
      { name: 'Clean', text: 'Soot is removed from surfaces and odor is treated at the source, not covered up.' },
      { name: 'Dry', text: 'Water from firefighting is extracted and dried like any water loss.' },
      { name: 'Rebuild', text: 'Framing, roofing, drywall and finishes are rebuilt to code.' },
    ],
    insurance:
      'Fire is a covered peril on standard homeowners policies. Many policies also pay for temporary housing while your home is repaired. We provide the itemized documentation adjusters ask for.',
    faqs: [
      { q: 'Can smoke smell be fully removed?', a: 'In most cases, yes, when the residue is removed from surfaces and odor is treated in the structure and HVAC. Masking sprays do not work long term.' },
      { q: 'Should I clean soot myself?', a: 'No. Wiping soot can smear it deeper into surfaces. Leave it until it can be cleaned with the right products.' },
    ],
    related: ['emergency-roof-repair', 'water-damage-restoration', 'insurance-claims'],
  },
  {
    slug: 'mold-remediation',
    name: 'Mold testing and remediation',
    group: 'restoration',
    emergency: false,
    title: 'Mold Remediation & Testing St. Louis | First Responders',
    h1: 'Mold testing and remediation',
    description:
      'Musty smell or visible mold? We find the moisture source, contain the area and remove mold safely. St. Louis area: (314) 644-8800.',
    answer:
      'Mold grows where moisture stays, so remediation only lasts when the water source is fixed. First Responders tests and inspects, contains the affected area so spores do not spread, removes contaminated materials, cleans what can be saved, and repairs the leak that caused it.',
    signs: [
      'A musty or earthy smell, especially in basements and closets',
      'Black, green or white spots on drywall, wood or grout',
      'Past water damage that was never professionally dried',
      'Condensation on windows and cold walls',
    ],
    steps: [
      { name: 'Inspect and test', text: 'We find where mold is and what moisture is feeding it.' },
      { name: 'Contain', text: 'Plastic barriers and negative air keep spores out of clean areas.' },
      { name: 'Remove', text: 'Moldy porous materials are removed. Structural wood is cleaned and treated.' },
      { name: 'Fix the cause', text: 'The leak, grading or ventilation problem is corrected so mold does not return.' },
      { name: 'Restore', text: 'We replace what was removed.' },
    ],
    insurance:
      'Mold from a covered water loss may be covered, often with a dollar cap. Mold from long-term humidity or maintenance issues usually is not.',
    faqs: [
      { q: 'Can I just bleach mold?', a: 'Bleach can lighten surface mold on hard surfaces but does not fix mold in drywall or wood, and it does nothing about the moisture causing it.' },
      { q: 'How long does mold remediation take?', a: 'Most residential jobs take 1 to 5 days, plus any rebuild.' },
    ],
    related: ['water-damage-restoration', 'flooded-basement-cleanup', 'roof-repair'],
  },
  {
    slug: 'storm-damage-repair',
    name: 'Storm damage repair',
    group: 'roofing',
    emergency: true,
    title: 'Storm Damage Repair St. Louis | Hail, Wind & Tornado Damage',
    h1: 'Storm damage repair for homes and businesses',
    description:
      'Hail, wind or tornado damage in St. Louis? First Responders tarps, inspects and repairs roofs, siding, gutters and interiors, with photo documentation for your claim.',
    answer:
      'After a hail, wind or tornado event, First Responders tarps openings the same day, inspects the roof, siding, gutters and windows, documents the damage for your insurance claim, and repairs both the outside and any water damage inside. One company covers the exterior and the interior.',
    signs: [
      'Missing, creased or lifted shingles after high wind',
      'Dents on gutters, downspouts, vents or the AC unit after hail',
      'Granules collecting at downspout outlets',
      'Cracked siding or broken windows',
      'New ceiling stains after a storm',
    ],
    steps: [
      { name: 'Secure', text: 'Emergency tarping and board-up stop more water from getting in.' },
      { name: 'Inspect', text: 'A full exterior inspection with photos of every damaged area.' },
      { name: 'Document and meet the adjuster', text: 'You file the claim with your insurer. We provide photos and an itemized estimate, and walk the roof with your adjuster so the damage is seen.' },
      { name: 'Repair or replace', text: 'Roofing, siding, gutters, windows and interior repairs are completed by one team.' },
    ],
    insurance:
      'Storm damage from hail and wind is a covered peril on most Missouri homeowners policies. Policies require timely reporting, so do not wait months to have the roof looked at.',
    faqs: [
      { q: 'How do I know if hail damaged my roof?', a: 'Look for dents on soft metals like gutters, vents and AC fins, and granules at the bottom of downspouts. Roof damage itself is hard to see from the ground, so a free inspection is the safest way to know.' },
      { q: 'How long do I have to file a storm damage claim?', a: 'It depends on your policy. Many require prompt notice and set a time limit from the date of the storm. Report damage as soon as you find it.' },
      { q: 'Will filing a hail claim raise my rates?', a: 'Weather claims are generally treated differently from at-fault claims, but every insurer is different. Ask your agent.' },
    ],
    related: ['hail-damage-roof-repair', 'emergency-roof-repair', 'insurance-claims'],
  },
  {
    slug: 'hail-damage-roof-repair',
    name: 'Hail damage roof repair',
    group: 'roofing',
    emergency: false,
    title: 'Hail Damage Roof Repair St. Louis | Free Hail Inspection',
    h1: 'Hail damage roof repair and replacement',
    description:
      'Free hail damage roof inspection in St. Louis and the Metro East. We document damage, meet your adjuster and replace your roof. Call (314) 644-8800.',
    answer:
      'Hail bruises and cracks shingles in ways that are hard to see from the ground but shorten a roof’s life and lead to leaks. First Responders offers free hail inspections across the St. Louis area, documents every hit for your insurer, meets the adjuster, and repairs or replaces the roof.',
    signs: [
      'Dents on gutters, downspouts and roof vents',
      'Dark spots where granules were knocked off shingles',
      'Granules piled at downspout outlets',
      'Cracked or split shingles and damaged skylights',
    ],
    steps: [
      { name: 'Free inspection', text: 'We inspect the roof and exterior and photograph every damaged area.' },
      { name: 'Damage report', text: 'You get a photo report and itemized estimate to share with your insurer, and we show the damage to your adjuster on-site.' },
      { name: 'Replacement', text: 'Tear-off, deck inspection, new underlayment, shingles, flashing and ventilation.' },
      { name: 'Clean-up', text: 'Magnetic sweep for nails and full debris haul-away.' },
    ],
    insurance:
      'Hail is a covered peril on most homeowners policies. You pay your deductible, and the insurer pays for the approved scope.',
    faqs: [
      { q: 'What size hail damages a roof?', a: 'Hail around 1 inch and larger commonly damages asphalt shingles, and smaller hail can damage older roofs.' },
      { q: 'Do you charge for hail inspections?', a: 'No. Inspections are free, and you get photos of what we find.' },
    ],
    related: ['storm-damage-repair', 'roof-replacement', 'insurance-claims'],
  },
  {
    slug: 'emergency-roof-repair',
    name: 'Emergency roof repair and tarping',
    group: 'roofing',
    emergency: true,
    title: 'Emergency Roof Repair & Tarping St. Louis | 24/7',
    h1: 'Emergency roof repair and tarping, 24/7',
    description:
      'Roof leaking now or torn open by a storm or tree? First Responders tarps and repairs roofs 24/7 across St. Louis. Call (314) 644-8800.',
    answer:
      'When a roof is leaking or open to the weather, the first job is to stop water from getting in. First Responders sends a crew 24/7 to tarp or temporarily seal the roof, remove water inside, and then make the permanent repair, across the St. Louis metro.',
    signs: [
      'Water actively dripping through a ceiling',
      'A tree or large limb on the roof',
      'Shingles or sections of roof missing after wind',
      'Daylight visible in the attic',
    ],
    steps: [
      { name: 'Dispatch', text: 'We send a crew and tell you how to protect belongings until we arrive.' },
      { name: 'Tarp', text: 'Heavy tarps are secured over the opening to keep weather out.' },
      { name: 'Dry inside', text: 'Wet insulation, drywall and floors are handled before mold starts.' },
      { name: 'Permanent repair', text: 'We repair or replace the damaged roof section.' },
    ],
    insurance:
      'Most policies expect you to take reasonable steps to prevent further damage, and emergency tarping is usually part of the covered claim. Keep the invoice.',
    faqs: [
      { q: 'How much does emergency roof tarping cost?', a: 'It depends on the size and pitch of the area. If the damage is from a covered event, tarping is normally included in the insurance claim.' },
      { q: 'How long can a tarp stay on a roof?', a: 'A properly secured tarp is a temporary fix meant for weeks, not months. Plan the permanent repair right away.' },
    ],
    related: ['roof-repair', 'storm-damage-repair', 'water-damage-restoration'],
  },
  {
    slug: 'roof-repair',
    name: 'Roof repair',
    group: 'roofing',
    emergency: false,
    title: 'Roof Repair St. Louis | Leaks, Flashing & Shingles',
    h1: 'Roof repair in St. Louis',
    description:
      'Leaking roof, missing shingles or bad flashing? First Responders finds the real source and fixes it. Free estimates in St. Louis: (314) 644-8800.',
    answer:
      'Most roof leaks come from flashing around chimneys, vents and skylights, or from damaged shingles, not from the spot where water shows up on the ceiling. First Responders traces the leak to its source, repairs it, and repairs any interior damage it caused.',
    signs: [
      'Ceiling stains that grow after rain',
      'Missing or curled shingles',
      'Loose flashing around chimneys or vents',
      'Moss, rot or sagging areas',
    ],
    steps: [
      { name: 'Find the source', text: 'We inspect the roof and attic to trace where water is entering.' },
      { name: 'Estimate', text: 'A clear, written repair estimate with photos.' },
      { name: 'Repair', text: 'Shingles, flashing, boots and decking are replaced as needed.' },
      { name: 'Interior', text: 'If water reached inside, we repair drywall and paint too.' },
    ],
    insurance:
      'Repairs from wear and tear are usually paid out of pocket. Leaks caused by a storm may be covered.',
    faqs: [
      { q: 'Should I repair or replace my roof?', a: 'Repair makes sense for isolated damage on a roof with years left. If the roof is near the end of its life or damage is widespread, replacement usually costs less over time.' },
    ],
    related: ['emergency-roof-repair', 'roof-replacement', 'hail-damage-roof-repair'],
  },
  {
    slug: 'roof-replacement',
    name: 'Roof replacement',
    group: 'roofing',
    emergency: false,
    title: 'Roof Replacement St. Louis | Insurance & Retail Roofing',
    h1: 'Roof replacement',
    description:
      'New roof for your St. Louis home or business, through insurance or out of pocket. Free estimates, full clean-up. First Responders: (314) 644-8800.',
    answer:
      'A full roof replacement includes tear-off to the deck, replacing damaged decking, new underlayment, ice and water shield in valleys and at eaves, new flashing and ventilation, and shingles installed to manufacturer specs. First Responders replaces roofs across St. Louis, through insurance claims or paid directly.',
    signs: [
      'Roof older than 20 years',
      'Widespread curling, cracking or granule loss',
      'Repeated leaks in different spots',
      'Storm damage across multiple slopes',
    ],
    steps: [
      { name: 'Inspect and measure', text: 'We inspect, measure and give you a written estimate with material options.' },
      { name: 'Plan', text: 'Materials, colors, schedule and permits are set. Insurance jobs follow the approved scope.' },
      { name: 'Install', text: 'Tear-off to the deck, damaged decking replaced, then underlayment, flashing, ventilation and shingles.' },
      { name: 'Clean-up and walkthrough', text: 'Magnetic nail sweep, debris haul-away and a final walkthrough with you.' },
    ],
    insurance:
      'If the roof was damaged by hail or wind, insurance may pay for most of the replacement after your deductible.',
    faqs: [
            { q: 'Do I need to be home during the replacement?', a: 'No, but we ask that cars are out of the driveway and that fragile items on interior walls are taken down because of vibration.' },
    ],
    related: ['hail-damage-roof-repair', 'roof-repair', 'siding-gutters'],
  },
  {
    slug: 'siding-gutters',
    name: 'Siding, gutters and windows',
    group: 'roofing',
    emergency: false,
    title: 'Siding, Gutter & Window Repair St. Louis | Storm Damage',
    h1: 'Siding, gutter and window repair',
    description:
      'Storm-damaged siding, gutters, windows or doors? First Responders repairs and replaces exteriors across St. Louis. Call (314) 644-8800.',
    answer:
      'Hail and wind damage rarely stops at the roof. First Responders repairs and replaces siding, gutters, downspouts, windows and doors so the whole exterior is restored under one claim and one contractor.',
    signs: [
      'Cracked, dented or missing siding panels',
      'Dented or sagging gutters',
      'Cracked window glass or damaged screens',
      'Water running behind gutters and down the fascia',
    ],
    steps: [
      { name: 'Inspect', text: 'We document every elevation of the house.' },
      { name: 'Match', text: 'We source matching siding where possible and discuss options when it is not.' },
      { name: 'Install', text: 'Repairs or replacement by the same crew managing your roof.' },
    ],
    insurance: 'Exterior damage from the same storm is usually part of the same claim as the roof.',
    faqs: [
      { q: 'What if my siding cannot be matched?', a: 'Discontinued siding is common. We document it for your adjuster and explain the options.' },
    ],
    related: ['storm-damage-repair', 'roof-replacement', 'hail-damage-roof-repair'],
  },
  {
    slug: 'commercial-restoration',
    name: 'Commercial restoration and roofing',
    group: 'restoration',
    emergency: true,
    title: 'Commercial Water Damage & Roofing St. Louis | 24/7',
    h1: 'Commercial restoration and roofing',
    description:
      'Water, fire or storm damage at your business? First Responders responds 24/7 to keep you open. Property managers in St. Louis: (314) 644-8800.',
    answer:
      'For businesses and property managers, every hour closed costs money. First Responders responds 24/7 to commercial water, fire and storm losses across St. Louis, works around your operating hours, and handles both the roof and the interior so tenants and customers are back fast.',
    signs: [
      'Sprinkler discharge or a burst pipe',
      'Roof leaks over offices, retail or warehouse space',
      'Storm damage to storefronts or multi-family buildings',
    ],
    steps: [
      { name: 'Respond', text: 'A crew and project manager on-site fast, day or night.' },
      { name: 'Stabilize', text: 'Water removed, roof tarped, power and safety issues addressed.' },
      { name: 'Plan around operations', text: 'We phase work to keep as much of the property open as possible.' },
      { name: 'Restore', text: 'Full rebuild with daily updates to owners and managers.' },
    ],
    insurance: 'We document losses for commercial carriers and can work with your risk manager.',
    faqs: [
      { q: 'Do you offer priority response agreements?', a: 'Yes. Property managers can set up a response plan in advance so we already have building details and contacts on file.' },
    ],
    related: ['water-damage-restoration', 'emergency-roof-repair', 'fire-smoke-damage-restoration'],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
// Services that also get a dedicated page in every city (highest search volume).
export const cityServiceSlugs = ['water-damage-restoration', 'flooded-basement-cleanup', 'storm-damage-repair', 'hail-damage-roof-repair', 'emergency-roof-repair', 'roof-replacement'];
// Basements and hail are St. Louis-area problems; Gulf and Carolina coast pages skip them.
const stlOnly = ['flooded-basement-cleanup', 'hail-damage-roof-repair'];
export const hasCityPage = (city: { region: string }, slug: string) =>
  cityServiceSlugs.includes(slug) && (city.region === 'stl' || !stlOnly.includes(slug));
