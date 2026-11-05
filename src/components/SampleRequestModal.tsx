import React, { useState } from 'react';
import { COMPANY_INFO, MAKHANA_GRADES } from '../data/makhanaData';
import { X, Check, Package, MessageSquare } from 'lucide-react';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({ isOpen, onClose }) => {
  const [buyerName, setBuyerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedGrades, setSelectedGrades] = useState<string[]>([
    'grade-4-plus',
    'grade-5',
    'grade-5-plus',
    'grade-6-plus',
  ]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleGrade = (id: string) => {
    setSelectedGrades((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const handleWhatsAppSample = () => {
    const gradesNames = selectedGrades
      .map((id) => MAKHANA_GRADES.find((g) => g.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const msg = `Hello Vimora Foods,
I would like to request a 5-Grade Makhana evaluation kit:

*Name:* ${buyerName || 'B2B Buyer'}
*Company:* ${companyName || 'Corporate Client'}
*Phone:* ${phone || 'Direct'}
*Email:* ${email || 'Direct'}
*Address:* ${address || 'Bangalore, Karnataka'}
*Sample Grades:* ${gradesNames || 'All Grades'}

Please confirm sample kit dispatch from Bangalore.`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#FAF8F5] rounded-2xl border border-[#DCD3C3] shadow-2xl p-5 sm:p-7 animate-in fade-in zoom-in-95">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-[#6F8073] hover:text-[#112F20] transition-colors cursor-pointer rounded-full active:bg-[#ECE5D7]"
          aria-label="Close sample modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-3.5">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#18462F] text-[#DFBE7A] flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#112F20]">
              Sample Requisition Dispatched
            </h3>
            <p className="text-xs sm:text-sm text-[#4E6153] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{buyerName || 'Corporate Client'}</strong>. Our Bangalore office at Arekere, Bannerghatta Road will review your request and arrange shipping for your sample pack.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row gap-2.5 justify-center">
              <button
                type="button"
                onClick={handleWhatsAppSample}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#112F20] bg-[#B88E3E] hover:bg-[#DFBE7A] rounded-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#112F20]" />
                <span>Confirm on WhatsApp (9962570800)</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-[#3D4F42] bg-[#EBE4D5] hover:bg-[#DFD6C5] rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
                <Package className="w-4 h-4 text-[#B88E3E]" />
                B2B Evaluation Pack
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#112F20] mt-1">
                Request a Physical Grade Box.
              </h3>
              <p className="text-xs text-[#526456] mt-1">
                Supplied to commercial processors, retail brands, and institutional procurement teams.
              </p>
            </div>

            {/* Grade Selection Checkboxes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#112F20] mb-2">
                Grades to Include
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {MAKHANA_GRADES.map((g) => {
                  const isChecked = selectedGrades.includes(g.id);
                  return (
                    <button
                      type="button"
                      key={g.id}
                      onClick={() => toggleGrade(g.id)}
                      className={`p-2.5 text-left rounded-lg border text-xs transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-[#112F20] text-white border-[#112F20]'
                          : 'bg-white text-[#384A3E] border-[#DFD6C6]'
                      }`}
                    >
                      <div className="font-semibold">{g.name}</div>
                      <div className={`text-[10px] ${isChecked ? 'text-[#DFBE7A]' : 'text-[#7A8C80]'}`}>
                        {g.sizeDiameter}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-[11px] font-medium text-[#495C50] mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full px-3 py-2 border border-[#DFD6C6] rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#B88E3E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#495C50] mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Southern Foods Pvt Ltd"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-2 border border-[#DFD6C6] rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#B88E3E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#495C50] mb-1">
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 99625 70800"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-[#DFD6C6] rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#B88E3E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#495C50] mb-1">
                  Official Email
                </label>
                <input
                  type="email"
                  placeholder="corporate@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-[#DFD6C6] rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#B88E3E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#495C50] mb-1">
                Dispatch Courier Address *
              </label>
              <textarea
                rows={2}
                required
                placeholder="Complete office or facility shipping address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-[#DFD6C6] rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#B88E3E]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                type="submit"
                className="w-full sm:flex-1 py-2.5 px-4 text-xs font-bold text-white bg-[#112F20] hover:bg-[#1A4E33] rounded-md transition-colors cursor-pointer text-center"
              >
                Submit Requisition
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSample}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#112F20] bg-[#EAE2D2] hover:bg-[#DFD6C4] rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-[#B88E3E]" />
                <span>Request on WhatsApp</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
