import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 blob-bg opacity-50"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-primary-800 mb-4">
              Discover Balance, Healing & Spiritual Growth
            </h1>
            <p className="text-neutral-600 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              As a Heyoka Empath healer, I guide souls through emotional healing, spiritual awakening, and energetic balance with intuitive empathic abilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services" className="btn-primary w-full sm:w-auto">
                Explore Services
              </Link>
              <Link to="/contact" className="btn-outline w-full sm:w-auto">
                Book a Session
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Spiritual healing"
              className="rounded-lg shadow-xl w-full h-auto max-w-md lg:max-w-full mx-auto"
            />
            <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-primary-700 font-heading font-medium">
                "The most powerful healing begins with the recognition that we are all connected energetically."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;