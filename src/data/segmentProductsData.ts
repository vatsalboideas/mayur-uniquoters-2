import { SegmentProduct } from '../types';

/** Shared product options used on every market segment detail page */
export const COMMON_SEGMENT_PRODUCTS: SegmentProduct[] = [
  {
    id: 'prod-cognac-pebble',
    name: 'Cognac Pebble Grain',
    code: 'CPG-3012',
    description:
      'Warm cognac pebble-grain surface with a natural leather look for premium seating and soft-touch interior applications.',
    image: '/assets/images/market-segment/furnishing/products/image1.png',
    finish: 'Pebble Grain Soft Matte',
    thickness: '1.3mm – 1.5mm',
    specs: ['BS 5852 Crib 5 Certified', 'Phthalate-Free Formulation', 'Breathable Fleece Backing'],
  },
  {
    id: 'prod-charcoal-perforated',
    name: 'Charcoal Micro-Perforated',
    code: 'CMP-2201',
    description:
      'Dark charcoal perforated technical surface engineered for breathable seating and high-traffic environments.',
    image: '/assets/images/market-segment/furnishing/products/image2.png',
    finish: 'Micro-Perforated Matte',
    thickness: '1.2mm – 1.4mm',
    specs: ['Bleach Cleanable (10:1 Ratio)', 'Anti-Microbial / Anti-Fungal Guard', 'Wyzenbeek >100k Double Rubs'],
  },
  {
    id: 'prod-sand-nappa',
    name: 'Sand Soft Nappa',
    code: 'SSN-4410',
    description:
      'Fine beige soft-nappa hand feel for calm interiors with a refined matte finish and warm tactile response.',
    image: '/assets/images/market-segment/furnishing/products/image3.png',
    finish: 'Soft Nappa Matte',
    thickness: '1.3mm – 1.5mm',
    specs: ['Warm Touch Haptics', 'Low VOC Emission', 'Stain Shield Topcoat'],
  },
  {
    id: 'prod-forest-weave',
    name: 'Forest Diagonal Weave',
    code: 'FDW-5508',
    description:
      'Deep forest green woven-effect coated material for statement seating and premium commercial interiors.',
    image: '/assets/images/market-segment/furnishing/products/image4.png',
    finish: 'Diagonal Weave Satin',
    thickness: '1.4mm – 1.6mm',
    specs: ['Lightfastness Blue Wool >6', 'High Tear Resistance', 'Easy-Clean Protective Coat'],
  },
  {
    id: 'prod-graphite-tech',
    name: 'Graphite Perforated Tech',
    code: 'GPT-6612',
    description:
      'Graphite perforated technical grain designed for ventilated seating programs across mobility and interior applications.',
    image: '/assets/images/market-segment/furnishing/products/image5.png',
    finish: 'Perforated Technical Grain',
    thickness: '1.2mm – 1.4mm',
    specs: ['Breathable Perforation Grid', 'Abrasion Resistant', 'Anti-Fungal Treatment'],
  },
];
