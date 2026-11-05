import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FarmToFactorySection } from './components/FarmToFactorySection';
import { Makhana3DViewer } from './components/Makhana3DViewer';
import { GradesTable } from './components/GradesTable';
import { PackagingSection } from './components/PackagingSection';
import { B2BQuoteCalculator } from './components/B2BQuoteCalculator';
import { FlavoursComingSoon } from './components/FlavoursComingSoon';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SampleRequestModal } from './components/SampleRequestModal';
import { FloatingWhatsAppCTA } from './components/FloatingWhatsAppCTA';
import { MakhanaGradeId, MakhanaVariety } from './types';

export default function App() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [quoteGrade, setQuoteGrade] = useState<MakhanaGradeId>('grade-5');
  const [quoteVariety, setQuoteVariety] = useState<MakhanaVariety>('Hand-Picked');

  const scrollToQuote = () => {
    const el = document.getElementById('quote-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectGradeForQuote = (gradeId: MakhanaGradeId, variety: MakhanaVariety) => {
    setQuoteGrade(gradeId);
    setQuoteVariety(variety);
    scrollToQuote();
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1B291F]">
      {/* Strict 3-zone Top Bar Contract */}
      <Navbar
        onOpenSampleModal={() => setSampleModalOpen(true)}
        onScrollToQuote={scrollToQuote}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollToQuote={scrollToQuote}
          onOpenSampleModal={() => setSampleModalOpen(true)}
        />

        {/* Farm to Factory Direct Supply Chain & Industry Certifications */}
        <FarmToFactorySection />

        {/* Interactive 3D Kernel Calibrator (Three.js PBR Viewer) */}
        <Makhana3DViewer onSelectGradeForQuote={handleSelectGradeForQuote} />

        {/* B2B Grades & House Blends Specifications Table */}
        <GradesTable onSelectGradeForQuote={handleSelectGradeForQuote} />

        {/* Packaging Formats: Bulk Master Cartons (MOQ 100kg) & Retail Stand-Up Pouches */}
        <PackagingSection onScrollToQuote={scrollToQuote} />

        {/* Interactive B2B Quote Calculator with WhatsApp Ordering */}
        <B2BQuoteCalculator
          initialGradeId={quoteGrade}
          initialVariety={quoteVariety}
        />

        {/* Flavoured Makhana - Coming Soon */}
        <FlavoursComingSoon />

        {/* Bangalore & Purnea Facilities + Contact */}
        <ContactSection />
      </main>

      {/* Corporate Quiet Footer */}
      <Footer />

      {/* Floating Direct WhatsApp Action (9962570800) */}
      <FloatingWhatsAppCTA />

      {/* Institutional 5-Grade Sample Kit Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
      />
    </div>
  );
}
