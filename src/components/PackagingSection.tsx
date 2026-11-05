import React from 'react';
import { ASSET_IMAGES, PACKAGING_OPTIONS, buildWhatsAppDirectUrl } from '../data/makhanaData';
import { Check } from 'lucide-react';

interface PackagingSectionProps {
  onScrollToQuote: () => void;
}

export const PackagingSection: React.FC<PackagingSectionProps> = ({ onScrollToQuote }) => {
  return (
    <section id="packaging" className="py-14 sm:py-18 lg:py-22 bg-[#F5EFE5]/50 border-y border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
            Packaging Formats
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight text-balance">
            Bulk Cartons &amp; Retail Barrier Pouches.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#46584C] mt-2.5 leading-relaxed">
            From 100 KG wholesale shipments for snack manufacturers to 100g and 250g nitrogen-sealed retail pouches for modern store shelves. Every format is hermetically sealed against humidity.
          </p>
        </div>

        {/* Feature Split: Visual Showcase & Specifications */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Left: Generated Packaging Asset Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#DCD3C3] shadow-md bg-[#FAF8F5]">
              <img
                src={ASSET_IMAGES.packaging}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = '/images/packaging_b2b.jpg';
                }}
                alt="Vimora Foods wholesale makhana master carton and retail pouches"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[440px] object-cover object-center"
              />
              <div className="p-3.5 bg-[#FAF8F5] border-t border-[#E5DDCF] flex items-center justify-between text-xs text-[#526356]">
                <span className="font-semibold text-[#112F20]">Master Cartons &amp; Stand-Up Pouches</span>
                <span className="font-mono text-[#8C7A57]">100g · 250g · Bulk</span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Format Specifications */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {PACKAGING_OPTIONS.map((option) => {
              const isWholesale = option.type === 'wholesale';
              return (
                <div
                  key={option.type}
                  className="p-5 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#DDD3C2] shadow-2xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-[#EAE2D3]">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#B88E3E]">
                        {isWholesale ? 'B2B & Institutional Supply' : 'Modern Trade & Retail'}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#112F20] mt-0.5">
                        {option.title}
                      </h3>
                    </div>
                    <div className="inline-block sm:text-right">
                      <span className="text-xs font-mono font-bold text-[#112F20] bg-[#EAE2D3] px-2.5 py-1 rounded-md">
                        {option.moq}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1 text-xs text-[#47594C]">
                    <div>
                      <strong className="text-[#112F20]">Capacities: </strong>
                      {option.size}
                    </div>
                    <div>
                      <strong className="text-[#112F20]">Barrier: </strong>
                      {option.material}
                    </div>
                    <p className="pt-1 text-[#4F6255] leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-3 border-t border-[#ECE5D8] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#394B3F]">
                    {option.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B88E3E] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Private Label & Contract Packaging Capability Card */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-[#112F20] text-[#FAF8F5] border border-[#23563A] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">
              Contract Packaging &amp; White-Label
            </span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Launch Your Own Makhana Line.
            </h3>
            <p className="text-xs sm:text-sm text-[#CAD4CE] leading-relaxed">
              We offer turnkey private labeling for retail chains, direct-to-consumer health brands, and gift aggregators. Custom grade selection, nitrogen sealing, and barcode compliance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
            <button
              type="button"
              onClick={onScrollToQuote}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 text-xs font-semibold text-[#112F20] bg-[#B88E3E] hover:bg-[#DFBE7A] active:scale-[0.98] rounded-md transition-all whitespace-nowrap cursor-pointer text-center"
            >
              Configure Order
            </button>
            <a
              href={buildWhatsAppDirectUrl('Hello Vimora Foods, I would like to discuss private label/contract packaging for phool makhana.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[44px] flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#194C32] hover:bg-[#205F3F] active:scale-[0.98] border border-[#2F6F4C] rounded-md transition-all whitespace-nowrap text-center"
            >
              Discuss White-Label
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
