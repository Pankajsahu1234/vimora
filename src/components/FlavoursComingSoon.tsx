import React, { useState } from 'react';
import { UPCOMING_FLAVOURS, buildWhatsAppDirectUrl } from '../data/makhanaData';
import { Sparkles, Check } from 'lucide-react';

export const FlavoursComingSoon: React.FC = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <section id="flavours" className="py-14 sm:py-18 lg:py-22 bg-[#F5EFE5]/50 border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-[#E3D9CA]">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
              In Development
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight text-balance">
              Flavoured Makhana. Coming Soon.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#495C50] mt-2.5 leading-relaxed">
              While our commercial focus is pure single-origin Raw &amp; Roasted Unflavoured Makhana, gourmet seasoned batches are currently in testing.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#112F20] bg-[#EAE1D1] px-3 py-2 rounded-md border border-[#D5C9B6]">
              <Sparkles className="w-3.5 h-3.5 text-[#B88E3E] shrink-0" />
              <span>Bangalore Tasting Trials</span>
            </span>
          </div>
        </div>

        {/* 4 Flavours Showcase Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {UPCOMING_FLAVOURS.map((flavour, idx) => (
            <div
              key={flavour.id}
              className="rounded-2xl p-5 sm:p-6 bg-[#FAF8F5] border border-[#DDD3C2] hover:border-[#B88E3E] transition-all flex flex-col justify-between shadow-2xs group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-[#8C7B58] text-[11px]">Trial #0{idx + 1}</span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-[#112F20] bg-[#ECE5D8] px-2 py-0.5 rounded">
                    {flavour.tag}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#112F20] group-hover:text-[#18462F] transition-colors">
                  {flavour.name}
                </h3>
                <div className="text-xs font-semibold text-[#8C7B58] mt-0.5">
                  {flavour.subtitle}
                </div>

                <p className="text-xs text-[#526457] mt-3 leading-relaxed">
                  {flavour.seasoningProfile}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#ECE5D9] text-[11px] text-[#718276]">
                <strong className="text-[#112F20]">Profile:</strong> {flavour.pairingNote}
              </div>
            </div>
          ))}
        </div>

        {/* Early Tasting Box Callout */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-[#DDD3C2] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xs">
          <div className="max-w-xl space-y-1.5">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#112F20]">
              Interested in Early Tasting Samples?
            </h3>
            <p className="text-xs sm:text-sm text-[#4E6053] leading-relaxed">
              We offer sample batches for retail procurement managers, cafe chains, and private labels in Bangalore ahead of wider release.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-2">
              <input
                type="email"
                placeholder="Enter corporate email..."
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                required
                className="w-full sm:w-auto px-3.5 py-2.5 min-h-[44px] text-xs border border-[#DDD3C2] rounded-md bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#B88E3E] sm:min-w-[220px]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2.5 min-h-[44px] text-xs font-semibold text-white bg-[#112F20] hover:bg-[#1A4E33] active:scale-[0.98] rounded-md transition-all whitespace-nowrap cursor-pointer text-center"
              >
                Join Tasting List
              </button>
            </form>

            <a
              href={buildWhatsAppDirectUrl('Hello Vimora Foods, I would like to request tasting samples for your upcoming Flavoured Makhana.')}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center justify-center text-xs font-semibold text-[#8C7B58] hover:text-[#112F20] transition-colors underline underline-offset-4 whitespace-nowrap text-center"
            >
              Request via WhatsApp &rarr;
            </a>
          </div>
        </div>

        {isSubscribed && (
          <div className="mt-3.5 p-3 bg-[#EAF2ED] border border-[#A6C4B0] text-[#112F20] text-xs rounded-md flex items-center gap-2">
            <Check className="w-4 h-4 text-[#18462F]" />
            <span>Thank you. Your email ({waitlistEmail}) has been added to our Bangalore tasting round.</span>
          </div>
        )}

      </div>
    </section>
  );
};
