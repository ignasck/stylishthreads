import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // Calculate shipping - free for orders over $100
  const shippingCost = totalPrice >= 100 ? 0 : 10;
  const orderTotal = totalPrice + shippingCost;

  return (
    <div className="animate-fade-in py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800 mb-4">
              <ShoppingBag size={32} />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-primary-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/shop" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-primary-50 font-medium">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Subtotal</div>
                </div>

                {items.map((item) => (
                  <div key={item.id} className="border-b border-primary-100 last:border-b-0">
                    <div className="p-4 md:grid md:grid-cols-12 md:gap-4 md:items-center flex flex-wrap">
                      {/* Product info */}
                      <div className="col-span-6 flex gap-4 items-center mb-4 md:mb-0">
                        <div className="w-20 h-20 bg-primary-100 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            <Link to={`/product/${item.productId}`} className="hover:text-accent-500 transition-colors">
                              {item.name}
                            </Link>
                          </h3>
                          <div className="text-sm text-primary-600 mb-1">
                            <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color.value }}></span>
                            {item.color.name} / {item.size.name}
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-primary-500 hover:text-error-500 transition-colors text-sm flex items-center gap-1 md:hidden"
                          >
                            <Trash2 size={14} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-2 text-center md:block hidden">
                        ${item.price.toFixed(2)}
                      </div>

                      {/* Quantity */}
                      <div className="col-span-2 flex items-center justify-center">
                        <div className="flex items-center border border-primary-300 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-2 py-1 text-primary-800 hover:text-accent-500 disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-primary-800 hover:text-accent-500"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Mobile price + subtotal */}
                      <div className="md:hidden flex justify-between items-center w-full mt-2">
                        <div>
                          <span className="text-sm text-primary-600 mr-2">Price:</span>
                          ${item.price.toFixed(2)}
                        </div>
                        <div>
                          <span className="text-sm text-primary-600 mr-2">Subtotal:</span>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="col-span-2 text-right hidden md:block font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>

                      {/* Remove button - desktop */}
                      <div className="hidden md:flex md:col-span-12 md:justify-end mt-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-primary-500 hover:text-error-500 transition-colors text-sm flex items-center gap-1"
                        >
                          <Trash2 size={14} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <Link to="/shop" className="btn btn-outline">
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-primary-600">Subtotal ({totalItems} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-600">Shipping</span>
                    <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  {shippingCost > 0 && (
                    <div className="text-sm text-primary-500">
                      Add ${(100 - totalPrice).toFixed(2)} more to qualify for free shipping
                    </div>
                  )}
                  <div className="border-t border-primary-100 pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => navigate('/checkout')}
                  className="btn btn-accent w-full flex items-center justify-center"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;