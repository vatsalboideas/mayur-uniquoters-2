import { NewsItem } from '../types';

export const NEWS_ARTICLES: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Mayur Uniquoters Unveils Bio-Based Polyurethane Surface Line for EV Interior Applications',
    category: 'Innovation',
    date: 'August 2026',
    readTime: '4 min read',
    summary: 'Introducing a revolutionary eco-polyurethane coated material formulated with 40% plant-based renewable polyols, engineered specifically for zero-emission electric vehicles.',
    content: [
      'Jaipur, India — Mayur Uniquoters Limited, a leading global manufacturer of synthetic leather and coated materials, has officially launched its next-generation Bio-Based Polyurethane surface line.',
      'Developed after three years of intensive laboratory testing at the company’s R&D center in Jaipur, the new material replaces traditional petroleum-derived polyols with non-food plant-based renewables, achieving a 40% bio-carbon content while exceeding OEM automotive requirements for UV lightfastness, thermal aging, and abrasion resistance.',
      '“As automotive OEMs accelerate their decarbonization roadmaps, interior material choices have become a vital pillar of sustainability,” said Chairman & Managing Director Mr. Suresh Kumar Poddar. “Our Bio-Based PU delivers the exact supple hand-feel and luxury haptics of fine Nappa leather, while drastically cutting embedded carbon emissions.”',
      'Initial production validation runs have been successfully completed, with mass production scheduled to support upcoming 2027 vehicle model years across key North American and European EV platforms.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    id: 'news-2',
    title: 'Zero Liquid Discharge Milestone Achieved Across All Major Coating Plants',
    category: 'Sustainability',
    date: 'June 2026',
    readTime: '3 min read',
    summary: 'The company completes installation of multi-effect evaporators and reverse osmosis water recycling units, achieving 100% Zero Liquid Discharge across facilities.',
    content: [
      'Demonstrating leadership in eco-conscious industrial manufacturing, Mayur Uniquoters Limited announced that 100% of industrial process water at its primary production complexes is now recycled on-site.',
      'Through advanced Zero Liquid Discharge (ZLD) technologies incorporating high-recovery Reverse Osmosis (RO) and MVR evaporators, zero wastewater effluent is discharged into the environment. Over 850,000 liters of process water are reclaimed daily for reuse in cooling towers and fabric preparation.',
      'Additionally, solvent recovery systems installed on coating lines capture up to 95% of volatile process solvents, recirculating them into production loops and minimizing atmospheric emissions.'
    ],
    heroImage: '/src/assets/images/mayur_plant_facility_1786517346645.jpg'
  },
  {
    id: 'news-3',
    title: 'Mayur Uniquoters Expands Tier-1 Automotive Portfolio in European Market',
    category: 'Press Release',
    date: 'April 2026',
    readTime: '5 min read',
    summary: 'New OEM validation contracts signed with European automotive suppliers for seating and dashboard applications.',
    content: [
      'Expanding its international supply footprint, Mayur Uniquoters Limited has secured major supply contracts with European Tier-1 automotive interior integrators.',
      'The company’s AeroLux Ultima Nappa series successfully passed 1,000-hour weatherometer testing (SAE J2527) and strict European fogging emission benchmarks. The material will be featured in upcoming premium crossover and luxury sedan interiors starting Q1 2027.'
    ],
    heroImage: '/src/assets/images/mayur_auto_interior_1786517312958.jpg'
  },
  {
    id: 'news-4',
    title: 'Architectural Material Showcase: Introducing the Sovereign Heritage Collection',
    category: 'Global Event',
    date: 'January 2026',
    readTime: '3 min read',
    summary: 'New luxury furnishing collection launched featuring vintage pull-up effects and commercial flame retardancy for boutique hospitality.',
    content: [
      'Mayur Uniquoters presented its latest architectural interior material line at premier international design expos. The Sovereign Heritage collection features warm wax-tone finishes and BS 5852 Crib 5 fire resistance, targeting boutique hotels, luxury residences, and executive offices.'
    ],
    heroImage: '/src/assets/images/mayur_furnishing_1786517327875.jpg'
  }
];
