import React, { useState } from 'react';
import { COMPANY_INFO, buildWhatsAppDirectUrl } from '../data/makhanaData';
import { Building2, Factory, Phone, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: 'Wholesale B2B Makhana Inquiry',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Vimora Foods,
Name: ${formData.name || 'B2B Client'} (${formData.company || 'Company'})
Phone: ${formData.phone || 'Direct'}
Inquiry: ${formData.subject}
Message: ${formData.message || 'Inquiring regarding wholesale phool makhana supply.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-18 lg:py-22 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
            Our Facilities
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight text-balance">
            Bangalore Hub &amp; Purnea Processing Unit.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#46584C] mt-2.5">
            Direct processing at origin in Bihar with corporate relationship management, sampling, and distribution based out of Bangalore.
          </p>
        </div>

        {/* Dual Facility Cards Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Corporate Office (Bangalore) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#DFD6C6] shadow-2xs flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#B88E3E] uppercase tracking-wider">
                  South India Hub &amp; Sales Desk
                </span>
                <span className="text-[11px] font-mono font-semibold text-[#112F20] bg-[#EDE5D6] px-2.5 py-0.5 rounded-md">
                  Bangalore, Karnataka
                </span>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Building2 className="w-5 h-5 text-[#112F20] mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#112F20]">
                    Corporate Office
                  </h3>
                  <div className="text-xs font-semibold text-[#8C7A57] mt-0.5">
                    Vimora Foods Private Limited
                  </div>
                  <p className="text-xs sm:text-sm text-[#43564A] mt-2 leading-relaxed">
                    Rose Garden Apartments, Arekere, Bannerghatta Road, Bangalore, Karnataka — 560076
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE6D9] space-y-1.5 text-xs text-[#526356]">
                <div>
                  <strong className="text-[#112F20]">Key Role: </strong>
                  B2B Client Meetings, Sample Evaluation Kits, and Regional Buffer Stock Distribution.
                </div>
                <div>
                  <strong className="text-[#112F20]">Service Area: </strong>
                  Bangalore Urban, Mysore, Chennai, Hyderabad, and Pan-South India.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EDE6D9] flex flex-wrap items-center justify-between gap-3 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="font-mono font-semibold text-[#112F20] hover:text-[#B88E3E] transition-colors"
              >
                Direct: {COMPANY_INFO.phoneDisplay}
              </a>
              <span className="text-[#849589]">Mon – Sat: 9:00 AM – 7:00 PM IST</span>
            </div>
          </div>

          {/* Card 2: Processing Unit (BIADA Purnea, Bihar) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#DFD6C6] shadow-2xs flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#B88E3E] uppercase tracking-wider">
                  Origin Manufacturing &amp; Grading
                </span>
                <span className="text-[11px] font-mono font-semibold text-[#112F20] bg-[#EDE5D6] px-2.5 py-0.5 rounded-md">
                  Purnea, Bihar
                </span>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Factory className="w-5 h-5 text-[#112F20] mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#112F20]">
                    Processing Unit
                  </h3>
                  <div className="text-xs font-semibold text-[#8C7A57] mt-0.5">
                    Manufacturing &amp; Packing Facility
                  </div>
                  <p className="text-xs sm:text-sm text-[#43564A] mt-2 leading-relaxed">
                    BIADA Industrial Area, Maranga, Purnea, Bihar — 854301
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE6D9] space-y-1.5 text-xs text-[#526356]">
                <div>
                  <strong className="text-[#112F20]">Key Role: </strong>
                  Harvest Aggregation, Multi-stage Sieve Grading, Moisture Calibration, and Master Box Palletization.
                </div>
                <div>
                  <strong className="text-[#112F20]">Infrastructure: </strong>
                  Pneumatic cleaning lines, optical inspection tables, and bulk dispatch docks.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EDE6D9] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-mono font-semibold text-[#112F20]">
                BIADA Industrial Area
              </span>
              <span className="text-[#849589]">Direct Freight Line to Bangalore</span>
            </div>
          </div>

        </div>

        {/* Corporate Communication Form & WhatsApp Desk */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-[#112F20] text-white border border-[#23583C]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">
                Direct Contact
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Partner with Vimora Foods.
              </h3>
              <p className="text-xs sm:text-sm text-[#CFDCD4] leading-relaxed">
                Whether you require 100 KG to test on your production line or recurring multi-ton dispatches for your retail network, our team is at your disposal.
              </p>

              <div className="pt-3 space-y-3 text-xs text-[#D8E4DC]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#18462F] text-[#DFBE7A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#98B0A2]">Direct Desk &amp; WhatsApp:</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono font-bold text-white hover:text-[#DFBE7A]">
                      {COMPANY_INFO.phoneDisplay} ({COMPANY_INFO.phone})
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#18462F] text-[#DFBE7A]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#98B0A2]">WhatsApp Chat:</div>
                    <a
                      href={buildWhatsAppDirectUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#DFBE7A] hover:underline"
                    >
                      Connect with Sales Head
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#18462F] text-[#DFBE7A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#98B0A2]">Email Desk:</div>
                    <span className="font-medium text-white">{COMPANY_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Clean Inquiry Form */}
            <div className="lg:col-span-7 bg-[#153A26] p-5 sm:p-6 rounded-xl border border-[#215739]">
              {sent ? (
                <div className="py-6 text-center space-y-2.5">
                  <CheckCircle2 className="w-10 h-10 text-[#DFBE7A] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-white">
                    Inquiry Received
                  </h4>
                  <p className="text-xs text-[#CFDCD4] max-w-sm mx-auto">
                    Thank you, {formData.name}. Our Bangalore sales desk will respond promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-3 px-4 py-2 text-xs font-semibold text-[#112F20] bg-[#B88E3E] rounded-md hover:bg-[#DFBE7A] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[11px] text-[#A6C0B0] mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Murthy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0F2E1E] border border-[#296644] rounded-md text-white text-xs focus:outline-none focus:border-[#DFBE7A]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#A6C0B0] mb-1">Company / Brand *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Snacking Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0F2E1E] border border-[#296644] rounded-md text-white text-xs focus:outline-none focus:border-[#DFBE7A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[11px] text-[#A6C0B0] mb-1">Mobile / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="99625 70800"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0F2E1E] border border-[#296644] rounded-md text-white text-xs focus:outline-none focus:border-[#DFBE7A]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#A6C0B0] mb-1">Inquiry Purpose</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 bg-[#0F2E1E] border border-[#296644] rounded-md text-white text-xs focus:outline-none focus:border-[#DFBE7A]"
                      >
                        <option>Wholesale B2B Bulk Order (MOQ 100kg)</option>
                        <option>Retail Packaging &amp; Distribution</option>
                        <option>Private Label / White-Label Contract</option>
                        <option>Export Grade 6+ Inquiry</option>
                        <option>General Corporate Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#A6C0B0] mb-1">Requirement Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Share estimated volume, delivery city, or packaging requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 bg-[#0F2E1E] border border-[#296644] rounded-md text-white text-xs focus:outline-none focus:border-[#DFBE7A]"
                    />
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-2.5 px-4 min-h-[44px] text-xs font-bold text-[#112F20] bg-[#B88E3E] hover:bg-[#DFBE7A] active:scale-[0.98] rounded-md transition-all cursor-pointer text-center"
                    >
                      Submit Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 min-h-[44px] text-xs font-semibold text-white bg-[#1A4E33] hover:bg-[#226342] active:scale-[0.98] rounded-md transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-[#DFBE7A]" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
