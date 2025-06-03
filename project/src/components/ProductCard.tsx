import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingBag, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card group"
    >
      <div className="relative overflow-hidden">
        {/* Product image */}
        <div className="relative pb-[125%] overflow-hidden bg-primary-100">
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="badge bg-primary-800 text-white px-3 py-1"
            >
              New
            </motion.span>
          )}
          {product.isSale && (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="badge bg-accent-500 text-white px-3 py-1"
            >
              Sale
            </motion.span>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to={`/product/${product.id}`}
                className="bg-white rounded-full p-2 shadow-md hover:bg-accent-500 hover:text-white transition-colors"
                aria-label="Quick view"
              >
                <Eye size={20} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to={`/product/${product.id}`}
                className="bg-white rounded-full p-2 shadow-md hover:bg-accent-500 hover:text-white transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingBag size={20} />
              </Link>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
              className={`rounded-full p-2 shadow-md transition-colors ${
                isWishlisted 
                  ? 'bg-accent-500 text-white' 
                  : 'bg-white text-primary-900 hover:bg-accent-500 hover:text-white'
              }`}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart size={20} className={isWishlisted ? 'fill-current' : ''} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4">
        <motion.h3 
          className="font-medium text-lg mb-1 hover:text-accent-500 transition-colors"
          whileHover={{ x: 5 }}
        >
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </motion.h3>
        
        <div className="text-sm text-primary-500 mb-2">{product.category}</div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <span className="font-medium">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-primary-400 line-through text-sm">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="flex items-center">
            <motion.div 
              className="flex text-accent-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? "text-accent-500" : "text-primary-300"}>
                  ★
                </span>
              ))}
            </motion.div>
            <span className="text-xs text-primary-500 ml-1">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;