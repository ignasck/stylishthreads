import React from 'react';
import { Users, ShoppingBag, Truck, HeartHandshake } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/70"></div>
        </div>
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Story
            </h1>
            <p className="text-xl text-white/90">
              Dedicated to bringing you the finest in fashion and style since 2025
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-primary-600 leading-relaxed">
              At Stylish Threads, we believe that great style should be accessible to everyone. 
              Our mission is to provide high-quality, sustainable fashion that empowers individuals 
              to express themselves confidently through their personal style.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-primary-600">
                Your satisfaction is our top priority. We're committed to providing 
                exceptional service and support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900 mb-4">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Products</h3>
              <p className="text-primary-600">
                We carefully curate our collection to ensure every item meets our 
                high standards of quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900 mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-primary-600">
                Quick and reliable shipping to get your favorite items to you as 
                soon as possible.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-900 mb-4">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-primary-600">
                We're committed to ethical practices and reducing our environmental 
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="John Smith"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">John Smith</h3>
              <p className="text-primary-600">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-primary-600">Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                  alt="Michael Brown"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Brown</h3>
              <p className="text-primary-600">Head of Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Our team is 
            always here to help.
          </p>
          <button className="btn bg-white text-primary-900 hover:bg-primary-100">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;