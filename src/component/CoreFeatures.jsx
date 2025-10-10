import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import MoveableCard from './MoveableCard';

const FEATURES = [
  {
    title: "Sales Agent Automation",
    description:
      "Automate prospecting, engagement, and follow-ups with an AI sales agent that never sleeps. Eliminate manual work and maximize your team's closing power."
  },
  {
    title: "Persona Matcher",
    description:
      "Instantly match outreach messages to ideal customer personas with advanced AI analysis across industries. Connect smarter, boost response rates, and unlock new opportunities."
  },
  {
    title: "Effortless Integration",
    description:
      "Plug into your workflow—seamless integrations with CRM, email, chat, and more. Gain actionable insights on every lead, right inside your existing tools."
  },
  {
    title: "Continuous Improvement",
    description:
      "Your agent learns over time: every interaction improves results. Drive higher conversions and shrink sales cycles, automatically."
  }
];

function CoreFeatures() {
  const [current, setCurrent] = useState(0);
  const descRef = useRef();
  const titleRef = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % FEATURES.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className='relative z-20 p-4 w-screen h-auto bg-black md:h-[150vh] lg:h-[130vh]'>
      <div>
        <h1 className='p-10 text-xl text-white sm:text-4xl'>Our Core Features</h1>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center md:flex-row md:gap-0">
        <div
          className='flex relative flex-col justify-start items-center p-6 w-80 h-72 text-white rounded-2xl shadow-xl sm:w-96 sm:h-80'
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/lxvqyrkjo/41474b18664e4742ed9a20e13e71413d58fadd70.png?updatedAt=1759954458682')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backdropFilter: 'blur(1px)',
          }}
        >
          <div className="flex flex-col items-center w-full">
            <p
              ref={titleRef}
              className="p-2 mb-1 text-xl font-bold tracking-wide text-white md:text-2xl"
              style={{
                letterSpacing: "0.01em",
                minHeight: "2.3em",
                transition: "opacity 0.35s"
              }}
            >
              {FEATURES[current].title}
            </p>
            <p
              ref={descRef}
              className="p-2 text-sm text-center md:text-lg"
              style={{
                minHeight: 82,
                transition: "opacity 0.35s"
              }}
            >
              {FEATURES[current].description}
            </p>
            <div className="flex gap-3 justify-center items-center mt-6">
              {FEATURES.map((ftr, idx) => (
                <span
                  key={ftr.title}
                  className={
                    idx === current
                      ? "block w-10 h-3 rounded-full bg-white transition-all duration-300"
                      : "block w-3 h-3 rounded-full bg-[#B3B3B3] opacity-70 transition-all duration-300"
                  }
                  style={{
                    transition: "all 0.32s cubic-bezier(0.45, 0, 0.55, 1)"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='mt-8 w-full md:w-2/3 md:mt-0'>
          <MoveableCard />
        </div>
      </div>
      <div className="font-medium text-[#AEAEAE] text-2xl underline text-end p-6 xs:p-12 sm:p-16 md:p-24 w-full">
        <a href="#" className="block w-full text-lg text-end xs:text-xl sm:text-2xl">
          Explore all Products
        </a>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center px-4 w-full xs:gap-10 sm:gap-12">
        <h1 className="font-bold text-[#AEAEAE] text-lg xs:text-xl sm:text-2xl text-center">
          See Sales Agent in action
        </h1>
        <button
          className="text-white px-4 xs:px-6 py-2 xs:py-3 font-bold text-base xs:text-lg shadow-lg transition-all duration-300 tet-2xl w-full xs:w-[70vw] sm:w-[40vw] max-w-xs sm:max-w-md rounded-2xl"
          style={{
            background: "linear-gradient(to right, #1D4F8F, #031B3B)",
            border: "none"
          }}
        >
          Book a Demo
        </button>
      </div>
    </div>
  );
}

export default CoreFeatures;