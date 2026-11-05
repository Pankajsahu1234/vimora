import React from 'react';
import { ASSET_IMAGES, SUPPLY_CHAIN_STEPS, buildWhatsAppDirectUrl } from '../data/makhanaData';
import {
  Factory,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Award,
  FileCheck2,
  BadgeCheck,
  Check,
  FileText,
  MessageSquare,
} from 'lucide-react';

interface CertificationItem {
  id: string;
  name: string;
  label: string;
  scope: string;
  auditStandard: string;
}

const INDUSTRY_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'fssai',
    name: 'FSSAI Certified Unit',
    label: 'Food Safety Authority of India',
    scope: 'Certified primary processing, pneumatic de-dusting, and food-grade moisture packaging.',
    auditStandard: 'FSS Act Compliance',
  },
  {
    id: 'iso-22000',
    name: 'ISO 22000:2018 (FSMS)',
    label: 'Food Safety Management System',
    scope: 'End-to-end farm traceability, critical process controls, and warehouse hygiene audits.',
    auditStandard: 'Global FSMS Standard',
  },
  {
    id: 'haccp',
    name: 'HACCP Compliant',
    label: 'Hazard Analysis Critical Control',
    scope: 'Moisture lock (<9%), physical sieve calibration, and optical foreign-matter removal.',
    auditStandard: 'Critical Control Points',
  },
  {
    id: 'gmp',
    name: 'GMP Certified Facility',
    label: 'Good Manufacturing Practices',
    scope: 'Sanitary grading tables, stainless-steel handling, and strict employee hygiene protocols.',
    auditStandard: 'Sanitary SOPs',
  },
  {
    id: 'organic',
    name: 'India Organic / NPOP Ready',
    label: 'Ecological Wetland Purity',
    scope: 'Wild perennial wetland harvest free from synthetic agro-chemicals and artificial bleaches.',
    auditStandard: 'NPOP Equivalent',
  },
  {
    id: 'apeda',
    name: 'APEDA & Export Compliant',
    label: 'International Trade Standard',
    scope: 'Calibrated physical grading, export phytosanitary documentation, and barrier cartons.',
    auditStandard: 'Global Export Ready',
  },
];

export const FarmToFactorySection: React.FC = () => {
  return (
    <section id="farm-to-factory" className="py-14 sm:py-18 lg:py-22 bg-[#F5EFE5]/50 border-y border-[#E4DCCE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
            Direct Origin Pipeline
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight text-balance">
            From Purnea Wetlands to Bangalore Industry.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#46584C] mt-3 leading-relaxed">
            Over 85% of global makhana is harvested in North Bihar. By connecting our BIADA industrial processing unit directly to our Bangalore corporate desk, we deliver consistent grade calibration, direct farm-gate freshness, and wholesale pricing.
          </p>
        </div>

        {/* Visual Storytelling: Harvest to Industrial Facility */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Origin Wetland Harvesting */}
          <div className="rounded-2xl overflow-hidden border border-[#DCD3C3] bg-[#FAF8F5] flex flex-col shadow-xs">
            <div className="relative h-52 sm:h-64 lg:h-72 w-full overflow-hidden bg-[#163524]">
              <img
                src={ASSET_IMAGES.harvest}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = '/images/harvest_bihar.jpg';
                }}
                alt="Purnea Bihar makhana wetland farming"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#112F20]/90 backdrop-blur-xs text-[#FAF8F5] text-[11px] font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B88E3E]" />
                Harvest: Purnea &amp; Mithila Wetlands, Bihar
              </div>
            </div>
            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#112F20]">
                  01. Direct Aquatic Harvest
                </h3>
                <p className="text-xs sm:text-sm text-[#46584C] mt-2 leading-relaxed">
                  Makhana grows in pristine freshwater wetlands. We source directly from traditional harvesting communities in Purnea, securing fresh annual crops with zero trading markups.
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8E0D2] text-[11px] sm:text-xs text-[#526457] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B88E3E] shrink-0" />
                <span>Single-origin purity · Fresh annual harvest · Zero middlemen</span>
              </div>
            </div>
          </div>

          {/* Card 2: Modern BIADA Industrial Processing Unit */}
          <div className="rounded-2xl overflow-hidden border border-[#DCD3C3] bg-[#FAF8F5] flex flex-col shadow-xs">
            <div className="relative h-52 sm:h-64 lg:h-72 w-full overflow-hidden bg-[#163524]">
              <img
                src={ASSET_IMAGES.facility}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = '/images/facility_purnea.jpg';
                }}
                alt="BIADA Industrial Area Maranga Purnea makhana processing facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#112F20]/90 backdrop-blur-xs text-[#FAF8F5] text-[11px] font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-[#B88E3E]" />
                Processing: BIADA Industrial Area, Purnea
              </div>
            </div>
            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#112F20]">
                  02. Calibrated Factory Grading
                </h3>
                <p className="text-xs sm:text-sm text-[#46584C] mt-2 leading-relaxed">
                  Located in the BIADA Industrial Area in Maranga, our facility performs pneumatic dedusting, rotary sifting, and optical inspection. Every batch is calibrated strictly by millimeter diameter (Grade 4 through Grade 6+).
                </p>
              </div>
              <div className="pt-3 border-t border-[#E8E0D2] text-[11px] sm:text-xs text-[#526457] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B88E3E] shrink-0" />
                <span>Moisture &lt;9% · Hand-picked zero black spot · Sieve calibrated</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Step Supply Chain Flow */}
        <div className="mt-14 sm:mt-16">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#112F20]">
              The Bihar-to-Bangalore Corridor
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6E61] mt-1">
              Direct supply chain built for commercial reliability and steady deliveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {SUPPLY_CHAIN_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-5 sm:p-6 rounded-xl bg-[#FAF8F5] border border-[#E3D9C9] flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg font-bold text-[#B88E3E] tabular-nums">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-semibold text-[#7C8E82] uppercase tracking-wider">
                      Stage {step.number}
                    </span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#112F20] mt-2.5">
                    {step.title}
                  </h4>
                  <div className="text-[11px] font-semibold text-[#8C7A55] mt-0.5">
                    {step.location}
                  </div>
                  <p className="text-xs text-[#4A5D50] mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* NEW: Industry Certifications & Food Safety Credentials */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-18 pt-12 sm:pt-16 border-t border-[#E5DDD0]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
                Quality Credentials &amp; Food Safety Standards
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#112F20] mt-1.5 tracking-tight text-balance">
                Industry Certifications &amp; Compliance.
              </h3>
              <p className="text-xs sm:text-sm text-[#46584C] mt-2 leading-relaxed">
                Adhering to rigorous national and international food processing benchmarks. Providing retail chains, institutional brands, and FMCG procurement heads in Bangalore with full audit readiness.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-[#526457] bg-[#FAF8F5] border border-[#E0D7C7] px-3.5 py-2 rounded-lg">
              <FileCheck2 className="w-4 h-4 text-[#B88E3E] shrink-0" />
              <span>Full Batch COA Available</span>
            </div>
          </div>

          {/* 6-Certification Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {INDUSTRY_CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E3D9C9] hover:border-[#B88E3E] transition-all flex flex-col justify-between shadow-2xs group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#ECE3D5]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#112F20] text-[#DFBE7A] flex items-center justify-center shrink-0 shadow-2xs">
                        <BadgeCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-base sm:text-lg font-bold text-[#112F20] leading-tight group-hover:text-[#1A4E33] transition-colors">
                          {cert.name}
                        </h4>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-[#8C7A55]">
                          {cert.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#4F6153] mt-3 leading-relaxed">
                    {cert.scope}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#ECE3D5] flex items-center justify-between text-[11px]">
                  <span className="font-mono text-[#8C7A55] font-semibold">
                    {cert.auditStandard}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-[#112F20]">
                    <Check className="w-3.5 h-3.5 text-[#B88E3E]" />
                    Verified Facility
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance & COA Dossier Callout Banner */}
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#DCD3C3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#EAE1D1] text-[#112F20] shrink-0">
                <FileText className="w-5 h-5 text-[#B88E3E]" />
              </div>
              <div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#112F20]">
                  Need Formal Technical Specs &amp; Batch Lab Test Reports?
                </h4>
                <p className="text-xs text-[#526457] mt-0.5">
                  We supply Certificate of Analysis (COA) for moisture threshold (&lt;9%), heavy metals, and microbiological safety with every commercial lot.
                </p>
              </div>
            </div>

            <a
              href={buildWhatsAppDirectUrl('Hello Vimora Foods team, please share your FSSAI license copy and Certificate of Analysis (COA) specifications for bulk makhana.')}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#112F20] bg-[#EAE1D1] hover:bg-[#DFD6C4] border border-[#D5C9B6] rounded-md transition-colors whitespace-nowrap cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B88E3E]" />
              <span>Request Compliance Dossier</span>
            </a>
          </div>
        </div>

        {/* Contrast Strip: Why B2B Buyers Choose Vimora */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#112F20] text-[#FAF8F5] border border-[#1E4D34] shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-xs font-semibold text-[#DFBE7A] uppercase tracking-wider">
                Direct Origin Advantage
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Reliable Sourcing for Bangalore Buyers.
              </h3>
              <p className="text-xs sm:text-sm text-[#CAD4CE] leading-relaxed">
                We eliminate the uncertainty and price fluctuations of local open markets by combining direct processing in Bihar with corporate presence in Bangalore.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-[#163D29] border border-[#23583C] space-y-1">
                <div className="text-xs font-bold text-[#DFBE7A]">01. Calibrated Sieve Diameter</div>
                <p className="text-xs text-[#D1DDD6]">
                  Every grade corresponds strictly to physical millimetric sieve tolerances with zero mixed-lot variance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#163D29] border border-[#23583C] space-y-1">
                <div className="text-xs font-bold text-[#DFBE7A]">02. Bangalore Buffer Stock</div>
                <p className="text-xs text-[#D1DDD6]">
                  Our Arekere facility maintains ready volume for immediate sampling and swift local dispatches.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#163D29] border border-[#23583C] space-y-1">
                <div className="text-xs font-bold text-[#DFBE7A]">03. Sealed Moisture Cartons</div>
                <p className="text-xs text-[#D1DDD6]">
                  Packed in 5-ply cartons with virgin poly liners, safeguarding crispness and shelf life through transit.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#163D29] border border-[#23583C] space-y-1">
                <div className="text-xs font-bold text-[#DFBE7A]">04. Verified B2B Compliance</div>
                <p className="text-xs text-[#D1DDD6]">
                  Direct corporate billing under Vimora Foods Private Limited with complete GST and FSSAI declarations.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
