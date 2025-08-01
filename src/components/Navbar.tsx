import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
      className={`sticky top-1 z-50 w-full px-4 sm:px-6 lg:px-10 transition-all duration-300
        ${scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white/90"}
        rounded-full max-w-7xl mx-auto`}
    >
      <div className="flex items-center justify-between py-2 md:py-3">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 min-w-0">
          <img
            src="/logo.png"
            alt="Ascent Eco Resorts"
            className="w-7 sm:w-8 h-auto object-contain"
          />
          <span className="font-serif text-lg sm:text-xl font-bold text-[#3d673d] truncate">
            Ascent Eco Resorts
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#3d673d] hover:text-[#b79028] font-medium relative group transition-colors"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b79028] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button
            className="flex items-center gap-2 bg-gradient-to-r from-[#b79028] to-[#d4af37] text-white font-semibold px-4 py-2 rounded-full shadow hover:shadow-lg transform hover:scale-105 transition-all"
            aria-label="Book Now"
          >
            <Phone className="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#3d673d] hover:text-[#b79028] transition-colors"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? "max-h-[400px] opacity-100 mt-2" : "max-h-0 opacity-0"}
           shadow-md px-4`}
      >
        <div className="flex flex-col py-4 gap-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-[#3d673d] hover:text-[#b79028] border-b last:border-none font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button
            className="w-full mt-2 bg-gradient-to-r from-[#b79028] to-[#d4af37] text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-md transition"
            aria-label="Book Now"
          >
            <Phone className="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
