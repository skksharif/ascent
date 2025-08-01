import React from "react";
import "./Gallery.css"; // Import custom scrollbar styles

const bedroomImages = [
  "/beds.jpg",
  "/beds1.jpg",
  "/beds2.jpg",
  "/beds3.jpg",
  "/beds4.jpg",
  "/bedstv.jpg",
  "/bedstv3.jpg",
  "/bedstv4.jpg",
  "/bedtvs.jpg",
];

const diningImages = [
  "/dining.jpg",
  "/dining1.jpg",
  "/dining2.jpg",
  "/dining3.jpg",
  "/dining4.jpg",
  "/dining5.jpg",
  "/dining6.jpg",
  "/dining7.jpg",
  "/dining8.jpg",
  "/dining9.jpg",
];

const RollingGallery = ({
  title,
  subtitle,
  images,
}: {
  title: string;
  subtitle: string;
  images: string[];
}) => {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#3d673d] text-center">
        {title}
      </h2>
      <p className="mt-2 text-center text-gray-600">{subtitle}</p>

      <div className="relative mt-10">
        {/* Scrollable container */}
        <div className="overflow-x-auto gallery-scroll px-4">
          <div className="flex space-x-6 snap-x snap-mandatory scroll-smooth">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[300px] h-[200px] snap-center rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={src}
                  alt={`${title} ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left inner shadow */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>

        {/* Right inner shadow */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="py-20 bg-white" id="gallery">
      <RollingGallery
        title="Bedroom Gallery"
        subtitle="Comfortable & serene sleeping spaces"
        images={bedroomImages}
      />
      <RollingGallery
        title="Dining Hall Gallery"
        subtitle="Elegant spaces for gathering and dining"
        images={diningImages}
      />
    </section>
  );
};

export default Gallery;
