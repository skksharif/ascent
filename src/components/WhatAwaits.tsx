import React, { useEffect, useRef, useState } from 'react';
import { Mountain, Home, Utensils, Calendar, Shield } from 'lucide-react';

const WhatAwaits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Mountain,
      title: 'Breathtaking Natural Landscapes',
      description: 'Immerse yourself in pristine beauty with panoramic views of rolling hills and lush greenery.',
    },
    {
      icon: Home,
      title: 'Eco-Luxury Accommodations',
      description: 'Experience comfort redefined with sustainable luxury that harmonizes with nature.',
    },
    {
      icon: Utensils,
      title: 'Organic Dining Experiences',
      description: 'Savor farm-to-table cuisine crafted from locally sourced, organic ingredients.',
    },
    {
      icon: Calendar,
      title: 'Tailor-Made Event Planning',
      description: 'Let our expert team create bespoke celebrations that reflect your unique love story.',
    },
    {
      icon: Shield,
      title: 'Peace, Privacy & Serenity',
      description: 'Find tranquility in our secluded haven, away from the chaos of everyday life.',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-[#f5f0e6] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className={`font-serif text-3xl md:text-4xl font-bold text-[#3d673d] text-center mb-16 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          What Awaits You
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#b79028] to-[#d4af37] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#3d673d] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl font-bold text-[#3d673d] mb-4 group-hover:text-[#b79028] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative bottom border */}
              <div className="mt-6 h-1 bg-gradient-to-r from-[#b79028] to-transparent rounded group-hover:from-[#3d673d] transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAwaits;