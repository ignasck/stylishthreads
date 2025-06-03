import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import SectionHeading from '../components/SectionHeading';
import { products } from '../data/products';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Extract unique categories from products
  const categories = ['Men', 'Women', ...Array.from(new Set(products.map(product => product.category)))];

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <section className="bg-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Collection</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Browse our curated collection of premium clothing and accessories, designed with quality and style in mind.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Shop by Collection"
            subtitle="Explore our curated collections"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Men's Collection */}
            <Link
              to="/categories/men"
              className="group relative overflow-hidden rounded-lg aspect-[3/4]"
            >
              <img
                src="https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg"
                alt="Men's Collection"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Men's Collection</h3>
              </div>
            </Link>

            {/* Women's Collection */}
            <Link
              to="/categories/women"
              className="group relative overflow-hidden rounded-lg aspect-[3/4]"
            >
              <img
                src="https://images.pexels.com/photos/6765188/pexels-photo-6765188.jpeg"
                alt="Women's Collection"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Women's Collection</h3>
              </div>
            </Link>

            {/* Accessories */}
            <Link
              to="/categories/accessories"
              className="group relative overflow-hidden rounded-lg aspect-[3/4]"
            >
              <img
                src="https://images.pexels.com/photos/6046183/pexels-photo-6046183.jpeg"
                alt="Accessories"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Accessories</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar/Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="font-medium text-lg mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      className={`w-full text-left py-1 ${
                        selectedCategory === null
                          ? 'text-accent-500 font-medium'
                          : 'text-primary-700 hover:text-accent-500'
                      }`}
                      onClick={() => setSelectedCategory(null)}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        className={`w-full text-left py-1 ${
                          selectedCategory === category
                            ? 'text-accent-500 font-medium'
                            : 'text-primary-700 hover:text-accent-500'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-medium text-lg mb-4">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Sort and Filter Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-primary-100">
              <button
                className="lg:hidden flex items-center gap-2 btn btn-outline py-2 px-4"
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              >
                <Filter size={18} />
                <span>Filters</span>
                {isMobileFiltersOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              <div className="flex items-center gap-2">
                <span className="text-primary-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="border border-primary-300 rounded-md py-2 px-3 text-primary-800 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

              <p className="text-primary-600">
                Showing {sortedProducts.length} products
              </p>
            </div>

            {/* Mobile Filters */}
            {isMobileFiltersOpen && (
              <div className="lg:hidden bg-white rounded-lg shadow-sm p-6 mb-6 animate-slide-down">
                <div className="mb-6">
                  <h3 className="font-medium text-lg mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`px-3 py-1 rounded-full border ${
                        selectedCategory === null
                          ? 'bg-primary-800 text-white border-primary-800'
                          : 'bg-white text-primary-800 border-primary-300 hover:border-primary-800'
                      }`}
                      onClick={() => setSelectedCategory(null)}
                    >
                      All
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`px-3 py-1 rounded-full border ${
                          selectedCategory === category
                            ? 'bg-primary-800 text-white border-primary-800'
                            : 'bg-white text-primary-800 border-primary-300 hover:border-primary-800'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-4">Price Range</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            )}

            {/* Products Display */}
            {sortedProducts.length > 0 ? (
              <ProductGrid products={sortedProducts} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-primary-600 mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setPriceRange([0, 200]);
                  }}
                  className="btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;