export type PageId =
  | 'home'
  | 'segments'
  | 'segment-automotive'
  | 'segment-furnishing'
  | 'segment-footwear'
  | 'segment-leather-goods'
  | 'plants'
  | 'sustainability'
  | 'global-presence'
  | 'news'
  | 'contact';

export interface MaterialSwatch {
  id: string;
  name: string;
  code: string;
  category: 'Automotive' | 'Furnishing' | 'Footwear' | 'Leather Goods';
  finish: string;
  colors: { name: string; hex: string; bgClass: string; image?: string }[];
  thickness: string;
  embossingPattern: string;
  substrate: string;
  features: string[];
  description: string;
  image: string;
  applications: string[];
}

export interface SegmentProduct {
  id: string;
  name: string;
  code: string;
  description: string;
  image: string;
  specs: string[];
  finish?: string;
  thickness?: string;
}

export interface MarketSegmentData {
  id: string;
  title: string;
  slug: 'automotive' | 'furnishing' | 'footwear' | 'leather-goods';
  tagline: string;
  description: string;
  heroImage: string;
  secondaryImage: string;
  applications: {
    name: string;
    description: string;
    image: string;
    specs: string[];
  }[];
  products: SegmentProduct[];
  keyFeatures: { title: string; desc: string }[];
  technicalSpecs: { label: string; value: string }[];
  materials: MaterialSwatch[];
}

export interface PlantLocation {
  id: string;
  name: string;
  city: string;
  stateCountry: string;
  type: 'Primary Manufacturing Facility' | 'Knitted Fabric Unit' | 'R&D Center' | 'Global Supply Hub';
  areaSize: string;
  capacityNotes: string;
  certifications: string[];
  keyHighlights: string[];
  coordinates: { x: number; y: number }; // Percentage on map
  image: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  category: 'Board of Directors' | 'Executive Leadership';
  bio: string;
  philosophyQuote?: string;
  image: string;
}

export interface HistoricalMilestone {
  year: string;
  title: string;
  description: string;
  category: 'Expansion' | 'Innovation' | 'Global Reach' | 'Sustainability';
}

export interface CertificationItem {
  id: string;
  code: string;
  title: string;
  issuingAuthority: string;
  scope: string;
  yearValidated: string;
  iconName: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Press Release' | 'Innovation' | 'Sustainability' | 'Financial Result' | 'Global Event';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  heroImage: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  industry: string;
}
