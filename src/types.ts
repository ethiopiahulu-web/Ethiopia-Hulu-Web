export type Language = 'en' | 'am';

export interface LocalizedText {
  en: string;
  am: string;
}

export type SoftwareName = 'SPSS' | 'STATA' | 'R & Python' | 'NVivo' | 'SmartPLS & Amos' | 'Kobo & Epi Info';

export interface TrainingCourse {
  id: string;
  software: SoftwareName;
  title: LocalizedText;
  subtitle: LocalizedText;
  level: LocalizedText;
  duration: LocalizedText;
  hours: number;
  priceETB: number;
  popular?: boolean;
  icon3D: 'spss' | 'stata' | 'python' | 'nvivo' | 'sem' | 'data';
  features: {
    en: string[];
    am: string[];
  };
  syllabus: {
    en: string[];
    am: string[];
  };
}

export type ServiceCategory = 'thesis' | 'data-analysis' | 'proposal' | 'questionnaire' | 'publication';

export interface ResearchService {
  id: string;
  category: ServiceCategory;
  title: LocalizedText;
  shortDesc: LocalizedText;
  deliverables: {
    en: string[];
    am: string[];
  };
  toolsUsed: string[];
  turnaroundTime: LocalizedText;
  estimatedPriceETB: number;
  icon3D: 'document' | 'chart' | 'analytics' | 'questionnaire' | 'graduation';
}

export interface PaymentAccount {
  id: 'telebirr' | 'cbe' | 'abyssinia' | 'awash' | 'hibret';
  name: string;
  nameAm: string;
  accountNumber: string;
  accountHolder: string;
  type: 'mobile_money' | 'commercial_bank';
  brandColor: string;
  badgeBg: string;
  accentColor: string;
  instructions: LocalizedText;
}

export interface BookingSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  itemType: 'course' | 'service';
  itemId: string;
  itemTitle: string;
  selectedBank: string;
  transactionRef: string;
  amountETB: number;
  additionalNotes: string;
  createdAt: string;
}
