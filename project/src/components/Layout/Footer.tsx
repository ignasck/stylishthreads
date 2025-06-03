import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-bold tracking-tighter mb-4">
              STYLISH<span className="text-accent-500">THREADS</span>
            </h3>
            <p className="text-primary-300 mb-6">
              Premium clothing for the modern individual. Quality fabric, sustainable production, timeless design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-500 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-primary-300 hover:text-white transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/categories/new-arrivals" className="text-primary-300 hover:text-white transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link to="/categories/best-sellers" className="text-primary-300 hover:text-white transition-colors">Best Sellers</Link>
              </li>
              <li>
                <Link to="/categories/sale" className="text-primary-300 hover:text-white transition-colors">Sale</Link>
              </li>
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Help</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/customer-service" className="text-primary-300 hover:text-white transition-colors">Customer Service</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-primary-300 hover:text-white transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/sizing" className="text-primary-300 hover:text-white transition-colors">Sizing Guide</Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-300 hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4">Join Our Newsletter</h4>
            <p className="text-primary-300 mb-4">Stay updated with the latest products, exclusive offers, and style tips.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-primary-800 text-white border border-primary-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent-500 flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 transition-colors px-4 py-2 rounded-r-md"
                aria-label="Subscribe"
              >
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} StylishThreads. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-primary-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-primary-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;