import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

interface CategoryCard {
  title: string;
  image: string;
  path: string;
}

const categories: CategoryCard[] = [
  {
    title: 'Men',
    image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
    path: '/categories/men'
  },
  {
    title: 'Women',
    image: 'https://images.pexels.com/photos/6765188/pexels-photo-6765188.jpeg',
    path: '/categories/women'
  },
  {
    title: 'Kids',
    image: 'https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg',
    path: '/categories/kids'
  },
  {
    title: 'Shoes',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    path: '/categories/shoes'
  }
];

const brands = [
  {
    title: 'Nike',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    path: '/brands/nike'
  },
  {
    title: 'Adidas',
    image: 'https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg',
    path: '/brands/adidas'
  },
  {
    title: 'The North Face',
    image: 'https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg',
    path: '/brands/the-north-face'
  },
  {
    title: 'Vans',
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg',
    path: '/brands/vans'
  }
];

const CategoriesPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Categories Header */}
      <section className="bg-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Categories</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you're looking for
          </p>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Shop by Category"
            subtitle="Find the perfect style for everyone"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.path}
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="Popular Brands"
            subtitle="Shop your favorite brands"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.title}
                to={brand.path}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={brand.image}
                  alt={brand.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{brand.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;