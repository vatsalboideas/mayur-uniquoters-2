'use client';
import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SegmentProduct } from '../types';

interface SegmentProductDetailsProps {
  segmentTitle: string;
  products: SegmentProduct[];
}

export const SegmentProductDetails: React.FC<SegmentProductDetailsProps> = ({
  segmentTitle,
  products,
}) => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  useEffect(() => {
    setActiveProductIndex(0);
  }, [segmentTitle, products]);

  if (!products.length) return null;

  const activeProduct = products[activeProductIndex] ?? products[0];

  return (
    <section className="space-y-8">
      <div className="space-y-2 border-b border-[#1C1C24] pb-4">
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
          PRODUCT DETAILS
        </span>
        <h2 className="font-serif text-3xl text-[#E8E6E1]">
          Select a Product • {activeProduct.name}
        </h2>
        <p className="text-xs text-[#A09D96] max-w-2xl leading-relaxed">
          Choose a product option below to preview the material and review finish, thickness, and validated specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-4 bg-[#0E0E12] border border-[#22222A] p-6 rounded-sm space-y-5">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#8B1E24] mb-1">
              Selected Product
            </div>
            <h3 className="font-serif text-2xl text-[#E8E6E1]">{activeProduct.name}</h3>
            <p className="text-xs font-mono text-[#A09D96] mt-1">{activeProduct.code}</p>
          </div>

          <p className="text-xs text-[#A09D96] leading-relaxed">{activeProduct.description}</p>

          <div className="space-y-2 text-xs border-t border-[#1C1C24] pt-4">
            {activeProduct.finish && (
              <div className="flex justify-between gap-4 text-[#A09D96]">
                <span>Finish</span>
                <span className="text-[#E8E6E1] font-mono text-right">{activeProduct.finish}</span>
              </div>
            )}
            {activeProduct.thickness && (
              <div className="flex justify-between gap-4 text-[#A09D96]">
                <span>Thickness</span>
                <span className="text-[#E8E6E1] font-mono text-right">{activeProduct.thickness}</span>
              </div>
            )}
          </div>

          <div className="space-y-2 border-t border-[#1C1C24] pt-4">
            <label className="text-[10px] uppercase font-mono tracking-widest text-[#A09D96] block">
              Product Options
            </label>
            <div className="flex flex-wrap gap-3">
              {products.map((product, idx) => {
                const isActive = activeProductIndex === idx;
                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => setActiveProductIndex(idx)}
                    className={`p-1 rounded transition-all ${
                      isActive
                        ? 'ring-2 ring-[#8B1E24] ring-offset-2 ring-offset-[#0E0E12]'
                        : 'hover:opacity-80'
                    }`}
                    title={`${product.name} (${product.code})`}
                    aria-label={`Select ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded object-cover border border-white/15 bg-black"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                );
              })}
            </div>
            <div className="text-xs font-mono text-[#E8E6E1]">
              Active Option: {activeProduct.name}
            </div>
          </div>

          <div className="space-y-2 border-t border-[#1C1C24] pt-4">
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#A09D96]">
              Validated Specs
            </div>
            <div className="space-y-1.5 text-xs text-[#A09D96]">
              {activeProduct.specs.map((spec) => (
                <div key={spec} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8B1E24] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="relative bg-[#0D0D11] border border-[#22222C] rounded-sm overflow-hidden shadow-2xl">
            <div className="relative min-h-[420px] bg-black flex items-center justify-center p-8">
              <img
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.name}
                className="max-h-[360px] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#8B1E24]">
                  {segmentTitle}
                </div>
                <h4 className="font-serif text-2xl text-white">{activeProduct.name}</h4>
                <p className="text-xs font-mono text-[#A09D96]">{activeProduct.code}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};