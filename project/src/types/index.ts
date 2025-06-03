export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: string;
  tags: string[];
  colors: Color[];
  sizes: Size[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

export interface Color {
  name: string;
  value: string;
}

export interface Size {
  name: string;
  value: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  color: Color;
  size: Size;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  userName: string;
  date: string;
}