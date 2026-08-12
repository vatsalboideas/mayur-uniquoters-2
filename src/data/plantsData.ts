import { PlantLocation } from '../types';

export const PLANT_LOCATIONS: PlantLocation[] = [
  {
    id: 'plant-jaitpura',
    name: 'Jaitpura Manufacturing Facility',
    city: 'Jaitpura, Jaipur',
    stateCountry: 'Rajasthan, India',
    type: 'Primary Manufacturing Facility',
    areaSize: '25+ Acres Advanced Campus',
    capacityNotes: 'High-speed Italian & German coating lines equipped with inline infrared gauge scanners.',
    certifications: ['IATF 16949:2016', 'ISO 9001:2015', 'ISO 14001:2015', 'OEKO-TEX 100'],
    keyHighlights: [
      'Multi-stage reverse roll coating machinery for ultra-smooth surface uniformity',
      'Integrated R&D testing center with climate simulation chambers',
      'Zero Liquid Discharge (ZLD) effluent treatment plant',
      'Rooftop solar installation delivering clean power'
    ],
    coordinates: { x: 68, y: 44 },
    image: '/src/assets/images/mayur_plant_facility_1786517346645.jpg'
  },
  {
    id: 'plant-dhodsar',
    name: 'Dhodsar Manufacturing Unit',
    city: 'Dhodsar, Jaipur',
    stateCountry: 'Rajasthan, India',
    type: 'Primary Manufacturing Facility',
    areaSize: '30+ Acres Industrial Complex',
    capacityNotes: 'Specialized high-capacity production lines for automotive PU/PVC artificial leather and technical textiles.',
    certifications: ['IATF 16949:2016', 'ISO 9001:2015', 'ISO 45001 Health & Safety'],
    keyHighlights: [
      'Automated raw material dosing systems ensuring exact chemical formulations',
      'Specialized embossing line with 150+ custom roller patterns',
      'Solvent Recovery Plant capturing and recycling up to 95% of process solvents',
      'State-of-the-art physical testing lab equipped with Bally flexometers & Taber abrasers'
    ],
    coordinates: { x: 67, y: 45 },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'plant-knitting',
    name: 'Integrated Knitted Fabric Unit',
    city: 'Jaipur',
    stateCountry: 'Rajasthan, India',
    type: 'Knitted Fabric Unit',
    areaSize: 'Vertical Backward Integration Unit',
    capacityNotes: 'High-speed circular knitting machines producing custom polyester and cotton stretch fabrics for coating backing.',
    certifications: ['ISO 9001:2015', 'OEKO-TEX Standard 100'],
    keyHighlights: [
      'Eliminates external backing fabric dependency, guaranteeing batch-to-batch tensile strength',
      'Custom yarn blending capabilities for thermal flame-retardant backing',
      'Automatic fabric inspection machines with optical defect detection'
    ],
    coordinates: { x: 69, y: 43 },
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'plant-usa-hub',
    name: 'Mayur Uniquoters Corp. (USA)',
    city: 'Detroit Metropolitan Area, MI',
    stateCountry: 'United States',
    type: 'Global Supply Hub',
    areaSize: 'North American OEM Logistics Hub',
    capacityNotes: 'Dedicated warehousing, just-in-time (JIT) stock holding, and regional technical client support for US automakers.',
    certifications: ['OEM Tier-1 Approved Logistics Center'],
    keyHighlights: [
      'Direct EDI integration with North American automotive assembly plants',
      'Local technical service engineers available for immediate factory assistance',
      'Climate-controlled roll storage preventing material distortion'
    ],
    coordinates: { x: 24, y: 32 },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200'
  }
];
