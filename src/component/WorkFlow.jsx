import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

function WorkFlow() {
    return (
        <div className="flex relative z-10 flex-col gap-4 justify-center items-center w-screen min-h-[130vh] bg-white">
            <ReactLenis root />
            <div className="flex flex-col-reverse gap-8 justify-around items-center px-2 w-full sm:w-[70vw] md:flex-row md:gap-14 md:px-8">
                <div className="flex flex-col items-center w-full md:w-auto md:items-start">
                    <p className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#AEAEAE] text-justify p-2 mb-4 md:mb-8">
                        At Tvara, reliability is built into every <br className="hidden xs:inline" />
                        workflow. Our SNAP architecture <br className="hidden xs:inline" />
                        keeps tasks connected, context <br className="hidden xs:inline" />
                        intact, and processes running the <br className="hidden xs:inline" />
                        same way every time.
                    </p>
                    <a className="text-lg xs:text-xl sm:text-2xl lg:text-4xl underline text-[#1d4f8f] font-semibold" href="#">Get to know how we build workflows</a>
                </div>
                <div className="flex justify-center mb-6 md:justify-end md:mb-0">
                    <img
                        className="rounded-3xl object-conatin w-[24rem] h-[18rem] sm:w-[100rem] sm:h-[25rem] max-w-full"
                        src="https://ik.imagekit.io/lxvqyrkjo/200fa17ebea45d5430ad1a846a875fdc17685566.png?updatedAt=1759775706103"
                        alt=""
                    />
                </div>
            </div>
            <h1 className="p-4 mt-14 text-3xl font-semibold md:mt-28 xs:text-4xl sm:text-5xl md:text-6xl">Our Products</h1>
        </div>
    )
}

export default WorkFlow