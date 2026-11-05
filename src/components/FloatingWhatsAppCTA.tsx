import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, buildWhatsAppDirectUrl } from '../data/makhanaData';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsAppCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <aside
      aria-label="Direct WhatsApp Ordering"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      <div className="hidden sm:flex items-center gap-2 bg-[#112F20] text-white py-1.5 px-3 rounded-lg shadow-lg border border-[#2B5E40] text-xs">
        <span className="font-medium">Direct WhatsApp Desk</span>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-[#98ADA1] hover:text-white p-0.5 cursor-pointer ml-1"
          aria-label="Dismiss hint"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <a
        href={buildWhatsAppDirectUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Vimora Foods at 9962570800"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]/40 cursor-pointer"
      >
        <MessageSquare className="w-5 h-5 fill-current text-white" />
      </a>
    </aside>
  );
};
