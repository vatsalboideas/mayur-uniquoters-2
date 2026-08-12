'use client';
import React from 'react';
import { PageId, MarketSegmentData, MaterialSwatch } from '../types';
import { SegmentProductDetails } from '../components/SegmentProductDetails';
import { COMMON_SEGMENT_PRODUCTS } from '../data/segmentProductsData';
import { CheckCircle2, Eye } from 'lucide-react';

interface SegmentDetailPageProps {
  segment: MarketSegmentData;
  onNavigate: (page: PageId) => void;
  onSelectMaterial: (material: MaterialSwatch) => void;
}

export const SegmentDetailPage: React.FC<SegmentDetailPageProps> = ({
  segment,
  onNavigate,
  onSelectMaterial,
}) => {
  return (
    <div className="space-y-28 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <section className="space-y-8 border-b border-[#E5E2DC] pb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8B1E24]">
            <button onClick={() => onNavigate('segments')} className="hover:underline">
              MARKET SEGMENTS
            </button>
            <span>/</span>
            <span className="uppercase">{segment.slug}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1B19] font-light max-w-4xl leading-tight">
            {segment.title}
          </h1>

          <p className="text-sm sm:text-base text-[#6B6860] max-w-2xl font-light leading-relaxed">
            {segment.description}
          </p>
        </div>

        <div className="relative h-72 sm:h-[420px] lg:h-[480px] w-full rounded-sm overflow-hidden border border-[#D0CDC5]">
          <img
            src={segment.heroImage}
            alt={segment.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Shared product details section — same on every market segment page */}
      <SegmentProductDetails
        segmentTitle={segment.title}
        products={COMMON_SEGMENT_PRODUCTS}
      />

      {/* Applications Grid */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-[#E5E2DC] pb-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
            APPROVED APPLICATIONS
          </span>
          <h2 className="font-serif text-3xl text-[#1C1B19]">End-Use Application Showcase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segment.applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#E0DDD6] rounded-sm overflow-hidden p-6 space-y-4 shadow-xl"
            >
              <div className="relative h-64 rounded overflow-hidden border border-[#D0CDC5]">
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="font-serif text-2xl text-[#1C1B19]">{app.name}</h3>
              <p className="text-xs text-[#6B6860] leading-relaxed">{app.description}</p>

              <div className="pt-2 space-y-1.5 text-xs text-[#1C1B19]">
                {app.specs.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1E24] shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Parameters Table */}
      <section className="p-8 bg-[#FFFFFF] border border-[#E0DDD6] rounded-sm space-y-6">
        <div className="border-b border-[#E5E2DC] pb-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
            SPECIFICATION MATRIX
          </span>
          <h2 className="font-serif text-3xl text-[#1C1B19]">OEM Technical Validation Standard</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          {segment.technicalSpecs.map((ts, idx) => (
            <div key={idx} className="p-4 bg-[#F5F3EF] border border-[#E0DDD6] rounded">
              <span className="text-[10px] text-[#6B6860] block font-mono uppercase mb-1">
                {ts.label}
              </span>
              <span className="text-[#1C1B19] font-mono text-sm font-semibold">{ts.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Material Swatches for this Segment */}
      {segment.materials.length > 0 && (
        <section className="space-y-8">
          <div className="space-y-2 border-b border-[#E5E2DC] pb-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
              MATERIAL LIBRARY
            </span>
            <h2 className="font-serif text-3xl text-[#1C1B19]">
              Engineered Swatches for {segment.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {segment.materials.map((mat) => (
              <div
                key={mat.id}
                onClick={() => onSelectMaterial(mat)}
                className="group bg-[#FFFFFF] border border-[#E0DDD6] hover:border-[#8B1E24]/60 p-5 rounded-sm flex items-center justify-between cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-16 h-16 object-cover rounded border border-[#D0CDC5]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif text-lg text-[#1C1B19] group-hover:text-[#8B1E24] transition-colors">
                      {mat.name}
                    </h4>
                    <p className="text-xs text-[#6B6860] font-mono">{mat.code} • {mat.finish}</p>
                  </div>
                </div>
                <Eye className="w-5 h-5 text-[#6B6860] group-hover:text-[#8B1E24]" />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};