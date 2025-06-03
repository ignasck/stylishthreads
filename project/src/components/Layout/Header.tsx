import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // Handle scroll effect for transparent/solid header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              STYLISH<span className="text-accent-500">THREADS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-primary-900 hover:text-accent-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-primary-900 hover:text-accent-500 transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/categories"
              className="text-primary-900 hover:text-accent-500 transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/delivery"
              className="text-primary-900 hover:text-accent-500 transition-colors"
            >
              Delivery
            </Link>
            <Link
              to="/about"
              className="text-primary-900 hover:text-accent-500 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button
              className="text-primary-900 hover:text-accent-500 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <Link
              to={isAuthenticated ? "/account" : "/login"}
              className="text-primary-900 hover:text-accent-500 transition-colors"
              aria-label={isAuthenticated ? "Account" : "Login"}
            >
              <User size={20} />
            </Link>
            
            <Link
              to="/cart"
              className="text-primary-900 hover:text-accent-500 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-primary-900 hover:text-accent-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 z-50 bg-white transition-all duration-300 transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link
                to="/"
                className="text-2xl font-bold tracking-tighter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                STYLISH<span className="text-accent-500">THREADS</span>
              </Link>
              <button
                className="text-primary-900 hover:text-accent-500"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 text-xl">
              <Link
                to="/"
                className="text-primary-900 hover:text-accent-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-primary-900 hover:text-accent-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/categories"
                className="text-primary-900 hover:text-accent-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/delivery"
                className="text-primary-900 hover:text-accent-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Delivery
              </Link>
              <Link
                to="/about"
                className="text-primary-900 hover:text-accent-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              
              {isAuthenticated ? (
                <div className="border-t border-primary-100 pt-6">
                  <p className="text-sm text-primary-500 mb-2">Logged in as</p>
                  <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                  <Link
                    to="/account"
                    className="block mt-4 text-primary-900 hover:text-accent-500 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    My Account
                  </Link>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="border-t border-primary-100 pt-6 text-primary-900 hover:text-accent-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login / Register
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;