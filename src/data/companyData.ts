import { HistoricalMilestone, LeadershipMember, CertificationItem, TestimonialItem } from '../types';

export const COMPANY_OVERVIEW = {
  name: 'Mayur Uniquoters Limited',
  tagline: 'Material Intelligence. Crafted for the World.',
  establishedYear: '1994',
  hqLocation: 'Jaipur, Rajasthan, India',
  stockListing: 'NSE: MAYURUNIQ | BSE: 522249',
  coreFocus: 'Manufacturer of high-performance coated materials, artificial leather, PVC & PU leatherette, knitted fabrics, and surface solutions.',
  globalReach: 'Supplying 20+ countries across North America, Europe, Middle East, and Asia Pacific.',
  vision: 'To be the most preferred global material solutions partner through relentless innovation, sustainable engineering, and uncompromising quality.',
  mission: 'To craft high-value, tech-enabled surface solutions that elevate automotive interiors, architectural furnishings, and lifestyle products while leading environmental stewardship in polymer coating.',
  values: [
    { title: 'Material Excellence', desc: 'Precision chemistry and advanced manufacturing technology in every square meter.' },
    { title: 'Customer Centricity', desc: 'Customizing engineering parameters to meet stringent OEM & brand specifications.' },
    { title: 'Environmental Stewardship', desc: 'Zero Liquid Discharge (ZLD), solvent recovery, and bio-based polymer formulation.' },
    { title: 'Integrity & Governance', desc: 'Transparent financial reporting, strict compliance, and ethical business conduct.' }
  ]
};

export const MILESTONES: HistoricalMilestone[] = [
  {
    year: '2025 - 2026',
    title: 'Next-Gen PU Facility & Bio-Based Coating Lines',
    category: 'Innovation',
    description: 'Commissioned automated Polyurethane (PU) surface lines and eco-friendly bio-based leatherette lines targeting EV automotive interiors and European luxury brands.'
  },
  {
    year: '2024',
    title: 'Global Supply Expansion & OEM Certifications',
    category: 'Global Reach',
    description: 'Secured direct Tier-1 supplier status with major North American and European electric vehicle manufacturers. Expanded export logistics hubs.'
  },
  {
    year: '2023',
    title: 'Zero Liquid Discharge & Solar Integration',
    category: 'Sustainability',
    description: 'Achieved 100% Zero Liquid Discharge (ZLD) status at primary manufacturing plants along with on-site solar energy generation reducing carbon footprint by 35%.'
  },
  {
    year: '2022',
    title: 'Advanced Knitted Fabric Integration',
    category: 'Expansion',
    description: 'Upgraded in-house circular knitting capacity to produce high-tensile backing fabrics, ensuring complete vertical integration from yarn to finished coated roll.'
  }
];

export const FOUNDER_PROFILE = {
  name: 'Mr. Suresh Kumar Poddar',
  designation: 'Chairman & Managing Director',
  bio: 'A visionary industrialist with over four decades of expertise in the polymer and textile industries. Mr. Poddar pioneered modern synthetic leather manufacturing in India, steering Mayur Uniquoters from a regional enterprise into an internationally recognized export powerhouse and Tier-1 automotive supplier.',
  quote: 'True leadership in manufacturing is not merely about output volume; it is about establishing a gold standard of quality that earns the unwavering trust of global leaders.',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
};

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  {
    id: 'lead-1',
    name: 'Mr. Suresh Kumar Poddar',
    designation: 'Chairman & Managing Director',
    category: 'Executive Leadership',
    bio: 'Founder and guiding force behind Mayur Uniquoters Limited. Focuses on long-term strategy, global joint ventures, and capital allocation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    philosophyQuote: 'Quality is non-negotiable. Every roll leaving our plant reflects our heritage.'
  },
  {
    id: 'lead-2',
    name: 'Mr. Arun Kumar Bagaria',
    designation: 'Executive Director',
    category: 'Executive Leadership',
    bio: 'Oversees operational execution, plant automation, strategic supply chain logistics, and technology partnerships.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lead-3',
    name: 'Ms. Tanuja Agarwal',
    designation: 'Independent Director',
    category: 'Board of Directors',
    bio: 'Brings extensive experience in corporate governance, compliance management, and strategic audit oversight.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lead-4',
    name: 'Mr. Arvind Kumar Sharma',
    designation: 'Independent Director',
    category: 'Board of Directors',
    bio: 'Seasoned financial executive specializing in risk mitigation, corporate strategy, and global market expansion.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    code: 'IATF 16949:2016',
    title: 'Automotive Quality Management System',
    issuingAuthority: 'TÜV SÜD / International Automotive Task Force',
    scope: 'Design, Development & Production of Coated Fabrics for Automotive Applications',
    yearValidated: 'Valid through 2026',
    iconName: 'ShieldCheck'
  },
  {
    id: 'cert-2',
    code: 'ISO 9001:2015',
    title: 'Quality Management Systems',
    issuingAuthority: 'DNV GL Business Assurance',
    scope: 'Quality Standards Across All Coating & Knitted Fabric Production Units',
    yearValidated: 'Valid through 2027',
    iconName: 'CheckCircle'
  },
  {
    id: 'cert-3',
    code: 'ISO 14001:2015',
    title: 'Environmental Management System',
    issuingAuthority: 'Bureau Veritas',
    scope: 'Resource Efficiency, Waste Minimization & Environmental Controls',
    yearValidated: 'Valid through 2026',
    iconName: 'Leaf'
  },
  {
    id: 'cert-4',
    code: 'OEKO-TEX Standard 100',
    title: 'Textile & Leather Safety Certification',
    issuingAuthority: 'TESTEX AG',
    scope: 'Absence of Harmful Chemical Substances in Skin-Contact Surfaces',
    yearValidated: 'Valid through 2026',
    iconName: 'Award'
  }
];

export const INVESTOR_INFORMATION = {
  stockInfo: {
    symbolNSE: 'MAYURUNIQ',
    symbolBSE: '522249',
    listingStatus: 'Listed on National Stock Exchange of India (NSE) & BSE Limited',
    marketCapCategory: 'Mid-Cap Corporate Leader',
    registrar: 'Beetal Financial & Computer Services (P) Ltd.'
  },
  financialHighlights: [
    { title: 'Debt-Free Balance Sheet', desc: 'Prudent capital structure ensuring strong operational liquidity and resilience.' },
    { title: 'Consistent Dividend History', desc: 'Demonstrated history of value creation and regular shareholder dividends.' },
    { title: 'High Export Revenue Growth', desc: 'Expanding market share in North American and European OEM accounts.' },
    { title: 'In-House R&D Investment', desc: 'Sustained investment in green chemistry and automated quality inspection.' }
  ],
  investorContacts: {
    email: 'investor@mayur.biz',
    phone: '+91 141 2280620',
    address: 'Mayur Uniquoters Limited, Corporate House, Jaipur - 302013, Rajasthan, India'
  }
};

export const CUSTOMER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Mayur Uniquoters consistently delivers automotive-grade coated materials that pass our stringent thermal aging and emissions standards without exception. Their technical agility is world-class.',
    author: 'Vice President of Global Interior Procurement',
    title: 'Tier-1 Automotive OEM',
    company: 'Leading Global Mobility Group',
    industry: 'Automotive'
  },
  {
    id: 'test-2',
    quote: 'The depth of grain embossing, color consistency, and fire retardancy of Mayur’s Sovereign collection elevated our contract seating range across 40+ hospitality projects across Europe.',
    author: 'Chief Design Officer',
    title: 'Contract Furniture Studio',
    company: 'Architectural Interiors AG',
    industry: 'Furnishing'
  },
  {
    id: 'test-3',
    quote: 'Working with Mayur Uniquoters gives us complete confidence in flex endurance and batch-to-batch thickness accuracy. A truly dependable partner for high-volume footwear production.',
    author: 'Director of Materials Engineering',
    title: 'Footwear Brand Alliance',
    company: 'International Footwear Co.',
    industry: 'Footwear'
  }
];
