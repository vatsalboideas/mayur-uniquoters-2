'use client';
import React, { useEffect, useState } from 'react';
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
      <div className="space-y-2 border-b border-[#E5E2DC] pb-4">
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
          PRODUCT DETAILS
        </span>
        <h2 className="font-serif text-3xl text-[#1C1B19]">
          Select a Product • {activeProduct.name}
        </h2>
        <p className="text-xs text-[#6B6860] max-w-2xl leading-relaxed">
          Choose a product option below to preview the material and review finish, thickness, and validated specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#E0DDD6] p-6 rounded-sm space-y-5 h-full flex flex-col">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#8B1E24] mb-1">
              Selected Product
            </div>
            <h3 className="font-serif text-2xl text-[#1C1B19]">{activeProduct.name}</h3>
            <p className="text-xs font-mono text-[#6B6860] mt-1">{activeProduct.code}</p>
          </div>

          <p className="text-xs text-[#6B6860] leading-relaxed">{activeProduct.description}</p>

          <div className="space-y-2 text-xs border-t border-[#E5E2DC] pt-4">
            {activeProduct.finish && (
              <div className="flex justify-between gap-4 text-[#6B6860]">
                <span>Finish</span>
                <span className="text-[#1C1B19] font-mono text-right">{activeProduct.finish}</span>
              </div>
            )}
            {activeProduct.thickness && (
              <div className="flex justify-between gap-4 text-[#6B6860]">
                <span>Thickness</span>
                <span className="text-[#1C1B19] font-mono text-right">{activeProduct.thickness}</span>
              </div>
            )}
          </div>

          <div className="space-y-2 border-t border-[#E5E2DC] pt-4 mt-auto">
            <label className="text-[10px] uppercase font-mono tracking-widest text-[#6B6860] block">
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
                        ? 'ring-2 ring-[#8B1E24] ring-offset-2 ring-offset-[#FFFFFF]'
                        : 'hover:opacity-80'
                    }`}
                    title={`${product.name} (${product.code})`}
                    aria-label={`Select ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded object-cover border border-[#E0DDD6] bg-[#F7F5F2]"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                );
              })}
            </div>
            <div className="text-xs font-mono text-[#1C1B19]">
              Active Option: {activeProduct.name}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 h-full">
          <div className="relative bg-[#FFFFFF] border border-[#E0DDD6] rounded-sm overflow-hidden shadow-2xl h-full min-h-[420px]">
            <div className="relative h-full min-h-[420px] bg-[#F7F5F2] flex items-center justify-center p-8">
              <img
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.name}
                className="max-h-[360px] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};