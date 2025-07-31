import React from 'react';
import { Heart, Leaf, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3d673d] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#b79028] to-[#d4af37] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">AE</span>
              </div>
              <span className="font-serif text-xl font-bold">Ascent Eco Resorts</span>
            </div>
            <p className="text-green-100 leading-relaxed">
              Where love meets nature, and celebrations bloom under the open sky.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4 text-[#b79028]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-green-100 hover:text-[#b79028] transition-colors">Home</a></li>
              <li><a href="#about" className="text-green-100 hover:text-[#b79028] transition-colors">About</a></li>
              <li><a href="#weddings" className="text-green-100 hover:text-[#b79028] transition-colors">Weddings</a></li>
              <li><a href="#experiences" className="text-green-100 hover:text-[#b79028] transition-colors">Experiences</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-lg mb-4 text-[#b79028]">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-green-100">9160506628</span>
              </div>
              <p className="text-green-100 text-sm">
                Dr. Guddanti Srinivas & Dr. Sridevi Guddanti
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 pt-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Heart className="w-5 h-5 text-[#b79028] animate-pulse" />
            <span className="text-green-100">Grand Opening Soon</span>
            <Leaf className="w-5 h-5 text-[#b79028]" />
          </div>
          <p className="text-green-200 text-sm">
            © 2025 Ascent Eco Resorts & Conventions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;