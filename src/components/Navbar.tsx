import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Weddings', href: '#weddings' },
    { name: 'Experiences', href: '#experiences' },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90'
    } rounded-full px-6 py-3 mx-4 w-[calc(100%-2rem)] max-w-6xl`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-[30px] flex items-center justify-center">
            <img className="text-white font-bold text-lg" src='/logo.png'/>
          </div>
          <span className="font-serif text-xl font-bold text-[#3d673d] hidden sm:block">
            Ascent Eco Resorts
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#3d673d] hover:text-[#b79028] transition-colors duration-300 font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b79028] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-gradient-to-r from-[#b79028] to-[#d4af37] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#3d673d] hover:text-[#b79028] transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl py-4 px-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 text-[#3d673d] hover:text-[#b79028] transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="w-full mt-4 bg-gradient-to-r from-[#b79028] to-[#d4af37] text-white py-3 rounded-full font-semibold flex items-center justify-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;