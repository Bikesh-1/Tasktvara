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
    <div className="fixed top-0 left-0 w-screen h-[100vh] bg-gradient-to-r from-[#152125] to-[#111b20] z-0">
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
        className="flex absolute top-1/2 left-1/2 flex-col gap-4 justify-center items-center bg-transparent transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        ref={textRef}
      >
        <h1 className="text-5xl font-semibold text-center text-white pointer-events-none">
          Replace Manual Ops with Private, <br />
          Self-Improving AI Agents
        </h1>
        <p className="text-[#8D8D8D] mt-4 text-center pointer-events-none">
          Discover leads, personalize outreach, and close deal <br /> on autopilot powered by AI. on autopilot powered
        </p>
        <button
          className='text-white bg-[#060606] rounded-full border mt-4 border-white font-bold px-5 py-2 pointer-events-auto'
          style={{ borderWidth: '1px' }}
        >
          Get Started Free
        </button>
        <p className='text-[#b3b3b3] text-[0.75rem]'>No payment needed</p>
      </div>
    </div>
  );
}

export default TopBg;