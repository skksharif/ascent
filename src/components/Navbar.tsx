import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl mx-auto px-4 py-2 bg-white/70 backdrop-blur-lg rounded-full shadow-md transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Ascent Eco Resorts"
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 text-sm font-medium hover:text-blue-500 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-gray-700 hover:text-blue-500 transition-colors duration-200"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
        } bg-white/90 rounded-lg shadow-md px-4 py-3 absolute left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] mt-1`}
      >
        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-2 text-gray-700 text-sm font-medium hover:text-blue-500 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;