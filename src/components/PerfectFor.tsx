import React, { useEffect, useRef, useState } from "react";
import { Heart, Camera, TreePine, Sparkles } from "lucide-react";

const PerfectFor = () => {
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    { icon: Heart, title: "Destination Weddings", color: "#b79028" },
    { icon: TreePine, title: "Nature-Themed Events", color: "#3d673d" },
    {
      icon: Camera,
      title: "Pre-Wedding Shoots & Receptions",
      color: "#b79028",
    },
    {
      icon: Sparkles,
      title: "Romantic Getaways & Honeymoons",
      color: "#3d673d",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3d673d] mb-8">
              Perfect For
            </h2>

            <div className="space-y-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                    style={{
                      backgroundColor: `${item.color}20`,
                      border: `2px solid ${item.color}30`,
                    }}
                  >
                    <item.icon
                      className="w-6 h-6"
                      style={{ color: item.color }}
                    />
                  </div>
                  <span className="text-lg font-medium text-[#3d673d]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative bg-gradient-to-br from-[#f5f0e6] to-[#d3f2e5] rounded-3xl h-96 overflow-hidden flex items-center justify-center">
              <video
                src="/intro-video.mp4" // Replace with your video filename placed inside `public/`
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bedroom Videos Section */}
      <div
        className={`mt-20 space-y-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-2xl font-serif font-bold text-center text-[#3d673d]">
          Discover Our Bedrooms
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bedroom Video 1 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
            <video
              src="/room1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h4 className="text-white text-lg font-semibold">
                Serene Bedroom View
              </h4>
              <p className="text-sm text-white/80">
                Wake up to nature and elegance.
              </p>
            </div>
          </div>

          {/* Bedroom Video 2 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
            <video
              src="/room2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h4 className="text-white text-lg font-semibold">
                Luxurious Stay Experience
              </h4>
              <p className="text-sm text-white/80">
                Relax in comfort and style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectFor;
