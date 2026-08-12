'use client';
import React, { useState, useEffect } from 'react';
import { MaterialSwatch } from '../types';
import { X, Check, Eye, Sliders, ShieldCheck, Download, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MaterialLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  material: MaterialSwatch | null;
  onRequestSample?: (material: MaterialSwatch) => void;
}

export const MaterialLibraryModal: React.FC<MaterialLibraryModalProps> = ({
  isOpen,
  onClose,
  material,
  onRequestSample,
}) => {
  const [selectedColor, setSelectedColor] = useState(material?.colors[0]);
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'applications'>('overview');

  useEffect(() => {
    if (material?.colors?.[0]) {
      setSelectedColor(material.colors[0]);
      setActiveTab('overview');
    }
  }, [material]);

  if (!isOpen || !material || !selectedColor) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#FFFFFF] border border-[#D0CDC5] rounded-sm shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#F5F3EF] border-b border-[#E0DDD6]">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#8B1E24] bg-[#8B1E24]/20 border border-[#8B1E24]/40 px-2 py-0.5 rounded">
                SWATCH INSPECTOR
              </span>
              <h3 className="font-serif text-lg text-[#1C1B19] font-semibold">{material.name}</h3>
              <span className="text-xs font-mono text-[#6B6860]">({material.code})</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#6B6860] hover:text-[#1C1B19] hover:bg-[#E0DDD6] rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Left: Swatch Image Preview & Color Picker */}
            <div className="space-y-6">
              <div
                className="relative h-72 rounded-sm overflow-hidden border border-[#D9D6CF] shadow-inner group"
                style={{ backgroundColor: selectedColor.hex }}
              >
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 leather-grain opacity-50 pointer-events-none" />

                {/* Selected Color Badge */}
                <div className="absolute bottom-3 left-3 bg-[#FFFFFF]/90 border border-[#D0CDC5] px-3 py-1.5 rounded text-xs backdrop-blur-sm flex items-center gap-2">
                  <div
                    className="w-3.5 h-3.5 rounded-full border border-white/40"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  <span className="text-[#1C1B19] font-medium">{selectedColor.name}</span>
                  <span className="text-[10px] text-[#6B6860] font-mono">({selectedColor.hex})</span>
                </div>
              </div>

              {/* Color Swatch Selection Grid */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#6B6860] font-semibold block">
                  Select Color Variant ({material.colors.length} Options)
                </label>
                <div className="flex flex-wrap items-center gap-2.5">
                  {material.colors.map((color) => {
                    const isSelected = selectedColor.hex === color.hex;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`group relative p-1 rounded transition-all ${
                          isSelected ? 'ring-2 ring-[#8B1E24] ring-offset-2 ring-offset-[#FFFFFF]' : 'hover:opacity-90'
                        }`}
                        title={color.name}
                      >
                        <div
                          className="w-7 h-7 rounded border border-white/20 shadow-sm flex items-center justify-center"
                          style={{ backgroundColor: color.hex }}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 text-white drop-shadow" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Technical Specs & Information Tabs */}
            <div className="space-y-6 flex flex-col justify-between">
              <div>
                {/* Tab Navigation */}
                <div className="flex border-b border-[#E0DDD6] gap-6 text-xs mb-4">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`pb-2 uppercase tracking-wider font-medium transition-colors relative ${
                      activeTab === 'overview' ? 'text-[#1C1B19]' : 'text-[#8A8780] hover:text-[#6B6860]'
                    }`}
                  >
                    Overview
                    {activeTab === 'overview' && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B1E24]" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('technical')}
                    className={`pb-2 uppercase tracking-wider font-medium transition-colors relative ${
                      activeTab === 'technical' ? 'text-[#1C1B19]' : 'text-[#8A8780] hover:text-[#6B6860]'
                    }`}
                  >
                    Technical Specs
                    {activeTab === 'technical' && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B1E24]" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('applications')}
                    className={`pb-2 uppercase tracking-wider font-medium transition-colors relative ${
                      activeTab === 'applications' ? 'text-[#1C1B19]' : 'text-[#8A8780] hover:text-[#6B6860]'
                    }`}
                  >
                    Applications
                    {activeTab === 'applications' && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B1E24]" />
                    )}
                  </button>
                </div>

                {/* Tab Content: Overview */}
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <p className="text-xs text-[#6B6860] leading-relaxed">
                      {material.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 bg-[#F3F1ED] border border-[#E0DDD6] rounded">
                        <span className="text-[10px] text-[#6B6860] block uppercase font-mono">Category</span>
                        <span className="text-[#1C1B19] font-semibold">{material.category}</span>
                      </div>
                      <div className="p-2.5 bg-[#F3F1ED] border border-[#E0DDD6] rounded">
                        <span className="text-[10px] text-[#6B6860] block uppercase font-mono">Finish Type</span>
                        <span className="text-[#1C1B19] font-semibold">{material.finish}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[#6B6860] font-semibold block">
                        Core Engineering Highlights
                      </label>
                      <div className="space-y-1.5 text-xs text-[#6B6860]">
                        {material.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#8B1E24] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content: Technical */}
                {activeTab === 'technical' && (
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between py-2 border-b border-[#E0DDD6]">
                      <span className="text-[#6B6860]">Gauge Thickness:</span>
                      <span className="text-[#1C1B19] font-mono font-medium">{material.thickness}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E0DDD6]">
                      <span className="text-[#6B6860]">Embossing Roller Pattern:</span>
                      <span className="text-[#1C1B19] font-mono font-medium">{material.embossingPattern}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#E0DDD6]">
                      <span className="text-[#6B6860]">Substrate Backing:</span>
                      <span className="text-[#1C1B19] font-mono font-medium">{material.substrate}</span>
                    </div>
                  </div>
                )}

                {/* Tab Content: Applications */}
                {activeTab === 'applications' && (
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#6B6860] font-semibold block">
                      Approved Industry End-Uses
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {material.applications.map((app, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-[#F0EEEA] border border-[#D4D1C9] text-xs text-[#1C1B19] rounded"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-[#E0DDD6] flex items-center gap-3">
                <button
                  onClick={() => {
                    if (onRequestSample) onRequestSample(material);
                    onClose();
                  }}
                  className="flex-1 py-3 bg-[#8B1E24] hover:bg-[#9E232A] text-white text-xs uppercase tracking-[0.2em] font-semibold text-center rounded transition-colors shadow-lg"
                >
                  Request Physical Swatch Book
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};