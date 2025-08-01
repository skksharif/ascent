import React, { useEffect, useRef, useState } from 'react';
import { Leaf } from 'lucide-react';

const Introduction = () => {
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
      <div className="max-w-4xl mx-auto text-center">

        <h2 className={`font-serif text-3xl md:text-4xl font-bold text-[#3d673d] mb-8 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Grand Opening Soon
        </h2>

        <div className={`bg-white rounded-2xl shadow-2xl p-8 md:p-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="relative">
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-[#b79028]"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-[#b79028]"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-[#b79028]"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-[#b79028]"></div>

            <p className="text-lg md:text-xl text-[#3d673d] leading-relaxed font-light">
              We are thrilled to announce the grand opening of our upcoming eco-luxury resort – a place where love meets nature, and celebrations bloom under the open sky. Nestled in the heart of untouched beauty, our resort is not just a getaway — it's a{' '}
              <span className="font-semibold text-[#b79028]">wedding destination like no other.</span>
            </p>
          </div>
        </div>

        {/* Additional decorative elements */}

      </div>
    </section>
  );
};

export default Introduction;