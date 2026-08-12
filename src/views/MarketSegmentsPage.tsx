'use client';
import React from 'react';
import { PageId } from '../types';
import { MARKET_SEGMENTS } from '../data/marketSegmentsData';
import { ArrowRight, ChevronRight, Layers } from 'lucide-react';

interface MarketSegmentsPageProps {
  onNavigate: (page: PageId) => void;
}

export const MarketSegmentsPage: React.FC<MarketSegmentsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="space-y-6 border-b border-[#E5E2DC] pb-12">
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24] bg-[#8B1E24]/20 border border-[#8B1E24]/40 px-3 py-1 rounded inline-block">
          INDUSTRIAL MARKET SEGMENTS
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1B19] font-light max-w-4xl leading-tight">
          Where Material Intelligence Transforms Experience
        </h1>

        <p className="text-sm sm:text-base text-[#6B6860] max-w-2xl font-light leading-relaxed">
          From passenger cars to boutique hotel lounges, fashion footwear, and luxury handbags, our surface materials are engineered to meet the stringent demands of world-leading brands.
        </p>
      </section>

      {/* Segments Showcase Cards */}
      <div className="space-y-16">
        {MARKET_SEGMENTS.map((segment, idx) => (
          <div
            key={segment.id}
            className="bg-[#FFFFFF] border border-[#E0DDD6] rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 shadow-xl"
          >
            <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1B19]">
                {segment.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#6B6860] leading-relaxed">
                {segment.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C1B19] block">
                  Key Application Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {segment.applications.map((app, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#F0EEEA] border border-[#D4D1C9] text-xs text-[#6B6860] rounded"
                    >
                      {app.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E2DC]">
                <button
                  onClick={() => onNavigate(`segment-${segment.slug}` as PageId)}
                  className="px-6 py-3 bg-[#8B1E24] hover:bg-[#9E232A] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded transition-all inline-flex items-center gap-2 group"
                >
                  <span>Explore {segment.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''} relative h-80 sm:h-[380px] rounded overflow-hidden border border-[#D0CDC5]`}>
              <img
                src={segment.heroImage}
                alt={segment.title}
                className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};