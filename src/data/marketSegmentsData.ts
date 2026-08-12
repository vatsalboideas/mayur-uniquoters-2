import { MarketSegmentData } from '../types';
import { MATERIAL_SWATCHES } from './materialsData';
import { COMMON_SEGMENT_PRODUCTS } from './segmentProductsData';

export const MARKET_SEGMENTS: MarketSegmentData[] = [
  {
    id: 'seg-auto',
    title: 'Automotive Interiors',
    slug: 'automotive',
    tagline: 'Precision engineered surface solutions for global mobility OEMs.',
    description: 'Mayur Uniquoters is a trusted tier-1 and tier-2 partner to leading global automotive manufacturers. Our advanced coated materials undergo rigorous environmental, thermal, and mechanical validation to ensure flawless performance in passenger cars, commercial vehicles, and premium mobility systems.',
    heroImage: '/src/assets/images/mayur_auto_interior_1786517312958.jpg',
    secondaryImage: '/src/assets/images/mayur_hero_material_1786517295424.jpg',
    applications: [
      {
        name: 'Passenger Cars & EV Interiors',
        description: 'Perforated and non-perforated seat covers, headrests, and door card inserts engineered for thermal comfort and luxury haptics.',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
        specs: ['SAE J2527 Weatherometer Tested', 'FMVSS 302 Flame Resistance', 'Low VOC / Anti-Fogging Standard'],
      },
      {
        name: 'Instrument Panels & Dashboards',
        description: 'Ultra-plump stretchable coated materials capable of seamless vacuum-forming around complex ergonomic contours.',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200',
        specs: ['Airbag Deployment Validated', 'High Heat Aging (120°C for 500h)', 'Soft-Touch Haptic Polymer'],
      },
      {
        name: 'Commercial Vehicles & Busses',
        description: 'Heavy-duty seat surfaces built for high passenger turnarounds, anti-fungal properties, and extreme abrasion resistance.',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200',
        specs: ['Martindale Abrasion >150,000 Cycles', 'Easy-Clean Protective Coating', 'Stain Guard Resin'],
      },
      {
        name: 'Two-Wheelers & Marine Applications',
        description: 'Weatherproof, UV-stabilized, and waterproof seating materials for motorcycles, scooters, and luxury yachts.',
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1200',
        specs: ['Salt Fog Corrosion Resistant', 'Cold Crack -20°C Compliance', 'Non-Slip Textured Finish'],
      }
    ],
    keyFeatures: [
      { title: 'Global OEM Approvals', desc: 'Validated by leading automobile brands across North America, Europe, and Asia.' },
      { title: 'Acoustic & Thermal Comfort', desc: 'Perforated micro-grids promote air ventilation and reduce interior ambient noise.' },
      { title: 'Sustainability-Driven', desc: 'Incorporating bio-based polymers, solvent-free coatings, and recycled polyester backings.' },
      { title: 'In-House Testing Labs', desc: 'Equipped with taber abrasers, weatherometers, fogging testers, and gas chromatography.' }
    ],
    technicalSpecs: [
      { label: 'Tensile Strength', value: '> 650 N / 5cm' },
      { label: 'Tear Strength', value: '> 45 N' },
      { label: 'Flame Retardancy', value: 'FMVSS 302 Pass (<100mm/min)' },
      { label: 'Fogging Value', value: '> 90% Reflectance / Gravimetric <2mg' },
      { label: 'Hydrolysis Aging', value: '10 Weeks at 70°C / 95% RH' }
    ],
    products: COMMON_SEGMENT_PRODUCTS,
    materials: MATERIAL_SWATCHES.filter(m => m.category === 'Automotive')
  },
  {
    id: 'seg-furnishing',
    title: 'Architectural & Interior Furnishing',
    slug: 'furnishing',
    tagline: 'Transforming interior spaces through tactile warmth and enduring durability.',
    description: 'From luxury residential modular seating to high-traffic hospitality lobbies, boutique hotels, restaurants, and executive commercial developments. Our furnishing material collection blends rich natural grain aesthetics with commercial-grade stain resistance and fire safety.',
    heroImage: '/src/assets/images/mayur_furnishing_1786517327875.jpg',
    secondaryImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    applications: [
      {
        name: 'Residential Lounge & Modular Sofas',
        description: 'Supple, warm-touch upholstery material engineered for cozy residential living environments and modular seating systems.',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
        specs: ['BS 5852 Crib 5 Certified', 'Phthalate-Free Formulation', 'Breathable Fleece Backing'],
      },
      {
        name: 'Hospitality & Commercial Dining',
        description: 'High-durability coated surfaces that withstand frequent chemical disinfection without fading or hardening.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
        specs: ['Bleach Cleanable (10:1 Ratio)', 'Anti-Microbial / Anti-Fungal Guard', 'Wyzenbeek Cotton Duck >100k Double Rubs'],
      },
      {
        name: 'Auditoriums, Theatres & Stadiums',
        description: 'Flame retardant, acoustic-dampening seating materials crafted for high-occupancy venues.',
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200',
        specs: ['FAR 25.853 Aircraft/Auditorium Spec', 'Lightfastness Blue Wool Scale >6', 'High Tear Resistance'],
      },
      {
        name: 'Outdoor & Poolside Furniture',
        description: 'UV-proof, mildew-resistant synthetic leather designed to withstand direct sunlight, rain, and chlorinated pool splash.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
        specs: ['QUV Accelerated Weathering 1500 Hours', 'Water Repellent Top Coat', 'Saltwater Resistant'],
      }
    ],
    keyFeatures: [
      { title: 'Rich Tactile Haptics', desc: 'Embossing patterns mimicking the finest full-grain Italian leathers and aniline finishes.' },
      { title: 'Easy Stain Removal', desc: 'Special protective topcoat allows effortless wiping of wine, ink, coffee, and oil.' },
      { title: 'Eco-Conscious Chemistry', desc: 'Free from heavy metals, formaldehyde, phthalates, and REACH SVHC chemicals.' },
      { title: 'Custom Color Matching', desc: 'Spectral color matching to fit precise interior designer palettes.' }
    ],
    technicalSpecs: [
      { label: 'Martindale Abrasion', value: '> 100,000 Rubs' },
      { label: 'Flame Resistance', value: 'BS 5852 / CAL 117 Pass' },
      { label: 'Color Fastness to Light', value: 'ISO 105-B02 Grade 6+' },
      { label: 'Flexing Endurance', value: '50,000 Cycles Dry & Wet' }
    ],
    products: COMMON_SEGMENT_PRODUCTS,
    materials: MATERIAL_SWATCHES.filter(m => m.category === 'Furnishing')
  },
  {
    id: 'seg-footwear',
    title: 'Footwear Material Solutions',
    slug: 'footwear',
    tagline: 'High-performance synthetic leather for fashion, lifestyle, and athletic footwear.',
    description: 'Engineering shoe uppers, linings, counter insoles, and structural reinforcements that provide supreme breathability, flex fatigue resistance, and rich aesthetic finishes for global footwear brands.',
    heroImage: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=1200',
    secondaryImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200',
    applications: [
      {
        name: 'Athletic & Performance Sneakers',
        description: 'Lightweight micro-porous uppers offering maximum flex cycles, dynamic rebound, and abrasion protection.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200',
        specs: ['Bally Flex >250,000 Cycles', 'Water Vapor Permeability >3.5 mg/cm²h', 'High Bonding Strength'],
      },
      {
        name: 'Formal & Lifestyle Dress Shoes',
        description: 'Supple materials with high-luster burnish effects and deep aniline grain appearance for formal footwear.',
        image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=1200',
        specs: ['Toe Puff & Counter Moldable', 'Scuff Resistant Polish Finish', 'Natural Grain Memory'],
      },
      {
        name: 'Work Boots & Safety Footwear',
        description: 'Heavy-gauge reinforced synthetic materials with chemical, oil, and puncture protection for industrial boots.',
        image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&q=80&w=1200',
        specs: ['EN ISO 20344 Safety Standard', 'Acid & Alkali Resistant Coating', 'Cold Flex -15°C'],
      }
    ],
    keyFeatures: [
      { title: 'Extreme Flex Fatigue', desc: 'Maintains structure over hundreds of thousands of flex cycles without surface cracking.' },
      { title: 'Vapor Breathability', desc: 'Advanced porous coatings prevent moisture buildup inside footwear.' },
      { title: 'Precision Thickness Control', desc: 'Consistent gauge (+/- 0.05mm) across entire roll width for automated shoe cutting.' }
    ],
    technicalSpecs: [
      { label: 'Bally Flexometer', value: '250,000 Cycles without cracking' },
      { label: 'Tensile Strength', value: 'Warp > 450N / Weft > 350N' },
      { label: 'Adhesion of Coating', value: 'ISO 2411 > 35 N/cm' }
    ],
    products: COMMON_SEGMENT_PRODUCTS,
    materials: MATERIAL_SWATCHES.filter(m => m.category === 'Footwear')
  },
  {
    id: 'seg-leather-goods',
    title: 'Luxury Leather Goods & Accessories',
    slug: 'leather-goods',
    tagline: 'Artisanal texture, rich color depth, and sustainable elegance for fashion accessories.',
    description: 'Providing luxury material solutions for high-end fashion handbags, travel luggage, wallets, belts, and luxury device covers. Combines the tactile prestige of fine leather with cruelty-free sustainability and technical longevity.',
    heroImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1200',
    secondaryImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1200',
    applications: [
      {
        name: 'Luxury Handbags & Totes',
        description: 'Structured yet supple materials with distinct embossing options including Epsom pebble, Saffiano cross-grain, and Smooth Box calf.',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1200',
        specs: ['Edge Paint Adhesion Compliant', 'Zero Color Bleed / Migration', 'Scratch Resistant Polyurethane'],
      },
      {
        name: 'Travel Luggage & Duffel Bags',
        description: 'High-strength structural coated materials engineered for heavy payload support, drag resistance, and flight travel stress.',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1200',
        specs: ['High Tensile Stitch Strength', 'Waterproof Barrier Coating', 'UV Fade Protected'],
      },
      {
        name: 'Small Accessories & Tech Sleeves',
        description: 'Precision thin-gauge materials designed for sleek wallet folds, watch straps, and laptop sleeves.',
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1200',
        specs: ['Sharp Edge Folding Memory', 'Tactile Satin Finish', 'MagSafe / Wireless Charging Safe'],
      }
    ],
    keyFeatures: [
      { title: 'Artisanal Embossing', desc: 'Over 200 bespoke metal roller textures developed by European master engravers.' },
      { title: 'Cruelty-Free Luxury', desc: '100% vegan material with zero animal products, matching natural leather drape.' },
      { title: 'Precise Skiving Ability', desc: 'Can be skived cleanly at fine edges down to 0.4mm without fraying.' }
    ],
    technicalSpecs: [
      { label: 'Stitch Tear Strength', value: '> 60 N' },
      { label: 'Color Migration', value: 'ISO 15701 Grade 5 (No Stain)' },
      { label: 'Thickness Uniformity', value: '0.9mm ± 0.03mm' }
    ],
    products: COMMON_SEGMENT_PRODUCTS,
    materials: MATERIAL_SWATCHES.filter(m => m.category === 'Leather Goods')
  }
];
