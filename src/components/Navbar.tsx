import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-3 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300
        ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90"}
        rounded-full px-2 sm:px-4 py-2 sm:py-3 w-[95%] max-w-[95%] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl overflow-hidden`}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between relative w-full">
        {/* Logo & Title */}
        <div className="flex items-center space-x-2 min-w-0">
          <div className="w-[28px] sm:w-[30px] flex-shrink-0">
            <img
              src="/logo.png"
              alt="Ascent Eco Resorts Logo"
              className="w-full h-auto"
            />
          </div>
          <span className="font-serif text-base sm:text-xl font-bold text-[#3d673d] truncate">
            Ascent Eco Resorts
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
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
          <button
            className="bg-gradient-to-r from-[#b79028] to-[#d4af37] text-white px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            aria-label="Book Now"
          >
            <Phone className="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#3d673d] hover:text-[#b79028] transition-colors"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute left-0 top-full mt-3 w-full transition-all duration-500 ease-in-out overflow-hidden z-40
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
            bg-white rounded-2xl shadow-xl px-4 sm:px-6`}
        >
          <div className="flex flex-col py-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-3 text-[#3d673d] hover:text-[#b79028] transition-colors font-medium border-b last:border-none"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              className="w-full mt-4 bg-gradient-to-r from-[#b79028] to-[#d4af37] text-white py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
              aria-label="Book Now"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
