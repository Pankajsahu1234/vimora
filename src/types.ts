export type MakhanaGradeId = 'grade-4' | 'grade-4-plus' | 'grade-5' | 'grade-5-plus' | 'grade-6-plus';

export type MakhanaVariety = 'Normal' | 'Hand-Picked';

export type HouseBlendId = 'vimora-regular' | 'vimora-premium';

export interface MakhanaGrade {
  id: MakhanaGradeId;
  name: string;
  sizeDiameter: string;
  countRange: string;
  expansionRatio: string;
  idealFor: string;
  features: string[];
  recommendedBlend: string;
  availableVarieties: MakhanaVariety[];
}

export interface HouseBlend {
  id: HouseBlendId;
  name: string;
  tagline: string;
  composition: string;
  roastProfile: string;
  shelfLife: string;
  targetMarket: string;
  highlights: string[];
}

export interface PackagingOption {
  type: 'retail' | 'wholesale';
  title: string;
  size: string;
  moq: string;
  material: string;
  description: string;
  features: string[];
}

export interface UpcomingFlavour {
  id: string;
  name: string;
  subtitle: string;
  seasoningProfile: string;
  tag: string;
  pairingNote: string;
}

export interface QuoteInquiry {
  buyerName: string;
  companyName: string;
  phone: string;
  email: string;
  grade: MakhanaGradeId;
  variety: MakhanaVariety;
  blend: HouseBlendId;
  packagingType: 'wholesale' | 'retail';
  quantityKg: number;
  deliveryCity: string;
  notes: string;
}
