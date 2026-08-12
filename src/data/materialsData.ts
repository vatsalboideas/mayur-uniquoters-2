import { MaterialSwatch } from '../types';

export const MATERIAL_SWATCHES: MaterialSwatch[] = [
  {
    id: 'mat-auto-nappa',
    name: 'AeroLux Ultima Nappa',
    code: 'ALN-9021',
    category: 'Automotive',
    finish: 'Perforated Micro-Satin Matte',
    colors: [
      { name: 'Warm Taupe', hex: '#B8A99A', bgClass: 'bg-[#B8A99A]' },
      { name: 'Imperial Charcoal', hex: '#1C1D21', bgClass: 'bg-[#1C1D21]' },
      { name: 'Bespoke Burgundy', hex: '#581C20', bgClass: 'bg-[#581C20]' },
      { name: 'Cognac Saddle', hex: '#8C5230', bgClass: 'bg-[#8C5230]' },
      { name: 'Ivory Cream', hex: '#EBE5D8', bgClass: 'bg-[#EBE5D8]' },
    ],
    thickness: '1.2mm - 1.4mm',
    embossingPattern: 'Precision Micro-Grain #402',
    substrate: 'High-Tensile Microfiber Matrix',
    features: [
      'OEM Automotive Grade Flame Retardancy (FMVSS 302)',
      'UV Resistance 1000+ Hours (SAE J2527)',
      'Breathable Perforation Grid',
      'Ultra-Soft Tactile Haptics',
      'Anti-Squeak Low Noise Coating'
    ],
    description: 'Engineered specifically for premium automotive seat covers, steering wheel wraps, and door trims. Engineered to withstand high ambient thermal cycles while preserving a rich leather grain feel.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    applications: ['Executive Automotive Seats', 'Door Panels', 'Instrument Dashboards', 'Center Consoles']
  },
  {
    id: 'mat-auto-sport',
    name: 'Veloce Carbon-Tech Grain',
    code: 'VCT-8830',
    category: 'Automotive',
    finish: 'Semi-Gloss Technical Pattern',
    colors: [
      { name: 'Midnight Jet', hex: '#111113', bgClass: 'bg-[#111113]' },
      { name: 'Crimson Accent', hex: '#8B1E24', bgClass: 'bg-[#8B1E24]' },
      { name: 'Gunmetal Slate', hex: '#3A3D40', bgClass: 'bg-[#3A3D40]' },
    ],
    thickness: '1.1mm - 1.3mm',
    embossingPattern: '3D Carbon Weave Texture',
    substrate: 'Recycled Poly-Knit Backing',
    features: [
      'High Abrasion Resistance (>100,000 Martindale Rubs)',
      'Hydrolysis Resistant 7+ Years',
      'Scuff & Scratch Guard Coating',
      'Lightweight Composite Construction'
    ],
    description: 'A sports-inspired structural coated material incorporating a 3D tactile weave pattern. Ideal for high-performance seating bolsters and race-inspired interior trim.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200',
    applications: ['Performance Seats', 'Sports Steering Wheel Trim', 'Rear Shelves', 'Transmission Tunnel Wraps']
  },
  {
    id: 'mat-furn-sovereign',
    name: 'Sovereign Heritage Velvet-Touch',
    code: 'SHV-3012',
    category: 'Furnishing',
    finish: 'Deep Grain Natural Wax Matte',
    colors: [
      { name: 'Saddle Tan', hex: '#8B5A2B', bgClass: 'bg-[#8B5A2B]' },
      { name: 'Earthy Olive', hex: '#4A5340', bgClass: 'bg-[#4A5340]' },
      { name: 'Midnight Indigo', hex: '#1D2A3A', bgClass: 'bg-[#1D2A3A]' },
      { name: 'Whiskey Amber', hex: '#A86532', bgClass: 'bg-[#A86532]' },
    ],
    thickness: '1.3mm - 1.5mm',
    embossingPattern: 'Full-Grain Pull-Up Leather Effect',
    substrate: 'Brushed Cotton-Fleece Backing',
    features: [
      'Hospitality Grade Stain Shield Treatment',
      'Cigarette & Match Ignition Resistant (BS 5852)',
      'Zero Phthalates & Low VOC Emission',
      'Warm Touch & Plump Hand Feel'
    ],
    description: 'Designed for high-end residential modular sofas, boutique hotel lounge seating, and executive offices. Combines vintage pull-up aesthetic with modern stain resistance.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
    applications: ['Luxury Sofas', 'Club Armchairs', 'Hotel Lobby Headboards', 'Contract Seating']
  },
  {
    id: 'mat-foot-strider',
    name: 'FlexiStride Pro-Tech',
    code: 'FSP-1090',
    category: 'Footwear',
    finish: 'Waterproof Satin Smooth',
    colors: [
      { name: 'Onyx Black', hex: '#141416', bgClass: 'bg-[#141416]' },
      { name: 'Sandstone Tan', hex: '#C2B280', bgClass: 'bg-[#C2B280]' },
      { name: 'Snow White', hex: '#F0F0EE', bgClass: 'bg-[#F0F0EE]' },
      { name: 'Deep Ochre', hex: '#9E6728', bgClass: 'bg-[#9E6728]' },
    ],
    thickness: '1.4mm - 1.6mm',
    embossingPattern: 'Smooth Aniline Grain',
    substrate: 'Non-Woven Fiber Substrate',
    features: [
      'Flex Endurance >200,000 Cycles (Bally Flexometer)',
      'Hydrophobic Water-Repellent Treatment',
      'High Tensile & Tear Strength',
      'Breathable Vapor Permeable Polymer Coating'
    ],
    description: 'Premier material solution for upper components in formal dress shoes, lifestyle sneakers, and outdoor boots.',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=1200',
    applications: ['Sneaker Uppers', 'Formal Footwear Vamp', 'Work Boot Collars', 'Athletic Shoe Trim']
  },
  {
    id: 'mat-leather-artisanal',
    name: 'Maison Luxe Grain',
    code: 'MLG-7740',
    category: 'Leather Goods',
    finish: 'High-Luster Micro-Pebble',
    colors: [
      { name: 'Royal Burgundy', hex: '#631B2B', bgClass: 'bg-[#631B2B]' },
      { name: 'Emerald Forest', hex: '#1C3B2B', bgClass: 'bg-[#1C3B2B]' },
      { name: 'Champagne Gold', hex: '#D4AF37', bgClass: 'bg-[#D4AF37]' },
      { name: 'Classic Black', hex: '#0B0B0C', bgClass: 'bg-[#0B0B0C]' },
    ],
    thickness: '0.9mm - 1.1mm',
    embossingPattern: 'Epsom Fine Pebble Grain',
    substrate: 'Ultra-Fine Microfiber',
    features: [
      'Edge Paint Bonding Compatible',
      'Scratch-Proof Resin Guard',
      'Flexible Fold Memory',
      'Cruelty-Free Eco Polyurethane'
    ],
    description: 'Targeted at luxury handbag design, wallets, belts, luggage, and executive tech accessories. Offers a structured drape with rich color depth.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1200',
    applications: ['Luxury Handbags', 'Travel Luggage', 'Small Leather Goods', 'Watch Straps']
  }
];
