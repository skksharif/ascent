import React, { useRef } from 'react';

const SplitHero = () => {
  const videoRef = useRef(null);

  return (
    <div className="bg-white p-[50px] px-4 relative overflow-hidden">
      {/* Autoplay Video Section */}
      <section
        id="video-pin-wrapper"
        className="relative w-full h-screen overflow-hidden"
      >
        <video
          ref={videoRef}
          src="/intro-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          aria-label="Autoplay looping background video"
        />
        <div className="absolute inset-0 bg-white opacity-20 pointer-events-none" />
      </section>
    </div>
  );
};

export default SplitHero;
