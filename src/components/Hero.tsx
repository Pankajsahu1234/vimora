import React from 'react';
import { ASSET_IMAGES, COMPANY_INFO, buildWhatsAppDirectUrl } from '../data/makhanaData';
import { MessageSquare, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onScrollToQuote: () => void;
  onOpenSampleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToQuote, onOpenSampleModal }) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-22 overflow-hidden">
      {/* Subtle warm earthen aura in the background */}
      <div
        className="absolute top-0 right-0 -z-10 w-2/3 h-full opacity-35 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 75% 25%, #EADBBE 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Natural, Classy Corporate Headline & Copy */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Clean unboxed editorial kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
              <span>Purnea, Bihar Harvest</span>
              <span aria-hidden="true" className="text-[#A89C8A]">·</span>
              <span>BIADA Processing</span>
              <span aria-hidden="true" className="text-[#A89C8A]">·</span>
              <span>Bangalore Desk</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#112F20] leading-[1.1] tracking-tight text-balance">
              Single-Origin Phool Makhana. From Bihar to Bangalore.
            </h1>

            {/* Concise, calm, elegant B2B copy */}
            <p className="text-sm sm:text-base lg:text-lg text-[#36493D] leading-relaxed max-w-2xl text-pretty font-light">
              Grown in the freshwater wetlands of Purnea and graded at our BIADA industrial unit. We supply calibrated Grades 4 to 6+, signature house blends, and bulk packaging directly to Bangalore’s food brands, retail chains, and institutional buyers.
            </p>

            {/* Primary Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onScrollToQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-xs sm:text-sm font-semibold text-white bg-[#112F20] rounded-md hover:bg-[#1A4E33] active:scale-[0.98] transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E]"
              >
                <span>Request B2B Quote</span>
                <ArrowRight className="w-4 h-4 text-[#DFBE7A]" />
              </button>

              <a
                href={buildWhatsAppDirectUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 min-h-[48px] text-xs sm:text-sm font-semibold text-[#112F20] bg-[#FAF8F5] border border-[#B88E3E] rounded-md hover:bg-[#F3EDE2] active:scale-[0.98] transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E]"
              >
                <MessageSquare className="w-4 h-4 text-[#B88E3E]" />
                <span>WhatsApp ({COMPANY_INFO.phone})</span>
              </a>

              <button
                type="button"
                onClick={onOpenSampleModal}
                className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] px-3 py-2 text-xs font-semibold tracking-wide text-[#655543] hover:text-[#112F20] transition-colors underline underline-offset-4 decoration-[#B88E3E] cursor-pointer text-center"
              >
                Request Sample Kit
              </button>
            </div>

            {/* Unboxed Metadata Proof Strip */}
            <div className="pt-4 border-t border-[#E6DECF] flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-4 text-[11px] sm:text-xs text-[#526457]">
              <span className="flex items-center gap-1.5 text-[#112F20] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#B88E3E]" />
                Zero Middlemen
              </span>
              <span aria-hidden="true" className="text-[#C6BCAC]">·</span>
              <span>MOQ: 100 KG Bulk Cartons</span>
              <span aria-hidden="true" className="text-[#C6BCAC]">·</span>
              <span>Grades 4, 4+, 5, 5+, 6+</span>
              <span aria-hidden="true" className="text-[#C6BCAC]">·</span>
              <span>Bangalore Ready Stock</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D9D0C1] shadow-xl bg-[#143323]">
              <img
                src={ASSET_IMAGES.hero}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = '/images/hero_makhana.jpg';
                }}
                alt="Premium jumbo phool makhana fox nuts in artisan ceramic bowl"
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[470px] object-cover object-center transition-opacity duration-300"
              />
              
              {/* Subtle natural gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C13]/80 via-transparent to-transparent pointer-events-none" />

              {/* Inlaid Location & Grade Strip */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 rounded-xl bg-[#FAF8F5]/95 backdrop-blur-md border border-[#E2D9C9] shadow-lg text-[#1A2C20]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#B88E3E] uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#B88E3E]" />
                      Processing Facility
                    </div>
                    <div className="font-serif text-sm sm:text-base font-bold text-[#112F20] mt-0.5">
                      BIADA Industrial Area, Purnea
                    </div>
                    <div className="text-[11px] text-[#55675A]">
                      Mithila Basin, Bihar · Direct Origin
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[11px] font-mono font-semibold text-[#112F20] bg-[#ECE4D3] px-2.5 py-1 rounded-md">
                      Grade 6+ Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Pillar Origin-to-Delivery Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 sm:pt-10 border-t border-[#E5DDD0]">
          <div className="space-y-1.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">01. Origin Traceability</div>
            <h2 className="font-serif text-lg font-bold text-[#112F20]">Purnea Wetlands</h2>
            <p className="text-xs text-[#526457] leading-relaxed">
              Harvested across clean perennial freshwater ponds in Bihar with traditional harvesting families.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">02. Precision Grading</div>
            <h2 className="font-serif text-lg font-bold text-[#112F20]">BIADA Facility</h2>
            <p className="text-xs text-[#526457] leading-relaxed">
              Pneumatically cleaned, rotary-sieved, and sorted into calibrated millimeter gauges (Grade 4 to 6+).
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">03. Flexible Packaging</div>
            <h2 className="font-serif text-lg font-bold text-[#112F20]">Bulk &amp; Retail</h2>
            <p className="text-xs text-[#526457] leading-relaxed">
              100 KG wholesale master cartons for processors, plus 100g and 250g nitrogen-flushed retail pouches.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">04. Strategic Fulfillment</div>
            <h2 className="font-serif text-lg font-bold text-[#112F20]">Bangalore Hub</h2>
            <p className="text-xs text-[#526457] leading-relaxed">
              Corporate office at Arekere, Bannerghatta Road ensures direct communication, samples, and ready stock.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
