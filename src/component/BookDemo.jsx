import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BookDemo() {
  const videoRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const btnRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let videoPlayed = false;
    let videoTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        if (videoRef.current && !videoPlayed) {
          videoRef.current.play().catch(() => {});
          videoPlayed = true;
        }
      }
    });

    gsap.fromTo(
      h1Ref.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      pRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      btnRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      videoTrigger && videoTrigger.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex overflow-hidden relative justify-center items-center w-full min-h-screen"
      style={{
        minHeight: "100vh",
      }}
    >
      <video
        ref={videoRef}
        className="object-cover absolute inset-0 z-0 w-full h-full"
        src="https://www.pexels.com/download/video/7670836/"
        autoPlay
        loop
        muted
        playsInline
        // Responsive fallback poster for mobile
        poster="https://images.pexels.com/videos/7670836/free-video-7670836.jpg"
      />
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="flex relative z-20 flex-col justify-center items-center px-4 w-full sm:px-8">
        <h1
          ref={h1Ref}
          className="
            mb-2
            text-2xl
            font-bold
            text-center
            text-white
            opacity-0
            xs:text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            leading-tight
            max-w-[90vw]
            sm:max-w-2xl
          "
        >
          See the agents in action!
        </h1>
        <p
          ref={pRef}
          className="
            mb-6
            text-base
            font-normal
            text-center
            text-white
            opacity-0
            xs:text-lg
            sm:text-xl
            md:text-2xl
            lg:text-3xl
            max-w-[90vw]
            sm:max-w-2xl
          "
        >
          Book a Demo and See
          <br className="hidden md:block" />
          the agents in action!
        </p>
        <button
          ref={btnRef}
          className="px-12 py-4 text-xl font-bold text-white bg-black rounded-2xl shadow-lg opacity-0 transition-colors duration-200 md:text-2xl hover:bg-gray-900 focus:outline-none"
        >
          Book a Demo
        </button>
      </div>
    </div>
  );
}

export default BookDemo;