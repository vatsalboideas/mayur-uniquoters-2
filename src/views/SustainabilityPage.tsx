'use client';
import React from 'react';
import { PageId } from '../types';
import { Award, Leaf, Sun, Droplets, RefreshCw, ShieldCheck, ArrowRight } from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (page: PageId) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-28 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="space-y-6 border-b border-[#1C1C24] pb-12">
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24] bg-[#8B1E24]/20 border border-[#8B1E24]/40 px-3 py-1 rounded inline-block">
          SUSTAINABILITY & ENVIRONMENTAL RESPONSIBILITY
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#E8E6E1] font-light max-w-4xl leading-tight">
          Responsible Material Engineering for a Clean Future
        </h1>

        <p className="text-sm sm:text-base text-[#A09D96] max-w-2xl font-light leading-relaxed">
          At Mayur Uniquoters, sustainability is built directly into our process chemistry. From 100% Zero Liquid Discharge water reclamation to solvent recovery and bio-based PU formulations, we minimize environmental footprint across every meter.
        </p>
      </section>

      {/* Sustainability Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-8 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
          <div className="w-10 h-10 rounded bg-[#8B1E24]/20 border border-[#8B1E24]/40 flex items-center justify-center text-[#8B1E24]">
            <Droplets className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl text-[#E8E6E1]">Zero Liquid Discharge (ZLD)</h3>
          <p className="text-xs text-[#A09D96] leading-relaxed">
            100% of industrial process water is recycled on-site through reverse osmosis and MVR evaporators, discharging zero liquid waste into local water bodies.
          </p>
        </div>

        <div className="p-8 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
          <div className="w-10 h-10 rounded bg-[#8B1E24]/20 border border-[#8B1E24]/40 flex items-center justify-center text-[#8B1E24]">
            <RefreshCw className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl text-[#E8E6E1]">Solvent Recovery System</h3>
          <p className="text-xs text-[#A09D96] leading-relaxed">
            Advanced carbon absorption units capture up to 95% of volatile coating solvents, re-distilling them for closed-loop production recycling.
          </p>
        </div>

        <div className="p-8 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
          <div className="w-10 h-10 rounded bg-[#8B1E24]/20 border border-[#8B1E24]/40 flex items-center justify-center text-[#8B1E24]">
            <Sun className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl text-[#E8E6E1]">Solar Energy Integration</h3>
          <p className="text-xs text-[#A09D96] leading-relaxed">
            On-site rooftop solar arrays generate clean renewable electricity, reducing grid carbon reliance across manufacturing operations.
          </p>
        </div>

        <div className="p-8 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
          <div className="w-10 h-10 rounded bg-[#8B1E24]/20 border border-[#8B1E24]/40 flex items-center justify-center text-[#8B1E24]">
            <Leaf className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl text-[#E8E6E1]">Bio-Based Polyurethane</h3>
          <p className="text-xs text-[#A09D96] leading-relaxed">
            Formulating next-gen surface coatings with non-food renewable plant polyols, reducing embedded carbon while matching Nappa leather luxury.
          </p>
        </div>

        <div className="p-8 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
          <div className="w-10 h-10 rounded bg-[#8B1E24]/20 border border-[#8B1E24]/40 flex items-center justify-center text-[#8B1E24]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl text-[#E8E6E1]">REACH & OEKO-TEX Compliance</h3>
          <p className="text-xs text-[#A09D96] leading-relaxed">
            Formulations are strictly free from phthalates, heavy metals, formaldehyde, and substances of very high concern (SVHC).
          </p>
        </div>
      </div>
    </div>
  );
};