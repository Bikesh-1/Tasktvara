import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

function WorkFlow() {
    return (
        <div className="flex relative z-10 flex-col gap-8 justify-center items-center w-screen min-h-[140vh] bg-white">
            <ReactLenis root />
            <div className="flex flex-col-reverse gap-8 justify-between items-center px-2 w-full sm:w-[90vw] md:flex-row md:gap-8 md:px-8">
                <div className="flex flex-col items-center w-full md:items-start md:w-2/3 lg:w-2/3">
                    <p className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-5xl text-[#AEAEAE] text-center md:text-left p-2 mb-4 md:mb-8">
                        At Tvara, reliability is built into every <br className="hidden xs:inline" />
                        workflow. Our SNAP architecture <br className="hidden xs:inline" />
                        keeps tasks connected, context <br className="hidden xs:inline" />
                        intact, and processes running the <br className="hidden xs:inline" />
                        same way every time.
                    </p>
                    <a className="text-lg xs:text-xl sm:text-2xl lg:text-4xl underline text-[#1d4f8f] font-semibold mt-2 md:mt-0 text-center md:text-left" href="#">Get to know how we build workflows</a>
                </div>
                <div className="flex justify-center mb-6 w-full md:justify-end md:w-1/2 md:mb-0">
                    <img
                        className="object-contain w-full max-w-xs h-auto rounded-3xl xs:max-w-md sm:max-w-lg md:max-w-lg lg:max-w-md"
                        src="https://ik.imagekit.io/lxvqyrkjo/200fa17ebea45d5430ad1a846a875fdc17685566.png?updatedAt=1759775706103"
                        alt=""
                    />
                </div>
            </div>
            <h1 className="p-4 mt-14 text-3xl font-semibold text-center md:mt-28 xs:text-4xl sm:text-5xl md:text-6xl">Our Products</h1>
        </div>
    )
}

export default WorkFlow