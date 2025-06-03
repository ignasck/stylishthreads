import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

enum CheckoutStep {
  DETAILS = 'details',
  SHIPPING = 'shipping',
  PAYMENT = 'payment',
  CONFIRMATION = 'confirmation',
}

interface FormState {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

const CheckoutPage: React.FC = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(CheckoutStep.DETAILS);
  const [orderComplete, setOrderComplete] = useState(false);
  const [form, setForm] = useState<FormState>({
    email: user?.email || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  // Calculate shipping - free for orders over $100
  const shippingCost = totalPrice >= 100 ? 0 : 10;
  const orderTotal = totalPrice + shippingCost;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === CheckoutStep.DETAILS) {
      setCurrentStep(CheckoutStep.SHIPPING);
    } else if (currentStep === CheckoutStep.SHIPPING) {
      setCurrentStep(CheckoutStep.PAYMENT);
    } else if (currentStep === CheckoutStep.PAYMENT) {
      completeOrder();
    }
  };

  const completeOrder = () => {
    // In a real app, this would submit to an API
    setTimeout(() => {
      setOrderComplete(true);
      setCurrentStep(CheckoutStep.CONFIRMATION);
      clearCart();
    }, 1500);
  };

  // Redirect to home if cart is empty and order isn't complete
  if (items.length === 0 && !orderComplete) {
    navigate('/');
    return null;
  }

  return (
    <div className="animate-fade-in py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        {/* Checkout Progress */}
        {!orderComplete && (
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              <div className={`flex flex-col items-center ${currentStep === CheckoutStep.DETAILS ? 'text-accent-500' : 'text-primary-800'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep === CheckoutStep.DETAILS ? 'bg-accent-500 text-white' : 'bg-primary-100'}`}>
                  1
                </div>
                <span className="text-sm">Details</span>
              </div>
              
              <div className="w-full border-t border-primary-300 mx-2" />
              
              <div className={`flex flex-col items-center ${currentStep === CheckoutStep.SHIPPING ? 'text-accent-500' : 'text-primary-800'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep === CheckoutStep.SHIPPING ? 'bg-accent-500 text-white' : 'bg-primary-100'}`}>
                  2
                </div>
                <span className="text-sm">Shipping</span>
              </div>
              
              <div className="w-full border-t border-primary-300 mx-2" />
              
              <div className={`flex flex-col items-center ${currentStep === CheckoutStep.PAYMENT ? 'text-accent-500' : 'text-primary-800'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep === CheckoutStep.PAYMENT ? 'bg-accent-500 text-white' : 'bg-primary-100'}`}>
                  3
                </div>
                <span className="text-sm">Payment</span>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Form or Confirmation */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="w-full lg:w-2/3">
            {currentStep === CheckoutStep.CONFIRMATION ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-50 text-success-500 mb-4">
                  <CheckCircle size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
                <p className="text-primary-600 mb-6">
                  Thank you for your order. We've received your payment and will process your items shortly.
                  A confirmation email has been sent to {form.email}.
                </p>
                <button
                  onClick={() => navigate('/')}
                  className="btn btn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
                {/* Customer Details */}
                {currentStep === CheckoutStep.DETAILS && (
                  <>
                    <h2 className="text-xl font-bold mb-4">Customer Details</h2>
                    
                    {!isAuthenticated && (
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-primary-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-primary-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Shipping Details */}
                {currentStep === CheckoutStep.SHIPPING && (
                  <>
                    <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                    
                    <div className="mb-4">
                      <label htmlFor="address" className="block text-sm font-medium text-primary-700 mb-1">
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-primary-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-primary-700 mb-1">
                          State/Province
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={form.state}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label htmlFor="zip" className="block text-sm font-medium text-primary-700 mb-1">
                          ZIP/Postal Code
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          value={form.zip}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-primary-700 mb-1">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          className="input"
                          required
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Payment Details */}
                {currentStep === CheckoutStep.PAYMENT && (
                  <>
                    <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-2 p-4 bg-primary-50 rounded-lg mb-4">
                        <CreditCard size={20} className="text-primary-700" />
                        <span className="text-primary-700">
                          All transactions are secure and encrypted.
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="cardName" className="block text-sm font-medium text-primary-700 mb-1">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={form.cardName}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-primary-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          className="input"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cardExpiry" className="block text-sm font-medium text-primary-700 mb-1">
                            Expiration Date
                          </label>
                          <input
                            type="text"
                            id="cardExpiry"
                            name="cardExpiry"
                            value={form.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className="input"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="cardCvc" className="block text-sm font-medium text-primary-700 mb-1">
                            CVC
                          </label>
                          <input
                            type="text"
                            id="cardCvc"
                            name="cardCvc"
                            value={form.cardCvc}
                            onChange={handleChange}
                            placeholder="123"
                            className="input"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Form Navigation */}
                <div className="flex justify-between mt-8">
                  {currentStep !== CheckoutStep.DETAILS && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(
                        currentStep === CheckoutStep.SHIPPING
                          ? CheckoutStep.DETAILS
                          : CheckoutStep.SHIPPING
                      )}
                      className="btn btn-outline"
                    >
                      Back
                    </button>
                  )}
                  
                  <button
                    type="submit"
                    className="btn btn-primary ml-auto flex items-center"
                  >
                    {currentStep === CheckoutStep.PAYMENT ? (
                      'Place Order'
                    ) : (
                      <>
                        <span>Continue</span>
                        <ChevronRight size={16} className="ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary */}
          {currentStep !== CheckoutStep.CONFIRMATION && (
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between py-2 border-b border-primary-100 last:border-b-0">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded overflow-hidden bg-primary-100 mr-3 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-primary-600">
                            {item.color.name} / {item.size.name} x {item.quantity}
                          </div>
                        </div>
                      </div>
                      <div className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-primary-600">Subtotal ({totalItems} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-600">Shipping</span>
                    <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-primary-100 pt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;