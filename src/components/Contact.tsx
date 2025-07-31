import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Leaf } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-[#f5f0e6]">
      <div className="max-w-4xl mx-auto">
        <h2 className={`font-serif text-3xl md:text-4xl font-bold text-[#3d673d] text-center mb-16 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Contact 
        </h2>

        <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>


          {/* Golden Border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-[#b79028] opacity-20"></div>
          <div className="absolute inset-4 rounded-2xl border border-[#b79028] opacity-30"></div>

          <div className="relative z-10 text-center">
            {/* Names */}
            <div className="mb-8">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#3d673d] mb-2">
                Dr. Guddanti Srinivas
              </h3>
              <p className="text-lg text-[#b79028] font-medium">
                & Dr. Sridevi Guddanti
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#b79028] to-[#d4af37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <a 
                  href="tel:9160506628" 
                  className="text-xl font-semibold text-[#3d673d] hover:text-[#b79028] transition-colors"
                >
                  9160506628
                </a>
              </div>

              {/* Additional Contact Options */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="flex items-center justify-center space-x-3 p-4 bg-[#f5f0e6] rounded-xl">
                  <Mail className="w-5 h-5 text-[#b79028]" />
                  <span className="text-[#3d673d] font-medium">info@ascentecoresorts.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 bg-[#f5f0e6] rounded-xl">
                  <MapPin className="w-5 h-5 text-[#3d673d]" />
                  <span className="text-[#3d673d] font-medium">Location Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 pt-8 border-t border-[#b79028]/20">
              <p className="text-lg text-[#3d673d] mb-6">
                Ready to create your perfect celebration?
              </p>
              <button className="bg-gradient-to-r from-[#b79028] to-[#d4af37] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get in Touch Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;