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
    <div className='relative z-20 w-screen bg-white h-[120vh]'>
        <div>
            <h1 className='text-6xl text-[#AEAEAE] font-bold p-8'>Tvara integrates seemlesly <br /> into your existing workflows</h1>
        </div>
        <div className='flex justify-center items-center'>
            <img
              ref={imgRef}
              className='w-[70vw]'
              src="https://ik.imagekit.io/lxvqyrkjo/Group%20369.png?updatedAt=1760016800309"
              alt=""
              style={{ transformOrigin: "center center" }}
            />
        </div>
        <div className='flex justify-end items-end p-8'>
            <p className='w-1/2 text-2xl text-end text-[#AEAEAE]'>
            Get your RFP Agent up and running quickly by connecting it to your existing project management and communication tools like Asana, Slack, Microsoft Teams, and Google Workspace. This ensures efficient data management and enhances overall workflow
            </p>
        </div>
    </div>
  )
}

export default IntigeationLogo