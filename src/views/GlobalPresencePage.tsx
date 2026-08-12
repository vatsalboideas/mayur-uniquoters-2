'use client';
import React, { useState } from 'react';
import { PageId } from '../types';
import { MapPin, Globe, CheckCircle2, Building, Ship, ArrowRight } from 'lucide-react';

interface GlobalPresencePageProps {
  onNavigate: (page: PageId) => void;
}

export const GlobalPresencePage: React.FC<GlobalPresencePageProps> = ({ onNavigate }) => {
  const [selectedHub, setSelectedHub] = useState<number>(0);

  const locations = [
    {
      id: 0,
      title: 'Global Headquarters & R&D Center',
      region: 'India (Jaipur)',
      desc: 'Central corporate house, R&D climate labs, and primary manufacturing complexes.',
      coords: { x: '68%', y: '48%' },
      specs: ['2 Primary Plants', 'Vertical Knitting Unit', 'Central OEM Testing Lab']
    },
    {
      id: 1,
      title: 'North American Supply & Logistics Corp.',
      region: 'United States (Detroit, MI)',
      desc: 'Tier-1 automotive warehousing, local JIT delivery, and technical OEM client support.',
      coords: { x: '25%', y: '32%' },
      specs: ['Direct EDI Integration', 'JIT Stock Holding', 'Climate Controlled Roll Storage']
    },
    {
      id: 2,
      title: 'European Automotive & Luxury Distribution',
      region: 'Europe (Germany & UK)',
      desc: 'Dedicated technical agency network serving European OEMs and contract furnishing studios.',
      coords: { x: '50%', y: '28%' },
      specs: ['BS 5852 & Crib 5 Compliant Stock', 'REACH Certified Logistics']
    },
    {
      id: 3,
      title: 'Asia-Pacific & Middle East Logistics Hubs',
      region: 'Middle East & East Asia',
      desc: 'Export hubs supplying footwear manufacturers, commercial seating, and automotive aftermarket.',
      coords: { x: '78%', y: '52%' },
      specs: ['Rapid Containerized Freight', 'Regional Technical Managers']
    }
  ];

  return (
    <div className="space-y-28 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="space-y-6 border-b border-[#E5E2DC] pb-12">
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24] bg-[#8B1E24]/20 border border-[#8B1E24]/40 px-3 py-1 rounded inline-block">
          GLOBAL FOOTPRINT & SUPPLY NETWORK
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1B19] font-light max-w-4xl leading-tight">
          Delivering Material Excellence to 20+ Nations
        </h1>

        <p className="text-sm sm:text-base text-[#6B6860] max-w-2xl font-light leading-relaxed">
          Through strategic warehousing in North America, direct OEM integration, and international logistics partners, Mayur Uniquoters ensures seamlessly synchronized supply chains.
        </p>
      </section>

      {/* Interactive World Map Section */}
      <section className="space-y-8">
        <div className="bg-[#FFFFFF] border border-[#E0DDD6] rounded-sm p-6 sm:p-10 space-y-8 shadow-2xl">
          <div className="relative h-96 sm:h-[450px] w-full bg-[#F5F3EF] rounded border border-[#E0DDD6] overflow-hidden flex items-center justify-center p-4">
            {/* World Map Vector Graphic Background */}
            <svg
              className="w-full h-full opacity-30 stroke-[#C5C2BA] fill-[#E5E2DC]"
              viewBox="0 0 1000 500"
            >
              {/* Simplified World Continents SVG Paths */}
              <path d="M150,120 Q200,80 280,100 Q320,150 250,220 Q180,240 120,180 Z" />
              <path d="M250,260 Q320,280 340,380 Q280,450 220,380 Z" />
              <path d="M450,100 Q550,80 620,140 Q580,220 480,200 Z" />
              <path d="M480,220 Q560,240 580,380 Q500,420 440,320 Z" />
              <path d="M620,100 Q780,80 880,180 Q820,300 680,260 Z" />
              <path d="M780,340 Q880,350 860,440 Q780,450 750,380 Z" />
            </svg>

            {/* Interactive Location Nodes */}
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedHub(loc.id)}
                className={`absolute z-10 p-3 rounded-full flex items-center gap-2 border transition-all ${
                  selectedHub === loc.id
                    ? 'bg-[#8B1E24] text-white border-white/50 scale-125 shadow-xl ring-4 ring-[#8B1E24]/30'
                    : 'bg-[#F0EEEA] text-[#6B6860] hover:bg-[#8B1E24] hover:text-white border-[#C5C2BA]'
                }`}
                style={{ top: loc.coords.y, left: loc.coords.x }}
              >
                <MapPin className="w-4 h-4" />
                <span className="hidden md:inline text-[10px] font-mono uppercase tracking-wider font-semibold">
                  {loc.region}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Location Info Card */}
          <div className="p-6 bg-[#F5F3EF] border border-[#E0DDD6] rounded flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#8B1E24] uppercase tracking-widest block">
                {locations[selectedHub].region}
              </span>
              <h3 className="font-serif text-2xl text-[#1C1B19]">
                {locations[selectedHub].title}
              </h3>
              <p className="text-xs text-[#6B6860] max-w-xl leading-relaxed">
                {locations[selectedHub].desc}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-[#1C1B19] shrink-0 bg-[#FFFFFF] p-4 rounded border border-[#E0DDD6]">
              <span className="text-[10px] text-[#6B6860] block uppercase font-mono mb-1">
                Regional Specs
              </span>
              {locations[selectedHub].specs.map((s, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1E24]" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};