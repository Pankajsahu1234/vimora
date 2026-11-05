import React from 'react';
import { VimoraLogo } from './VimoraLogo';
import { COMPANY_INFO, buildWhatsAppDirectUrl } from '../data/makhanaData';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D2418] text-[#D8E4DC] border-t border-[#183C28] pt-12 pb-10 sm:pt-14 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 border-b border-[#183C28]">
          
          {/* Brand & Mission */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-3">
            <VimoraLogo variant="light" />
            <p className="text-xs text-[#9BB1A4] leading-relaxed max-w-sm pt-1 font-light">
              Vimora Foods Private Limited is a specialized agro-processor of single-origin Phool Makhana from Purnea, Bihar, supplying B2B and institutional clients across Bangalore and nationwide.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-[#DFBE7A] hover:underline flex items-center gap-1.5 min-h-[36px]"
              >
                <Phone className="w-3.5 h-3.5" />
                {COMPANY_INFO.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppDirectUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DFBE7A] hover:underline flex items-center gap-1.5 min-h-[36px]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Direct
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-[#AFC3B7]">
              <li>
                <a href="#grades" className="hover:text-white transition-colors block py-1">
                  Grades 4 to 6+ Specifications
                </a>
              </li>
              <li>
                <a href="#farm-to-factory" className="hover:text-white transition-colors block py-1">
                  Farm to Factory (Bihar to Bangalore)
                </a>
              </li>
              <li>
                <a href="#packaging" className="hover:text-white transition-colors block py-1">
                  Bulk Master Cartons (MOQ 100 KG)
                </a>
              </li>
              <li>
                <a href="#quote-calculator" className="hover:text-white transition-colors block py-1">
                  B2B Quote Configuration
                </a>
              </li>
              <li>
                <a href="#flavours" className="hover:text-white transition-colors block py-1">
                  Flavoured Makhana (Coming Soon)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors block py-1">
                  Bangalore &amp; Purnea Facilities
                </a>
              </li>
            </ul>
          </div>

          {/* Facilities Summary */}
          <div className="lg:col-span-4 space-y-3.5 text-xs">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">
              Operating Addresses
            </div>
            
            <div className="space-y-1">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#DFBE7A] shrink-0" />
                <span>Corporate Office (Bangalore)</span>
              </div>
              <p className="text-[#98ADA1] leading-relaxed pl-5">
                Rose Garden Apartments, Arekere, Bannerghatta Road, Bangalore, Karnataka — 560076
              </p>
            </div>

            <div className="space-y-1 pt-1">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#DFBE7A] shrink-0" />
                <span>Processing Unit (Bihar)</span>
              </div>
              <p className="text-[#98ADA1] leading-relaxed pl-5">
                BIADA Industrial Area, Maranga, Purnea, Bihar — 854301
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7A9384] text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Vimora Foods Private Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px]">
            <span>Origin: Purnea, Bihar</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>Corporate Desk: Bangalore</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>MOQ: 100 KG</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
