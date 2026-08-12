'use client';
import React from 'react';
import { PageId } from '../types';
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, Award } from 'lucide-react';


interface FooterProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#070708] text-[#A09D96] border-t border-[#1C1C22] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#1A1A20]">
          {/* Brand & Stock Info */}
          <div className="lg:col-span-2 space-y-6">
            <button
              onClick={() => onNavigate('home')}
              className="block focus:outline-none"
              aria-label="Mayur Uniquoters Limited — Home"
            >
              <img
                src="/assets/logo.svg"
                alt="Mayur Uniquoters"
                className="h-10 w-auto opacity-95"
              />
            </button>

            <p className="text-sm text-[#A09D96] leading-relaxed max-w-md">
              A premier global manufacturer of coated materials, technical textiles, and synthetic leather solutions serving world-class automotive OEMs, architectural furnishing, footwear, and luxury leather goods industries.
            </p>

            {/* Corporate Listing Badge */}
            <div className="p-4 bg-[#0E0E12] border border-[#22222A] rounded-sm max-w-md">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[#E8E6E1] font-medium tracking-wide">Stock Exchange Listings</span>
                <span className="text-[10px] px-2 py-0.5 bg-[#8B1E24]/20 text-[#C43D44] border border-[#8B1E24]/40 rounded">
                  NSE & BSE Listed
                </span>
              </div>
              <div className="flex items-center gap-6 text-xs text-[#E8E6E1]">
                <div>
                  <span className="text-[#A09D96] text-[11px] block">NSE Symbol:</span>
                  <span className="font-mono font-semibold text-[#8B1E24]">MAYURUNIQ</span>
                </div>
                <div className="h-6 w-[1px] bg-[#22222A]" />
                <div>
                  <span className="text-[#A09D96] text-[11px] block">BSE Code:</span>
                  <span className="font-mono font-semibold">522249</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E8E6E1] font-semibold border-b border-[#22222A] pb-2">
              Corporate
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home', 'about')}
                  className="hover:text-[#E8E6E1] transition-colors flex items-center gap-1 group"
                >
                  <span>About Mayur Uniquoters</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#8B1E24] transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('plants')}
                  className="hover:text-[#E8E6E1] transition-colors flex items-center gap-1 group"
                >
                  <span>Manufacturing Plants</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#8B1E24] transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sustainability')}
                  className="hover:text-[#E8E6E1] transition-colors flex items-center gap-1 group"
                >
                  <span>Sustainability & ZLD</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#8B1E24] transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('global-presence')}
                  className="hover:text-[#E8E6E1] transition-colors flex items-center gap-1 group"
                >
                  <span>Global Footprint</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#8B1E24] transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="hover:text-[#E8E6E1] transition-colors flex items-center gap-1 group"
                >
                  <span>News & Press Releases</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#8B1E24] transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Market Segment Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E8E6E1] font-semibold border-b border-[#22222A] pb-2">
              Market Segments
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('segment-automotive')}
                  className="hover:text-[#E8E6E1] transition-colors flex items-center gap-1 group"
                >
                  <span>Automotive Interiors</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#8B1E24] transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('segment-furnishing')}
                  className="hover:text-[#E8E6E1] transition-colors flex items-center gap-1 group"
                >
                  <span>Architectural Furnishing</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#8B1E24] transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('segment-footwear')}
                  className="hover:text-[#E8E6E1] transition-colors flex items-center gap-1 group"
                >
                  <span>Footwear Materials</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#8B1E24] transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('segment-leather-goods')}
                  className="hover:text-[#E8E6E1] transition-colors flex items-center gap-1 group"
                >
                  <span>Luxury Leather Goods</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#8B1E24] transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#E8E6E1] font-semibold border-b border-[#22222A] pb-2">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8B1E24] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Mayur Uniquoters Limited, Corporate House, Jaipur - 302013, Rajasthan, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8B1E24] shrink-0" />
                <span>+91 141 2280620 / 2280621</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8B1E24] shrink-0" />
                <span>info@mayur.biz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Row: Compliance, Certifications, Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-[#A09D96]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-[#E8E6E1]">
              <ShieldCheck className="w-4 h-4 text-[#8B1E24]" />
              <span>IATF 16949 Certified</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#E8E6E1]">
              <Award className="w-4 h-4 text-[#8B1E24]" />
              <span>ISO 9001 & ISO 14001</span>
            </div>
          </div>

          <p className="text-center md:text-right">
            © {new Date().getFullYear()} Mayur Uniquoters Limited. All rights reserved. Material Intelligence & Coated Surface Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};