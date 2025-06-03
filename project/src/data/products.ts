import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    description: 'Our premium cotton t-shirt offers unparalleled comfort and style. Made from 100% organic cotton, this t-shirt features a relaxed fit and is perfect for everyday wear.',
    images: [
      'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg',
    ],
    category: 'T-Shirts',
    tags: ['cotton', 'premium', 'casual'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Navy', value: '#0C2340' },
    ],
    sizes: [
      { name: 'Small', value: 'S' },
      { name: 'Medium', value: 'M' },
      { name: 'Large', value: 'L' },
      { name: 'X-Large', value: 'XL' },
    ],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    price: 59.99,
    description: 'These premium slim fit jeans offer the perfect balance of style and comfort. The stretch denim fabric moves with you while maintaining its shape all day.',
    images: [
      'https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg',
      'https://images.pexels.com/photos/6311635/pexels-photo-6311635.jpeg',
    ],
    category: 'Jeans',
    tags: ['denim', 'slim fit', 'stretch'],
    colors: [
      { name: 'Blue', value: '#0042b1' },
      { name: 'Black', value: '#000000' },
      { name: 'Gray', value: '#808080' },
    ],
    sizes: [
      { name: '30', value: '30' },
      { name: '32', value: '32' },
      { name: '34', value: '34' },
      { name: '36', value: '36' },
    ],
    rating: 4.6,
    reviewCount: 86,
    inStock: true,
  },
  {
    id: '3',
    name: 'Wool Blend Overcoat',
    price: 149.99,
    originalPrice: 199.99,
    description: 'Stay warm and stylish with this premium wool blend overcoat. Features a tailored fit, interior pockets, and durable construction to last for seasons to come.',
    images: [
      'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
      'https://images.pexels.com/photos/6764229/pexels-photo-6764229.jpeg',
    ],
    category: 'Outerwear',
    tags: ['wool', 'winter', 'formal'],
    colors: [
      { name: 'Charcoal', value: '#36454F' },
      { name: 'Camel', value: '#C19A6B' },
    ],
    sizes: [
      { name: 'Small', value: 'S' },
      { name: 'Medium', value: 'M' },
      { name: 'Large', value: 'L' },
      { name: 'X-Large', value: 'XL' },
    ],
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    isSale: true,
  },
  {
    id: '4',
    name: 'Floral Print Dress',
    price: 79.99,
    description: 'This elegant floral print dress is perfect for spring and summer occasions. The lightweight fabric and flattering cut make it a versatile addition to your wardrobe.',
    images: [
      'https://images.pexels.com/photos/6765188/pexels-photo-6765188.jpeg',
      'https://images.pexels.com/photos/6765031/pexels-photo-6765031.jpeg',
    ],
    category: 'Dresses',
    tags: ['floral', 'summer', 'casual'],
    colors: [
      { name: 'Blue Floral', value: '#6495ED' },
      { name: 'Pink Floral', value: '#FFB6C1' },
    ],
    sizes: [
      { name: 'Small', value: 'S' },
      { name: 'Medium', value: 'M' },
      { name: 'Large', value: 'L' },
    ],
    rating: 4.7,
    reviewCount: 64,
    inStock: true,
    isNew: true,
  },
  {
    id: '5',
    name: 'Athletic Performance Hoodie',
    price: 64.99,
    description: 'Engineered for athletes, this performance hoodie features moisture-wicking fabric, breathable construction, and a comfortable fit for active lifestyles.',
    images: [
      'https://images.pexels.com/photos/5698837/pexels-photo-5698837.jpeg',
      'https://images.pexels.com/photos/6311653/pexels-photo-6311653.jpeg',
    ],
    category: 'Activewear',
    tags: ['athletic', 'performance', 'hoodie'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Gray', value: '#808080' },
      { name: 'Navy', value: '#0C2340' },
    ],
    sizes: [
      { name: 'Small', value: 'S' },
      { name: 'Medium', value: 'M' },
      { name: 'Large', value: 'L' },
      { name: 'X-Large', value: 'XL' },
    ],
    rating: 4.5,
    reviewCount: 78,
    inStock: true,
  },
  {
    id: '6',
    name: 'Leather Chelsea Boots',
    price: 129.99,
    description: 'These premium leather Chelsea boots combine timeless style with modern comfort. The elastic side panels and pull-on tab ensure easy wear, while the durable construction guarantees longevity.',
    images: [
      'https://images.pexels.com/photos/6046183/pexels-photo-6046183.jpeg',
      'https://images.pexels.com/photos/6046227/pexels-photo-6046227.jpeg',
    ],
    category: 'Footwear',
    tags: ['leather', 'boots', 'casual'],
    colors: [
      { name: 'Brown', value: '#964B00' },
      { name: 'Black', value: '#000000' },
    ],
    sizes: [
      { name: 'UK 7', value: 'UK 7' },
      { name: 'UK 8', value: 'UK 8' },
      { name: 'UK 9', value: 'UK 9' },
      { name: 'UK 10', value: 'UK 10' },
      { name: 'UK 11', value: 'UK 11' },
    ],
    rating: 4.8,
    reviewCount: 56,
    inStock: true,
    featured: true,
  },
  {
    id: '7',
    name: 'Nike Air Max Sneakers',
    price: 159.99,
    description: 'Classic Nike Air Max sneakers featuring innovative cushioning technology and sleek design. Perfect for both athletic performance and street style.',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg',
    ],
    category: 'Shoes',
    tags: ['nike', 'sneakers', 'athletic'],
    colors: [
      { name: 'White/Red', value: '#FFFFFF' },
      { name: 'Black/Gold', value: '#000000' },
    ],
    sizes: [
      { name: 'US 7', value: 'US 7' },
      { name: 'US 8', value: 'US 8' },
      { name: 'US 9', value: 'US 9' },
      { name: 'US 10', value: 'US 10' },
      { name: 'US 11', value: 'US 11' },
    ],
    rating: 4.9,
    reviewCount: 215,
    inStock: true,
    isNew: true,
  },
  {
    id: '8',
    name: 'Adidas Track Jacket',
    price: 89.99,
    description: 'Classic Adidas track jacket with iconic three stripes. Made from recycled materials, this jacket combines style with sustainability.',
    images: [
      'https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg',
      'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg',
    ],
    category: 'Activewear',
    tags: ['adidas', 'jacket', 'sports'],
    colors: [
      { name: 'Navy/White', value: '#0C2340' },
      { name: 'Black/White', value: '#000000' },
    ],
    sizes: [
      { name: 'Small', value: 'S' },
      { name: 'Medium', value: 'M' },
      { name: 'Large', value: 'L' },
      { name: 'X-Large', value: 'XL' },
    ],
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: '9',
    name: 'The North Face Puffer Jacket',
    price: 199.99,
    description: 'Stay warm in style with this premium puffer jacket from The North Face. Features advanced insulation technology and water-resistant exterior.',
    images: [
      'https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg',
      'https://images.pexels.com/photos/6770028/pexels-photo-6770028.jpeg',
    ],
    category: 'Outerwear',
    tags: ['the north face', 'winter', 'outdoor'],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Red', value: '#FF0000' },
    ],
    sizes: [
      { name: 'Small', value: 'S' },
      { name: 'Medium', value: 'M' },
      { name: 'Large', value: 'L' },
      { name: 'X-Large', value: 'XL' },
    ],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    featured: true,
  },
  {
    id: '10',
    name: 'Vans Classic Slip-On',
    price: 64.99,
    description: 'Iconic Vans slip-on sneakers with classic waffle outsole. Perfect for casual wear and skateboarding.',
    images: [
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg',
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg',
    ],
    category: 'Shoes',
    tags: ['vans', 'sneakers', 'casual'],
    colors: [
      { name: 'Black/White', value: '#000000' },
      { name: 'Navy', value: '#0C2340' },
    ],
    sizes: [
      { name: 'US 7', value: 'US 7' },
      { name: 'US 8', value: 'US 8' },
      { name: 'US 9', value: 'US 9' },
      { name: 'US 10', value: 'US 10' },
      { name: 'US 11', value: 'US 11' },
    ],
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
  },
  {
    id: '11',
    name: 'Kids Dinosaur Print T-Shirt',
    price: 24.99,
    description: 'Fun and comfortable t-shirt for kids featuring playful dinosaur prints. Made from soft, breathable cotton.',
    images: [
      'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg',
      'https://images.pexels.com/photos/5905669/pexels-photo-5905669.jpeg',
    ],
    category: 'Kids',
    tags: ['children', 't-shirt', 'casual'],
    colors: [
      { name: 'Blue', value: '#0042b1' },
      { name: 'Green', value: '#228B22' },
    ],
    sizes: [
      { name: '4T', value: '4T' },
      { name: '5T', value: '5T' },
      { name: '6T', value: '6T' },
      { name: '7T', value: '7T' },
    ],
    rating: 4.9,
    reviewCount: 45,
    inStock: true,
    isNew: true,
  },
  {
    id: '12',
    name: 'Kids Sport Sneakers',
    price: 49.99,
    description: 'Comfortable and durable sports sneakers for active kids. Features lightweight design and secure velcro straps.',
    images: [
      'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg',
      'https://images.pexels.com/photos/5905669/pexels-photo-5905669.jpeg',
    ],
    category: 'Kids',
    tags: ['children', 'shoes', 'sports'],
    colors: [
      { name: 'Blue/Orange', value: '#0042b1' },
      { name: 'Pink/Purple', value: '#FF69B4' },
    ],
    sizes: [
      { name: 'US 1', value: 'US 1' },
      { name: 'US 2', value: 'US 2' },
      { name: 'US 3', value: 'US 3' },
      { name: 'US 4', value: 'US 4' },
    ],
    rating: 4.7,
    reviewCount: 68,
    inStock: true,
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit = 4): Product[] => {
  return products
    .filter(p => p.id !== product.id && (p.category === product.category || p.tags.some(tag => product.tags.includes(tag))))
    .slice(0, limit);
};

export const getFeaturedProducts = (limit = 3): Product[] => {
  return products.filter(product => product.featured).slice(0, limit);
};

export const getNewArrivals = (limit = 4): Product[] => {
  return products.filter(product => product.isNew).slice(0, limit);
};

export const getSaleProducts = (limit = 4): Product[] => {
  return products.filter(product => product.isSale).slice(0, limit);
};