'use client';
import React, { useState, useEffect } from 'react';
import { PageId, LeadershipMember } from '../types';
import { MARKET_SEGMENTS } from '../data/marketSegmentsData';
import { NEWS_ARTICLES } from '../data/newsData';
import {
  COMPANY_OVERVIEW,
  MILESTONES,
  FOUNDER_PROFILE,
  LEADERSHIP_MEMBERS,
  CERTIFICATIONS,
  INVESTOR_INFORMATION,
  CUSTOMER_TESTIMONIALS
} from '../data/companyData';
import {
  ArrowRight,
  ChevronRight,
  Layers,
  Award,
  Cpu,
  Quote,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
const heroSlide1 = '/assets/images/about/carousel/image1.webp';
const heroSlide2 = '/assets/images/about/carousel/image2.webp';
const founderImage = '/assets/images/about/founder.png';
const investorImage = '/assets/images/about/investor.png';

const HERO_SLIDES = [
  { src: heroSlide1, alt: 'Mayur Uniquoters manufacturing excellence' },
  { src: heroSlide2, alt: 'Mayur Uniquoters premium coated materials' },
];

interface HomePageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeStoryPoint, setActiveStoryPoint] = useState<number>(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeLeader, setActiveLeader] = useState<LeadershipMember | null>(null);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [heroIndex]);

  const goToHeroSlide = (index: number) => {
    setHeroIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const materialAnnotations = [
    {
      id: 0,
      title: 'MICRO-SATIN NAPPA FINISH',
      tagline: 'Ultra-Soft Tactile Haptics',
      desc: 'Formulated with low-gloss Polyurethane topcoats that resist thermal yellowing while delivering a supple, warm natural touch.'
    },
    {
      id: 1,
      title: 'REINFORCED SUBSTRATE',
      tagline: 'High-Tensile Backing Matrix',
      desc: 'In-house circular knitted polyester backing engineered for high seam tear strength and dimensional shape memory.'
    },
    {
      id: 2,
      title: 'ENVIRONMENTAL SHIELD',
      tagline: 'VOC Free & Flame Retardant',
      desc: 'Passes stringent FMVSS 302 and BS 5852 fire safety codes without heavy metal plasticizers or phthalates.'
    }
  ];

  return (
    <div className="space-y-28 pb-20">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroIndex}
              src={HERO_SLIDES[heroIndex].src}
              alt={HERO_SLIDES[heroIndex].alt}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full object-cover filter brightness-75"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-[#0A0A0B]/80" />
          <div className="absolute inset-0 leather-grain opacity-40 pointer-events-none" />
        </div>

        {/* Carousel Dots */}
        <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-2">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goToHeroSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === heroIndex
                  ? 'w-8 bg-[#8B1E24]'
                  : 'w-2 bg-[#E8E6E1]/35 hover:bg-[#E8E6E1]/60'
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181820]/80 border border-[#8B1E24]/50 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#8B1E24] animate-ping" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#E8E6E1] uppercase font-medium">
              PREMIUM MATERIAL SOLUTIONS • EST. 1994
            </span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#E8E6E1] font-normal tracking-tight leading-[1.05] max-w-5xl mx-auto"
          >
            Material Intelligence. <br />
            <span className="italics font-light text-white">Crafted for the World.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-[#A09D96] max-w-2xl mx-auto font-sans leading-relaxed font-light"
          >
            Engineering high-performance coated materials, technical leatherette, and flexible surface solutions for global automotive OEMs, architectural furnishing, footwear, and luxury fashion accessories.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => onNavigate('segments')}
              className="w-full sm:w-auto px-8 py-4 bg-[#8B1E24] hover:bg-[#9E232A] text-white text-xs tracking-[0.2em] font-medium uppercase rounded-sm transition-all shadow-xl hover:shadow-[#8B1E24]/30 flex items-center justify-center gap-3 group"
            >
              <span>Explore Market Segments</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToAbout}
              className="w-full sm:w-auto px-8 py-4 bg-[#14141A]/90 hover:bg-[#1E1E26] border border-[#2E2E3C] text-[#E8E6E1] text-xs tracking-[0.2em] font-medium uppercase rounded-sm transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <span>Our Heritage & Vision</span>
            </button>
          </motion.div>

          {/* Key Stat Counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#22222A]/80 max-w-4xl mx-auto"
          >
            <div className="text-left space-y-1">
              <span className="font-serif text-3xl font-medium text-[#E8E6E1]">20+</span>
              <span className="text-[10px] tracking-widest text-[#A09D96] uppercase block font-mono">
                Countries Exported
              </span>
            </div>
            <div className="text-left space-y-1">
              <span className="font-serif text-3xl font-medium text-[#E8E6E1]">30+</span>
              <span className="text-[10px] tracking-widest text-[#A09D96] uppercase block font-mono">
                Years of Excellence
              </span>
            </div>
            <div className="text-left space-y-1">
              <span className="font-serif text-3xl font-medium text-[#E8E6E1]">100%</span>
              <span className="text-[10px] tracking-widest text-[#A09D96] uppercase block font-mono">
                Zero Liquid Discharge
              </span>
            </div>
            <div className="text-left space-y-1">
              <span className="font-serif text-3xl font-medium text-[#8B1E24]">Tier-1</span>
              <span className="text-[10px] tracking-widest text-[#A09D96] uppercase block font-mono">
                Automotive Supplier
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT MAYUR UNIQUOTERS */}
      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 scroll-mt-28">
        <section className="space-y-6 border-b border-[#1C1C24] pb-12">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24] bg-[#8B1E24]/20 border border-[#8B1E24]/40 px-3 py-1 rounded inline-block">
            ABOUT MAYUR UNIQUOTERS LIMITED
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl text-[#E8E6E1] font-light max-w-4xl leading-tight">
            A Legacy of Material Intelligence and Global Trust
          </h2>

          <p className="text-sm sm:text-base text-[#A09D96] max-w-2xl font-light leading-relaxed">
            {COMPANY_OVERVIEW.coreFocus} Listed on the National Stock Exchange (NSE: MAYURUNIQ) and BSE Limited, we are recognized for our unwavering commitement to engineering precision.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8B1E24]">
              CORPORATE VISION
            </span>
            <h3 className="font-serif text-2xl text-[#E8E6E1]">Preferred Global Material Partner</h3>
            <p className="text-xs text-[#A09D96] leading-relaxed">
              {COMPANY_OVERVIEW.vision}
            </p>
          </div>

          <div className="p-8 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8B1E24]">
              CORPORATE MISSION
            </span>
            <h3 className="font-serif text-2xl text-[#E8E6E1]">Value Creation & Environmental Leadership</h3>
            <p className="text-xs text-[#A09D96] leading-relaxed">
              {COMPANY_OVERVIEW.mission}
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <h3 className="font-serif text-2xl text-[#E8E6E1] border-b border-[#1C1C24] pb-4">
            Our Guiding Principles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_OVERVIEW.values.map((val, idx) => (
              <div key={idx} className="p-6 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-3">
                <span className="text-lg font-mono text-[#8B1E24] font-bold">0{idx + 1}</span>
                <h4 className="font-serif text-lg text-[#E8E6E1]">{val.title}</h4>
                <p className="text-xs text-[#A09D96] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0E0E12] border border-[#22222A] p-8 sm:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative h-80 sm:h-[28rem] rounded overflow-hidden border border-[#2A2A38] bg-[#121218]">
            <img
              src={founderImage}
              alt={FOUNDER_PROFILE.name}
              className="w-full h-full object-contain object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#8B1E24] block">
                {FOUNDER_PROFILE.designation.toUpperCase()}
              </span>
              <span className="font-serif text-xl text-white font-semibold">{FOUNDER_PROFILE.name}</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[#8B1E24]">
              <Quote className="w-8 h-8" />
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl text-[#E8E6E1] font-light leading-relaxed italic">
              "{FOUNDER_PROFILE.quote}"
            </blockquote>

            <p className="text-xs text-[#A09D96] leading-relaxed">
              {FOUNDER_PROFILE.bio}
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2 border-b border-[#1C1C24] pb-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
              MILESTONES & HISTORY
            </span>
            <h3 className="font-serif text-3xl text-[#E8E6E1]">Strategic Growth Timeline</h3>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
            {MILESTONES.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMilestoneIndex(idx)}
                className={`px-6 py-3 rounded border text-left shrink-0 transition-all ${
                  activeMilestoneIndex === idx
                    ? 'bg-[#8B1E24] text-white border-[#C43D44] shadow-lg'
                    : 'bg-[#121218] text-[#A09D96] border-[#22222E] hover:bg-[#181822]'
                }`}
              >
                <div className="text-sm font-mono font-bold">{m.year}</div>
                <div className="text-[10px] uppercase tracking-wider opacity-80">{m.category}</div>
              </button>
            ))}
          </div>

          <div className="p-8 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
            <div className="text-xs font-mono text-[#8B1E24] uppercase tracking-widest">
              {MILESTONES[activeMilestoneIndex].category} • {MILESTONES[activeMilestoneIndex].year}
            </div>
            <h4 className="font-serif text-2xl text-[#E8E6E1]">
              {MILESTONES[activeMilestoneIndex].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#A09D96] leading-relaxed max-w-3xl">
              {MILESTONES[activeMilestoneIndex].description}
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2 border-b border-[#1C1C24] pb-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
              GOVERNANCE
            </span>
            <h3 className="font-serif text-3xl text-[#E8E6E1]">Board Members & Executive Leadership</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_MEMBERS.map((member) => (
              <div
                key={member.id}
                onClick={() => setActiveLeader(member)}
                className="group bg-[#0E0E12] border border-[#22222A] hover:border-[#8B1E24]/60 rounded-sm overflow-hidden cursor-pointer transition-colors p-5 space-y-4"
              >
                <div className="relative h-64 rounded overflow-hidden border border-[#2A2A38]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h4 className="font-serif text-lg text-[#E8E6E1] group-hover:text-[#8B1E24] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-[11px] text-[#A09D96] font-mono">{member.designation}</p>
                </div>

                <div className="text-[10px] text-[#8B1E24] uppercase tracking-wider font-semibold flex items-center gap-1">
                  <span>View Leadership Bio</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <AnimatePresence>
          {activeLeader && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#121218] border border-[#2A2A38] p-8 rounded-sm max-w-xl w-full relative space-y-6"
              >
                <button
                  onClick={() => setActiveLeader(null)}
                  className="absolute top-4 right-4 p-1 text-[#A09D96] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4">
                  <img
                    src={activeLeader.image}
                    alt={activeLeader.name}
                    className="w-16 h-16 rounded-full object-cover border border-[#8B1E24]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-serif text-xl text-[#E8E6E1]">{activeLeader.name}</h3>
                    <p className="text-xs text-[#8B1E24] font-mono">{activeLeader.designation}</p>
                  </div>
                </div>

                <p className="text-xs text-[#A09D96] leading-relaxed">{activeLeader.bio}</p>

                {activeLeader.philosophyQuote && (
                  <div className="p-4 bg-[#181822] border-l-2 border-[#8B1E24] text-xs text-[#E8E6E1] italic">
                    "{activeLeader.philosophyQuote}"
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <section className="space-y-8">
          <div className="space-y-2 border-b border-[#1C1C24] pb-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
              QUALITY & COMPLIANCE
            </span>
            <h3 className="font-serif text-3xl text-[#E8E6E1]">Certifications & Quality Accreditations</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="p-6 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#1C1C24] pb-3">
                  <span className="text-xs font-mono font-bold text-[#8B1E24] bg-[#8B1E24]/10 px-2.5 py-1 rounded border border-[#8B1E24]/30">
                    {cert.code}
                  </span>
                  <span className="text-[10px] font-mono text-[#A09D96]">{cert.yearValidated}</span>
                </div>

                <div>
                  <h4 className="font-serif text-xl text-[#E8E6E1]">{cert.title}</h4>
                  <p className="text-xs text-[#A09D96] mt-1">Issuing Body: {cert.issuingAuthority}</p>
                </div>

                <p className="text-xs text-[#716F68] leading-relaxed">
                  Scope: {cert.scope}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0E0E12] border border-[#22222A] p-8 sm:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative h-80 sm:h-[28rem] rounded overflow-hidden border border-[#2A2A38] bg-[#121218]">
            <img
              src={investorImage}
              alt="Investor Relations"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-[#1C1C24] pb-4">
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
                INVESTOR RELATIONS
              </span>
              <h3 className="font-serif text-3xl text-[#E8E6E1]">Capital Structure & Governance</h3>
              <p className="text-xs text-[#A09D96] mt-2 leading-relaxed">
                {INVESTOR_INFORMATION.stockInfo.listingStatus} · NSE: {INVESTOR_INFORMATION.stockInfo.symbolNSE} · BSE: {INVESTOR_INFORMATION.stockInfo.symbolBSE}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#A09D96]">
              {INVESTOR_INFORMATION.financialHighlights.map((hl, idx) => (
                <div key={idx} className="p-4 bg-[#14141C] border border-[#22222E] rounded">
                  <h5 className="font-serif text-base text-[#E8E6E1] mb-1">{hl.title}</h5>
                  <p className="leading-relaxed">{hl.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2 border-b border-[#1C1C24] pb-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
              TESTIMONIALS
            </span>
            <h3 className="font-serif text-3xl text-[#E8E6E1]">Partner Recognition</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CUSTOMER_TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-6 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4 flex flex-col justify-between">
                <Quote className="w-6 h-6 text-[#8B1E24]" />
                <p className="text-[#E8E6E1] italic leading-relaxed font-serif text-sm">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-[#1C1C24] text-[11px] text-[#A09D96]">
                  <div className="font-semibold text-[#E8E6E1]">{t.author}</div>
                  <div>{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 2. MATERIAL STORY SECTION (INTERACTIVE MACRO SURFACE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1C1C24] pb-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
              01 • MATERIAL ANATOMY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#E8E6E1]">
              The Precision Science of Surface Coating
            </h2>
          </div>
          <p className="text-xs text-[#A09D96] max-w-md leading-relaxed">
            Every roll of material produced at Mayur Uniquoters represents a harmonious fusion of advanced polymer chemistry, knitted backing tension, and tactile embossing craftsmanship.
          </p>
        </div>

        {/* Interactive Surface Canvas & Annotations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-[#0E0E12] border border-[#22222A] p-6 sm:p-10 rounded-sm">
          {/* Main Interactive Macro Visual */}
          <div className="lg:col-span-2 relative h-[380px] sm:h-[450px] rounded-sm overflow-hidden border border-[#2A2A38] shadow-2xl group">
            <img
              src="/src/assets/images/mayur_hero_material_1786517295424.jpg"
              alt="Macro Texture Detail"
              className="w-full h-full object-cover filter contrast-125 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* Clickable Hotspot Pins */}
            {materialAnnotations.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveStoryPoint(item.id)}
                className={`absolute z-10 p-3 rounded-full flex items-center gap-2 border transition-all ${
                  activeStoryPoint === item.id
                    ? 'bg-[#8B1E24] text-white border-white/40 scale-110 shadow-xl ring-4 ring-[#8B1E24]/30'
                    : 'bg-[#121218]/90 text-[#A09D96] hover:bg-[#8B1E24] hover:text-white border-[#333342]'
                }`}
                style={{
                  top: idx === 0 ? '30%' : idx === 1 ? '55%' : '75%',
                  left: idx === 0 ? '25%' : idx === 1 ? '60%' : '35%',
                }}
              >
                <span className="text-xs font-mono font-bold">0{idx + 1}</span>
                <span className="hidden sm:inline text-[10px] font-sans uppercase tracking-wider font-semibold">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          {/* Side Editorial Details */}
          <div className="space-y-6">
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#8B1E24] bg-[#8B1E24]/20 border border-[#8B1E24]/40 px-3 py-1 rounded inline-block">
              INSPECTING ANATOMY POINT 0{activeStoryPoint + 1}
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#E8E6E1]">
                {materialAnnotations[activeStoryPoint].title}
              </h3>
              <p className="text-xs font-mono text-[#C43D44]">
                {materialAnnotations[activeStoryPoint].tagline}
              </p>
            </div>

            <p className="text-xs text-[#A09D96] leading-relaxed">
              {materialAnnotations[activeStoryPoint].desc}
            </p>

            <div className="pt-4 border-t border-[#22222A] space-y-2 text-xs">
              <div className="flex justify-between text-[#A09D96]">
                <span>Color Retention:</span>
                <span className="text-[#E8E6E1] font-mono">SAE J2527 Pass</span>
              </div>
              <div className="flex justify-between text-[#A09D96]">
                <span>Scratch Guard:</span>
                <span className="text-[#E8E6E1] font-mono">Taber 1000g &gt;5000 Rubs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MARKET SEGMENTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1C1C24] pb-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
              02 • MARKET APPLICATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#E8E6E1]">
              Engineered Across Industry Horizons
            </h2>
          </div>
          <button
            onClick={() => onNavigate('segments')}
            className="text-xs text-[#E8E6E1] hover:text-[#8B1E24] flex items-center gap-2 uppercase tracking-widest transition-colors font-medium"
          >
            <span>View All Applications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Asymmetric Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MARKET_SEGMENTS.map((segment) => (
            <div
              key={segment.id}
              onClick={() => onNavigate(`segment-${segment.slug}` as PageId)}
              className="group relative bg-[#0E0E12] border border-[#22222A] hover:border-[#8B1E24]/60 rounded-sm overflow-hidden cursor-pointer transition-all duration-500 shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={segment.heroImage}
                  alt={segment.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-[#0A0A0E]/80 border border-white/20 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-[#E8E6E1] backdrop-blur-sm">
                  {segment.slug}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl text-[#E8E6E1] group-hover:text-[#8B1E24] transition-colors flex items-center justify-between">
                  <span>{segment.title}</span>
                  <ChevronRight className="w-5 h-5 text-[#8B1E24] transform group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-[#A09D96] leading-relaxed line-clamp-2">
                  {segment.tagline}
                </p>

                <div className="pt-4 border-t border-[#1C1C24] flex items-center gap-3 text-[11px] text-[#A09D96]">
                  <span>{segment.applications.length} Core Applications</span>
                  <span>•</span>
                  <span>Material Specs Ready</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MANUFACTURING CAPABILITIES */}
      <section className="bg-[#08080B] border-y border-[#1C1C22] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1C1C24] pb-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
                04 • TECHNICAL EXCELLENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#E8E6E1]">
                Advanced Manufacturing Architecture
              </h2>
            </div>
            <button
              onClick={() => onNavigate('plants')}
              className="text-xs text-[#E8E6E1] hover:text-[#8B1E24] flex items-center gap-2 uppercase tracking-widest font-medium transition-colors"
            >
              <span>Explore Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
              <div className="w-10 h-10 rounded bg-[#8B1E24]/20 border border-[#8B1E24]/40 flex items-center justify-center text-[#8B1E24]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#E8E6E1]">Automated Precision Lines</h3>
              <p className="text-xs text-[#A09D96] leading-relaxed">
                State-of-the-art Italian and German multi-head reverse roll coating machinery with real-time infrared laser thickness feedback.
              </p>
            </div>

            <div className="p-6 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
              <div className="w-10 h-10 rounded bg-[#8B1E24]/20 border border-[#8B1E24]/40 flex items-center justify-center text-[#8B1E24]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#E8E6E1]">In-House Climate Testing</h3>
              <p className="text-xs text-[#A09D96] leading-relaxed">
                Dedicated climate simulation chambers, xenon weatherometers, Bally flexometers, and Taber abrasers validating international OEM standards.
              </p>
            </div>

            <div className="p-6 bg-[#0E0E12] border border-[#22222A] rounded-sm space-y-4">
              <div className="w-10 h-10 rounded bg-[#8B1E24]/20 border border-[#8B1E24]/40 flex items-center justify-center text-[#8B1E24]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#E8E6E1]">Vertical Backing Integration</h3>
              <p className="text-xs text-[#A09D96] leading-relaxed">
                Integrated circular knitting units producing high-tensile polyester backing fabrics, ensuring consistent stretch and stitch holding strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EDITORIAL NEWS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1C1C24] pb-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24]">
              05 • INSIGHTS & MEDIA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#E8E6E1]">
              Latest Developments & Press
            </h2>
          </div>
          <button
            onClick={() => onNavigate('news')}
            className="text-xs text-[#E8E6E1] hover:text-[#8B1E24] flex items-center gap-2 uppercase tracking-widest font-medium transition-colors"
          >
            <span>Read Publication Archive</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => onNavigate('news')}
              className="group bg-[#0E0E12] border border-[#22222A] rounded-sm overflow-hidden cursor-pointer hover:border-[#8B1E24]/60 transition-colors space-y-4 p-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative h-48 rounded overflow-hidden">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-[#0A0A0E]/80 border border-white/20 px-2.5 py-0.5 rounded text-[9px] uppercase tracking-wider text-[#E8E6E1]">
                    {article.category}
                  </div>
                </div>

                <div className="text-[10px] text-[#A09D96] font-mono">
                  {article.date} • {article.readTime}
                </div>

                <h3 className="font-serif text-lg text-[#E8E6E1] group-hover:text-[#8B1E24] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#A09D96] line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C1C24] flex items-center justify-between text-xs text-[#E8E6E1]">
                <span>Read Full Press Release</span>
                <ArrowRight className="w-4 h-4 text-[#8B1E24] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CLOSING COLLABORATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#111118] border border-[#262634] p-10 sm:p-16 rounded-sm text-center space-y-6 overflow-hidden">
          <div className="absolute inset-0 leather-grain opacity-20 pointer-events-none" />

          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24] bg-[#8B1E24]/20 border border-[#8B1E24]/40 px-3 py-1 rounded inline-block">
            OEM & ARCHITECTURAL INQUIRIES
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#E8E6E1] max-w-3xl mx-auto leading-tight font-light">
            Ready to Engineer Next-Generation Surface Solutions?
          </h2>

          <p className="text-xs sm:text-sm text-[#A09D96] max-w-xl mx-auto leading-relaxed">
            Connect with our technical design team for custom grain embossing, spectral color matching, and swatch box dispatch.
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#8B1E24] hover:bg-[#9E232A] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition-all shadow-xl hover:shadow-[#8B1E24]/30"
            >
              Initiate Corporate Collaboration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};