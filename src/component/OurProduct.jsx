/* eslint-disable no-unused-vars */
import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

function OurProduct() {
    const lenis = useLenis((lenis) => {
        console.log(lenis)
    })
    return (
        <div className="relative z-20 w-screen h-screen overflow-hidden">
            <ReactLenis root />
            <video
                className="absolute top-0 left-0 z-20 object-cover w-full h-full"
                src="https://ik.imagekit.io/lxvqyrkjo/7094565-hd_1920_1080_25fps.mp4?updatedAt=1759850999096"
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Main Title Section */}
            <div className="absolute top-[3.5rem] left-[3.5rem] z-20 flex flex-col items-start">
                <span className="text-[#d2d2e6] text-[0.95rem] font-normal mb-1 tracking-wide" style={{letterSpacing: "0.01em"}}>
                    Introducing
                </span>
                <span className="text-[1.35rem] sm:text-2xl md:text-3xl font-semibold" style={{
                    color: "rgba(186, 196, 255, 0.95)",
                    textShadow: "0 2px 16px rgba(80, 80, 160, 0.18)"
                }}>
                    Tvara’s <span className="font-medium" style={{color: "#b6b6d6"}}>cutting edge sales agent</span>
                </span>
            </div>
            {/* Subtitle Section */}
            <div className="absolute bottom-[3.5rem] right-[3.5rem] z-20 max-w-[25rem] text-right">
                <span className="text-[#b6b6d6] text-[0.92rem] font-light leading-snug" style={{
                    opacity: 0.85,
                    textShadow: "0 2px 12px rgba(80, 80, 160, 0.12)"
                }}>
                    Discover leads, personalize outreach, and close deals<br />
                    on autopilot powered by AI, on autopilot powered
                </span>
            </div>
        </div>
    )
}

export default OurProduct