/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import { TextReveal } from './TextReveal';
// import LogoLoop from './Logo';
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
  }, []);

  return (
    <div className="relative z-10 w-screen h-[130vh] bg-black overflow-x-hidden text-white flex items-center justify-center flex-col">
      <div className='relative z-20'>
        <TextReveal>
         Tvara builds private AI agents that automate workflows, boost productivity, and continuously learn to deliver smarter results.
        </TextReveal>
      </div>
      <div className="flex justify-between items-center mt-8 w-full max-w-7xl">
        <h2 className="text-3xl text-[#aeaeae] ">Recognized by</h2>
        <div className="flex relative justify-end w-[68vw]">
          {/* Fade left */}
          <div
            className="absolute top-0 left-0 z-10 w-40 h-full pointer-events-none"
            style={{
              background: "linear-gradient(to right, #000 80%, transparent 100%)"
            }}
          />
          <Logo />

          <div
            className="absolute top-0 right-0 z-10 w-40 h-full pointer-events-none"
            style={{
              background: "linear-gradient(to left, #000 50%, transparent 100%)"
            }}
          />
        </div>
      </div>
      <div
        className="relative w-[90rem] h-[12rem] overflow-hidden rounded-2xl mt-10"
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
              <div className="flex relative z-10 flex-row items-center w-full h-full">
                <img
                  className="w-[21rem] z-20 relative"
                  src={card.img}
                  alt=""
                />
                <div className="flex z-20 flex-col gap-3 ml-10 text-white">
                  <h2 className="text-4xl">{card.title}</h2>
                  <p className="text-xl text-[#d2d2d2]">{card.desc}</p>
                  <a
                    href={card.link}
                    className="text-lg underline text-[#AEAEAE] "
                  >
                    Explore our blog
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex absolute bottom-10 left-1/2 z-30 gap-2 -translate-x-1/2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
      
    </div>
  );
}

export default SecondPage
