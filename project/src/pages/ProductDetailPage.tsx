import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Check, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import SectionHeading from '../components/SectionHeading';
import { useCart } from '../context/CartContext';
import { Color, Size } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = product ? getRelatedProducts(product) : [];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-primary-600 mb-8">
          The product you are looking for doesn't exist or has been removed.
        </p>
        <button 
          onClick={() => navigate('/shop')}
          className="btn btn-primary"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      // Show error notification
      alert("Please select color and size");
      return;
    }

    addToCart(product, quantity, selectedColor, selectedSize);
    
    // Redirect to cart
    navigate('/cart');
  };

  return (
    <div className="animate-fade-in">
      {/* Breadcrumbs */}
      <div className="bg-primary-50 py-4">
        <div className="container-custom">
          <div className="flex items-center text-sm text-primary-600">
            <button 
              onClick={() => navigate('/')}
              className="hover:text-accent-500 transition-colors"
            >
              Home
            </button>
            <ChevronRight size={16} className="mx-2" />
            <button 
              onClick={() => navigate('/shop')}
              className="hover:text-accent-500 transition-colors"
            >
              Shop
            </button>
            <ChevronRight size={16} className="mx-2" />
            <button 
              onClick={() => navigate(`/categories/${product.category.toLowerCase()}`)}
              className="hover:text-accent-500 transition-colors"
            >
              {product.category}
            </button>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-primary-800 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden bg-primary-100 rounded-lg mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-auto object-contain aspect-square"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded overflow-hidden flex-shrink-0 border-2 ${
                        selectedImage === index
                          ? 'border-accent-500'
                          : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2">
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {product.isNew && (
                  <span className="badge bg-primary-800 text-white px-3 py-1">New</span>
                )}
                {product.isSale && (
                  <span className="badge bg-accent-500 text-white px-3 py-1">Sale</span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "text-accent-500" : "text-primary-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-primary-600">({product.reviewCount} reviews)</span>
              </div>
              
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-primary-400 line-through text-lg">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              <p className="text-primary-700 mb-8">{product.description}</p>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Color: {selectedColor?.name || 'Select a color'}</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedColor?.value === color.value
                          ? 'ring-2 ring-offset-2 ring-accent-500'
                          : ''
                      }`}
                      style={{ backgroundColor: color.value }}
                      aria-label={`Select ${color.name}`}
                    >
                      {selectedColor?.value === color.value && (
                        <Check size={16} className={color.value === '#FFFFFF' ? 'text-black' : 'text-white'} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="font-medium mb-2">Size: {selectedSize?.name || 'Select a size'}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded border ${
                        selectedSize?.value === size.value
                          ? 'border-accent-500 bg-accent-50 text-accent-700'
                          : 'border-primary-300 hover:border-primary-800'
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border border-primary-300 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-primary-800 hover:text-accent-500"
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-primary-800 hover:text-accent-500"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-grow"
                  disabled={!product.inStock}
                >
                  <ShoppingBag size={20} className="mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                
                <button
                  className="btn btn-outline p-3"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} />
                </button>
              </div>
              
              {/* Product Info Sections */}
              <div className="border-t border-primary-200 pt-6">
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Product Details</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-1">
                    <li>Premium quality materials</li>
                    <li>Ethically manufactured</li>
                    <li>Designed for comfort and style</li>
                    <li>Machine washable</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Shipping & Returns</h3>
                  <p className="text-primary-700">
                    Free shipping on all orders over $50. Easy returns within 30 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-primary-50">
        <div className="container-custom">
          <SectionHeading
            title="You Might Also Like"
            subtitle="Discover related products that complement your style"
            centered
          />
          
          <ProductGrid products={relatedProducts} />
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;