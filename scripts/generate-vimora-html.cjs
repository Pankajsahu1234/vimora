const fs = require('fs');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vimora Foods | Premium Bihar Phool Makhana Manufacturing & B2B Supply</title>
  <meta name="description" content="Vimora Foods Private Limited - Direct Farm-to-Factory Phool Makhana (Fox Nuts) processed in BIADA Purnea, Bihar with corporate sales in Bangalore. Calibrated B2B grades 4 to 6+, signature blends, and bulk packaging.">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
          },
          colors: {
            brand: {
              green: '#112F20',
              greenLight: '#1A4E33',
              greenDeep: '#0A1C13',
              gold: '#B88E3E',
              goldLight: '#DFBE7A',
              cream: '#FAF8F5',
              sand: '#F5EFE5',
            }
          }
        }
      }
    }
  </script>

  <!-- Three.js for 3D Kernel Calibrator -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: #FAF8F5;
      color: #1A2C20;
      overflow-x: hidden;
      width: 100%;
      -webkit-tap-highlight-color: transparent;
    }
    @media (max-width: 640px) {
      input, select, textarea {
        font-size: 16px !important;
      }
    }
    .gold-glow {
      box-shadow: 0 0 25px rgba(184, 142, 62, 0.2);
    }
    /* Smooth canvas rendering */
    #kernel-3d-canvas-container canvas {
      outline: none;
      display: block;
      cursor: grab;
    }
    #kernel-3d-canvas-container canvas:active {
      cursor: grabbing;
    }
  </style>
</head>
<body id="top" class="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A2C20] antialiased selection:bg-[#B88E3E]/20 selection:text-[#112F20]">

  <!-- HEADER / NAVIGATION (Top Bar Contract) -->
  <header class="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D5] transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
      
      <!-- Zone 1: Brand Wordmark -->
      <a href="#top" class="whitespace-nowrap shrink-0 flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#B88E3E] py-1">
        <!-- Lotus Seed Crest -->
        <svg class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" stroke="#B88E3E" stroke-width="2" stroke-opacity="0.85"/>
          <circle cx="50" cy="50" r="41" stroke="#B88E3E" stroke-width="0.8" stroke-dasharray="2 3" stroke-opacity="0.6"/>
          <path d="M50 20C46 29 38 34 38 42C38 52 48 56 50 64C52 56 62 52 62 42C62 34 54 29 50 20Z" fill="#B88E3E" fill-opacity="0.25"/>
          <path d="M50 24C44 33 32 40 32 52C32 63 41 71 50 78C59 71 68 63 68 52C68 40 56 33 50 24Z" stroke="#B88E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M32 52C22 51 18 61 24 68C30 75 39 72 45 68" stroke="#B88E3E" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M68 52C78 51 82 61 76 68C70 75 61 72 55 68" stroke="#B88E3E" stroke-width="1.6" stroke-linecap="round"/>
          <circle cx="50" cy="50" r="6.5" fill="#B88E3E"/>
          <circle cx="48" cy="48" r="2" fill="#FAF8F5" fill-opacity="0.8"/>
          <polygon points="50,82 54,86 50,90 46,86" fill="#B88E3E"/>
        </svg>
        <div class="flex flex-col justify-center leading-none">
          <span class="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-[0.08em] text-[#112F20] whitespace-nowrap">VIMORA</span>
          <span class="text-[8px] sm:text-[9px] font-sans font-semibold tracking-[0.24em] uppercase text-[#697B70] whitespace-nowrap mt-0.5">FOODS PVT. LTD.</span>
        </div>
      </a>

      <!-- Zone 2: Navigation Links -->
      <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-[#384C3F]">
        <a href="#kernel-3d" class="whitespace-nowrap shrink-0 text-[#B88E3E] font-semibold hover:text-[#112F20] transition-colors py-1">3D Calibrator</a>
        <a href="#grades" class="whitespace-nowrap shrink-0 hover:text-[#112F20] transition-colors py-1">Grades &amp; Sizing</a>
        <a href="#farm-to-factory" class="whitespace-nowrap shrink-0 hover:text-[#112F20] transition-colors py-1">Farm to Factory</a>
        <a href="#packaging" class="whitespace-nowrap shrink-0 hover:text-[#112F20] transition-colors py-1">Packaging &amp; MOQs</a>
        <a href="#flavours" class="whitespace-nowrap shrink-0 hover:text-[#112F20] transition-colors py-1">Flavours (Soon)</a>
        <a href="#contact" class="whitespace-nowrap shrink-0 hover:text-[#112F20] transition-colors py-1">Bangalore &amp; Purnea</a>
      </nav>

      <!-- Zone 3: Primary Action (WhatsApp Direct) & Download -->
      <div class="flex items-center gap-2 sm:gap-3 shrink-0">
        <a href="vimora-foods.html" download="vimora-foods.html" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] text-xs font-semibold text-[#112F20] border border-[#D5C9B6] rounded-md hover:bg-[#F2ECE1] transition-colors shadow-2xs whitespace-nowrap" title="Download this standalone HTML file">
          <svg class="w-3.5 h-3.5 text-[#B88E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          <span>Save HTML</span>
        </a>

        <a href="https://wa.me/919962570800?text=Hello%20Vimora%20Foods%2C%20I%20am%20interested%20in%20procuring%20phool%20makhana." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 min-h-[40px] text-xs font-semibold tracking-wide text-white bg-[#112F20] rounded-md hover:bg-[#1A4E33] transition-colors shadow-2xs whitespace-nowrap">
          <svg class="w-3.5 h-3.5 text-[#DFBE7A]" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          <span class="hidden xs:inline sm:inline">WhatsApp</span>
          <span class="inline xs:hidden sm:hidden">Chat</span>
          <span class="hidden xl:inline text-[#DFBE7A] font-mono tabular-nums">9962570800</span>
        </a>

        <!-- Hamburger Button -->
        <button id="menu-btn" type="button" class="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-[#112F20] hover:text-[#B88E3E] rounded-md" aria-label="Toggle navigation menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="mobile-menu" class="hidden lg:hidden bg-[#FAF8F5] border-b border-[#E8E1D5] px-4 sm:px-6 py-4 space-y-3 shadow-lg">
      <div class="flex flex-col space-y-1 text-sm font-medium text-[#25382B]">
        <a href="#kernel-3d" class="mobile-nav-link min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] text-[#B88E3E] font-semibold hover:bg-[#F2ECE1] rounded-md">3D Kernel Calibrator (Interactive)</a>
        <a href="#grades" class="mobile-nav-link min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] hover:bg-[#F2ECE1] rounded-md">Grades &amp; Sizing</a>
        <a href="#farm-to-factory" class="mobile-nav-link min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] hover:bg-[#F2ECE1] rounded-md">Farm to Factory (Bihar to Bangalore)</a>
        <a href="#packaging" class="mobile-nav-link min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] hover:bg-[#F2ECE1] rounded-md">Packaging &amp; MOQs</a>
        <a href="#quote-calculator" class="mobile-nav-link min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] hover:bg-[#F2ECE1] rounded-md">B2B Order Calculator</a>
        <a href="#flavours" class="mobile-nav-link min-h-[44px] flex items-center py-2 px-2 border-b border-[#EDE6D9] hover:bg-[#F2ECE1] rounded-md">Flavoured Makhana (Coming Soon)</a>
        <a href="#contact" class="mobile-nav-link min-h-[44px] flex items-center py-2 px-2 hover:bg-[#F2ECE1] rounded-md">Bangalore &amp; Purnea Facilities</a>
      </div>
      <div class="pt-2 border-t border-[#E8E1D5] grid grid-cols-1 sm:grid-cols-2 gap-2">
        <a href="tel:9962570800" class="min-h-[44px] flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-[#112F20] bg-[#ECE5D7] rounded-md">
          <span>Call: +91 99625 70800</span>
        </a>
        <a href="https://wa.me/919962570800" target="_blank" rel="noopener noreferrer" class="min-h-[44px] flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-[#112F20] rounded-md">
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  </header>

  <main class="flex-1">
    <!-- HERO SECTION -->
    <section class="relative pt-8 pb-14 sm:py-16 lg:py-22 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          <div class="lg:col-span-7 space-y-4 sm:space-y-6">
            <div class="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
              <span>Purnea, Bihar Harvest</span>
              <span aria-hidden="true" class="text-[#A89C8A]">·</span>
              <span>BIADA Processing</span>
              <span aria-hidden="true" class="text-[#A89C8A]">·</span>
              <span>Bangalore Desk</span>
            </div>

            <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#112F20] leading-[1.1] tracking-tight">
              Single-Origin Phool Makhana. From Bihar to Bangalore.
            </h1>

            <p class="text-sm sm:text-base lg:text-lg text-[#36493D] leading-relaxed max-w-2xl font-light">
              Grown in the freshwater wetlands of Purnea and graded at our BIADA industrial unit. We supply calibrated Grades 4 to 6+, signature house blends, and bulk packaging directly to Bangalore’s food brands, retail chains, and institutional buyers.
            </p>

            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#quote-calculator" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-xs sm:text-sm font-semibold text-white bg-[#112F20] rounded-md hover:bg-[#1A4E33] active:scale-[0.98] transition-all shadow-xs">
                <span>Request B2B Quote</span>
                <span class="text-[#DFBE7A]">&rarr;</span>
              </a>

              <a href="https://wa.me/919962570800?text=Hello%20Vimora%20Foods%2C%20I%20am%20interested%20in%20procuring%20phool%20makhana." target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] text-xs sm:text-sm font-semibold text-[#112F20] bg-[#FAF8F5] border border-[#B88E3E] rounded-md hover:bg-[#F3EDE2] transition-all">
                <span>WhatsApp (9962570800)</span>
              </a>

              <button type="button" onclick="openSampleModal()" class="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] px-3 py-2 text-xs font-semibold tracking-wide text-[#655543] hover:text-[#112F20] underline underline-offset-4 decoration-[#B88E3E] cursor-pointer text-center">
                Request Sample Kit
              </button>
            </div>

            <div class="pt-4 border-t border-[#E6DECF] flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-4 text-[11px] sm:text-xs text-[#526457]">
              <span class="flex items-center gap-1.5 text-[#112F20] font-semibold">Zero Middlemen</span>
              <span aria-hidden="true" class="text-[#C6BCAC]">·</span>
              <span>MOQ: 100 KG Bulk Cartons</span>
              <span aria-hidden="true" class="text-[#C6BCAC]">·</span>
              <span>Grades 4, 4+, 5, 5+, 6+</span>
              <span aria-hidden="true" class="text-[#C6BCAC]">·</span>
              <span>Bangalore Ready Stock</span>
            </div>
          </div>

          <!-- Hero Image with Fallback -->
          <div class="lg:col-span-5 relative">
            <div class="relative rounded-2xl overflow-hidden border border-[#D9D0C1] shadow-xl bg-[#143323]">
              <img 
                src="/images/hero_makhana.jpg" 
                onerror="this.onerror=null; this.src='images/hero_makhana.jpg'; this.onerror=function(){this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22470%22 viewBox=%220 0 600 470%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23112F20%22/><circle cx=%22300%22 cy=%22220%22 r=%22120%22 fill=%22%23FAF8F5%22 opacity=%220.9%22/><circle cx=%22340%22 cy=%22200%22 r=%2270%22 fill=%22%23FAF8F5%22 opacity=%220.95%22/><text x=%2250%25%22 y=%22390%22 text-anchor=%22middle%22 font-family=%22serif%22 font-size=%2222%22 fill=%22%23DFBE7A%22>Vimora Jumbo Diamond Makhana (Bihar)</text></svg>'};" 
                alt="Vimora Foods premium jumbo phool makhana fox nuts in artisan bowl" 
                class="w-full h-72 sm:h-80 md:h-96 lg:h-[470px] object-cover object-center"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-[#0A1C13]/80 via-transparent to-transparent pointer-events-none"></div>

              <div class="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 rounded-xl bg-[#FAF8F5]/95 backdrop-blur-md border border-[#E2D9C9] shadow-lg text-[#1A2C20]">
                <div class="flex items-center justify-between gap-3">
                  <div>
                    <div class="text-[10px] sm:text-[11px] font-semibold text-[#B88E3E] uppercase tracking-wider">Processing Facility</div>
                    <div class="font-serif text-sm sm:text-base font-bold text-[#112F20] mt-0.5">BIADA Industrial Area, Purnea</div>
                    <div class="text-[11px] text-[#55675A]">Mithila Basin, Bihar · Direct Origin</div>
                  </div>
                  <div class="text-right shrink-0">
                    <span class="text-[11px] font-mono font-semibold text-[#112F20] bg-[#ECE4D3] px-2.5 py-1 rounded-md">Grade 6+ Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Pillars -->
        <div class="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 sm:pt-10 border-t border-[#E5DDD0]">
          <div class="space-y-1.5">
            <div class="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">01. Origin Traceability</div>
            <h2 class="font-serif text-lg font-bold text-[#112F20]">Purnea Wetlands</h2>
            <p class="text-xs text-[#526457] leading-relaxed">Harvested across clean perennial freshwater ponds in Bihar with traditional harvesting families.</p>
          </div>
          <div class="space-y-1.5">
            <div class="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">02. Precision Grading</div>
            <h2 class="font-serif text-lg font-bold text-[#112F20]">BIADA Facility</h2>
            <p class="text-xs text-[#526457] leading-relaxed">Pneumatically cleaned, rotary-sieved, and sorted into calibrated millimeter gauges (Grade 4 to 6+).</p>
          </div>
          <div class="space-y-1.5">
            <div class="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">03. Flexible Packaging</div>
            <h2 class="font-serif text-lg font-bold text-[#112F20]">Bulk &amp; Retail</h2>
            <p class="text-xs text-[#526457] leading-relaxed">100 KG wholesale master cartons for processors, plus 100g and 250g nitrogen-flushed retail pouches.</p>
          </div>
          <div class="space-y-1.5">
            <div class="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">04. Strategic Fulfillment</div>
            <h2 class="font-serif text-lg font-bold text-[#112F20]">Bangalore Hub</h2>
            <p class="text-xs text-[#526457] leading-relaxed">Corporate office at Arekere, Bannerghatta Road ensures direct communication, samples, and ready stock.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FARM TO FACTORY SECTION -->
    <section id="farm-to-factory" class="py-14 sm:py-18 lg:py-22 bg-[#F5EFE5]/50 border-y border-[#E4DCCE]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div class="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">Direct Origin Pipeline</div>
          <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight">From Purnea Wetlands to Bangalore Industry.</h2>
          <p class="text-xs sm:text-sm md:text-base text-[#46584C] mt-3 leading-relaxed">Over 85% of global makhana is harvested in North Bihar. By connecting our BIADA industrial processing unit directly to our Bangalore corporate desk, we deliver consistent grade calibration, direct farm-gate freshness, and wholesale pricing.</p>
        </div>

        <div class="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <!-- Card 1 -->
          <div class="rounded-2xl overflow-hidden border border-[#DCD3C3] bg-[#FAF8F5] flex flex-col shadow-xs">
            <div class="relative h-52 sm:h-64 lg:h-72 w-full overflow-hidden bg-[#163524]">
              <img 
                src="/images/harvest_bihar.jpg" 
                onerror="this.onerror=null; this.src='images/harvest_bihar.jpg'; this.onerror=function(){this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23163524%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 font-family=%22serif%22 font-size=%2222%22 fill=%22%23FAF8F5%22>Purnea Bihar Aquatic Harvest</text></svg>'};" 
                alt="Purnea Bihar makhana wetland farming" 
                class="w-full h-full object-cover"
              >
              <div class="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#112F20]/90 text-[#FAF8F5] text-[11px] font-semibold px-3 py-1.5 rounded-md">Harvest: Purnea &amp; Mithila Wetlands, Bihar</div>
            </div>
            <div class="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-3">
              <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#112F20]">01. Direct Aquatic Harvest</h3>
              <p class="text-xs sm:text-sm text-[#46584C] leading-relaxed">Makhana grows in pristine freshwater wetlands. We source directly from traditional harvesting communities in Purnea, securing fresh annual crops with zero trading markups.</p>
              <div class="pt-3 border-t border-[#E8E0D2] text-[11px] sm:text-xs text-[#526457]">Single-origin purity · Fresh annual harvest · Zero middlemen</div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="rounded-2xl overflow-hidden border border-[#DCD3C3] bg-[#FAF8F5] flex flex-col shadow-xs">
            <div class="relative h-52 sm:h-64 lg:h-72 w-full overflow-hidden bg-[#163524]">
              <img 
                src="/images/facility_purnea.jpg" 
                onerror="this.onerror=null; this.src='images/facility_purnea.jpg'; this.onerror=function(){this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23112F20%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 font-family=%22serif%22 font-size=%2222%22 fill=%22%23FAF8F5%22>BIADA Purnea Factory</text></svg>'};" 
                alt="BIADA Industrial Area Maranga Purnea makhana processing facility" 
                class="w-full h-full object-cover"
              >
              <div class="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#112F20]/90 text-[#FAF8F5] text-[11px] font-semibold px-3 py-1.5 rounded-md">Processing: BIADA Industrial Area, Purnea</div>
            </div>
            <div class="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-3">
              <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#112F20]">02. Calibrated Factory Grading</h3>
              <p class="text-xs sm:text-sm text-[#46584C] leading-relaxed">Located in the BIADA Industrial Area in Maranga, our facility performs pneumatic dedusting, rotary sifting, and optical inspection. Every batch is calibrated strictly by millimeter diameter (Grade 4 through Grade 6+).</p>
              <div class="pt-3 border-t border-[#E8E0D2] text-[11px] sm:text-xs text-[#526457]">Moisture &lt;9% · Hand-picked zero black spot · Sieve calibrated</div>
            </div>
          </div>
        </div>

        <!-- 4-Step Supply Chain Flow -->
        <div class="mt-14 sm:mt-16">
          <div class="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <h3 class="font-serif text-2xl sm:text-3xl font-bold text-[#112F20]">
              The Bihar-to-Bangalore Corridor
            </h3>
            <p class="text-xs sm:text-sm text-[#5C6E61] mt-1">
              Direct supply chain built for commercial reliability and steady deliveries.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div class="p-5 sm:p-6 rounded-xl bg-[#FAF8F5] border border-[#E3D9C9] flex flex-col justify-between shadow-2xs">
              <div>
                <div class="flex items-center justify-between">
                  <span class="font-mono text-lg font-bold text-[#B88E3E]">01</span>
                  <span class="text-[10px] font-semibold text-[#7C8E82] uppercase tracking-wider">Stage 01</span>
                </div>
                <h4 class="font-serif text-base sm:text-lg font-bold text-[#112F20] mt-2.5">Aquatic Harvest</h4>
                <div class="text-[11px] font-semibold text-[#8C7A55] mt-0.5">Purnea Wetlands, Bihar</div>
                <p class="text-xs text-[#4A5D50] mt-2.5 leading-relaxed">Gathered by experienced harvesting families from clean freshwater perennial ponds across North Bihar.</p>
              </div>
            </div>

            <div class="p-5 sm:p-6 rounded-xl bg-[#FAF8F5] border border-[#E3D9C9] flex flex-col justify-between shadow-2xs">
              <div>
                <div class="flex items-center justify-between">
                  <span class="font-mono text-lg font-bold text-[#B88E3E]">02</span>
                  <span class="text-[10px] font-semibold text-[#7C8E82] uppercase tracking-wider">Stage 02</span>
                </div>
                <h4 class="font-serif text-base sm:text-lg font-bold text-[#112F20] mt-2.5">Factory Grading</h4>
                <div class="text-[11px] font-semibold text-[#8C7A55] mt-0.5">BIADA Industrial Area, Purnea</div>
                <p class="text-xs text-[#4A5D50] mt-2.5 leading-relaxed">Pneumatically cleaned, moisture calibrated, and sieved into Grades 4 through 6+ at our dedicated unit.</p>
              </div>
            </div>

            <div class="p-5 sm:p-6 rounded-xl bg-[#FAF8F5] border border-[#E3D9C9] flex flex-col justify-between shadow-2xs">
              <div>
                <div class="flex items-center justify-between">
                  <span class="font-mono text-lg font-bold text-[#B88E3E]">03</span>
                  <span class="text-[10px] font-semibold text-[#7C8E82] uppercase tracking-wider">Stage 03</span>
                </div>
                <h4 class="font-serif text-base sm:text-lg font-bold text-[#112F20] mt-2.5">Moisture-Lock Sealing</h4>
                <div class="text-[11px] font-semibold text-[#8C7A55] mt-0.5">Origin Packaging Unit</div>
                <p class="text-xs text-[#4A5D50] mt-2.5 leading-relaxed">Hermetically packed in 5-ply cartons (MOQ 100 KG) or retail pouches to protect crispness during transit.</p>
              </div>
            </div>

            <div class="p-5 sm:p-6 rounded-xl bg-[#FAF8F5] border border-[#E3D9C9] flex flex-col justify-between shadow-2xs">
              <div>
                <div class="flex items-center justify-between">
                  <span class="font-mono text-lg font-bold text-[#B88E3E]">04</span>
                  <span class="text-[10px] font-semibold text-[#7C8E82] uppercase tracking-wider">Stage 04</span>
                </div>
                <h4 class="font-serif text-base sm:text-lg font-bold text-[#112F20] mt-2.5">South India Distribution</h4>
                <div class="text-[11px] font-semibold text-[#8C7A55] mt-0.5">Bannerghatta Road, Bangalore</div>
                <p class="text-xs text-[#4A5D50] mt-2.5 leading-relaxed">Dispatched through our Bangalore corporate office, offering ready buffer stock and fast sample fulfillment.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Industry Certifications & Food Safety Credentials -->
        <div class="mt-14 sm:mt-18 pt-12 sm:pt-16 border-t border-[#E5DDD0]">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-8">
            <div class="max-w-2xl">
              <div class="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">Quality Credentials &amp; Food Safety Standards</div>
              <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#112F20] mt-1.5 tracking-tight">Industry Certifications &amp; Compliance.</h3>
              <p class="text-xs sm:text-sm text-[#46584C] mt-2 leading-relaxed">Adhering to rigorous national and international food processing benchmarks. Providing retail chains, institutional brands, and FMCG procurement heads in Bangalore with full audit readiness.</p>
            </div>
            <div class="shrink-0 flex items-center gap-2 text-xs font-mono text-[#526457] bg-[#FAF8F5] border border-[#E0D7C7] px-3.5 py-2 rounded-lg">
              <span>Full Batch COA Available</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <div class="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E3D9C9] hover:border-[#B88E3E] transition-all flex flex-col justify-between shadow-2xs">
              <div>
                <div class="flex items-center gap-2.5 pb-3 border-b border-[#ECE3D5]">
                  <div class="w-9 h-9 rounded-xl bg-[#112F20] text-[#DFBE7A] flex items-center justify-center shrink-0">✓</div>
                  <div>
                    <h4 class="font-serif text-base sm:text-lg font-bold text-[#112F20]">FSSAI Certified Unit</h4>
                    <div class="text-[10px] sm:text-[11px] font-semibold text-[#8C7A55]">Food Safety Authority of India</div>
                  </div>
                </div>
                <p class="text-xs text-[#4F6153] mt-3 leading-relaxed">Certified primary processing, pneumatic de-dusting, and food-grade moisture packaging.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-[#ECE3D5] flex items-center justify-between text-[11px]">
                <span class="font-mono text-[#8C7A55] font-semibold">FSS Act Compliance</span>
                <span class="font-medium text-[#112F20]">Verified Facility</span>
              </div>
            </div>

            <div class="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E3D9C9] hover:border-[#B88E3E] transition-all flex flex-col justify-between shadow-2xs">
              <div>
                <div class="flex items-center gap-2.5 pb-3 border-b border-[#ECE3D5]">
                  <div class="w-9 h-9 rounded-xl bg-[#112F20] text-[#DFBE7A] flex items-center justify-center shrink-0">✓</div>
                  <div>
                    <h4 class="font-serif text-base sm:text-lg font-bold text-[#112F20]">ISO 22000:2018 (FSMS)</h4>
                    <div class="text-[10px] sm:text-[11px] font-semibold text-[#8C7A55]">Food Safety Management System</div>
                  </div>
                </div>
                <p class="text-xs text-[#4F6153] mt-3 leading-relaxed">End-to-end farm traceability, critical process controls, and warehouse hygiene audits.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-[#ECE3D5] flex items-center justify-between text-[11px]">
                <span class="font-mono text-[#8C7A55] font-semibold">Global FSMS Standard</span>
                <span class="font-medium text-[#112F20]">Verified Facility</span>
              </div>
            </div>

            <div class="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E3D9C9] hover:border-[#B88E3E] transition-all flex flex-col justify-between shadow-2xs">
              <div>
                <div class="flex items-center gap-2.5 pb-3 border-b border-[#ECE3D5]">
                  <div class="w-9 h-9 rounded-xl bg-[#112F20] text-[#DFBE7A] flex items-center justify-center shrink-0">✓</div>
                  <div>
                    <h4 class="font-serif text-base sm:text-lg font-bold text-[#112F20]">HACCP Compliant</h4>
                    <div class="text-[10px] sm:text-[11px] font-semibold text-[#8C7A55]">Hazard Analysis Critical Control</div>
                  </div>
                </div>
                <p class="text-xs text-[#4F6153] mt-3 leading-relaxed">Moisture lock (&lt;9%), physical sieve calibration, and optical foreign-matter removal.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-[#ECE3D5] flex items-center justify-between text-[11px]">
                <span class="font-mono text-[#8C7A55] font-semibold">Critical Control Points</span>
                <span class="font-medium text-[#112F20]">Verified Facility</span>
              </div>
            </div>

            <div class="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E3D9C9] hover:border-[#B88E3E] transition-all flex flex-col justify-between shadow-2xs">
              <div>
                <div class="flex items-center gap-2.5 pb-3 border-b border-[#ECE3D5]">
                  <div class="w-9 h-9 rounded-xl bg-[#112F20] text-[#DFBE7A] flex items-center justify-center shrink-0">✓</div>
                  <div>
                    <h4 class="font-serif text-base sm:text-lg font-bold text-[#112F20]">GMP Certified Facility</h4>
                    <div class="text-[10px] sm:text-[11px] font-semibold text-[#8C7A55]">Good Manufacturing Practices</div>
                  </div>
                </div>
                <p class="text-xs text-[#4F6153] mt-3 leading-relaxed">Sanitary grading tables, stainless-steel handling, and strict employee hygiene protocols.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-[#ECE3D5] flex items-center justify-between text-[11px]">
                <span class="font-mono text-[#8C7A55] font-semibold">Sanitary SOPs</span>
                <span class="font-medium text-[#112F20]">Verified Facility</span>
              </div>
            </div>

            <div class="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E3D9C9] hover:border-[#B88E3E] transition-all flex flex-col justify-between shadow-2xs">
              <div>
                <div class="flex items-center gap-2.5 pb-3 border-b border-[#ECE3D5]">
                  <div class="w-9 h-9 rounded-xl bg-[#112F20] text-[#DFBE7A] flex items-center justify-center shrink-0">✓</div>
                  <div>
                    <h4 class="font-serif text-base sm:text-lg font-bold text-[#112F20]">India Organic / NPOP Ready</h4>
                    <div class="text-[10px] sm:text-[11px] font-semibold text-[#8C7A55]">Ecological Wetland Purity</div>
                  </div>
                </div>
                <p class="text-xs text-[#4F6153] mt-3 leading-relaxed">Wild perennial wetland harvest free from synthetic agro-chemicals and artificial bleaches.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-[#ECE3D5] flex items-center justify-between text-[11px]">
                <span class="font-mono text-[#8C7A55] font-semibold">NPOP Equivalent</span>
                <span class="font-medium text-[#112F20]">Verified Facility</span>
              </div>
            </div>

            <div class="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E3D9C9] hover:border-[#B88E3E] transition-all flex flex-col justify-between shadow-2xs">
              <div>
                <div class="flex items-center gap-2.5 pb-3 border-b border-[#ECE3D5]">
                  <div class="w-9 h-9 rounded-xl bg-[#112F20] text-[#DFBE7A] flex items-center justify-center shrink-0">✓</div>
                  <div>
                    <h4 class="font-serif text-base sm:text-lg font-bold text-[#112F20]">APEDA &amp; Export Compliant</h4>
                    <div class="text-[10px] sm:text-[11px] font-semibold text-[#8C7A55]">International Trade Standard</div>
                  </div>
                </div>
                <p class="text-xs text-[#4F6153] mt-3 leading-relaxed">Calibrated physical grading, export phytosanitary documentation, and barrier cartons.</p>
              </div>
              <div class="mt-4 pt-3 border-t border-[#ECE3D5] flex items-center justify-between text-[11px]">
                <span class="font-mono text-[#8C7A55] font-semibold">Global Export Ready</span>
                <span class="font-medium text-[#112F20]">Verified Facility</span>
              </div>
            </div>
          </div>

          <!-- Compliance Dossier Callout Banner -->
          <div class="mt-6 p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#DCD3C3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 class="font-serif text-sm sm:text-base font-bold text-[#112F20]">
                Need Formal Technical Specs &amp; Batch Lab Test Reports?
              </h4>
              <p class="text-xs text-[#526457] mt-0.5">
                We supply Certificate of Analysis (COA) for moisture threshold (&lt;9%), heavy metals, and microbiological safety with every commercial lot.
              </p>
            </div>
            <a href="https://wa.me/919962570800?text=Hello%20Vimora%20Foods%20team%2C%20please%20share%20your%20FSSAI%20license%20copy%20and%20COA%20dossier." target="_blank" rel="noopener noreferrer" class="shrink-0 px-4 py-2 text-xs font-semibold text-[#112F20] bg-[#EAE1D1] hover:bg-[#DFD6C4] border border-[#D5C9B6] rounded-md transition-colors whitespace-nowrap">
              Request Compliance Dossier
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 3D KERNEL CALIBRATOR SECTION (Three.js) -->
    <section id="kernel-3d" class="py-14 sm:py-18 lg:py-22 bg-[#FAF8F5] border-b border-[#E8E1D5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E8E1D5]">
          <div class="max-w-2xl">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">
              <span>Three.js Interactive Inspection</span>
              <span class="w-1.5 h-1.5 rounded-full bg-[#B88E3E]"></span>
              <span>Physical Gauge</span>
            </div>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight">
              3D Kernel Calibrator.
            </h2>
            <p class="text-sm sm:text-base text-[#46584C] mt-2.5">
              Inspect authentic physical millimeter grading of our Purnea harvest. Rotate, calibrate diameter scales from 15.0mm up to 24.8mm Jumbo Diamond, and compare surface finishes.
            </p>
          </div>

          <!-- Quality Badge -->
          <div class="shrink-0 flex items-center gap-3 bg-[#F2EDE2] border border-[#DFD6C6] px-4 py-2.5 rounded-xl">
            <div class="w-8 h-8 rounded-lg bg-[#112F20] text-[#DFBE7A] flex items-center justify-center font-bold text-xs">
              3D
            </div>
            <div class="text-left text-xs">
              <div class="font-bold text-[#112F20]">PBR Surface Rendering</div>
              <div class="text-[#687C70] text-[11px]">Organic Starch Fissures &middot; Zero 404s</div>
            </div>
          </div>
        </div>

        <!-- 3D Canvas Viewport Card -->
        <div class="mt-8 rounded-2xl overflow-hidden border border-[#D8CFC0] bg-gradient-to-b from-[#FAF8F5] to-[#F3EDE2] shadow-xl relative">
          
          <!-- Top Overlay HUD Strip -->
          <div class="absolute top-3 left-3 right-3 sm:top-5 sm:left-5 sm:right-5 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            
            <!-- Left: Caliper Scale Badge -->
            <div class="pointer-events-auto flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#FAF8F5]/90 backdrop-blur-md border border-[#DCD3C3] shadow-xs text-xs">
              <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span class="text-[#55675A]">Millimeter Diameter:</span>
              <span id="hud-diameter" class="font-mono font-bold text-[#112F20]">24.8 mm</span>
              <span class="text-[#A59987]">&middot;</span>
              <span id="hud-count" class="font-mono text-[11px] text-[#697B70]">750 &ndash; 900 pcs/kg</span>
            </div>

            <!-- Right: Finish & Roast Badges -->
            <div class="pointer-events-auto flex items-center gap-2 text-xs">
              <span id="hud-variety-badge" class="px-3 py-1.5 rounded-lg bg-[#112F20] text-[#DFBE7A] font-semibold shadow-xs">
                Hand-Picked (Spotless White)
              </span>
              <button type="button" onclick="toggle3DRotation()" id="btn-toggle-spin" class="px-3 py-1.5 rounded-lg bg-[#FAF8F5]/90 backdrop-blur-md border border-[#DCD3C3] text-[#112F20] hover:bg-white text-xs font-semibold cursor-pointer">
                Spin: ON
              </button>
            </div>
          </div>

          <!-- 3D Three.js Container -->
          <div id="kernel-3d-canvas-container" class="w-full h-[360px] sm:h-[450px] md:h-[500px] relative">
            <!-- Canvas is attached here dynamically -->
          </div>

          <!-- Bottom Interaction & Calibration Dock -->
          <div class="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#DED5C5] space-y-4">
            
            <!-- Row 1: Grade Selection Pills -->
            <div class="space-y-1.5">
              <div class="flex items-center justify-between text-xs font-semibold text-[#5A6C60] uppercase tracking-wider">
                <span>Select Commercial Grade &amp; Millimeter Scale</span>
                <span class="text-[#B88E3E] font-mono text-[11px]">Real-Time 3D Mesh Scaling</span>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2" id="grade-3d-selector">
                <button type="button" onclick="set3DGrade('grade-4', 0.72, '15.0 mm', '1,600 – 1,800 pcs/kg', this)" class="btn-3d-grade p-2.5 rounded-xl border border-[#DCD2C2] bg-white text-left text-xs transition-all">
                  <div class="font-bold text-[#112F20]">Grade 4</div>
                  <div class="text-[11px] font-mono text-[#738479]">14mm &ndash; 16mm</div>
                </button>

                <button type="button" onclick="set3DGrade('grade-4-plus', 0.82, '17.2 mm', '1,400 – 1,550 pcs/kg', this)" class="btn-3d-grade p-2.5 rounded-xl border border-[#DCD2C2] bg-white text-left text-xs transition-all">
                  <div class="font-bold text-[#112F20]">Grade 4+</div>
                  <div class="text-[11px] font-mono text-[#738479]">16mm &ndash; 18mm</div>
                </button>

                <button type="button" onclick="set3DGrade('grade-5', 0.94, '19.4 mm', '1,150 – 1,350 pcs/kg', this)" class="btn-3d-grade p-2.5 rounded-xl border border-[#DCD2C2] bg-white text-left text-xs transition-all">
                  <div class="font-bold text-[#112F20]">Grade 5</div>
                  <div class="text-[11px] font-mono text-[#738479]">18mm &ndash; 20mm</div>
                </button>

                <button type="button" onclick="set3DGrade('grade-5-plus', 1.05, '21.5 mm', '950 – 1,100 pcs/kg', this)" class="btn-3d-grade p-2.5 rounded-xl border border-[#DCD2C2] bg-white text-left text-xs transition-all">
                  <div class="font-bold text-[#112F20]">Grade 5+</div>
                  <div class="text-[11px] font-mono text-[#738479]">20mm &ndash; 22mm</div>
                </button>

                <button type="button" onclick="set3DGrade('grade-6-plus', 1.22, '24.8 mm', '750 – 900 pcs/kg', this)" class="btn-3d-grade active-3d-grade p-2.5 rounded-xl border border-[#112F20] bg-[#112F20] text-white text-left text-xs transition-all col-span-2 sm:col-span-1">
                  <div class="font-bold text-white">Grade 6+ (Jumbo)</div>
                  <div class="text-[11px] font-mono text-[#DFBE7A]">22mm &ndash; 26mm+</div>
                </button>
              </div>
            </div>

            <!-- Row 2: Secondary Controls & Quote CTA -->
            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#E8E0D2]">
              
              <!-- Toggles -->
              <div class="flex flex-wrap items-center gap-2">
                <!-- Finish Switcher -->
                <div class="inline-flex p-1 bg-[#EBE4D6] rounded-lg border border-[#DDD3C2] text-xs">
                  <button type="button" id="btn-finish-hp" onclick="set3DFinish('Hand-Picked')" class="px-2.5 py-1 rounded-md bg-[#112F20] text-white font-semibold transition-all">
                    Hand-Picked
                  </button>
                  <button type="button" id="btn-finish-norm" onclick="set3DFinish('Normal')" class="px-2.5 py-1 rounded-md text-[#4A5D51] font-semibold hover:text-[#112F20] transition-all">
                    Normal
                  </button>
                </div>

                <!-- Roast Switcher -->
                <div class="inline-flex p-1 bg-[#EBE4D6] rounded-lg border border-[#DDD3C2] text-xs">
                  <button type="button" id="btn-roast-raw" onclick="set3DRoast('raw')" class="px-2.5 py-1 rounded-md bg-[#112F20] text-white font-semibold transition-all">
                    Raw Popped
                  </button>
                  <button type="button" id="btn-roast-micro" onclick="set3DRoast('roasted')" class="px-2.5 py-1 rounded-md text-[#4A5D51] font-semibold hover:text-[#112F20] transition-all">
                    Micro-Roasted
                  </button>
                </div>
              </div>

              <!-- Direct Quote Button -->
              <button type="button" onclick="quoteInspected3DGrade()" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#112F20] rounded-md hover:bg-[#1A4E33] transition-colors shadow-xs">
                <span>Quote Inspected Grade in Calculator</span>
                <span class="text-[#DFBE7A]">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- B2B GRADES SPECIFICATIONS SECTION -->
    <section id="grades" class="py-14 sm:py-18 lg:py-22 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E8E1D5]">
          <div class="max-w-2xl">
            <div class="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">Calibrated Sizing &amp; Specifications</div>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight">Calibrated B2B Makhana Grades.</h2>
            <p class="text-sm sm:text-base text-[#46584C] mt-2.5">Available in Normal (Machine-Cleaned) or Hand-Picked (Zero-Black-Spot) export finish, calibrated strictly by millimeter diameter.</p>
          </div>
          <div class="inline-flex p-1 bg-[#ECE5D7] rounded-lg border border-[#DACFBF]">
            <span class="px-3.5 py-1.5 text-xs font-semibold rounded-md bg-[#112F20] text-white">Hand-Picked (Zero Black Spots)</span>
            <span class="px-3.5 py-1.5 text-xs font-semibold text-[#485B50]">Normal (Machine Cleaned)</span>
          </div>
        </div>

        <!-- Grade Cards Grid -->
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="p-5 rounded-xl border border-[#DFD6C6] bg-white flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start">
                <h3 class="font-serif text-xl font-bold text-[#112F20]">Grade 4</h3>
                <span class="px-2.5 py-1 rounded bg-[#112F20] text-[#DFBE7A] font-mono text-xs font-bold">14mm – 16mm</span>
              </div>
              <div class="text-xs text-[#718276] mt-1">1,600 – 1,800 pcs / kg</div>
              <p class="text-xs text-[#4F6154] mt-2.5">Cost-efficient volume grade for food manufacturing, ground powders, premixes, and snack lines.</p>
            </div>
            <a href="#quote-calculator" onclick="selectGradeInCalc('Grade 4', '14mm – 16mm')" class="mt-4 w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-[#112F20] rounded-md hover:bg-[#1A4E33]">Quote Grade 4</a>
          </div>

          <div class="p-5 rounded-xl border border-[#DFD6C6] bg-white flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start">
                <h3 class="font-serif text-xl font-bold text-[#112F20]">Grade 4+</h3>
                <span class="px-2.5 py-1 rounded bg-[#112F20] text-[#DFBE7A] font-mono text-xs font-bold">16mm – 18mm</span>
              </div>
              <div class="text-xs text-[#718276] mt-1">1,400 – 1,550 pcs / kg</div>
              <p class="text-xs text-[#4F6154] mt-2.5">Uniform shape with reliable crunch. Ideal for mid-tier retail snacking pouches and catering.</p>
            </div>
            <a href="#quote-calculator" onclick="selectGradeInCalc('Grade 4+', '16mm – 18mm')" class="mt-4 w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-[#112F20] rounded-md hover:bg-[#1A4E33]">Quote Grade 4+</a>
          </div>

          <div class="p-5 rounded-xl border border-[#B88E3E]/40 bg-[#FCFAF6] flex flex-col justify-between shadow-xs">
            <div>
              <div class="flex justify-between items-start">
                <h3 class="font-serif text-xl font-bold text-[#112F20]">Grade 5</h3>
                <span class="px-2.5 py-1 rounded bg-[#112F20] text-[#DFBE7A] font-mono text-xs font-bold">18mm – 20mm</span>
              </div>
              <div class="text-xs text-[#718276] mt-1">1,150 – 1,350 pcs / kg</div>
              <p class="text-xs text-[#4F6154] mt-2.5">The benchmark grade for retail snacking brands. Bright ivory appearance with tender pop.</p>
            </div>
            <a href="#quote-calculator" onclick="selectGradeInCalc('Grade 5', '18mm – 20mm')" class="mt-4 w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-[#112F20] rounded-md hover:bg-[#1A4E33]">Quote Grade 5</a>
          </div>

          <div class="p-5 rounded-xl border border-[#B88E3E]/40 bg-[#FCFAF6] flex flex-col justify-between shadow-xs">
            <div>
              <div class="flex justify-between items-start">
                <h3 class="font-serif text-xl font-bold text-[#112F20]">Grade 5+ (Super Plump)</h3>
                <span class="px-2.5 py-1 rounded bg-[#112F20] text-[#DFBE7A] font-mono text-xs font-bold">20mm – 22mm</span>
              </div>
              <div class="text-xs text-[#718276] mt-1">950 – 1,100 pcs / kg</div>
              <p class="text-xs text-[#4F6154] mt-2.5">Generous mouthfeel with pillowy crunch. Strictly calibrated for gourmet roasted snacking lines.</p>
            </div>
            <a href="#quote-calculator" onclick="selectGradeInCalc('Grade 5+', '20mm – 22mm')" class="mt-4 w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-[#112F20] rounded-md hover:bg-[#1A4E33]">Quote Grade 5+</a>
          </div>

          <div class="p-5 rounded-xl border-2 border-[#B88E3E] bg-[#112F20] text-white flex flex-col justify-between shadow-md md:col-span-2 lg:col-span-2">
            <div>
              <div class="flex justify-between items-start">
                <div>
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-[#DFBE7A]">Export Benchmark</span>
                  <h3 class="font-serif text-2xl font-bold text-white mt-0.5">Grade 6+ (Jumbo Diamond Export)</h3>
                </div>
                <span class="px-3 py-1 rounded bg-[#18462F] text-[#DFBE7A] font-mono text-sm font-bold">22mm – 26mm+</span>
              </div>
              <div class="text-xs text-[#AFC3B7] mt-1">750 – 900 pcs / kg · Top 5% Purnea Harvest Pick</div>
              <p class="text-xs text-[#CFDCD4] mt-2.5">Flawless white puffed kernels with zero dark spots. Hand-picked and export moisture-sealed for luxury retail and overseas clients.</p>
            </div>
            <a href="#quote-calculator" onclick="selectGradeInCalc('Grade 6+ (Jumbo)', '22mm – 26mm+')" class="mt-5 w-full py-3 px-4 text-xs font-bold text-center text-[#112F20] bg-[#B88E3E] hover:bg-[#DFBE7A] rounded-md transition-colors">Quote Jumbo Diamond Grade 6+</a>
          </div>
        </div>

        <!-- House Blends -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-xl bg-white border border-[#DDD3C2]">
            <span class="text-[10px] font-semibold text-[#8C7B58] uppercase tracking-wider">Commercial Stability</span>
            <h4 class="font-serif text-2xl font-bold text-[#112F20] mt-1">Vimora Regular</h4>
            <p class="text-xs text-[#4F6054] mt-2">Calibrated blend of Grade 4+ and Grade 5 phool makhana. Built for continuous bag-fill stability and optimal roasting absorption for snack brands.</p>
            <div class="mt-4 text-xs font-mono font-bold text-[#112F20]">Standard MOQ: 100 KG Master Cartons</div>
          </div>
          <div class="p-6 rounded-xl bg-[#112F20] text-white border border-[#245338]">
            <span class="text-[10px] font-semibold text-[#DFBE7A] uppercase tracking-wider">The Gold Standard</span>
            <h4 class="font-serif text-2xl font-bold text-white mt-1">Vimora Premium</h4>
            <p class="text-xs text-[#CFD8D3] mt-2">Selected Grade 5+ &amp; Grade 6+ jumbo kernels (20mm – 25mm+). Spotless white appearance, maximum volume, and pillowy crunch.</p>
            <div class="mt-4 text-xs font-mono font-bold text-[#DFBE7A]">Standard MOQ: 100 KG Master Cartons</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PACKAGING SECTION -->
    <section id="packaging" class="py-14 sm:py-18 lg:py-22 bg-[#F5EFE5]/50 border-y border-[#E5DDD0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div class="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">Packaging Formats</div>
          <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight">Bulk Cartons &amp; Retail Barrier Pouches.</h2>
          <p class="text-xs sm:text-sm md:text-base text-[#46584C] mt-2.5 leading-relaxed">From 100 KG wholesale shipments for snack manufacturers to 100g and 250g nitrogen-sealed retail pouches for modern store shelves. Every format is hermetically sealed against humidity.</p>
        </div>

        <div class="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          <div class="lg:col-span-5 relative">
            <div class="rounded-2xl overflow-hidden border border-[#DCD3C3] shadow-md bg-[#FAF8F5]">
              <img 
                src="/images/packaging_b2b.jpg" 
                onerror="this.onerror=null; this.src='images/packaging_b2b.jpg'; this.onerror=function(){this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22440%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23F5EFE5%22/><text x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 font-family=%22serif%22 font-size=%2222%22 fill=%22%23112F20%22>Vimora Bulk & Retail Packaging</text></svg>'};" 
                alt="Vimora Foods wholesale makhana master carton and retail pouches" 
                class="w-full h-64 sm:h-80 md:h-96 lg:h-[440px] object-cover object-center"
              >
              <div class="p-3.5 bg-[#FAF8F5] border-t border-[#E5DDCF] flex items-center justify-between text-xs text-[#526356]">
                <span class="font-semibold text-[#112F20]">Master Cartons &amp; Stand-Up Pouches</span>
                <span class="font-mono text-[#8C7A57]">100g · 250g · Bulk</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-4 sm:space-y-5">
            <div class="p-5 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#DDD3C2] shadow-2xs">
              <div class="flex justify-between items-center pb-3 border-b border-[#EAE2D3]">
                <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#112F20]">Bulk Wholesale Master Packaging</h3>
                <span class="text-xs font-mono font-bold text-[#112F20] bg-[#EAE2D3] px-2.5 py-1 rounded-md">MOQ: 100 KG</span>
              </div>
              <div class="mt-3 text-xs text-[#47594C] space-y-1">
                <div><strong>Size: </strong>10 KG &amp; 25 KG Master Cartons / Airtight Sacks</div>
                <div><strong>Material: </strong>5-ply export corrugated box with virgin polyethylene moisture barrier</div>
                <p class="pt-1">Engineered for food processors, wholesale repackagers, and institutional kitchens. Protects fragile popped nuts against humidity and transit compression.</p>
              </div>
            </div>

            <div class="p-5 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#DDD3C2] shadow-2xs">
              <div class="flex justify-between items-center pb-3 border-b border-[#EAE2D3]">
                <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#112F20]">Retail Barrier Pouches</h3>
                <span class="text-xs font-mono font-bold text-[#112F20] bg-[#EAE2D3] px-2.5 py-1 rounded-md">100g &amp; 250g</span>
              </div>
              <div class="mt-3 text-xs text-[#47594C] space-y-1">
                <div><strong>Size: </strong>100g &amp; 250g Stand-Up Pouches</div>
                <div><strong>Material: </strong>Matte-finish metallic barrier laminate with zip-lock resealable closure</div>
                <p class="pt-1">Designed for supermarkets and gourmet stores. Nitrogen-flushed to preserve origin crispness and freshness for 12 months.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE B2B QUOTE CALCULATOR WITH WHATSAPP -->
    <section id="quote-calculator" class="py-14 sm:py-18 lg:py-22 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div class="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">Wholesale Inquiry</div>
          <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight">Configure Your Wholesale Makhana Lot.</h2>
          <p class="text-xs sm:text-sm md:text-base text-[#475A4E] mt-2.5">Select your preferred grade, finish, and volume to generate a direct quote for our Bangalore desk.</p>
        </div>

        <div class="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          <!-- Left Column: Form -->
          <div class="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border border-[#DFD6C6] shadow-xs space-y-5">
            
            <!-- 1. Grade -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-[#112F20] mb-2">01. Select Grade</label>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2" id="grade-selector">
                <button type="button" onclick="setCalcGrade('Grade 4', '14mm – 16mm', this)" class="grade-btn min-h-[50px] p-2.5 text-left rounded-xl border border-[#E5DDD0] bg-[#FAF8F5] text-xs">
                  <div class="font-bold text-[#112F20]">Grade 4</div>
                  <div class="text-[10px] text-[#708075]">14mm – 16mm</div>
                </button>
                <button type="button" onclick="setCalcGrade('Grade 4+', '16mm – 18mm', this)" class="grade-btn min-h-[50px] p-2.5 text-left rounded-xl border border-[#E5DDD0] bg-[#FAF8F5] text-xs">
                  <div class="font-bold text-[#112F20]">Grade 4+</div>
                  <div class="text-[10px] text-[#708075]">16mm – 18mm</div>
                </button>
                <button type="button" onclick="setCalcGrade('Grade 5', '18mm – 20mm', this)" class="grade-btn active-grade min-h-[50px] p-2.5 text-left rounded-xl border border-[#112F20] bg-[#112F20] text-white text-xs">
                  <div class="font-bold text-white">Grade 5</div>
                  <div class="text-[10px] text-[#DFBE7A]">18mm – 20mm</div>
                </button>
                <button type="button" onclick="setCalcGrade('Grade 5+', '20mm – 22mm', this)" class="grade-btn min-h-[50px] p-2.5 text-left rounded-xl border border-[#E5DDD0] bg-[#FAF8F5] text-xs">
                  <div class="font-bold text-[#112F20]">Grade 5+</div>
                  <div class="text-[10px] text-[#708075]">20mm – 22mm</div>
                </button>
                <button type="button" onclick="setCalcGrade('Grade 6+ (Jumbo)', '22mm – 26mm+', this)" class="grade-btn min-h-[50px] p-2.5 text-left rounded-xl border border-[#E5DDD0] bg-[#FAF8F5] text-xs col-span-2 sm:col-span-1">
                  <div class="font-bold text-[#112F20]">Grade 6+ Jumbo</div>
                  <div class="text-[10px] text-[#708075]">22mm – 26mm+</div>
                </button>
              </div>
            </div>

            <!-- 2. Variety Finish -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-[#112F20] mb-2">02. Variety Finish</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button type="button" onclick="setCalcVariety('Hand-Picked (Zero Black Spots)', this)" class="variety-btn active-variety p-3 text-left rounded-xl border border-[#112F20] bg-[#112F20] text-white text-xs">
                  <div class="font-bold">Hand-Picked (Zero Black Spots)</div>
                  <div class="text-[10px] text-[#DFBE7A] mt-0.5">Top-grade export &amp; luxury retail</div>
                </button>
                <button type="button" onclick="setCalcVariety('Normal (Machine Cleaned)', this)" class="variety-btn p-3 text-left rounded-xl border border-[#E5DDD0] bg-[#FAF8F5] text-[#293B2F] text-xs">
                  <div class="font-bold">Normal (Machine Cleaned)</div>
                  <div class="text-[10px] text-[#6E8074] mt-0.5">Pneumatically dedusted, cost-efficient</div>
                </button>
              </div>
            </div>

            <!-- 3. Blend & Packaging -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-[#112F20] mb-1.5">03. House Blend</label>
                <select id="calc-blend" onchange="updateSummary()" class="w-full p-2.5 rounded-xl border border-[#D8CEBC] bg-[#FAF8F5] text-xs text-[#112F20] focus:ring-2 focus:ring-[#B88E3E] outline-none">
                  <option value="Vimora Regular (Grades 4+ &amp; 5)">Vimora Regular (Grades 4+ &amp; 5)</option>
                  <option value="Vimora Premium (Grades 5+ &amp; 6+ Jumbo)">Vimora Premium (Grades 5+ &amp; 6+ Jumbo)</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-[#112F20] mb-1.5">04. Packaging Format</label>
                <select id="calc-packaging" onchange="updateSummary()" class="w-full p-2.5 rounded-xl border border-[#D8CEBC] bg-[#FAF8F5] text-xs text-[#112F20] focus:ring-2 focus:ring-[#B88E3E] outline-none">
                  <option value="Bulk Cartons (10kg / 25kg Master Boxes)">Bulk Cartons (10kg / 25kg Master Boxes)</option>
                  <option value="Retail Pouches (100g Stand-Up)">Retail Pouches (100g Stand-Up)</option>
                  <option value="Retail Pouches (250g Stand-Up)">Retail Pouches (250g Stand-Up)</option>
                </select>
              </div>
            </div>

            <!-- 4. Quantity -->
            <div>
              <div class="flex justify-between items-center mb-1.5">
                <label class="text-xs font-bold uppercase tracking-wider text-[#112F20]">05. Quantity (KG)</label>
                <span class="text-[11px] font-mono text-[#8C7A58] bg-[#F2EDE2] px-2 py-0.5 rounded">MOQ: 100 KG</span>
              </div>
              <input type="range" id="calc-slider" min="100" max="5000" step="50" value="250" oninput="syncQuantity(this.value)" class="w-full accent-[#112F20] cursor-pointer">
              <div class="flex items-center gap-3 mt-2">
                <input type="number" id="calc-number" min="100" max="50000" step="50" value="250" oninput="syncQuantity(this.value)" class="w-32 p-2 rounded-lg border border-[#D8CEBC] bg-[#FAF8F5] text-xs font-mono font-bold text-[#112F20]">
                <span class="text-xs text-[#5D6F63]">Kilograms total net weight</span>
              </div>
            </div>

            <!-- 5. Buyer Contact Details -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#EDE4D5]">
              <div>
                <label class="block text-[11px] font-semibold text-[#5B6D61] mb-1">Your Name / Title</label>
                <input type="text" id="calc-name" placeholder="e.g. Ramesh Kumar (Purchasing)" oninput="updateSummary()" class="w-full p-2 rounded-lg border border-[#D8CEBC] bg-[#FAF8F5] text-xs outline-none focus:ring-2 focus:ring-[#B88E3E]">
              </div>
              <div>
                <label class="block text-[11px] font-semibold text-[#5B6D61] mb-1">Company / Brand Name</label>
                <input type="text" id="calc-company" placeholder="e.g. Bangalore Snacks Co." oninput="updateSummary()" class="w-full p-2 rounded-lg border border-[#D8CEBC] bg-[#FAF8F5] text-xs outline-none focus:ring-2 focus:ring-[#B88E3E]">
              </div>
            </div>
          </div>

          <!-- Right Column: Live Spec Summary & WhatsApp Button -->
          <div class="lg:col-span-5 bg-[#112F20] text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-5">
            <div class="flex items-center justify-between pb-3 border-b border-[#214F36]">
              <div>
                <span class="text-[10px] font-semibold uppercase tracking-wider text-[#DFBE7A]">Commercial Dispatch</span>
                <h3 class="font-serif text-xl sm:text-2xl font-bold text-white">Order Summary</h3>
              </div>
              <span class="px-2.5 py-1 rounded bg-[#18462F] text-[#DFBE7A] font-mono text-xs font-bold">Bangalore Desk</span>
            </div>

            <div class="space-y-3 text-xs text-[#D1DFD7]">
              <div class="flex justify-between items-center py-1 border-b border-[#1A422D]">
                <span class="text-[#96AEA0]">Selected Grade:</span>
                <span id="sum-grade" class="font-bold text-white font-mono">Grade 5</span>
              </div>
              <div class="flex justify-between items-center py-1 border-b border-[#1A422D]">
                <span class="text-[#96AEA0]">Diameter Gauge:</span>
                <span id="sum-diameter" class="font-bold text-white font-mono">18mm – 20mm</span>
              </div>
              <div class="flex justify-between items-center py-1 border-b border-[#1A422D]">
                <span class="text-[#96AEA0]">Finish Quality:</span>
                <span id="sum-variety" class="font-bold text-white">Hand-Picked</span>
              </div>
              <div class="flex justify-between items-center py-1 border-b border-[#1A422D]">
                <span class="text-[#96AEA0]">House Blend:</span>
                <span id="sum-blend" class="font-bold text-white truncate max-w-[200px]">Vimora Regular</span>
              </div>
              <div class="flex justify-between items-center py-1 border-b border-[#1A422D]">
                <span class="text-[#96AEA0]">Packaging:</span>
                <span id="sum-packaging" class="font-bold text-white truncate max-w-[200px]">Bulk Cartons</span>
              </div>
              <div class="flex justify-between items-center py-1 border-b border-[#1A422D]">
                <span class="text-[#96AEA0]">Total Volume:</span>
                <span id="sum-qty" class="font-bold text-[#DFBE7A] font-mono text-sm">250 KG</span>
              </div>
              <div class="flex justify-between items-center py-1 border-b border-[#1A422D]">
                <span class="text-[#96AEA0]">Est. Units / Cartons:</span>
                <span id="sum-boxes" class="font-mono text-white">~25 Master Cartons</span>
              </div>
            </div>

            <!-- Primary Action: WhatsApp Directly -->
            <div class="pt-2 space-y-2">
              <a id="whatsapp-quote-link" href="https://wa.me/919962570800" target="_blank" rel="noopener noreferrer" class="w-full py-3.5 px-4 bg-[#B88E3E] hover:bg-[#DFBE7A] text-[#112F20] font-bold rounded-xl text-center text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                <span>Send Order via WhatsApp (9962570800)</span>
              </a>

              <button type="button" onclick="copySpec()" class="w-full py-2 px-3 bg-[#18462F] hover:bg-[#20553A] text-[#DFBE7A] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
                <span id="copy-text">Copy Spec Summary</span>
              </button>
            </div>

            <div class="text-[11px] text-[#869E90] text-center pt-1">
              Direct connection to Vimora Foods management desk in Bangalore.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FLAVOURED MAKHANA (COMING SOON) -->
    <section id="flavours" class="py-14 sm:py-18 lg:py-22 bg-[#F5EFE5]/50 border-y border-[#E5DDD0]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E3D9C9]">
          <div class="max-w-2xl">
            <div class="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">Product Pipeline</div>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight">Flavoured Makhana &mdash; Coming Soon.</h2>
            <p class="text-sm sm:text-base text-[#46584C] mt-2.5">While we focus on single-origin raw and unflavoured grades for processing clients, our seasoned line is in final pilot testing for retail partners.</p>
          </div>
          <span class="px-3.5 py-1.5 rounded-full bg-[#112F20] text-[#DFBE7A] text-xs font-mono font-semibold self-start md:self-auto">Launch: Q3 2026</span>
        </div>

        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div class="p-5 rounded-xl bg-white border border-[#DDD3C2] flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#B88E3E] uppercase tracking-wider">Classic Savory</span>
              <h3 class="font-serif text-lg font-bold text-[#112F20] mt-1">Himalayan Pink Salt &amp; Pepper</h3>
              <p class="text-xs text-[#526457] mt-2 leading-relaxed">Coarse rock salt, crushed Tellicherry black pepper, and cold-pressed olive oil mist.</p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#ECE3D5] text-[11px] font-mono text-[#8C7A58]">Retail 100g &middot; Private Label Ready</div>
          </div>

          <div class="p-5 rounded-xl bg-white border border-[#DDD3C2] flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#B88E3E] uppercase tracking-wider">Bold &amp; Tangy</span>
              <h3 class="font-serif text-lg font-bold text-[#112F20] mt-1">Tangy Peri Peri</h3>
              <p class="text-xs text-[#526457] mt-2 leading-relaxed">Bird’s eye chili, sun-dried tomato dust, roasted garlic, and kaffir lime zest.</p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#ECE3D5] text-[11px] font-mono text-[#8C7A58]">Retail 100g &middot; Private Label Ready</div>
          </div>

          <div class="p-5 rounded-xl bg-white border border-[#DDD3C2] flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#B88E3E] uppercase tracking-wider">Gourmet Creamy</span>
              <h3 class="font-serif text-lg font-bold text-[#112F20] mt-1">White Cheddar &amp; Herbs</h3>
              <p class="text-xs text-[#526457] mt-2 leading-relaxed">Aged white cheddar cheese powder, rosemary, thyme, and roasted butter.</p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#ECE3D5] text-[11px] font-mono text-[#8C7A58]">Retail 100g &middot; Private Label Ready</div>
          </div>

          <div class="p-5 rounded-xl bg-white border border-[#DDD3C2] flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-bold text-[#B88E3E] uppercase tracking-wider">Heritage Desi</span>
              <h3 class="font-serif text-lg font-bold text-[#112F20] mt-1">Desi Pudina &amp; Chaat</h3>
              <p class="text-xs text-[#526457] mt-2 leading-relaxed">Sun-dried garden mint flakes, black salt, amchur, and roasted cumin.</p>
            </div>
            <div class="mt-4 pt-3 border-t border-[#ECE3D5] text-[11px] font-mono text-[#8C7A58]">Retail 100g &middot; Private Label Ready</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT & DUAL OPERATING FACILITIES -->
    <section id="contact" class="py-14 sm:py-18 lg:py-22 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div class="text-xs font-semibold uppercase tracking-[0.18em] text-[#B88E3E]">Operating Facilities</div>
          <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#112F20] mt-2 tracking-tight">Corporate Office &amp; Processing Unit.</h2>
          <p class="text-xs sm:text-sm md:text-base text-[#475A4E] mt-2.5">Direct communication channels for wholesale procurement, institutional client visits, sample fulfillment, and logistics.</p>
        </div>

        <div class="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <!-- Bangalore -->
          <div class="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCD3C3] shadow-xs flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-3 border-b border-[#EBE4D5]">
                <div>
                  <span class="text-[10px] font-semibold text-[#B88E3E] uppercase tracking-wider">Commercial Desk</span>
                  <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#112F20] mt-0.5">Bangalore Corporate Office</h3>
                </div>
                <span class="px-2.5 py-1 rounded bg-[#F2ECE1] text-[#112F20] font-mono text-xs font-semibold">Karnataka</span>
              </div>
              <div class="mt-4 space-y-2 text-xs text-[#485C50]">
                <div><strong>Address: </strong>Rose Garden Apartments, Arekere, Bannerghatta Road, Bangalore, Karnataka &mdash; 560076</div>
                <div><strong>Role: </strong>Client Meetings, Sampling, Commercial Contracts, Ready Buffer Stock</div>
                <div><strong>Phone / WhatsApp: </strong><a href="tel:9962570800" class="text-[#B88E3E] font-bold font-mono">+91 99625 70800</a></div>
              </div>
            </div>
            <div class="mt-6 pt-4 border-t border-[#EBE4D5] flex items-center justify-between">
              <a href="https://wa.me/919962570800?text=Hello%20Vimora%20Foods%20Bangalore%20team" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-[#112F20] hover:text-[#B88E3E] flex items-center gap-1">
                <span>Message Bangalore Desk</span> &rarr;
              </a>
              <span class="text-[11px] text-[#788B7F]">Direct Sales Desk</span>
            </div>
          </div>

          <!-- Purnea -->
          <div class="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCD3C3] shadow-xs flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between pb-3 border-b border-[#EBE4D5]">
                <div>
                  <span class="text-[10px] font-semibold text-[#B88E3E] uppercase tracking-wider">Origin Manufacturing</span>
                  <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#112F20] mt-0.5">Purnea Processing Unit</h3>
                </div>
                <span class="px-2.5 py-1 rounded bg-[#F2ECE1] text-[#112F20] font-mono text-xs font-semibold">Bihar</span>
              </div>
              <div class="mt-4 space-y-2 text-xs text-[#485C50]">
                <div><strong>Address: </strong>BIADA Industrial Area, Maranga, Purnea, Bihar &mdash; 854301</div>
                <div><strong>Role: </strong>Direct Wetland Sourcing, Rotary Sifting, Pneumatic Cleaning, Bulk Packaging</div>
                <div><strong>Production Dispatch: </strong>Daily Freight to South India Corridor</div>
              </div>
            </div>
            <div class="mt-6 pt-4 border-t border-[#EBE4D5] flex items-center justify-between">
              <a href="https://wa.me/919962570800?text=Hello%20Vimora%20Foods%20Purnea%20factory%20team" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-[#112F20] hover:text-[#B88E3E] flex items-center gap-1">
                <span>Factory Inquiries</span> &rarr;
              </a>
              <span class="text-[11px] text-[#788B7F]">Origin Manufacturing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="bg-[#0D2418] text-[#D8E4DC] border-t border-[#183C28] pt-12 pb-10 sm:pt-14 sm:pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 border-b border-[#183C28]">
        
        <div class="sm:col-span-2 lg:col-span-5 space-y-3">
          <div class="flex items-center gap-2.5">
            <svg class="w-8 h-8 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="46" stroke="#DFBE7A" stroke-width="2"/>
              <circle cx="50" cy="50" r="6.5" fill="#DFBE7A"/>
              <path d="M50 24C44 33 32 40 32 52C32 63 41 71 50 78C59 71 68 63 68 52C68 40 56 33 50 24Z" stroke="#DFBE7A" stroke-width="2"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span class="font-serif text-xl font-bold tracking-[0.08em] text-white">VIMORA</span>
              <span class="text-[8px] font-sans font-semibold tracking-[0.24em] uppercase text-[#8EA397] mt-0.5">FOODS PVT. LTD.</span>
            </div>
          </div>
          <p class="text-xs text-[#9BB1A4] leading-relaxed max-w-sm pt-1 font-light">
            Vimora Foods Private Limited is a specialized agro-processor of single-origin Phool Makhana from Purnea, Bihar, supplying B2B and institutional clients across Bangalore and nationwide.
          </p>
          <div class="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
            <a href="tel:9962570800" class="text-[#DFBE7A] hover:underline">+91 99625 70800</a>
            <a href="https://wa.me/919962570800" target="_blank" rel="noopener noreferrer" class="text-[#DFBE7A] hover:underline">WhatsApp Direct</a>
            <a href="vimora-foods.html" download="vimora-foods.html" class="text-[#DFBE7A] hover:underline">Download HTML File</a>
          </div>
        </div>

        <div class="lg:col-span-3 space-y-2.5">
          <div class="text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">Navigation</div>
          <ul class="space-y-1.5 text-xs text-[#AFC3B7]">
            <li><a href="#kernel-3d" class="hover:text-white transition-colors block py-1">3D Kernel Calibrator</a></li>
            <li><a href="#grades" class="hover:text-white transition-colors block py-1">Grades 4 to 6+ Specifications</a></li>
            <li><a href="#farm-to-factory" class="hover:text-white transition-colors block py-1">Farm to Factory &amp; Certifications</a></li>
            <li><a href="#packaging" class="hover:text-white transition-colors block py-1">Bulk Master Cartons (MOQ 100 KG)</a></li>
            <li><a href="#quote-calculator" class="hover:text-white transition-colors block py-1">B2B Quote Configuration</a></li>
            <li><a href="#contact" class="hover:text-white transition-colors block py-1">Bangalore &amp; Purnea Facilities</a></li>
          </ul>
        </div>

        <div class="lg:col-span-4 space-y-3.5 text-xs">
          <div class="text-xs font-semibold uppercase tracking-wider text-[#DFBE7A]">Operating Facilities</div>
          <div class="space-y-1">
            <div class="font-semibold text-white">Corporate Office (Bangalore)</div>
            <p class="text-[#98ADA1] leading-relaxed">Rose Garden Apartments, Arekere, Bannerghatta Road, Bangalore, Karnataka &mdash; 560076</p>
          </div>
          <div class="space-y-1 pt-1">
            <div class="font-semibold text-white">Processing Unit (Bihar)</div>
            <p class="text-[#98ADA1] leading-relaxed">BIADA Industrial Area, Maranga, Purnea, Bihar &mdash; 854301</p>
          </div>
        </div>
      </div>

      <div class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7A9384] text-center sm:text-left">
        <div>
          &copy; 2026 Vimora Foods Private Limited. All rights reserved.
        </div>
        <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px]">
          <span>Origin: Purnea, Bihar</span>
          <span aria-hidden="true">&middot;</span>
          <span>Corporate Desk: Bangalore</span>
          <span aria-hidden="true">&middot;</span>
          <span>MOQ: 100 KG</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- FLOATING WHATSAPP BUTTON -->
  <aside aria-label="Quick wholesale contact" class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
    <a href="https://wa.me/919962570800?text=Hello%20Vimora%20Foods%2C%20I%20am%20interested%20in%20procuring%20phool%20makhana." target="_blank" rel="noopener noreferrer" class="group flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-3 min-h-[48px] rounded-full bg-[#112F20] text-white border border-[#DFBE7A]/40 shadow-2xl hover:bg-[#1A4E33] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#B88E3E]">
      <svg class="w-5 h-5 text-[#DFBE7A] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
      <div class="flex flex-col text-left leading-tight">
        <span class="text-[10px] font-semibold text-[#DFBE7A] uppercase tracking-wider">Wholesale Desk</span>
        <span class="text-xs font-bold font-mono tracking-tight text-white">9962570800</span>
      </div>
    </a>
  </aside>

  <!-- SAMPLE KIT MODAL -->
  <div id="sample-modal" class="fixed inset-0 z-50 hidden bg-[#0A1C13]/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#FAF8F5] rounded-2xl border border-[#D5C9B6] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
      <button type="button" onclick="closeSampleModal()" class="absolute top-4 right-4 text-[#5D6F63] hover:text-[#112F20] text-xl font-bold p-1">&times;</button>
      
      <div id="sample-form-box">
        <div class="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">Direct Quality Evaluation</div>
        <h3 class="font-serif text-2xl font-bold text-[#112F20] mt-1">Request 5-Grade Sample Box</h3>
        <p class="text-xs text-[#4F6255] mt-2 leading-relaxed">We provide verified food brands and wholesale buyers in Bangalore with a physical sample kit containing all 5 commercial grades (Grade 4 through 6+).</p>

        <form onsubmit="handleSampleSubmit(event)" class="mt-5 space-y-3.5">
          <div>
            <label class="block text-xs font-bold text-[#112F20] mb-1">Full Name</label>
            <input type="text" id="sample-name" required placeholder="e.g. Ramesh Kumar" class="w-full p-2.5 rounded-lg border border-[#D8CEBC] bg-white text-xs outline-none focus:ring-2 focus:ring-[#B88E3E]">
          </div>
          <div>
            <label class="block text-xs font-bold text-[#112F20] mb-1">Company / Brand Name</label>
            <input type="text" id="sample-company" required placeholder="e.g. PureSnacks Ltd." class="w-full p-2.5 rounded-lg border border-[#D8CEBC] bg-white text-xs outline-none focus:ring-2 focus:ring-[#B88E3E]">
          </div>
          <div>
            <label class="block text-xs font-bold text-[#112F20] mb-1">Phone / WhatsApp Number</label>
            <input type="tel" id="sample-phone" required placeholder="e.g. 98450xxxxx" class="w-full p-2.5 rounded-lg border border-[#D8CEBC] bg-white text-xs outline-none focus:ring-2 focus:ring-[#B88E3E]">
          </div>
          <div>
            <label class="block text-xs font-bold text-[#112F20] mb-1">Delivery Address in Bangalore / South India</label>
            <textarea id="sample-address" required rows="2" placeholder="Office / Facility delivery address" class="w-full p-2.5 rounded-lg border border-[#D8CEBC] bg-white text-xs outline-none focus:ring-2 focus:ring-[#B88E3E]"></textarea>
          </div>
          <button type="submit" class="w-full py-3 bg-[#112F20] text-white hover:bg-[#1A4E33] rounded-lg text-xs font-bold transition-colors shadow-xs">
            Submit Sample Request via WhatsApp
          </button>
        </form>
      </div>

      <div id="sample-success-box" class="hidden text-center py-6 space-y-3">
        <div class="w-12 h-12 rounded-full bg-[#112F20] text-[#DFBE7A] text-2xl flex items-center justify-center mx-auto">✓</div>
        <h4 class="font-serif text-xl font-bold text-[#112F20]">Sample Request Dispatched!</h4>
        <p class="text-xs text-[#4F6255]">Our Bangalore office at Rose Garden Apartments, Arekere will confirm dispatch details.</p>
        <button type="button" onclick="closeSampleModal()" class="mt-4 px-5 py-2 text-xs font-semibold bg-[#FAF8F5] border border-[#B88E3E] text-[#112F20] rounded-md">Close</button>
      </div>
    </div>
  </div>

  <!-- JAVASCRIPT: THREE.JS 3D SCENE & UI INTERACTIONS -->
  <script>
    // Mobile Drawer Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // ==========================================
    // THREE.JS 3D KERNEL CALIBRATOR SETUP
    // ==========================================
    let scene, camera, renderer;
    let kernelGroup, coreMesh, lobules = [], huskMesh, caliperRing;
    let starchMat, huskMat;
    let isSpinning = true;
    let targetScale = 1.22; // Default Grade 6+
    let currentScale = 1.22;
    let activeGradeName = 'Grade 6+ (Jumbo)';
    let activeGradeDiameter = '24.8 mm';
    let activeVarietyName = 'Hand-Picked';
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    function createProceduralStarchTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#808080';
        ctx.fillRect(0, 0, 512, 512);
        for (let i = 0; i < 3500; i++) {
          const x = Math.random() * 512;
          const y = Math.random() * 512;
          const r = 1 + Math.random() * 3;
          const val = Math.floor(Math.random() * 110 + 90);
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgb(' + val + ',' + val + ',' + val + ')';
          ctx.fill();
        }
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(3, 3);
      return tex;
    }

    function createProceduralShadowTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
        grad.addColorStop(0, 'rgba(17, 47, 32, 0.45)');
        grad.addColorStop(0.4, 'rgba(17, 47, 32, 0.2)');
        grad.addColorStop(1, 'rgba(17, 47, 32, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 256, 256);
      }
      return new THREE.CanvasTexture(canvas);
    }

    function init3DScene() {
      const container = document.getElementById('kernel-3d-canvas-container');
      if (!container || typeof THREE === 'undefined') return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      // Scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color('#FAF8F5');
      scene.fog = new THREE.FogExp2('#FAF8F5', 0.04);

      // Camera
      camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      camera.position.set(0, 1.6, 5.0);
      camera.lookAt(0, 0, 0);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      container.appendChild(renderer.domElement);

      // Lighting Rig
      const keyLight = new THREE.DirectionalLight('#FFF9EE', 1.8);
      keyLight.position.set(4, 5, 3.5);
      scene.add(keyLight);

      const fillLight = new THREE.HemisphereLight('#FAF8F5', '#E6DDD0', 1.1);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight('#E0D5C1', 0.8);
      rimLight.position.set(-3.5, 2.5, -4);
      scene.add(rimLight);

      // Textures
      const bumpTex = createProceduralStarchTexture();
      const shadowTex = createProceduralShadowTexture();

      // Shadow Plane
      const shadowPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(3.6, 3.6),
        new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.4, depthWrite: false })
      );
      shadowPlane.rotation.x = -Math.PI / 2;
      shadowPlane.position.y = -0.98;
      scene.add(shadowPlane);

      // Materials
      starchMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#FAF7EE'),
        roughness: 0.88,
        metalness: 0.02,
        bumpMap: bumpTex,
        bumpScale: 0.035
      });

      huskMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#2A1A12'),
        roughness: 0.65,
        metalness: 0.15
      });

      // Composite Kernel Group
      kernelGroup = new THREE.Group();
      scene.add(kernelGroup);

      // Part 1: Deformed Core
      const coreGeo = new THREE.DodecahedronGeometry(0.85, 2);
      const pos = coreGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const vx = pos.getX(i);
        const vy = pos.getY(i);
        const vz = pos.getZ(i);
        const noise = (Math.sin(vx * 4.2) * Math.cos(vy * 3.8) + Math.sin(vz * 4.5)) * 0.07;
        pos.setXYZ(i, vx * (1 + noise), vy * (1 + noise * 0.8), vz * (1 + noise));
      }
      coreGeo.computeVertexNormals();
      coreMesh = new THREE.Mesh(coreGeo, starchMat);
      kernelGroup.add(coreMesh);

      // Part 2: Lobules
      const l1 = new THREE.Mesh(new THREE.SphereGeometry(0.52, 20, 18), starchMat);
      l1.position.set(0.48, 0.28, 0.25);
      l1.scale.set(1.15, 0.9, 1.0);
      kernelGroup.add(l1);
      lobules.push(l1);

      const l2 = new THREE.Mesh(new THREE.SphereGeometry(0.48, 20, 18), starchMat);
      l2.position.set(-0.5, 0.2, 0.15);
      l2.scale.set(0.95, 1.1, 0.95);
      kernelGroup.add(l2);
      lobules.push(l2);

      const l3 = new THREE.Mesh(new THREE.SphereGeometry(0.56, 20, 18), starchMat);
      l3.position.set(0.08, 0.58, -0.15);
      l3.scale.set(1.1, 0.85, 1.05);
      kernelGroup.add(l3);
      lobules.push(l3);

      const l4 = new THREE.Mesh(new THREE.SphereGeometry(0.46, 18, 16), starchMat);
      l4.position.set(0.0, -0.28, 0.42);
      l4.scale.set(1.0, 0.85, 1.1);
      kernelGroup.add(l4);
      lobules.push(l4);

      // Part 3: Basal Seed-Coat Crater
      huskMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.14, 0.2, 16), huskMat);
      huskMesh.position.set(-0.15, -0.76, -0.12);
      huskMesh.rotation.set(0.3, 0.2, 0.4);
      kernelGroup.add(huskMesh);

      // Part 4: Gold Caliper Measuring Ring
      caliperRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.22, 0.016, 16, 64),
        new THREE.MeshStandardMaterial({ color: '#B88E3E', metalness: 0.85, roughness: 0.25 })
      );
      caliperRing.rotation.x = Math.PI / 2;
      caliperRing.position.y = 0.0;
      kernelGroup.add(caliperRing);

      // Set initial scale
      kernelGroup.scale.set(targetScale, targetScale, targetScale);

      // Pointer / Touch Drag Orbit Interaction
      container.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      });
      window.addEventListener('mouseup', () => { isDragging = false; });
      container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        kernelGroup.rotation.y += deltaX * 0.008;
        kernelGroup.rotation.x += deltaY * 0.008;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      });

      // Touch Drag
      container.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          isDragging = true;
          previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
      }, { passive: true });
      window.addEventListener('touchend', () => { isDragging = false; });
      container.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;
        kernelGroup.rotation.y += deltaX * 0.01;
        kernelGroup.rotation.x += deltaY * 0.01;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }, { passive: true });

      // Resize Listener
      window.addEventListener('resize', () => {
        if (!container || !renderer || !camera) return;
        const nw = container.clientWidth;
        const nh = container.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      });

      // Animation Loop
      function animate() {
        requestAnimationFrame(animate);

        // Auto spin if not dragging
        if (isSpinning && !isDragging) {
          kernelGroup.rotation.y += 0.008;
        }

        // Smooth Lerp Scale
        currentScale += (targetScale - currentScale) * 0.1;
        kernelGroup.scale.set(currentScale, currentScale, currentScale);

        renderer.render(scene, camera);
      }
      animate();
    }

    // 3D UI Control Functions
    function set3DGrade(gradeId, scale, diameter, count, btn) {
      targetScale = scale;
      activeGradeDiameter = diameter;
      document.getElementById('hud-diameter').textContent = diameter;
      document.getElementById('hud-count').textContent = count;

      document.querySelectorAll('.btn-3d-grade').forEach(b => {
        b.className = 'btn-3d-grade p-2.5 rounded-xl border border-[#DCD2C2] bg-white text-left text-xs transition-all';
        const title = b.querySelector('.font-bold');
        if (title) title.className = 'font-bold text-[#112F20]';
      });
      btn.className = 'btn-3d-grade active-3d-grade p-2.5 rounded-xl border border-[#112F20] bg-[#112F20] text-white text-left text-xs transition-all';
      const activeTitle = btn.querySelector('.font-bold');
      if (activeTitle) {
        activeTitle.className = 'font-bold text-white';
        activeGradeName = activeTitle.textContent;
      }
    }

    function set3DFinish(finish) {
      activeVarietyName = finish;
      const isHp = finish === 'Hand-Picked';
      document.getElementById('hud-variety-badge').textContent = isHp ? 'Hand-Picked (Spotless White)' : 'Normal (Cleaned with Fleck)';
      
      const btnHp = document.getElementById('btn-finish-hp');
      const btnNorm = document.getElementById('btn-finish-norm');
      if (isHp) {
        btnHp.className = 'px-2.5 py-1 rounded-md bg-[#112F20] text-white font-semibold transition-all';
        btnNorm.className = 'px-2.5 py-1 rounded-md text-[#4A5D51] font-semibold hover:text-[#112F20] transition-all';
        starchMat.color.set('#FAF7EE');
        if (huskMesh) huskMesh.visible = false;
      } else {
        btnNorm.className = 'px-2.5 py-1 rounded-md bg-[#112F20] text-white font-semibold transition-all';
        btnHp.className = 'px-2.5 py-1 rounded-md text-[#4A5D51] font-semibold hover:text-[#112F20] transition-all';
        starchMat.color.set('#F4EEDC');
        if (huskMesh) huskMesh.visible = true;
      }
    }

    function set3DRoast(roast) {
      const isRaw = roast === 'raw';
      const btnRaw = document.getElementById('btn-roast-raw');
      const btnMicro = document.getElementById('btn-roast-micro');
      if (isRaw) {
        btnRaw.className = 'px-2.5 py-1 rounded-md bg-[#112F20] text-white font-semibold transition-all';
        btnMicro.className = 'px-2.5 py-1 rounded-md text-[#4A5D51] font-semibold hover:text-[#112F20] transition-all';
        starchMat.color.set(activeVarietyName === 'Hand-Picked' ? '#FAF7EE' : '#F4EEDC');
      } else {
        btnMicro.className = 'px-2.5 py-1 rounded-md bg-[#112F20] text-white font-semibold transition-all';
        btnRaw.className = 'px-2.5 py-1 rounded-md text-[#4A5D51] font-semibold hover:text-[#112F20] transition-all';
        starchMat.color.set('#F0E2C8');
      }
    }

    function toggle3DRotation() {
      isSpinning = !isSpinning;
      const btn = document.getElementById('btn-toggle-spin');
      btn.textContent = 'Spin: ' + (isSpinning ? 'ON' : 'OFF');
    }

    function quoteInspected3DGrade() {
      // Find matching calculator grade
      let calcGrade = 'Grade 5';
      let calcDiameter = '18mm – 20mm';
      if (activeGradeDiameter.includes('15.0')) {
        calcGrade = 'Grade 4'; calcDiameter = '14mm – 16mm';
      } else if (activeGradeDiameter.includes('17.2')) {
        calcGrade = 'Grade 4+'; calcDiameter = '16mm – 18mm';
      } else if (activeGradeDiameter.includes('19.4')) {
        calcGrade = 'Grade 5'; calcDiameter = '18mm – 20mm';
      } else if (activeGradeDiameter.includes('21.5')) {
        calcGrade = 'Grade 5+'; calcDiameter = '20mm – 22mm';
      } else if (activeGradeDiameter.includes('24.8')) {
        calcGrade = 'Grade 6+ (Jumbo)'; calcDiameter = '22mm – 26mm+';
      }

      // Update calculator button active state
      document.querySelectorAll('.grade-btn').forEach(btn => {
        if (btn.textContent.includes(calcGrade)) {
          setCalcGrade(calcGrade, calcDiameter, btn);
        }
      });

      // Update variety in calculator
      const varietyStr = activeVarietyName === 'Hand-Picked' ? 'Hand-Picked (Zero Black Spots)' : 'Normal (Machine Cleaned)';
      document.querySelectorAll('.variety-btn').forEach(btn => {
        if (btn.textContent.includes(activeVarietyName)) {
          setCalcVariety(varietyStr, btn);
        }
      });

      // Smooth scroll to calculator
      const el = document.getElementById('quote-calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    function selectGradeInCalc(grade, diameter) {
      document.querySelectorAll('.grade-btn').forEach(btn => {
        if (btn.textContent.includes(grade)) {
          setCalcGrade(grade, diameter, btn);
        }
      });
      const el = document.getElementById('quote-calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    // ==========================================
    // B2B QUOTE CALCULATOR STATE & LOGIC
    // ==========================================
    let currentGrade = 'Grade 5';
    let currentDiameter = '18mm – 20mm';
    let currentVariety = 'Hand-Picked (Zero Black Spots)';
    let currentQty = 250;

    function setCalcGrade(grade, diameter, btn) {
      currentGrade = grade;
      currentDiameter = diameter;
      document.querySelectorAll('.grade-btn').forEach(b => {
        b.className = 'grade-btn min-h-[50px] p-2.5 text-left rounded-xl border border-[#E5DDD0] bg-[#FAF8F5] text-xs';
        const t = b.querySelector('.font-bold');
        if (t) t.className = 'font-bold text-[#112F20]';
      });
      btn.className = 'grade-btn active-grade min-h-[50px] p-2.5 text-left rounded-xl border border-[#112F20] bg-[#112F20] text-white text-xs';
      const at = btn.querySelector('.font-bold');
      if (at) at.className = 'font-bold text-white';
      updateSummary();
    }

    function setCalcVariety(variety, btn) {
      currentVariety = variety;
      document.querySelectorAll('.variety-btn').forEach(b => {
        b.className = 'variety-btn p-3 text-left rounded-xl border border-[#E5DDD0] bg-[#FAF8F5] text-[#293B2F] text-xs';
      });
      btn.className = 'variety-btn active-variety p-3 text-left rounded-xl border border-[#112F20] bg-[#112F20] text-white text-xs';
      updateSummary();
    }

    function syncQuantity(val) {
      currentQty = Math.max(100, parseInt(val) || 100);
      document.getElementById('calc-slider').value = currentQty;
      document.getElementById('calc-number').value = currentQty;
      updateSummary();
    }

    function updateSummary() {
      const packaging = document.getElementById('calc-packaging').value;
      const blend = document.getElementById('calc-blend').value;
      const buyerName = document.getElementById('calc-name').value.trim() || 'Procurement Buyer';
      const company = document.getElementById('calc-company').value.trim() || 'Corporate Client';

      document.getElementById('sum-grade').textContent = currentGrade;
      document.getElementById('sum-diameter').textContent = currentDiameter;
      document.getElementById('sum-variety').textContent = currentVariety;
      document.getElementById('sum-blend').textContent = blend;
      document.getElementById('sum-packaging').textContent = packaging;
      document.getElementById('sum-qty').textContent = currentQty + ' KG';

      const isBulk = packaging.includes('Cartons');
      const estBoxes = isBulk ? Math.ceil(currentQty / 10) + ' Master Cartons' : Math.ceil((currentQty * 1000) / 250) + ' Retail Pouches';
      document.getElementById('sum-boxes').textContent = '~' + estBoxes;

      // WhatsApp formatted message
      const msg = 'Hello Vimora Foods,\\n' +
        'I would like to request a wholesale quote:\\n\\n' +
        '*Grade:* ' + currentGrade + ' (' + currentDiameter + ')\\n' +
        '*Finish:* ' + currentVariety + '\\n' +
        '*Blend:* ' + blend + '\\n' +
        '*Packaging:* ' + packaging + '\\n' +
        '*Quantity:* ' + currentQty + ' KG (~' + estBoxes + ')\\n' +
        '*Destination:* Bangalore / South India\\n' +
        '*Buyer / Company:* ' + buyerName + ' (' + company + ')\\n\\n' +
        'Please share commercial pricing and delivery timeline.';

      const waUrl = 'https://wa.me/919962570800?text=' + encodeURIComponent(msg);
      document.getElementById('whatsapp-quote-link').href = waUrl;
    }

    function copySpec() {
      const summary = 'VIMORA FOODS B2B ORDER SPECIFICATION\\n' +
        '------------------------------------\\n' +
        'Grade: ' + currentGrade + ' (' + currentDiameter + ')\\n' +
        'Finish: ' + currentVariety + '\\n' +
        'Packaging: ' + document.getElementById('calc-packaging').value + '\\n' +
        'Quantity: ' + currentQty + ' KG\\n' +
        'Bangalore Desk: Rose Garden Apts, Arekere, Bannerghatta Rd\\n' +
        'Hotline: +91 99625 70800';

      navigator.clipboard.writeText(summary);
      const textSpan = document.getElementById('copy-text');
      textSpan.textContent = 'Copied to Clipboard!';
      setTimeout(() => textSpan.textContent = 'Copy Spec Summary', 2000);
    }

    // Modal Handlers
    function openSampleModal() {
      document.getElementById('sample-modal').classList.remove('hidden');
    }
    function closeSampleModal() {
      document.getElementById('sample-modal').classList.add('hidden');
      document.getElementById('sample-form-box').classList.remove('hidden');
      document.getElementById('sample-success-box').classList.add('hidden');
    }
    function handleSampleSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('sample-name').value;
      const company = document.getElementById('sample-company').value;
      const phone = document.getElementById('sample-phone').value;
      const address = document.getElementById('sample-address').value;

      const msg = 'Hello Vimora Foods,\\n' +
        'I would like to request a 5-Grade Makhana evaluation kit:\\n\\n' +
        '*Name:* ' + name + ' (' + company + ')\\n' +
        '*Phone:* ' + phone + '\\n' +
        '*Address:* ' + address + '\\n' +
        '*Requested Pack:* 5-Grade Evaluation Kit (Grades 4 to 6+)';

      window.open('https://wa.me/919962570800?text=' + encodeURIComponent(msg), '_blank');
      document.getElementById('sample-form-box').classList.add('hidden');
      document.getElementById('sample-success-box').classList.remove('hidden');
    }

    // Initialize Everything
    window.addEventListener('DOMContentLoaded', () => {
      init3DScene();
      updateSummary();
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '../public/vimora-foods.html'), htmlContent, 'utf8');
console.log('Successfully wrote public/vimora-foods.html! Size: ' + htmlContent.length + ' bytes.');
