export interface ProgramItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  subPrograms: string[];
  ageGroups: string[];
  features: string[];
  benefits: string[];
  schedule: string;
  accentColor: string;
}

export interface BranchItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  location: string;
  addressPlaceholder: string;
  phone: string;
  whatsapp: string;
  email: string;
  openingHours: string;
  programsOffered: string[];
  amenities: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  program?: string;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'dance' | 'music' | 'gymnastics' | 'theatre' | 'events';
  title: string;
  caption: string;
}

export interface FreeTrialFormData {
  parentName: string;
  phoneNumber: string;
  childAge: string;
  interestedIn: string;
  preferredBranch: string;
  notes?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}
