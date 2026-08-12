'use client';
import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';


interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageId; sectionId?: string }[] = [
    { label: 'ABOUT', page: 'home', sectionId: 'about' },
    { label: 'MARKET SEGMENTS', page: 'segments' },
    { label: 'PLANTS', page: 'plants' },
    { label: 'SUSTAINABILITY', page: 'sustainability' },
    { label: 'GLOBAL PRESENCE', page: 'global-presence' },
    { label: 'NEWS & MEDIA', page: 'news' },
  ];

  const marketSegmentSubLinks: {
    label: string;
    page: PageId;
    description: string;
  }[] = [
    {
      label: 'Automotive Interiors',
      page: 'segment-automotive',
      description: 'OEM seating, dashboards & mobility surfaces',
    },
    {
      label: 'Architectural Furnishing',
      page: 'segment-furnishing',
      description: 'Hospitality, residential & commercial interiors',
    },
    {
      label: 'Footwear Solutions',
      page: 'segment-footwear',
      description: 'Fashion, lifestyle & performance materials',
    },
    {
      label: 'Luxury Leather Goods',
      page: 'segment-leather-goods',
      description: 'Bags, accessories & refined craft surfaces',
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#BD9568] backdrop-blur-md border-b border-[#A67F52] py-4 shadow-sm'
            : 'bg-[#BD9568] py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="group flex items-center focus:outline-none"
              aria-label="Mayur Uniquoters Limited — Home"
            >
              <img
                src="/assets/logo.svg"
                alt="Mayur Uniquoters"
                className="h-9 sm:h-10 w-auto opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive =
                  !link.sectionId &&
                  (activePage === link.page ||
                    (link.page === 'segments' && activePage.startsWith('segment-')));

                return (
                  <div key={link.label} className="relative group py-2">
                    <button
                      onClick={() => onNavigate(link.page, link.sectionId)}
                      className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-all relative py-1 inline-flex items-center gap-1.5 text-black hover:text-[#84000C] ${
                        isActive ? 'text-[#84000C] font-bold' : ''
                      }`}
                    >
                      {link.label}
                      {link.page === 'segments' && (
                        <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#84000C]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Elegant Market Segments dropdown */}
                    {link.page === 'segments' && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0">
                        <div className="w-[340px] bg-[#FBF9F6] border border-[#E8DFD2] rounded-sm shadow-[0_18px_50px_-12px_rgba(28,27,25,0.28)] overflow-hidden">
                          <div className="px-5 pt-4 pb-3 border-b border-[#E8DFD2] bg-gradient-to-r from-[#BD9568]/25 to-transparent">
                            <div className="text-[9px] uppercase tracking-[0.28em] text-[#84000C] font-semibold">
                              Industries & Applications
                            </div>
                            <p className="mt-1 text-[11px] text-black/55 leading-relaxed">
                              Explore engineered surfaces by market
                            </p>
                          </div>

                          <div className="py-2">
                            {marketSegmentSubLinks.map((sub) => {
                              const isSubActive = activePage === sub.page;
                              return (
                                <button
                                  key={sub.page}
                                  onClick={() => onNavigate(sub.page)}
                                  className={`w-full text-left px-5 py-3.5 flex items-start gap-3 transition-colors duration-200 group/item border-l-2 ${
                                    isSubActive
                                      ? 'border-[#84000C] bg-[#BD9568]/15'
                                      : 'border-transparent hover:border-[#84000C] hover:bg-[#BD9568]/10'
                                  }`}
                                >
                                  <div className="flex-1 min-w-0">
                                    <div
                                      className={`text-[13px] tracking-wide transition-colors ${
                                        isSubActive
                                          ? 'text-[#84000C] font-semibold'
                                          : 'text-black font-medium group-hover/item:text-[#84000C]'
                                      }`}
                                    >
                                      {sub.label}
                                    </div>
                                    <div className="mt-0.5 text-[11px] text-black/50 leading-snug group-hover/item:text-black/65">
                                      {sub.description}
                                    </div>
                                  </div>
                                  <ChevronRight
                                    className={`w-3.5 h-3.5 mt-1 shrink-0 transition-all duration-200 ${
                                      isSubActive
                                        ? 'opacity-100 text-[#84000C] translate-x-0'
                                        : 'opacity-0 -translate-x-1 text-[#84000C] group-hover/item:opacity-100 group-hover/item:translate-x-0'
                                    }`}
                                  />
                                </button>
                              );
                            })}
                          </div>

                          <div className="px-5 py-3 border-t border-[#E8DFD2] bg-[#F7F5F2]">
                            <button
                              onClick={() => onNavigate('segments')}
                              className="w-full flex items-center justify-between text-[10px] uppercase tracking-[0.22em] font-semibold text-black hover:text-[#84000C] transition-colors"
                            >
                              <span>View all segments</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Header Actions */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Contact Button */}
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2 bg-[#84000C] hover:bg-[#6E000A] text-white text-[11px] font-medium tracking-[0.15em] uppercase rounded-sm transition-all shadow-lg hover:shadow-[#84000C]/30"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#1C1B19] border border-[#D9D6CF] rounded-sm bg-[#F5F3EF]"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#BD9568] pt-24 px-6 pb-12 overflow-y-auto flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#84000C] font-semibold border-b border-[#E0DDD6] pb-2">
                Navigation Directory
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b border-[#F0EEEA] pb-3">
                    <button
                      onClick={() => {
                        onNavigate(link.page, link.sectionId);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-lg font-serif tracking-wider text-left w-full flex items-center justify-between text-black hover:text-[#84000C] hover:font-bold transition-all ${
                        !link.sectionId && activePage === link.page
                          ? 'text-[#84000C] font-bold'
                          : 'font-medium'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#84000C]" />
                    </button>

                    {link.page === 'segments' && (
                      <div className="mt-3 pl-4 space-y-1 border-l border-[#A67F52]/50">
                        {marketSegmentSubLinks.map((sub) => (
                          <button
                            key={sub.page}
                            onClick={() => {
                              onNavigate(sub.page);
                              setIsMobileMenuOpen(false);
                            }}
                            className="block w-full text-left py-2 transition-all"
                          >
                            <span className="block text-sm text-black font-medium hover:text-[#84000C]">
                              {sub.label}
                            </span>
                            <span className="block text-[11px] text-black/55 mt-0.5">
                              {sub.description}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-[#E0DDD6]">
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#84000C] text-white text-xs tracking-[0.2em] uppercase font-semibold text-center rounded-sm"
              >
                Inquire & Request Samples
              </button>

              <div className="text-center text-[11px] text-[#6B6860] space-y-1">
                <p>Mayur Uniquoters Limited • Jaipur, Rajasthan, India</p>
                <p className="text-[10px] text-[#9A9790]">NSE: MAYURUNIQ | BSE: 522249</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};