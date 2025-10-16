import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function IntigeationLogo() {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 0.3 },
        {
          scale: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%",
            end: "top 40%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="relative z-20 w-screen bg-white h-[120vh] min-h-[80vh] sm:min-h-[100vh] md:min-h-[130vh] lg:min-h-[140vh] xl:min-h-[120vh] flex flex-col items-center justify-center gap-10">
      <div className="flex justify-start items-start w-full">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-[#AEAEAE] font-bold p-4 sm:p-8 leading-tight text-left">
          Tvara integrates seemlesly <br /> into your existing workflows
        </h1>
      </div>
      <div className="flex justify-center items-center px-2 sm:px-0">
        <img
          ref={imgRef}
          className="w-[100vw] xs:w-[95vw] sm:w-[70vw] md:w-[70vw] lg:w-[70vw] max-w-5xl h-auto"
          src="https://ik.imagekit.io/lxvqyrkjo/Group%20369.png?updatedAt=1760016800309"
          alt=""
          style={{ transformOrigin: "center center" }}
        />
      </div>
      <div className="flex justify-end items-end p-4 sm:p-8">
        <p className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 text-base xs:text-lg sm:text-2xl md:text-xl lg:text-2xl sm:text-end text-[#AEAEAE] leading-relaxed">
          Get your RFP Agent up and running quickly by connecting it to your existing project management and communication tools like Asana, Slack, Microsoft Teams, and Google Workspace. This ensures efficient data management and enhances overall workflow
        </p>
      </div>
    </div>
  )
}

export default IntigeationLogo