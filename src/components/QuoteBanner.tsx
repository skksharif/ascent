import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const QuoteBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref} 
      className="py-20 px-4 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #b79028 0%, #d4af37 50%, #b79028 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Quote Icon */}
        <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <div className="inline-block p-4 bg-white/20 rounded-full backdrop-blur-sm">
            <Quote className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Quote Text */}
        <blockquote className={`font-serif text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          "Your dream wedding begins where nature meets the sky…"
        </blockquote>

        {/* Decorative Line */}
        <div className={`mt-12 flex justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}>
          <div className="w-24 h-0.5 bg-white"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default QuoteBanner;