import React from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold">
                V
              </div>
              <span className="text-xl font-bold">VIEWORA</span>
            </div>
            <p className="text-gray-400 text-sm">
              Design-first eyewear that helps you look sharper, feel confident, and stand out.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#shipping" className="hover:text-white transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-white transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-start space-x-2">
                <MailIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@viewora.com" className="hover:text-white transition">
                  info@viewora.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <PhoneIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <LocationMarkerIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Vision Street, NYC 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2026 VIEWORA. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Viewora – Let's create something iconic together…….</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
