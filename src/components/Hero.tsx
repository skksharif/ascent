import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f0e6 0%, #faf7f0 100%)',
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src="/intro-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Pattern Over Video */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#b79028] rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-[#3d673d] rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-[#b79028] rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-[#3d673d] rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-0">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Logo */}
          <div
            className={`mb-3 transform transition-all duration-1000 ${
              animate ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
          >
            <div className="relative inline-block">
              <img
                className="w-32 flex items-center justify-center"
                src="/logo.png"
                alt="Ascent Eco Resorts Logo"
              />
              <div className="absolute -top-2 -right-2 animate-pulse">
                <Sparkles className="w-8 h-8 text-[#b79028]" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#3d673d] mb-1 transform transition-all duration-1000 delay-300 ${
              animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Ascent Eco Resorts
            <span className="block text-2xl md:text-3xl lg:text-4xl text-[#b79028] font-normal mt-2">
              & Conventions
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-lg md:text-xl text-[#3d673d] mb-8 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${
              animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Where love meets nature, and celebrations bloom under the open sky.
          </p>

          {/* CTA Button */}
          <div
            className={`transform transition-all duration-1000 delay-700 ${
              animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <button className="group bg-gradient-to-r from-[#b79028] to-[#d4af37] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto">
              <span>Booking Now Open</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Decorative Pulses */}
          <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#b79028] rounded-full animate-pulse z-30"></div>
          <div className="absolute top-1/3 right-10 w-2 h-2 bg-[#3d673d] rounded-full animate-pulse delay-300 z-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#b79028] rounded-full animate-pulse delay-500 z-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
