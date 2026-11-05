import React, { useState } from 'react';
import { VimoraLogo } from './VimoraLogo';
import { COMPANY_INFO, buildWhatsAppDirectUrl } from '../data/makhanaData';
import { MessageSquare, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenSampleModal?: () => void;
  onScrollToQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSampleModal, onScrollToQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D5] transition-colors duration-200">
      {/* 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
        
        {/* Zone 1: Single Brand Wordmark Element */}
        <a
          href="#top"
          className="whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E] py-1"
          aria-label="Vimora Foods Home"
        >
          <VimoraLogo variant="dark" />
        </a>

        {/* Zone 2: 4–5 single-line text links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#384C3F]">
          <a
            href="#kernel-3d"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#kernel-3d');
            }}
            className="whitespace-nowrap shrink-0 hover:text-[#112F20] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#B88E3E] after:transition-all"
          >
            3D Calibrator
          </a>

          <a
            href="#grades"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#grades');
            }}
            className="whitespace-nowrap shrink-0 hover:text-[#112F20] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#B88E3E] after:transition-all"
          >
            Grades &amp; Sizing
          </a>

          <a
            href="#farm-to-factory"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#farm-to-factory');
            }}
            className="whitespace-nowrap shrink-0 hover:text-[#112F20] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#B88E3E] after:transition-all"
          >
            Farm to Factory
          </a>

          <a
            href="#packaging"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#packaging');
            }}
            className="whitespace-nowrap shrink-0 hover:text-[#112F20] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#B88E3E] after:transition-all"
          >
            Packaging &amp; MOQs
          </a>

          <a
            href="#flavours"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#flavours');
            }}
            className="whitespace-nowrap shrink-0 hover:text-[#112F20] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#B88E3E] after:transition-all"
          >
            Flavours (Soon)
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="whitespace-nowrap shrink-0 hover:text-[#112F20] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-[#B88E3E] after:transition-all"
          >
            Bangalore &amp; Purnea
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Direct WhatsApp Connect) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={buildWhatsAppDirectUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 min-h-[40px] text-xs font-semibold tracking-wide text-white bg-[#112F20] rounded-md border border-[#112F20] hover:bg-[#1A4E33] transition-colors shadow-2xs whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#DFBE7A] shrink-0" />
            <span className="hidden xs:inline sm:inline">WhatsApp</span>
            <span className="inline xs:hidden sm:hidden">Chat</span>
            <span className="hidden xl:inline text-[#DFBE7A] font-mono tabular-nums">9962570800</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-[#112F20] hover:text-[#B88E3E] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E] active:bg-[#ECE5D7]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E1D5] px-4 sm:px-6 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1 text-sm font-medium text-[#25382B]">
            <a
              href="#kernel-3d"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#kernel-3d');
              }}
              className="min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] text-[#B88E3E] font-semibold hover:bg-[#F2ECE1] rounded-md transition-colors"
            >
              3D Kernel Calibrator (Interactive)
            </a>
            <a
              href="#grades"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#grades');
              }}
              className="min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] hover:bg-[#F2ECE1] rounded-md transition-colors"
            >
              Grades &amp; Sizing
            </a>
            <a
              href="#farm-to-factory"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#farm-to-factory');
              }}
              className="min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] hover:bg-[#F2ECE1] rounded-md transition-colors"
            >
              Farm to Factory (Bihar to Bangalore)
            </a>
            <a
              href="#packaging"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#packaging');
              }}
              className="min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] hover:bg-[#F2ECE1] rounded-md transition-colors"
            >
              Packaging &amp; MOQs
            </a>
            <a
              href="#quote-calculator"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#quote-calculator');
              }}
              className="min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] hover:bg-[#F2ECE1] rounded-md transition-colors"
            >
              B2B Order Calculator
            </a>
            <a
              href="#flavours"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#flavours');
              }}
              className="min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] hover:bg-[#F2ECE1] rounded-md transition-colors"
            >
              Flavoured Makhana (Coming Soon)
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="min-h-[44px] flex items-center py-2 px-2 hover:bg-[#F2ECE1] rounded-md transition-colors"
            >
              Bangalore &amp; Purnea Facilities
            </a>
          </div>

          <div className="pt-2 border-t border-[#E8E1D5] grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="min-h-[44px] flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-[#112F20] bg-[#ECE5D7] rounded-md"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B88E3E]" />
              <span>Call: {COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={buildWhatsAppDirectUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-[#112F20] rounded-md"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#DFBE7A]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
