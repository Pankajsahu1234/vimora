import React, { useState } from 'react';
import { MAKHANA_GRADES, HOUSE_BLENDS } from '../data/makhanaData';
import { MakhanaGradeId, MakhanaVariety } from '../types';
import { Check, Info, Sparkles, ArrowUpRight } from 'lucide-react';

interface GradesTableProps {
  onSelectGradeForQuote: (gradeId: MakhanaGradeId, variety: MakhanaVariety) => void;
}

export const GradesTable: React.FC<GradesTableProps> = ({ onSelectGradeForQuote }) => {
  const [activeVariety, setActiveVariety] = useState<MakhanaVariety>('Hand-Picked');
  const [selectedGradeId, setSelectedGradeId] = useState<MakhanaGradeId | 'all'>('all');

  const filteredGrades = selectedGradeId === 'all'
    ? MAKHANA_GRADES
    : MAKHANA_GRADES.filter((g) => g.id === selectedGradeId);

  return (
    <section id="grades" className="py-14 sm:py-18 lg:py-22 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E8E1D5]">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
              Calibrated Sizing &amp; Specifications
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight">
              Calibrated B2B Makhana Grades.
            </h2>
            <p className="text-sm sm:text-base text-[#46584C] mt-2.5">
              Available in Normal (Machine-Cleaned) or Hand-Picked (Zero-Black-Spot) export finish, calibrated strictly by millimeter diameter.
            </p>
          </div>

          {/* Interactive Variety Filter Control */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#697B70]">
              Sorting Finish:
            </span>
            <div className="inline-flex p-1 bg-[#ECE5D7] rounded-lg border border-[#DACFBF]">
              <button
                type="button"
                onClick={() => setActiveVariety('Hand-Picked')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeVariety === 'Hand-Picked'
                    ? 'bg-[#112F20] text-white shadow-xs'
                    : 'text-[#485B50] hover:text-[#112F20]'
                }`}
              >
                Hand-Picked (Zero Black Spots)
              </button>
              <button
                type="button"
                onClick={() => setActiveVariety('Normal')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeVariety === 'Normal'
                    ? 'bg-[#112F20] text-white shadow-xs'
                    : 'text-[#485B50] hover:text-[#112F20]'
                }`}
              >
                Normal (Machine Cleaned)
              </button>
            </div>
          </div>
        </div>

        {/* Variety Explainer Note */}
        <div className="mt-6 p-4 rounded-xl bg-[#F5EFE4] border border-[#E4D9C8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#4E5F53]">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-[#B88E3E] shrink-0" />
            <span>
              {activeVariety === 'Hand-Picked' ? (
                <>
                  <strong className="text-[#112F20]">Hand-Picked:</strong> Inspected on sorting tables for spotless white kernels with negligible dark seed-coats. Best for premium retail packaging, roasting brands, and export.
                </>
              ) : (
                <>
                  <strong className="text-[#112F20]">Normal Cleaned:</strong> Pneumatically dedusted and sieved to remove dust and debris. Cost-effective for commercial food manufacturing and extrusion lines.
                </>
              )}
            </span>
          </div>

          <div className="shrink-0 font-mono text-[11px] text-[#867554] bg-[#EDE4D3] px-2.5 py-1 rounded-md">
            MOQ: 100 KG Bulk Cartons
          </div>
        </div>

        {/* Grade Filter Horizontal Buttons */}
        <div className="mt-6 sm:mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedGradeId('all')}
            className={`min-h-[40px] px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
              selectedGradeId === 'all'
                ? 'bg-[#112F20] text-white shadow-xs'
                : 'bg-[#EDE7DA] text-[#445548] hover:bg-[#E2D9C9]'
            }`}
          >
            All 5 Grades
          </button>
          {MAKHANA_GRADES.map((grade) => (
            <button
              key={grade.id}
              type="button"
              onClick={() => setSelectedGradeId(grade.id)}
              className={`min-h-[40px] px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                selectedGradeId === grade.id
                  ? 'bg-[#112F20] text-white shadow-xs'
                  : 'bg-[#EDE7DA] text-[#445548] hover:bg-[#E2D9C9]'
              }`}
            >
              {grade.name} ({grade.sizeDiameter})
            </button>
          ))}
        </div>

        {/* Mobile View: Cards */}
        <div className="block md:hidden mt-4 space-y-4">
          {filteredGrades.map((grade) => {
            const isJumbo = grade.id === 'grade-6-plus' || grade.id === 'grade-5-plus';
            return (
              <div
                key={grade.id}
                className={`p-5 rounded-xl border transition-all ${
                  isJumbo
                    ? 'bg-[#FAF6EE] border-[#B88E3E]/40 shadow-xs'
                    : 'bg-white border-[#DFD6C6]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-semibold text-[#8C7A56] uppercase tracking-wider">
                      Finish: {activeVariety}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#112F20] mt-0.5">
                      {grade.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block px-2.5 py-1 rounded bg-[#112F20] text-[#DFBE7A] font-mono text-xs font-bold tabular-nums">
                      {grade.sizeDiameter}
                    </span>
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-[#EFE8DD] grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[11px] text-[#788A7D] block">Count / KG</span>
                    <span className="font-mono text-[#1E2E23] font-semibold tabular-nums">
                      {grade.countRange}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#788A7D] block">Expansion</span>
                    <span className="text-[#1E2E23] font-semibold">
                      {grade.expansionRatio}
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-xs text-[#4F6154] leading-relaxed">
                  <strong className="text-[#112F20]">Best For: </strong>
                  {grade.idealFor}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectGradeForQuote(grade.id, activeVariety)}
                  className="mt-4 w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-[#112F20] hover:bg-[#1A4E33] active:scale-[0.98] rounded-lg transition-all cursor-pointer"
                >
                  <span>Select &amp; Quote ({grade.name})</span>
                  <ArrowUpRight className="w-4 h-4 text-[#DFBE7A]" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Desktop Specifications Table */}
        <div className="hidden md:block mt-4 rounded-xl border border-[#DFD6C6] bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F6F2EA] border-b border-[#E3D9C9] text-[11px] uppercase tracking-wider text-[#647668]">
                  <th className="py-4 px-6 font-semibold">Grade</th>
                  <th className="py-4 px-5 font-semibold">Diameter</th>
                  <th className="py-4 px-5 font-semibold">Count / KG</th>
                  <th className="py-4 px-5 font-semibold">Expansion</th>
                  <th className="py-4 px-6 font-semibold">Primary B2B Application</th>
                  <th className="py-4 px-6 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE8DD] text-xs">
                {filteredGrades.map((grade) => {
                  const isJumbo = grade.id === 'grade-6-plus' || grade.id === 'grade-5-plus';
                  return (
                    <tr
                      key={grade.id}
                      className={`hover:bg-[#FAF7F0] transition-colors ${
                        isJumbo ? 'bg-[#FCFAF6]' : ''
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-base font-bold text-[#112F20]">
                            {grade.name}
                          </span>
                          {grade.id === 'grade-6-plus' && (
                            <span className="text-[10px] font-sans font-semibold text-[#8C6D27] bg-[#F7EACD] px-2 py-0.5 rounded">
                              Jumbo Export
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#718276] mt-0.5">
                          Finish: {activeVariety} · Moisture &lt;9%
                        </div>
                      </td>

                      <td className="py-4 px-5 font-mono text-[#112F20] font-semibold tabular-nums">
                        {grade.sizeDiameter}
                      </td>

                      <td className="py-4 px-5 font-mono text-[#4C5D51] tabular-nums">
                        {grade.countRange}
                      </td>

                      <td className="py-4 px-5 font-medium text-[#112F20]">
                        {grade.expansionRatio}
                      </td>

                      <td className="py-4 px-6 text-[#4C5D51] max-w-xs leading-relaxed">
                        {grade.idealFor}
                      </td>

                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => onSelectGradeForQuote(grade.id, activeVariety)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#112F20] bg-[#EBE3D3] hover:bg-[#112F20] hover:text-white rounded-md transition-colors cursor-pointer"
                        >
                          <span>Select &amp; Quote</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* House Blends Showcase */}
        <div className="mt-14 sm:mt-16">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
              Signature Blends
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#112F20] mt-1">
              Vimora House Blends.
            </h3>
            <p className="text-xs sm:text-sm text-[#46584C] mt-1.5">
              Formulated for volume buyers who require stable bag-fill volume, uniform roasting absorption, and steady container economics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {HOUSE_BLENDS.map((blend) => {
              const isPremium = blend.id === 'vimora-premium';
              return (
                <div
                  key={blend.id}
                  className={`rounded-2xl p-6 sm:p-7 border transition-all ${
                    isPremium
                      ? 'bg-[#112F20] text-white border-[#245338] shadow-md'
                      : 'bg-white text-[#1C2C20] border-[#DDD3C2] shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className={`text-[11px] font-semibold tracking-wider uppercase ${isPremium ? 'text-[#DFBE7A]' : 'text-[#84755B]'}`}>
                        {blend.tagline}
                      </span>
                      <h4 className={`font-serif text-2xl font-bold mt-1 ${isPremium ? 'text-white' : 'text-[#112F20]'}`}>
                        {blend.name}
                      </h4>
                    </div>
                    {isPremium && (
                      <span className="p-2 rounded-full bg-[#1A4B31] text-[#DFBE7A]">
                        <Sparkles className="w-5 h-5" />
                      </span>
                    )}
                  </div>

                  <div className={`mt-4 pt-4 border-t space-y-2 text-xs ${isPremium ? 'border-[#1C4E33] text-[#CFD8D3]' : 'border-[#EDE6D9] text-[#4F6054]'}`}>
                    <div>
                      <strong className={isPremium ? 'text-white' : 'text-[#112F20]'}>Composition: </strong>
                      {blend.composition}
                    </div>
                    <div>
                      <strong className={isPremium ? 'text-white' : 'text-[#112F20]'}>Roast State: </strong>
                      {blend.roastProfile}
                    </div>
                    <div>
                      <strong className={isPremium ? 'text-white' : 'text-[#112F20]'}>Target Market: </strong>
                      {blend.targetMarket}
                    </div>
                  </div>

                  {/* Highlights list */}
                  <ul className="mt-4 space-y-1.5 text-xs">
                    {blend.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isPremium ? 'text-[#DFBE7A]' : 'text-[#112F20]'}`} />
                        <span className={isPremium ? 'text-[#DCE4E0]' : 'text-[#3E5044]'}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-inherit flex items-center justify-between">
                    <span className={`text-[11px] font-mono ${isPremium ? 'text-[#9EB7A7]' : 'text-[#877863]'}`}>
                      MOQ: 100 KG
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectGradeForQuote(isPremium ? 'grade-5-plus' : 'grade-5', 'Hand-Picked')}
                      className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        isPremium
                          ? 'bg-[#B88E3E] text-[#112F20] hover:bg-[#DFBE7A]'
                          : 'bg-[#112F20] text-white hover:bg-[#1A4E33]'
                      }`}
                    >
                      Inquire Blend Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
