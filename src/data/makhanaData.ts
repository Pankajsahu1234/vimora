import { MakhanaGrade, HouseBlend, PackagingOption, UpcomingFlavour, QuoteInquiry } from '../types';

export const COMPANY_INFO = {
  legalName: 'Vimora Foods Private Limited',
  shortName: 'Vimora Foods',
  tagline: 'Single-Origin Phool Makhana from Purnea, Bihar',
  phone: '9962570800',
  phoneDisplay: '+91 99625 70800',
  whatsappNumber: '919962570800',
  email: 'sales@vimorafoods.com',
  corporateOffice: {
    title: 'Corporate Office',
    address: 'Rose Garden Apartments, Arekere, Bannerghatta Road, Bangalore, Karnataka — 560076',
    city: 'Bangalore, Karnataka',
    role: 'Client Servicing, Sampling & Regional Logistics',
  },
  processingUnit: {
    title: 'Processing Unit',
    address: 'BIADA Industrial Area, Maranga, Purnea, Bihar — 854301',
    city: 'Purnea, Bihar',
    role: 'Direct Sourcing, Grading, Cleaning & Bulk Packaging',
  },
  moqKg: 100,
  biharOriginShare: '85%+',
};

import heroImg from '../assets/images/hero_makhana_luxury_1793843769300.jpg';
import facilityImg from '../assets/images/facility_purnea_processing_1793843770380.jpg';
import harvestImg from '../assets/images/harvest_bihar_wetland_1793843770135.jpg';
import packagingImg from '../assets/images/packaging_b2b_retail_1793843771513.jpg';

export const ASSET_IMAGES = {
  hero: heroImg,
  facility: facilityImg,
  harvest: harvestImg,
  packaging: packagingImg,
};

export const MAKHANA_GRADES: MakhanaGrade[] = [
  {
    id: 'grade-4',
    name: 'Grade 4',
    sizeDiameter: '14mm – 16mm',
    countRange: '1,600 – 1,800 pcs / kg',
    expansionRatio: 'Standard Crisp',
    idealFor: 'Food manufacturing, ground powders, premixes, and extruded snacks',
    availableVarieties: ['Normal', 'Hand-Picked'],
    recommendedBlend: 'Vimora Regular',
    features: [
      'Cost-efficient volume grade',
      'Pneumatically dedusted, moisture <9%',
      'Consistent texture for spice coating',
      'Available in 10kg & 25kg bulk cartons',
    ],
  },
  {
    id: 'grade-4-plus',
    name: 'Grade 4+',
    sizeDiameter: '16mm – 18mm',
    countRange: '1,400 – 1,550 pcs / kg',
    expansionRatio: 'Medium Plump',
    idealFor: 'Mid-tier retail packs, institutional catering, and trail mixes',
    availableVarieties: ['Normal', 'Hand-Picked'],
    recommendedBlend: 'Vimora Regular',
    features: [
      'Uniform shape and satisfying crunch',
      'Low residue and zero foreign matter',
      'Fast, even heat absorption',
      'Stable bulk density',
    ],
  },
  {
    id: 'grade-5',
    name: 'Grade 5',
    sizeDiameter: '18mm – 20mm',
    countRange: '1,150 – 1,350 pcs / kg',
    expansionRatio: 'High-Puff Large',
    idealFor: 'Branded retail snacking lines and direct roasting',
    availableVarieties: ['Normal', 'Hand-Picked'],
    recommendedBlend: 'Vimora Regular & Premium',
    features: [
      'The industry benchmark for modern retail',
      'Bright ivory appearance',
      'Subtle sweetness and light, airy pop',
      'High transit durability',
    ],
  },
  {
    id: 'grade-5-plus',
    name: 'Grade 5+',
    sizeDiameter: '20mm – 22mm',
    countRange: '950 – 1,100 pcs / kg',
    expansionRatio: 'Extra-Large Plump',
    idealFor: 'Gourmet roasted snacks, organic specialty stores, and corporate gifting',
    availableVarieties: ['Normal', 'Hand-Picked'],
    recommendedBlend: 'Vimora Premium',
    features: [
      'Generous mouthfeel with tender crunch',
      'Sieve-calibrated within ±0.5mm',
      'Minimal dark seed-coat adhesion',
      'Substantial on-shelf visual presence',
    ],
  },
  {
    id: 'grade-6-plus',
    name: 'Grade 6+ (Jumbo)',
    sizeDiameter: '22mm – 26mm+',
    countRange: '750 – 900 pcs / kg',
    expansionRatio: 'Maximum Jumbo Pop',
    idealFor: 'International export, luxury retail lines, and premium hampers',
    availableVarieties: ['Normal', 'Hand-Picked'],
    recommendedBlend: 'Vimora Premium',
    features: [
      'Top 5% harvest pick from Purnea wetlands',
      'Pristine, cloud-white puffed form',
      'Hand-picked option guarantees zero dark spots',
      'Moisture-sealed export specification',
    ],
  },
];

export const HOUSE_BLENDS: HouseBlend[] = [
  {
    id: 'vimora-regular',
    name: 'Vimora Regular',
    tagline: 'Reliable Everyday Commercial Excellence',
    composition: 'Calibrated blend of Grade 4+ and Grade 5 kernels',
    roastProfile: 'Available Raw Sun-Popped or Micro-Roasted',
    shelfLife: '12 Months (Moisture-barrier sealed)',
    targetMarket: 'Snack brands, bulk repackagers, catering, and wholesale distributors',
    highlights: [
      'Predictable bag-fill volume across production runs',
      'Moisture strictly below 9% for lasting crispness',
      'Direct pricing from our BIADA Purnea unit',
      'Ready stock with fast delivery in Bangalore',
    ],
  },
  {
    id: 'vimora-premium',
    name: 'Vimora Premium',
    tagline: 'The Gold Standard of Purnea Fox Nuts',
    composition: 'Selected Grade 5+ & Grade 6+ jumbo kernels',
    roastProfile: 'Available Raw or Lightly Crisp-Roasted',
    shelfLife: '12 Months (Nitrogen-barrier sealed)',
    targetMarket: 'Gourmet snacking brands, luxury supermarkets, and gift hampers',
    highlights: [
      'Hand-inspected for spotless white appearance',
      'Expansive 20mm–25mm+ diameter with pillowy crunch',
      'Heavy-duty virgin barrier packaging',
      'Direct farm origin certificate from Purnea',
    ],
  },
];

export const PACKAGING_OPTIONS: PackagingOption[] = [
  {
    type: 'wholesale',
    title: 'Bulk Wholesale Cartons',
    size: '10 KG & 25 KG Master Cartons',
    moq: 'MOQ: 100 KG',
    material: '5-ply heavy duty corrugated box with virgin polyethylene moisture barrier',
    description: 'Engineered for food processors, wholesale repackagers, and institutional kitchens. Protects fragile popped nuts against humidity and transit compression.',
    features: [
      'Heavy 5-ply export-grade corrugated cartons',
      'Heat-sealed food-grade inner moisture barrier',
      'Palletized for safe transit from Bihar to Bangalore',
      'Batch-coded with grade certification and net weight',
    ],
  },
  {
    type: 'retail',
    title: 'Retail Barrier Pouches',
    size: '100g & 250g Stand-Up Pouches',
    moq: 'Available for Retail Distributors & Private Label',
    material: 'Multi-layer matte barrier laminate with resealable zip-lock',
    description: 'Designed for supermarkets and gourmet stores. Nitrogen-flushed to preserve origin crispness and freshness for 12 months.',
    features: [
      'Nitrogen-flushed to maintain optimal crispness',
      'Tear-notch with airtight resealable zip-lock',
      'Transparent window cutout showcasing pristine white kernels',
      'Turnkey private-label contract packaging available',
    ],
  },
];

export const UPCOMING_FLAVOURS: UpcomingFlavour[] = [
  {
    id: 'flavour-1',
    name: 'Himalayan Pink Salt & Black Pepper',
    subtitle: 'Pure Mineral Seasoning',
    seasoningProfile: 'Coarse rock salt, crushed Tellicherry black pepper, and cold-pressed olive oil mist.',
    tag: 'Classic Savory',
    pairingNote: 'Clean, versatile, keto-friendly.',
  },
  {
    id: 'flavour-2',
    name: 'Tangy Peri Peri',
    subtitle: 'Smoked Citrus Spice',
    seasoningProfile: 'Bird’s eye chili, sun-dried tomato dust, roasted garlic, and kaffir lime zest.',
    tag: 'Bold & Tangy',
    pairingNote: 'Modern savory snacking favourite.',
  },
  {
    id: 'flavour-3',
    name: 'White Cheddar & Herbs',
    subtitle: 'Artisan Cheese Crunch',
    seasoningProfile: 'Aged white cheddar cheese powder, rosemary, thyme, and roasted butter.',
    tag: 'Gourmet Creamy',
    pairingNote: 'Rich, savory gourmet profile.',
  },
  {
    id: 'flavour-4',
    name: 'Desi Pudina & Chaat',
    subtitle: 'Heritage Indian Spices',
    seasoningProfile: 'Sun-dried garden mint flakes, black salt, amchur, and roasted cumin.',
    tag: 'Heritage Desi',
    pairingNote: 'Tangy, refreshing evening snack.',
  },
];

export const SUPPLY_CHAIN_STEPS = [
  {
    number: '01',
    location: 'Purnea Wetlands, Bihar',
    title: 'Aquatic Harvest',
    description: 'Gathered by experienced harvesting families from clean freshwater perennial ponds across North Bihar.',
  },
  {
    number: '02',
    location: 'BIADA Industrial Area, Purnea',
    title: 'Factory Grading',
    description: 'Pneumatically cleaned, moisture calibrated, and sieved into Grades 4 through 6+ at our dedicated unit.',
  },
  {
    number: '03',
    location: 'Origin Packaging Unit',
    title: 'Moisture-Lock Sealing',
    description: 'Hermetically packed in 5-ply cartons (MOQ 100 KG) or retail pouches to protect crispness during transit.',
  },
  {
    number: '04',
    location: 'Bannerghatta Road, Bangalore',
    title: 'South India Distribution',
    description: 'Dispatched through our Bangalore corporate office, offering ready buffer stock and fast sample fulfillment.',
  },
];

export function buildWhatsAppQuoteUrl(inquiry: Partial<QuoteInquiry>): string {
  const phone = COMPANY_INFO.whatsappNumber;
  const gradeLabel = MAKHANA_GRADES.find(g => g.id === inquiry.grade)?.name || inquiry.grade || 'Grade 5';
  const blendLabel = HOUSE_BLENDS.find(b => b.id === inquiry.blend)?.name || inquiry.blend || 'Vimora Regular';
  
  const text = `Hello Vimora Foods,
I would like to request a wholesale quote for Phool Makhana:

*Grade:* ${gradeLabel}
*Finish:* ${inquiry.variety || 'Hand-Picked'}
*Blend:* ${blendLabel}
*Packaging:* ${inquiry.packagingType === 'retail' ? 'Retail Pouches (100g / 250g)' : 'Bulk Master Cartons (MOQ 100 KG)'}
*Quantity:* ${inquiry.quantityKg ? `${inquiry.quantityKg} KG` : '100 KG'}
*Destination:* ${inquiry.deliveryCity || 'Bangalore, Karnataka'}
*Buyer / Company:* ${inquiry.buyerName || 'B2B Buyer'} ${inquiry.companyName ? `(${inquiry.companyName})` : ''}
*Phone:* ${inquiry.phone || 'Direct'}

Please share commercial pricing and dispatch timeline.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppDirectUrl(customMessage?: string): string {
  const phone = COMPANY_INFO.whatsappNumber;
  const defaultText = `Hello Vimora Foods, I am interested in procuring Phool Makhana (Fox Nuts) for our B2B requirements in Bangalore / South India. Please share your wholesale price list and grade specifications.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(customMessage || defaultText)}`;
}
