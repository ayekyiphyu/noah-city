//for navigation
export interface SearchFilters {
  category: string;
  priceRange: string;
  sortBy: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  size: string[];
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}


//for footer
export interface QuickLink {
  id: string;
  name: string;
  href: string;
  order: number;
  isActive: boolean;
}

export interface Category {
  id: string;
  name: string;
  href: string;
  order: number;
  isActive: boolean;
}

export interface ContactInfo {
  id: string;
  type: 'ADDRESS' | 'PHONE' | 'EMAIL';
  label: string;
  value: string;
  isActive: boolean;
}


export interface SocialLink {
 id: string;
  platform: 'FACEBOOK' | 'INSTAGRAM' | 'TWITTER' | 'LINKEDIN';
  url: string;
  isActive: boolean;
}

export interface FooterConfig  {
  id: string;
  brandName: string;
  brandDescription: string;
  copyrightText: string;
}


export interface FooterData {
  config: FooterConfig;
  quickLinks: QuickLink[];
  categories: Category[];
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
}