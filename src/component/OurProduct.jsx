/* eslint-disable no-unused-vars */
import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

function OurProduct() {
    const lenis = useLenis((lenis) => {
        // Remove console.log in production
        // console.log(lenis)
    })
    return (
        <div className="relative z-20 w-screen min-h-[60vh] h-[70vh] xs:h-[85vh] sm:h-[95vh] md:h-[100vh] overflow-hidden">
            <ReactLenis root />
            <video
                className="absolute top-0 left-0 z-10 object-cover w-full h-full"
                src="https://ik.imagekit.io/lxvqyrkjo/7094565-hd_1920_1080_25fps.mp4?updatedAt=1759850999096"
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Title Section */}
            <div
                className="
                    absolute z-20
                    flex flex-col items-start
                    top-6 left-4
                    xs:top-8 xs:left-8
                    sm:top-14 sm:left-12
                    md:top-16 md:left-24
                "
            >
                <span
                    className="
                        text-[#d2d2e6]
                        text-xs xs:text-base sm:text-[0.95rem]
                        font-normal mb-1 tracking-wide
                    "
                    style={{ letterSpacing: "0.01em" }}
                >
                    Introducing
                </span>
                <span
                    className="
                        font-semibold
                        text-lg xs:text-[1.15rem] sm:text-2xl md:text-3xl
                    "
                    style={{
                        color: "rgba(186, 196, 255, 0.95)",
                        textShadow: "0 2px 16px rgba(80, 80, 160, 0.18)"
                    }}
                >
                    Tvara’s <span
                        className="font-medium"
                        style={{ color: "#b6b6d6" }}
                    >cutting edge sales agent</span>
                </span>
            </div>
            {/* Subtitle Section */}
            <div
                className="
                    absolute z-20
                    text-right
                    max-w-[90vw] xs:max-w-[60vw] sm:max-w-[28rem] md:max-w-[25rem]
                    bottom-6 right-4
                    xs:bottom-8 xs:right-8
                    sm:bottom-14 sm:right-12
                    md:bottom-16 md:right-24
                "
            >
                <span
                    className="
                        text-[#b6b6d6]
                        text-xs xs:text-sm sm:text-[0.92rem]
                        font-light leading-snug
                        block
                    "
                    style={{
                        opacity: 0.85,
                        textShadow: "0 2px 12px rgba(80, 80, 160, 0.12)"
                    }}
                >
                    Discover leads, personalize outreach, and close deals
                    <br className="hidden xs:inline" />
                    on autopilot powered by AI, on autopilot powered
                </span>
            </div>
        </div>
    )
}

export default OurProduct