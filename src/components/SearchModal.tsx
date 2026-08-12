'use client';
import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Search, X, Layers, Factory, Newspaper, Award, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MATERIAL_SWATCHES } from '../data/materialsData';
import { MARKET_SEGMENTS } from '../data/marketSegmentsData';
import { NEWS_ARTICLES } from '../data/newsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onSelectMaterial?: (materialId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectMaterial,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open via parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredMaterials = MATERIAL_SWATCHES.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.category.toLowerCase().includes(query.toLowerCase()) ||
      m.finish.toLowerCase().includes(query.toLowerCase()) ||
      m.code.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSegments = MARKET_SEGMENTS.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredNews = NEWS_ARTICLES.filter(
    (n) =>
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.summary.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-[#121216] border border-[#2A2A34] rounded-sm shadow-2xl overflow-hidden"
        >
          {/* Input Header */}
          <div className="relative flex items-center border-b border-[#22222A] px-4 py-3 bg-[#16161C]">
            <Search className="w-5 h-5 text-[#8B1E24] shrink-0 mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search materials, industries, plants, news..."
              className="w-full bg-transparent text-[#E8E6E1] placeholder-[#A09D96] text-sm focus:outline-none"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 text-[#A09D96] hover:text-[#E8E6E1] rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Content Body */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
            {/* Quick Page Nav Shortcuts when query is empty */}
            {query.trim() === '' && (
              <div className="space-y-3">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#8B1E24] font-semibold">
                  Quick Directory Jump
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onNavigate('segment-automotive');
                      onClose();
                    }}
                    className="p-3 bg-[#181820] hover:bg-[#20202A] border border-[#262632] rounded-sm text-left flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#8B1E24]" />
                      <span className="text-xs text-[#E8E6E1] font-medium">Automotive Interiors</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A09D96] group-hover:text-white transition-colors" />
                  </button>

                  <button
                    onClick={() => {
                      onNavigate('plants');
                      onClose();
                    }}
                    className="p-3 bg-[#181820] hover:bg-[#20202A] border border-[#262632] rounded-sm text-left flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Factory className="w-4 h-4 text-[#8B1E24]" />
                      <span className="text-xs text-[#E8E6E1] font-medium">Manufacturing Plants</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A09D96] group-hover:text-white transition-colors" />
                  </button>

                  <button
                    onClick={() => {
                      onNavigate('sustainability');
                      onClose();
                    }}
                    className="p-3 bg-[#181820] hover:bg-[#20202A] border border-[#262632] rounded-sm text-left flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#8B1E24]" />
                      <span className="text-xs text-[#E8E6E1] font-medium">Sustainability & ZLD</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A09D96] group-hover:text-white transition-colors" />
                  </button>

                  <button
                    onClick={() => {
                      onNavigate('news');
                      onClose();
                    }}
                    className="p-3 bg-[#181820] hover:bg-[#20202A] border border-[#262632] rounded-sm text-left flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Newspaper className="w-4 h-4 text-[#8B1E24]" />
                      <span className="text-xs text-[#E8E6E1] font-medium">News & Media</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A09D96] group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            )}

            {/* Results: Materials */}
            {filteredMaterials.length > 0 && (
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A09D96] font-semibold">
                  Material Swatches ({filteredMaterials.length})
                </div>
                <div className="space-y-1.5">
                  {filteredMaterials.map((mat) => (
                    <div
                      key={mat.id}
                      onClick={() => {
                        if (onSelectMaterial) onSelectMaterial(mat.id);
                        onClose();
                      }}
                      className="p-2.5 bg-[#16161C] hover:bg-[#1E1E26] border border-[#22222A] rounded-sm flex items-center justify-between cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={mat.image}
                          alt={mat.name}
                          className="w-10 h-10 object-cover rounded-sm border border-[#2C2C38]"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="text-xs font-semibold text-[#E8E6E1] flex items-center gap-2">
                            <span>{mat.name}</span>
                            <span className="text-[9px] px-1.5 py-0.2 bg-[#8B1E24]/20 text-[#C43D44] border border-[#8B1E24]/40 font-mono">
                              {mat.code}
                            </span>
                          </div>
                          <div className="text-[10px] text-[#A09D96]">
                            {mat.category} • {mat.finish}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#A09D96] group-hover:text-[#8B1E24] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results: Market Segments */}
            {filteredSegments.length > 0 && (
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A09D96] font-semibold">
                  Market Segments
                </div>
                <div className="space-y-1.5">
                  {filteredSegments.map((seg) => (
                    <div
                      key={seg.id}
                      onClick={() => {
                        onNavigate(`segment-${seg.slug}` as PageId);
                        onClose();
                      }}
                      className="p-2.5 bg-[#16161C] hover:bg-[#1E1E26] border border-[#22222A] rounded-sm flex items-center justify-between cursor-pointer transition-colors group"
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#E8E6E1]">{seg.title}</div>
                        <div className="text-[10px] text-[#A09D96] line-clamp-1">{seg.tagline}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#A09D96] group-hover:text-[#8B1E24] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results: News */}
            {filteredNews.length > 0 && (
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A09D96] font-semibold">
                  News & Press
                </div>
                <div className="space-y-1.5">
                  {filteredNews.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => {
                        onNavigate('news');
                        onClose();
                      }}
                      className="p-2.5 bg-[#16161C] hover:bg-[#1E1E26] border border-[#22222A] rounded-sm flex items-center justify-between cursor-pointer transition-colors group"
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#E8E6E1]">{article.title}</div>
                        <div className="text-[10px] text-[#A09D96]">{article.date} • {article.category}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#A09D96] group-hover:text-[#8B1E24] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {query.trim() !== '' &&
              filteredMaterials.length === 0 &&
              filteredSegments.length === 0 &&
              filteredNews.length === 0 && (
                <div className="py-8 text-center text-xs text-[#716F68]">
                  No matching results found for "{query}". Try searching for "Automotive", "Nappa", "PU", or "Plant".
                </div>
              )}
          </div>

          <div className="p-3 bg-[#0E0E12] border-t border-[#1F1F28] text-[10px] text-[#A09D96] flex items-center justify-between">
            <span>Mayur Uniquoters Material Search Engine</span>
            <span>ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};