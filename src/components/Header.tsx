'use client';
import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ChevronRight } from 'lucide-react';
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

  const marketSegmentSubLinks: { label: string; page: PageId }[] = [
    { label: 'Automotive Interiors', page: 'segment-automotive' },
    { label: 'Architectural Furnishing', page: 'segment-furnishing' },
    { label: 'Footwear Solutions', page: 'segment-footwear' },
    { label: 'Luxury Leather Goods', page: 'segment-leather-goods' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#222228] py-4 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A0A0B]/90 to-transparent py-6'
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
                      className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors relative py-1 ${
                        isActive
                          ? 'text-[#E8E6E1]'
                          : 'text-[#9E9B93] hover:text-[#E8E6E1]'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B1E24]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Submenu for Market Segments */}
                    {link.page === 'segments' && (
                      <div className="absolute top-full left-0 w-64 bg-[#121216] border border-[#26262E] shadow-2xl rounded-sm py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        <div className="px-4 py-1 text-[9px] uppercase tracking-[0.2em] text-[#716F68] font-semibold border-b border-[#222228] mb-2">
                          Industries & Applications
                        </div>
                        {marketSegmentSubLinks.map((sub) => (
                          <button
                            key={sub.page}
                            onClick={() => onNavigate(sub.page)}
                            className="w-full text-left px-4 py-2 text-[12px] text-[#A09D96] hover:text-[#E8E6E1] hover:bg-[#1C1C22] transition-colors flex items-center justify-between group/item"
                          >
                            <span>{sub.label}</span>
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 text-[#8B1E24] transition-opacity" />
                          </button>
                        ))}
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
                className="px-4 py-2 bg-[#8B1E24] hover:bg-[#9E232A] text-white text-[11px] font-medium tracking-[0.15em] uppercase rounded-sm transition-all shadow-lg hover:shadow-[#8B1E24]/30"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#E8E6E1] border border-[#26262E] rounded-sm bg-[#141418]"
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
            className="fixed inset-0 z-40 bg-[#0A0A0B] pt-24 px-6 pb-12 overflow-y-auto flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#8B1E24] font-semibold border-b border-[#222228] pb-2">
                Navigation Directory
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b border-[#181820] pb-3">
                    <button
                      onClick={() => {
                        onNavigate(link.page, link.sectionId);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-lg font-serif tracking-wider text-left w-full flex items-center justify-between ${
                        !link.sectionId && activePage === link.page
                          ? 'text-[#8B1E24] font-semibold'
                          : 'text-[#E8E6E1]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#8B1E24]" />
                    </button>

                    {link.page === 'segments' && (
                      <div className="mt-3 pl-4 space-y-2 border-l border-[#26262E]">
                        {marketSegmentSubLinks.map((sub) => (
                          <button
                            key={sub.page}
                            onClick={() => {
                              onNavigate(sub.page);
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-sm text-[#A09D96] hover:text-[#E8E6E1] py-1"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-[#222228]">
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#8B1E24] text-white text-xs tracking-[0.2em] uppercase font-semibold text-center rounded-sm"
              >
                Inquire & Request Samples
              </button>

              <div className="text-center text-[11px] text-[#A09D96] space-y-1">
                <p>Mayur Uniquoters Limited • Jaipur, Rajasthan, India</p>
                <p className="text-[10px] text-[#615F59]">NSE: MAYURUNIQ | BSE: 522249</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};