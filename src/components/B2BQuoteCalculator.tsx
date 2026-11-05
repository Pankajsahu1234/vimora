import React, { useState, useEffect } from 'react';
import {
  MAKHANA_GRADES,
  HOUSE_BLENDS,
  COMPANY_INFO,
  buildWhatsAppQuoteUrl,
} from '../data/makhanaData';
import { MakhanaGradeId, MakhanaVariety, HouseBlendId, QuoteInquiry } from '../types';
import {
  MessageSquare,
  Calculator,
  Send,
  Copy,
  Check,
  Truck,
  Sparkles,
} from 'lucide-react';

interface B2BQuoteCalculatorProps {
  initialGradeId?: MakhanaGradeId;
  initialVariety?: MakhanaVariety;
}

export const B2BQuoteCalculator: React.FC<B2BQuoteCalculatorProps> = ({
  initialGradeId = 'grade-5',
  initialVariety = 'Hand-Picked',
}) => {
  const [selectedGrade, setSelectedGrade] = useState<MakhanaGradeId>(initialGradeId);
  const [selectedVariety, setSelectedVariety] = useState<MakhanaVariety>(initialVariety);
  const [selectedBlend, setSelectedBlend] = useState<HouseBlendId>('vimora-regular');
  const [packagingType, setPackagingType] = useState<'wholesale' | 'retail'>('wholesale');
  const [quantityKg, setQuantityKg] = useState<number>(250);
  const [buyerName, setBuyerName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [deliveryCity, setDeliveryCity] = useState<string>('Bangalore, Karnataka');
  const [notes, setNotes] = useState<string>('');

  const [copied, setCopied] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialGradeId) {
      setSelectedGrade(initialGradeId);
    }
  }, [initialGradeId]);

  useEffect(() => {
    if (initialVariety) {
      setSelectedVariety(initialVariety);
    }
  }, [initialVariety]);

  // Sync blend when grade changes
  useEffect(() => {
    if (selectedGrade === 'grade-5-plus' || selectedGrade === 'grade-6-plus') {
      setSelectedBlend('vimora-premium');
    } else {
      setSelectedBlend('vimora-regular');
    }
  }, [selectedGrade]);

  const activeGradeObj = MAKHANA_GRADES.find((g) => g.id === selectedGrade) || MAKHANA_GRADES[2];
  const activeBlendObj = HOUSE_BLENDS.find((b) => b.id === selectedBlend) || HOUSE_BLENDS[0];

  const estimatedCartons = packagingType === 'wholesale'
    ? Math.ceil(quantityKg / 10) // 10kg master cartons
    : Math.ceil((quantityKg * 1000) / 250); // 250g retail pouches

  const inquiryPayload: Partial<QuoteInquiry> = {
    buyerName,
    companyName,
    phone,
    email,
    grade: selectedGrade,
    variety: selectedVariety,
    blend: selectedBlend,
    packagingType,
    quantityKg,
    deliveryCity,
    notes,
  };

  const whatsappUrl = buildWhatsAppQuoteUrl(inquiryPayload);

  const handleCopySpec = () => {
    const summary = `VIMORA FOODS — B2B ORDER SPECIFICATION
------------------------------------
Grade: ${activeGradeObj.name} (${activeGradeObj.sizeDiameter})
Finish: ${selectedVariety}
Blend: ${activeBlendObj.name}
Packaging: ${packagingType === 'wholesale' ? 'Bulk 10kg/25kg Cartons' : 'Retail Pouches (100g / 250g)'}
Quantity: ${quantityKg} KG (~${estimatedCartons} ${packagingType === 'wholesale' ? 'Master Boxes' : 'Pouches'})
Destination: ${deliveryCity}
Buyer: ${buyerName || 'Corporate Client'} ${companyName ? `(${companyName})` : ''}
Phone: ${phone || 'Direct'}
------------------------------------
Bangalore Desk: Rose Garden Apts, Arekere, Bannerghatta Rd
Processing: BIADA Industrial Area, Maranga, Purnea, Bihar
WhatsApp: +91 99625 70800`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote-calculator" className="py-14 sm:py-18 lg:py-22 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
            Wholesale Inquiry
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight text-balance">
            Configure Your Wholesale Makhana Lot.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#475A4E] mt-2.5">
            Select your preferred grade, finish, and volume to generate a direct quote for our Bangalore desk.
          </p>
        </div>

        {/* 2-Column Interactive Configuration Workspace */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border border-[#DFD6C6] shadow-xs space-y-5 sm:space-y-6">
            
            {/* 1. Grade Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#112F20] mb-2">
                01. Select Grade
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {MAKHANA_GRADES.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedGrade(g.id)}
                    className={`min-h-[52px] p-2.5 sm:p-3 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-center ${
                      selectedGrade === g.id
                        ? 'bg-[#112F20] text-white border-[#112F20] ring-1 ring-[#B88E3E]'
                        : 'bg-[#FAF8F5] text-[#293B2F] border-[#E5DDD0] hover:border-[#B88E3E]'
                    }`}
                  >
                    <div className="font-serif text-xs sm:text-sm font-bold truncate">
                      {g.name}
                    </div>
                    <div className={`font-mono text-[11px] mt-0.5 ${selectedGrade === g.id ? 'text-[#DFBE7A]' : 'text-[#708075]'}`}>
                      {g.sizeDiameter}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Sorting Variety Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#112F20] mb-2">
                02. Sorting Finish
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedVariety('Hand-Picked')}
                  className={`p-3 sm:p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                    selectedVariety === 'Hand-Picked'
                      ? 'bg-[#112F20] text-white border-[#112F20]'
                      : 'bg-[#FAF8F5] text-[#293B2F] border-[#E5DDD0] hover:border-[#B88E3E]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-xs">Hand-Picked (Zero Black Spots)</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#B88E3E]" />
                  </div>
                  <p className={`text-[11px] mt-1 leading-snug ${selectedVariety === 'Hand-Picked' ? 'text-[#D0DCD5]' : 'text-[#6C7E73]'}`}>
                    Inspected on sorting tables for pristine appearance. Recommended for retail and gifting.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedVariety('Normal')}
                  className={`p-3 sm:p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                    selectedVariety === 'Normal'
                      ? 'bg-[#112F20] text-white border-[#112F20]'
                      : 'bg-[#FAF8F5] text-[#293B2F] border-[#E5DDD0] hover:border-[#B88E3E]'
                  }`}
                >
                  <div className="font-semibold text-xs">Normal (Machine-Classified)</div>
                  <p className={`text-[11px] mt-1 leading-snug ${selectedVariety === 'Normal' ? 'text-[#D0DCD5]' : 'text-[#6C7E73]'}`}>
                    Pneumatically cleaned and sieved. Cost-effective for processing and bulk roasting lines.
                  </p>
                </button>
              </div>
            </div>

            {/* 3. Packaging Format & Blend */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#112F20] mb-1.5">
                  03. Packaging Format
                </label>
                <div className="inline-flex w-full p-1 bg-[#F1ECE1] rounded-lg border border-[#DDD3C2]">
                  <button
                    type="button"
                    onClick={() => setPackagingType('wholesale')}
                    className={`flex-1 py-2 text-[11px] sm:text-xs font-semibold rounded-md transition-colors cursor-pointer min-h-[38px] ${
                      packagingType === 'wholesale'
                        ? 'bg-[#112F20] text-white'
                        : 'text-[#485C50] hover:text-[#112F20]'
                    }`}
                  >
                    Bulk Master Carton (MOQ 100kg)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPackagingType('retail')}
                    className={`flex-1 py-2 text-[11px] sm:text-xs font-semibold rounded-md transition-colors cursor-pointer min-h-[38px] ${
                      packagingType === 'retail'
                        ? 'bg-[#112F20] text-white'
                        : 'text-[#485C50] hover:text-[#112F20]'
                    }`}
                  >
                    Retail Pouches (100g/250g)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#112F20] mb-1.5">
                  04. Blend Preference
                </label>
                <select
                  value={selectedBlend}
                  onChange={(e) => setSelectedBlend(e.target.value as HouseBlendId)}
                  className="w-full bg-[#FAF8F5] border border-[#DDD3C2] rounded-lg px-3 py-2 min-h-[42px] text-xs font-medium text-[#1E2E23] focus:ring-1 focus:ring-[#B88E3E] focus:outline-none"
                >
                  <option value="vimora-regular">Vimora Regular (Commercial Blend)</option>
                  <option value="vimora-premium">Vimora Premium (Jumbo Hand-Picked)</option>
                </select>
              </div>
            </div>

            {/* 4. Quantity Stepper */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#112F20]">
                  05. Order Volume (KG)
                </label>
                <span className="text-[11px] sm:text-xs font-mono font-semibold text-[#8C764D]">
                  MOQ: 100 KG
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="50"
                  value={quantityKg}
                  onChange={(e) => setQuantityKg(Number(e.target.value))}
                  className="w-full accent-[#112F20] cursor-pointer h-7"
                />
                <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
                  <span className="sm:hidden text-xs text-[#526356]">Volume:</span>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min="100"
                      step="25"
                      value={quantityKg}
                      onChange={(e) => setQuantityKg(Math.max(100, Number(e.target.value)))}
                      className="w-24 px-3 py-2 min-h-[40px] border border-[#DDD3C2] rounded-md font-mono text-sm font-bold text-[#112F20] bg-[#FAF8F5] text-right"
                    />
                    <span className="text-xs font-bold text-[#55675B]">KG</span>
                  </div>
                </div>
              </div>

              {/* Volume Presets */}
              <div className="mt-2.5 flex flex-wrap gap-2 text-xs">
                {[100, 250, 500, 1000, 2500].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setQuantityKg(preset)}
                    className={`min-h-[36px] px-3 py-1 rounded-md text-xs font-mono cursor-pointer transition-colors ${
                      quantityKg === preset
                        ? 'bg-[#112F20] text-white font-bold'
                        : 'bg-[#F1ECE1] text-[#47594D] hover:bg-[#E5DDCF]'
                    }`}
                  >
                    {preset} KG
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Contact Info */}
            <div className="pt-4 border-t border-[#EDE5D8] space-y-3.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#112F20]">
                06. Contact Details
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] text-[#55675B] mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Anand Murthy"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#DDD3C2] rounded-md bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#B88E3E]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#55675B] mb-1">Company / Brand</label>
                  <input
                    type="text"
                    placeholder="e.g. South Indian Foods Ltd"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#DDD3C2] rounded-md bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#B88E3E]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#55675B] mb-1">Mobile / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="e.g. 99625 70800"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#DDD3C2] rounded-md bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#B88E3E]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#55675B] mb-1">Delivery Destination</label>
                  <input
                    type="text"
                    placeholder="e.g. Bangalore, Karnataka"
                    value={deliveryCity}
                    onChange={(e) => setDeliveryCity(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-[#DDD3C2] rounded-md bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#B88E3E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-[#55675B] mb-1">Notes / Timelines (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Share roasting specifications, delivery timelines, or packaging requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[#DDD3C2] rounded-md bg-[#FAF8F5] focus:outline-none focus:ring-1 focus:ring-[#B88E3E]"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            
            <div className="rounded-2xl p-6 sm:p-7 bg-[#112F20] text-white border border-[#24573B] shadow-lg">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#1E4D34]">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#DFBE7A]">
                    Order Summary
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                    Quotation Overview
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-[#18462F] text-[#DFBE7A]">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Specifications Breakdown */}
              <div className="mt-4 space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-[#163E29]">
                  <span className="text-[#A2B8AA]">Grade</span>
                  <span className="font-bold text-white">{activeGradeObj.name}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#163E29]">
                  <span className="text-[#A2B8AA]">Diameter</span>
                  <span className="font-mono text-[#DFBE7A] font-bold">{activeGradeObj.sizeDiameter}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#163E29]">
                  <span className="text-[#A2B8AA]">Finish</span>
                  <span className="font-medium text-white">{selectedVariety}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#163E29]">
                  <span className="text-[#A2B8AA]">Blend</span>
                  <span className="font-medium text-white">{activeBlendObj.name}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#163E29]">
                  <span className="text-[#A2B8AA]">Packaging</span>
                  <span className="font-medium text-white">
                    {packagingType === 'wholesale' ? 'Bulk Cartons' : 'Retail Pouches'}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#163E29]">
                  <span className="text-[#A2B8AA]">Total Weight</span>
                  <span className="font-mono text-base font-bold text-[#DFBE7A] tabular-nums">
                    {quantityKg} KG
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-[#163E29]">
                  <span className="text-[#A2B8AA]">Estimated Packaging</span>
                  <span className="font-medium text-white">
                    ~{estimatedCartons} {packagingType === 'wholesale' ? 'Master Boxes' : 'Pouches'}
                  </span>
                </div>

                <div className="flex justify-between py-1">
                  <span className="text-[#A2B8AA]">Origin &gt; Destination</span>
                  <span className="font-medium text-white">BIADA Purnea &gt; {deliveryCity}</span>
                </div>
              </div>

              {/* Direct WhatsApp Order Button */}
              <div className="mt-5 pt-4 border-t border-[#1E4D34] space-y-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 min-h-[48px] py-3.5 px-4 text-xs font-bold tracking-wide text-[#112F20] bg-[#B88E3E] hover:bg-[#DFBE7A] active:scale-[0.98] rounded-md transition-all shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#112F20] shrink-0" />
                  <span>Send WhatsApp Inquiry (9962570800)</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleCopySpec}
                    className="min-h-[42px] inline-flex items-center justify-center gap-1.5 py-2 px-2.5 text-[11px] font-semibold text-[#D4E0D9] bg-[#17432D] hover:bg-[#20583B] active:scale-[0.98] rounded-md transition-all cursor-pointer border border-[#276444]"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#DFBE7A]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Spec'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmitInquiry}
                    className="min-h-[42px] inline-flex items-center justify-center gap-1.5 py-2 px-2.5 text-[11px] font-semibold text-[#D4E0D9] bg-[#17432D] hover:bg-[#20583B] active:scale-[0.98] rounded-md transition-all cursor-pointer border border-[#276444]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </div>

              {/* Submission confirmation */}
              {submitted && (
                <div className="mt-3.5 p-3 rounded-md bg-[#18462F] border border-[#B88E3E] text-xs text-[#FAF8F5]">
                  <div className="font-bold text-[#DFBE7A] flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Inquiry Received
                  </div>
                  <p className="mt-0.5 text-[11px] text-[#CFDFD6]">
                    Our Bangalore sales desk will contact you with pro-forma pricing shortly.
                  </p>
                </div>
              )}

              <div className="mt-3.5 text-[11px] text-[#9CB5A6] flex items-center gap-1.5 justify-center">
                <Truck className="w-3.5 h-3.5 text-[#DFBE7A]" />
                <span>Bangalore delivery &amp; Pan-India freight dispatch</span>
              </div>
            </div>

            {/* Direct Contact Info Box */}
            <div className="p-4 rounded-xl bg-white border border-[#DFD6C6] text-xs text-[#485B4E] space-y-1">
              <div className="font-bold text-[#112F20]">Bangalore B2B Desk</div>
              <div className="text-[11px]">Phone &amp; WhatsApp: <strong>+91 99625 70800</strong></div>
              <div className="text-[11px]">Rose Garden Apartments, Arekere, Bannerghatta Road</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
