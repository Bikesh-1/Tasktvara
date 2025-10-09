import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

function WorkFlow() {
    const lenis = useLenis((lenis) => {
        console.log(lenis)
      })
  return (
    <div className='flex relative z-10 flex-col gap-4 justify-center items-center w-screen h-screen bg-white'>
           <ReactLenis root />
        <div className='flex gap-4 justify-center items-center'>
        <div className='w-1/2'>
            <p className='text-6xl text-[#AEAEAE] '>At Tvara, reliability is built into every workflow. Our SNAP architecture keeps tasks connected, context intact, and processes running the same way every time.</p>
            <a className='text-4xl underline text-[#1d4f8f] font-semibold pt-10' href="#">Get to know how we build workflows</a>
        </div>
        <div>
            <img className='w-[30rem] rounded-3xl' src="https://ik.imagekit.io/lxvqyrkjo/200fa17ebea45d5430ad1a846a875fdc17685566.png?updatedAt=1759775706103" alt="" />
        </div>
        </div>
       
        <h1 className='p-4 text-6xl font-semibold'>Our Products</h1>
    </div>
  )
}

export default WorkFlow