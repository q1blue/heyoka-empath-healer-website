import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Heart, Mail, Phone, MapPin, Feather } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <Feather className="w-8 h-8 text-primary-400 mr-2" />
              <span className="font-heading font-semibold text-xl">
                <span className="text-primary-300">Heyoka</span> <span className="text-neutral-200">Empath</span>
              </span>
            </Link>
            <p className="text-neutral-400 mb-4">
              Guiding you on your journey to spiritual wellness and emotional healing through empathic connection and holistic practices.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-heading font-semibold mb-4 text-neutral-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-heading font-semibold mb-4 text-neutral-200">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#empathic-healing" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300">Empathic Healing</Link>
              </li>
              <li>
                <Link to="/services#energy-clearing" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300">Energy Clearing</Link>
              </li>
              <li>
                <Link to="/services#spiritual-guidance" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300">Spiritual Guidance</Link>
              </li>
              <li>
                <Link to="/services#chakra-balancing" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300">Chakra Balancing</Link>
              </li>
              <li>
                <Link to="/services#meditation-practices" className="text-neutral-400 hover:text-primary-300 transition-colors duration-300">Meditation Practices</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-heading font-semibold mb-4 text-neutral-200">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-primary-400 mt-1 mr-3" />
                <span className="text-neutral-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary-400 mt-1 mr-3" />
                <span className="text-neutral-400">contact@heyokahealer.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-400 mt-1 mr-3" />
                <span className="text-neutral-400">123 Healing Path<br />Serenity Valley, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Heyoka Empath Healer. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm flex items-center">
              Made with <Heart size={14} className="text-accent-400 mx-1" /> for spiritual wellness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;