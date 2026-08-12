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
      <section className="space-y-6 border-b border-[#1C1C24] pb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8B1E24]">
          <button onClick={() => onNavigate('segments')} className="hover:underline">
            MARKET SEGMENTS
          </button>
          <span>/</span>
          <span className="uppercase">{segment.slug}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#E8E6E1] font-light max-w-4xl leading-tight">
          {segment.title}
        </h1>

        <p className="text-sm sm:text-base text-[#A09D96] max-w-2xl font-light leading-relaxed">
          {segment.description}
        </p>
      </section>

      {/* Shared product details section — same on every market segment page */}
      <SegmentProductDetails
        segmentTitle={segment.title}
        products={COMMON_SEGMENT_PRODUCTS}
      />

      {/* Applications Grid */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-[#1C1C24] pb-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
            APPROVED APPLICATIONS
          </span>
          <h2 className="font-serif text-3xl text-[#E8E6E1]">End-Use Application Showcase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segment.applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-[#0E0E12] border border-[#22222A] rounded-sm overflow-hidden p-6 space-y-4 shadow-xl"
            >
              <div className="relative h-64 rounded overflow-hidden border border-[#2A2A38]">
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="font-serif text-2xl text-[#E8E6E1]">{app.name}</h3>
              <p className="text-xs text-[#A09D96] leading-relaxed">{app.description}</p>

              <div className="pt-2 space-y-1.5 text-xs text-[#E8E6E1]">
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
      <section className="p-8 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-6">
        <div className="border-b border-[#1C1C24] pb-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
            SPECIFICATION MATRIX
          </span>
          <h2 className="font-serif text-3xl text-[#E8E6E1]">OEM Technical Validation Standard</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          {segment.technicalSpecs.map((ts, idx) => (
            <div key={idx} className="p-4 bg-[#14141C] border border-[#22222E] rounded">
              <span className="text-[10px] text-[#A09D96] block font-mono uppercase mb-1">
                {ts.label}
              </span>
              <span className="text-[#E8E6E1] font-mono text-sm font-semibold">{ts.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Material Swatches for this Segment */}
      {segment.materials.length > 0 && (
        <section className="space-y-8">
          <div className="space-y-2 border-b border-[#1C1C24] pb-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
              MATERIAL LIBRARY
            </span>
            <h2 className="font-serif text-3xl text-[#E8E6E1]">
              Engineered Swatches for {segment.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {segment.materials.map((mat) => (
              <div
                key={mat.id}
                onClick={() => onSelectMaterial(mat)}
                className="group bg-[#0E0E12] border border-[#22222A] hover:border-[#8B1E24]/60 p-5 rounded-sm flex items-center justify-between cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-16 h-16 object-cover rounded border border-[#2A2A38]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif text-lg text-[#E8E6E1] group-hover:text-[#8B1E24] transition-colors">
                      {mat.name}
                    </h4>
                    <p className="text-xs text-[#A09D96] font-mono">{mat.code} • {mat.finish}</p>
                  </div>
                </div>
                <Eye className="w-5 h-5 text-[#A09D96] group-hover:text-[#8B1E24]" />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};