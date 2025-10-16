/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import { TextReveal } from './TextReveal';
import Logo from './Logo';

function SecondPage() {
  const cards = [
    {
      id: 1,
      img: "https://ik.imagekit.io/lxvqyrkjo/9fe570acd8bd4ca352a3e330fdadf61fe7f1f563.png?updatedAt=1759770314206",
      title: "Learn how businesses are 3x ing their impact by implementing AI in their workflows",
      desc: "Read our latest insights, tips, and updates on AI automation and productivity.",
      link: "#"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1759675739458-6e5a4a60a117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      title: "Boost productivity with automation workflows designed for teams",
      desc: "Explore how top companies optimize their processes using smart automation.",
      link: "#"
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1701062876279-f17c71ec7f98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
      title: "Discover how AI transforms customer experience across industries",
      desc: "Learn how AI-driven insights are reshaping modern customer engagement.",
      link: "#"
    }
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!hoverRef.current) {
        setCurrent((prev) => (prev + 1) % cards.length);
      }
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [cards.length]);

  return (
    <div className="relative z-10 w-screen sm:h-[155vh]  min-h-[100vh] md:min-h-[120vh] lg:min-h-[100vh] xl:min-h-[95vh] bg-black overflow-x-hidden text-white flex items-center justify-center flex-col gap-8">
      <div className='relative z-20 px-2 w-full sm:px-6 md:p-10'>
        <TextReveal>
         Tvara builds private AI agents that automate workflows, boost productivity, and continuously learn to deliver smarter results.
        </TextReveal>
      </div>
      <div className="flex flex-col gap-4 justify-between items-center px-2 mt-8 w-full max-w-7xl md:flex-row sm:px-6 md:px-0">
        <h2 className="text-2xl md:text-3xl text-[#aeaeae] mb-4 md:p-2">Recognized by</h2>
        <div className="flex relative justify-end w-full md:w-[73vw] lg:w-[68vw] max-w-full">
          <div
            className="absolute top-0 left-0 z-10 w-20 h-full pointer-events-none sm:w-25 md:w-36"
            style={{
              background: "linear-gradient(to right, #000 80%, transparent 100%)"
            }}
          />
          <Logo />

          <div
            className="absolute top-0 right-0 z-10 w-20 h-full pointer-events-none sm:w-28 md:w-40"
            style={{
              background: "linear-gradient(to left, #000 50%, transparent 100%)"
            }}
          />
        </div>
      </div>


      
      <div
  className="relative w-[20rem] sm:w-[90rem] sm:h-[12rem] h-auto overflow-hidden rounded-2xl sm:mt-10 m-4 sm:m-0 md:w-[90vw]"
  onMouseEnter={() => (hoverRef.current = true)}
  onMouseLeave={() => (hoverRef.current = false)}
>
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {cards.map((card) => (
      <div
        key={card.id}
        className="relative min-w-full h-[13.62rem] rounded-2xl overflow-hidden transition-all duration-300 group"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 backdrop-blur-lg backdrop-saturate-150 transition-all duration-700 bg-white/10" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#505849]/100 to-[#111b20]/60 rounded-2xl transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"
            style={{ transitionProperty: "transform" }}
          />
        </div>
        <div className="flex relative z-10 flex-col gap-4 justify-center items-center p-4 w-full h-full md:p-0 md:flex-row md:justify-start">
          <img
            className="md:w-[21rem] w-24 sm:w-28 object-contain rounded-xl sm:rounded-none"
            src={card.img}
            alt={card.title}
          />
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-xs font-medium text-white sm:text-base sm:font-semibold md:text-xl md:font-bold lg:text-3xl">
              {card.title}
            </h2>
            <p className="text-[#d2d2d2] text-sm sm:text-base md:text-lg lg:text-2xl ">
              {card.desc}
            </p>
            <a
              href={card.link}
              className="text-[#AEAEAE] underline text-sm md:text-lg"
            >
              Explore our blog
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      <div className="flex absolute bottom-9 left-1/2 z-30 gap-2 -translate-x-1/2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`sm:w-3 sm:h-3 rounded-full transition-all ${
              current === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
      
    </div>
  );
}

export default SecondPage
