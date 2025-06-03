import React from 'react';
import { Truck, Package, Clock, MapPin, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeliveryPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fast & Reliable Delivery
            </h1>
            <p className="text-xl text-primary-200">
              We ensure your purchases reach you safely and on time, with multiple delivery options to suit your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Delivery */}
            <div className="bg-primary-50 rounded-lg p-8">
              <div className="mb-4">
                <Truck className="w-12 h-12 text-primary-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Standard Delivery</h3>
              <p className="text-primary-600 mb-4">
                3-5 business days
                <br />
                Free for orders over $50
              </p>
              <p className="font-bold">$4.99</p>
            </div>

            {/* Express Delivery */}
            <div className="bg-primary-50 rounded-lg p-8">
              <div className="mb-4">
                <Clock className="w-12 h-12 text-primary-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Express Delivery</h3>
              <p className="text-primary-600 mb-4">
                1-2 business days
                <br />
                Available for most locations
              </p>
              <p className="font-bold">$9.99</p>
            </div>

            {/* Same Day Delivery */}
            <div className="bg-primary-50 rounded-lg p-8">
              <div className="mb-4">
                <Package className="w-12 h-12 text-primary-900" />
              </div>
              <h3 className="text-xl font-bold mb-2">Same Day Delivery</h3>
              <p className="text-primary-600 mb-4">
                Order by 2 PM local time
                <br />
                Available in select cities
              </p>
              <p className="font-bold">$14.99</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Track Your Order</h2>
              <p className="text-primary-600 mb-6">
                Stay updated with real-time tracking. Know exactly where your package is and when it will arrive.
              </p>
              <form className="max-w-md">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter tracking number"
                    className="input flex-grow"
                  />
                  <button type="submit" className="btn btn-primary whitespace-nowrap">
                    Track Order
                  </button>
                </div>
              </form>
            </div>
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/7363064/pexels-photo-7363064.jpeg"
                alt="Package tracking"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Delivery Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900 mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Nationwide Coverage</h3>
              <p className="text-primary-600">
                We deliver to all major cities and remote locations across the country.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Handling</h3>
              <p className="text-primary-600">
                Your packages are handled with care and fully insured during transit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900 mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Timing</h3>
              <p className="text-primary-600">
                Choose delivery times that suit your schedule.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900 mb-4">
                <Package size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
              <p className="text-primary-600">
                Get notifications at every step of the delivery process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How do I track my delivery?</h3>
              <p className="text-primary-600">
                You'll receive a tracking number via email once your order ships. Use this number on our tracking page to monitor your delivery status.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What if I'm not home during delivery?</h3>
              <p className="text-primary-600">
                Our courier will attempt delivery up to 3 times. You can also choose to have your package delivered to a secure pickup point.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Do you deliver internationally?</h3>
              <p className="text-primary-600">
                Yes, we offer international shipping to select countries. Shipping costs and delivery times vary by location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Place an Order?</h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Browse our collection and experience our premium delivery service for yourself.
          </p>
          <Link to="/shop" className="btn bg-white text-primary-900 hover:bg-primary-100 inline-flex items-center">
            Shop Now
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DeliveryPage;