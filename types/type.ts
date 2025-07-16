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
