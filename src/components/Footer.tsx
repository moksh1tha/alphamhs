import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/ALPHA MHS LOGO.jpg" 
                alt="Alpha MHS Logo" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">ALPHA MHS</h3>
                <p className="text-orange-400 text-sm">Material Handling Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in material handling solutions with 24 years of industrial experience.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-400 mt-1 flex-shrink-0" size={16} />
                <div className="text-sm text-gray-300">
                  <p>No.8, 3rd Street, Siva Sakthi Nagar,</p>
                  <p>Korattur, Chennai - 600 080,</p>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-400 flex-shrink-0" size={16} />
                <div className="text-sm text-gray-300">
                  <p>+91 7010203064</p>
                  <p>+91 7904469270</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-400 flex-shrink-0" size={16} />
                <div className="text-sm text-gray-300">
                  <p>sales@alphamhs.in</p>
                  <p>alphamhs25@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About Us', 'Products', 'Contact Us'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-sm text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="text-orange-400 flex-shrink-0" size={16} />
                <div className="text-sm text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-orange-400 mb-2">Director</h5>
              <p className="text-sm text-gray-300">L. Karthick</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Alpha MHS. All rights reserved. | Partner in Material Handling Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;