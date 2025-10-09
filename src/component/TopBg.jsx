import React, { useEffect, useRef } from 'react';
import Particles from '../ReactbitsComponent/Particles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TopBg() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { scale: 1 },
        {
          scale: 0.6,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top center',
            end: 'bottom top+=100',
            scrub: true,
          },
          transformOrigin: 'center center',
          ease: 'none',
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-[100vh] min-h-[100svh] bg-gradient-to-r from-[#152125] to-[#111b20] z-0">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={500}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={70}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={true}
        cameraDistance={40}
      />
      <div
        className="
          flex absolute top-1/2 left-1/2 flex-col gap-4 justify-center items-center bg-transparent
          transform -translate-x-1/2 -translate-y-1/2 pointer-events-none
          w-[90vw] max-w-4xl px-2 sm:px-4 md:px-0
        "
        ref={textRef}
      >
        <h1 className="sm:text-5xl text-xl font-semibold text-center text-white pointer-events-none">
          Replace Manual Ops with Private, <br />
          Self-Improving AI Agents
        </h1>
        <p
          className="
            text-[#8D8D8D]
            mt-4
            text-center
            pointer-events-none
            text-[1rem] sm:text-lg md:text-xl
            leading-[1.65] sm:leading-7
          "
        >
          Discover leads, personalize outreach, and close deal
          <span className="hidden xs:inline"><br /></span>
          on autopilot powered by AI. on autopilot powered
        </p>
        <button
          className='
            text-white bg-[#060606] rounded-full border mt-4 border-white font-bold
            px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 pointer-events-auto
            text-base sm:text-lg
          '
          style={{ borderWidth: '1px' }}
        >
          Get Started Free
        </button>
        <p className='text-[#b3b3b3] text-xs sm:text-sm mt-1'>No payment needed</p>
      </div>
    </div>
  );
}

export default TopBg;