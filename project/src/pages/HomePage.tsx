import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import SectionHeading from '../components/SectionHeading';
import { getFeaturedProducts, getNewArrivals, getSaleProducts } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const saleProducts = getSaleProducts();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-900/40">
          <img
            src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-xl animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Elevate Your Everyday Style
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover premium clothing that combines comfort, quality, and contemporary design for the modern individual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="btn btn-accent"
              >
                Shop Collection
              </Link>
              <Link
                to="/categories/new-arrivals"
                className="btn btn-outline border-white text-white hover:bg-white/10"
              >
                New Arrivals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="Shop by Category"
            subtitle="Explore our curated collections for every style and occasion"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="relative overflow-hidden rounded-lg group h-80">
              <img
                src="https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Men's Collection"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Men's Collection</h3>
                <Link
                  to="/categories/mens"
                  className="text-white flex items-center hover:text-accent-300 transition-colors"
                >
                  <span>Shop Now</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="relative overflow-hidden rounded-lg group h-80">
              <img
                src="https://images.pexels.com/photos/6765188/pexels-photo-6765188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Women's Collection"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Women's Collection</h3>
                <Link
                  to="/categories/womens"
                  className="text-white flex items-center hover:text-accent-300 transition-colors"
                >
                  <span>Shop Now</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Category 3 */}
            <div className="relative overflow-hidden rounded-lg group h-80">
              <img
                src="https://images.pexels.com/photos/6046183/pexels-photo-6046183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Accessories"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Accessories</h3>
                <Link
                  to="/categories/accessories"
                  className="text-white flex items-center hover:text-accent-300 transition-colors"
                >
                  <span>Shop Now</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Featured Products"
            subtitle="Explore our most popular selections"
            centered
          />
          
          <ProductGrid products={featuredProducts} columns={3} />
          
          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="btn btn-primary"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Summer Sale Now On</h2>
              <p className="text-primary-200 mb-6">
                Up to 50% off on selected items. Limited time offer. Don't miss out!
              </p>
              <Link
                to="/categories/sale"
                className="btn btn-accent"
              >
                Shop Sale
              </Link>
            </div>
            <div className="relative w-full md:w-1/3 h-64 overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/6311653/pexels-photo-6311653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Summer sale promotion"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-accent-500 text-white text-xl font-bold px-4 py-2 rounded-md">
                50% OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="New Arrivals"
            subtitle="The latest additions to our collection"
            centered
          />
          
          <ProductGrid products={newArrivals} />
          
          <div className="mt-12 text-center">
            <Link
              to="/categories/new-arrivals"
              className="btn btn-primary"
            >
              View All New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Commitment"
            subtitle="What sets us apart from the rest"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Premium Quality</h3>
              <p className="text-primary-600">
                We source the finest materials and work with skilled artisans to create products that are built to last.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Ethical Production</h3>
              <p className="text-primary-600">
                Our manufacturing processes prioritize fair labor practices, environmental responsibility, and ethical sourcing.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Satisfaction Guaranteed</h3>
              <p className="text-primary-600">
                We stand behind our products with a 30-day return policy and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-primary-600 mb-8">
              Subscribe to our newsletter for exclusive offers, style tips, and early access to new collections.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="input flex-grow"
                required
              />
              <button
                type="submit"
                className="btn btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;