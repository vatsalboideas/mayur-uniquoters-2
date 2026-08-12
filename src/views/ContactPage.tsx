'use client';
import React, { useState } from 'react';
import { PageId } from '../types';
import { MapPin, Phone, Mail, CheckCircle2, Send, Building, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    industry: 'Automotive Interiors',
    inquiryType: 'Sample Book Request',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-20 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="space-y-6 border-b border-[#E5E2DC] pb-12">
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24] bg-[#8B1E24]/20 border border-[#8B1E24]/40 px-3 py-1 rounded inline-block">
          CORPORATE COLLABORATION & INQUIRIES
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#1C1B19] font-light max-w-4xl leading-tight">
          Connect With Our Technical Material Specialists
        </h1>

        <p className="text-sm sm:text-base text-[#6B6860] max-w-2xl font-light leading-relaxed">
          Whether you require OEM automotive validation, custom grain embossing, spectral color matching, or physical swatch book dispatch, our technical team is ready to assist.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E0DDD6] p-8 rounded-sm space-y-6 shadow-2xl">
          <h3 className="font-serif text-2xl text-[#1C1B19]">Inquiry & Swatch Box Dispatch</h3>

          {formSubmitted ? (
            <div className="p-8 bg-[#F5F3EF] border border-[#8B1E24]/50 rounded text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#8B1E24] mx-auto" />
              <h4 className="font-serif text-xl text-[#1C1B19]">Inquiry Dispatched Successfully</h4>
              <p className="text-xs text-[#6B6860]">
                Thank you for reaching out, {formData.fullName}. Our technical sales engineer will respond within 24 business hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-2 bg-[#8B1E24] text-white text-xs uppercase tracking-wider rounded"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#6B6860] block uppercase font-mono text-[10px]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-[#F5F3EF] border border-[#D9D6CF] rounded p-3 text-[#1C1B19] placeholder-[#9A9790] focus:outline-none focus:border-[#8B1E24]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#6B6860] block uppercase font-mono text-[10px]">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. e.rostova@oem-auto.com"
                    className="w-full bg-[#F5F3EF] border border-[#D9D6CF] rounded p-3 text-[#1C1B19] placeholder-[#9A9790] focus:outline-none focus:border-[#8B1E24]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#6B6860] block uppercase font-mono text-[10px]">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Automotive Interiors Group"
                    className="w-full bg-[#F5F3EF] border border-[#D9D6CF] rounded p-3 text-[#1C1B19] placeholder-[#9A9790] focus:outline-none focus:border-[#8B1E24]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#6B6860] block uppercase font-mono text-[10px]">
                    Primary Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-[#F5F3EF] border border-[#D9D6CF] rounded p-3 text-[#1C1B19] focus:outline-none focus:border-[#8B1E24]"
                  >
                    <option>Automotive Interiors</option>
                    <option>Architectural & Furnishing</option>
                    <option>Footwear Manufacturing</option>
                    <option>Luxury Leather Goods</option>
                    <option>Investor Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[#6B6860] block uppercase font-mono text-[10px]">
                  Inquiry Purpose
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full bg-[#F5F3EF] border border-[#D9D6CF] rounded p-3 text-[#1C1B19] focus:outline-none focus:border-[#8B1E24]"
                >
                  <option>Physical Swatch Book Dispatch</option>
                  <option>Custom Grain & Color Matching</option>
                  <option>OEM Technical Spec Validation</option>
                  <option>Bulk Commercial Quotation</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[#6B6860] block uppercase font-mono text-[10px]">
                  Technical Requirements / Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your target application, required flame retardancy, thickness gauge, or volume parameters..."
                  className="w-full bg-[#F5F3EF] border border-[#D9D6CF] rounded p-3 text-[#1C1B19] placeholder-[#9A9790] focus:outline-none focus:border-[#8B1E24]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#8B1E24] hover:bg-[#9E232A] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span>Submit Technical Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Right: HQ Details & Direct Contacts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FFFFFF] border border-[#E0DDD6] p-6 rounded-sm space-y-4">
            <h4 className="font-serif text-xl text-[#1C1B19] border-b border-[#E5E2DC] pb-3">
              Corporate Headquarters
            </h4>

            <div className="space-y-4 text-xs text-[#6B6860]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8B1E24] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#1C1B19] font-semibold block">Mayur Uniquoters Limited</span>
                  <span>Corporate House, Jaipur - 302013, Rajasthan, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8B1E24] shrink-0" />
                <span>+91 141 2280620 / 2280621</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8B1E24] shrink-0" />
                <span>info@mayur.biz</span>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E0DDD6] p-6 rounded-sm space-y-4">
            <h4 className="font-serif text-xl text-[#1C1B19] border-b border-[#E5E2DC] pb-3">
              Direct Department Contacts
            </h4>

            <div className="space-y-3 text-xs text-[#6B6860]">
              <div>
                <span className="text-[#1C1B19] font-semibold block">Automotive OEM Division:</span>
                <span className="font-mono text-[11px]">auto.oem@mayur.biz</span>
              </div>
              <div>
                <span className="text-[#1C1B19] font-semibold block">International Exports & Distribution:</span>
                <span className="font-mono text-[11px]">exports@mayur.biz</span>
              </div>
              <div>
                <span className="text-[#1C1B19] font-semibold block">Investor Relations:</span>
                <span className="font-mono text-[11px]">investor@mayur.biz</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};