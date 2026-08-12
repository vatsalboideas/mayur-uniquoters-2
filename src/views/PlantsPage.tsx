'use client';
import React, { useState } from 'react';
import { PageId, PlantLocation } from '../types';
import { PLANT_LOCATIONS } from '../data/plantsData';
import { Factory, ShieldCheck, CheckCircle2, Cpu, MapPin, Award } from 'lucide-react';

interface PlantsPageProps {
  onNavigate: (page: PageId) => void;
}

export const PlantsPage: React.FC<PlantsPageProps> = ({ onNavigate }) => {
  const [selectedPlant, setSelectedPlant] = useState<PlantLocation>(PLANT_LOCATIONS[0]);

  return (
    <div className="space-y-28 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="space-y-6 border-b border-[#1C1C24] pb-12">
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24] bg-[#8B1E24]/20 border border-[#8B1E24]/40 px-3 py-1 rounded inline-block">
          MANUFACTURING FACILITIES & TECHNOLOGY
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#E8E6E1] font-light max-w-4xl leading-tight">
          High-Precision Coating & Vertical Infrastructure
        </h1>

        <p className="text-sm sm:text-base text-[#A09D96] max-w-2xl font-light leading-relaxed">
          Operating state-of-the-art production complexes in Rajasthan, India, backed by automated raw material dosing, solvent recovery, and integrated knitted fabric manufacturing.
        </p>
      </section>

      {/* Facility Explorer Component */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
          {PLANT_LOCATIONS.map((plant) => {
            const isSelected = selectedPlant.id === plant.id;
            return (
              <button
                key={plant.id}
                onClick={() => setSelectedPlant(plant)}
                className={`px-6 py-3 rounded border text-left shrink-0 transition-all ${
                  isSelected
                    ? 'bg-[#8B1E24] text-white border-[#C43D44] shadow-lg'
                    : 'bg-[#121218] text-[#A09D96] border-[#22222E] hover:bg-[#181822]'
                }`}
              >
                <div className="text-xs font-semibold">{plant.name}</div>
                <div className="text-[10px] font-mono opacity-80">{plant.city}</div>
              </button>
            );
          })}
        </div>

        <div className="bg-[#0E0E12] border border-[#22222A] rounded-sm p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          <div className="lg:col-span-6 relative h-80 sm:h-[380px] rounded overflow-hidden border border-[#2A2A38]">
            <img
              src={selectedPlant.image}
              alt={selectedPlant.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[10px] font-mono text-[#8B1E24] uppercase tracking-widest block">
                {selectedPlant.type}
              </span>
              <h2 className="font-serif text-3xl text-[#E8E6E1]">{selectedPlant.name}</h2>
              <div className="flex items-center gap-2 text-xs text-[#A09D96] mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#8B1E24]" />
                <span>{selectedPlant.city}, {selectedPlant.stateCountry}</span>
              </div>
            </div>

            <p className="text-xs text-[#A09D96] leading-relaxed">{selectedPlant.capacityNotes}</p>

            <div className="space-y-2 border-t border-[#1C1C24] pt-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#E8E6E1] block">
                Plant Highlights & Capabilities
              </span>
              <div className="space-y-1.5 text-xs text-[#A09D96]">
                {selectedPlant.keyHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1E24] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {selectedPlant.certifications.map((cert, i) => (
                <span key={i} className="px-2.5 py-1 bg-[#181822] border border-[#282836] text-[10px] text-[#E8E6E1] font-mono rounded">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};