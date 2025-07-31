import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitHero = () => {
  const videoRef = useRef(null);

useEffect(() => {
  const video = videoRef.current;
  const videoSrc = video?.currentSrc || video?.src;

  const enableTouchPlayback = () => {
    video.play();
    video.pause();
  };
  document.documentElement.addEventListener('touchstart', enableTouchPlayback, { once: true });

  const onVideoLoaded = () => {
    gsap.to(video, {
      currentTime: video.duration || 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#video-pin-wrapper',
        start: 'top top',
        end: '+=1500',
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
        onEnter: () => video.play(),
        onLeave: () => video.pause(),
        onEnterBack: () => video.play(),
        onLeaveBack: () => video.pause(),
        
      },
    });
  };

  video.addEventListener('loadedmetadata', onVideoLoaded);

  setTimeout(() => {
    if ('fetch' in window) {
      fetch(videoSrc)
        .then((res) => res.blob())
        .then((blob) => {
          const blobURL = URL.createObjectURL(blob);
          const currentTime = video.currentTime;
          video.src = blobURL;
          video.currentTime = currentTime + 0.01;
        });
    }
  }, 1000);

  return () => {
    video.removeEventListener('loadedmetadata', onVideoLoaded);
    document.documentElement.removeEventListener('touchstart', enableTouchPlayback);
  };
}, []);


  return (
    <div className="bg-white">
      {/* Pinned Video Section */}
      <section id="video-pin-wrapper" className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          src="/intro-video.mp4"
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover"
          aria-label="Scroll-controlled background video"
        />
        <div className="absolute inset-0 bg-white opacity-20 pointer-events-none" />
      </section>

    </div>
  );
};

export default SplitHero;
