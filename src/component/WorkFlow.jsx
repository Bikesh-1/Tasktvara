import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

function WorkFlow() {
    const lenis = useLenis((lenis) => {
        console.log(lenis)
      })
  return (
    <div className='flex relative z-10 flex-col gap-4 justify-center items-center w-screen h-[120vh] bg-white'>
           <ReactLenis root />
        <div className='flex gap-14 justify-around items-center'>
        <div className='w-auto'>
            <p className='text-5xl text-[#AEAEAE] text-justify p-2'>At Tvara, reliability is built into every <br /> workflow. Our SNAP architecture <br /> keeps tasks connected, context <br /> intact, and processes running the <br /> same way every time.</p>
            <a className='text-4xl underline text-[#1d4f8f] font-semibold ' href="#">Get to know how we build workflows</a>
        </div>
        
        <div>
            <img className='w-[20rem] rounded-3xl' src="https://ik.imagekit.io/lxvqyrkjo/200fa17ebea45d5430ad1a846a875fdc17685566.png?updatedAt=1759775706103" alt="" />
        </div>
        </div>
       
        <h1 className='p-4 mt-28 text-6xl font-semibold'>Our Products</h1>
    </div>
  )
}

export default WorkFlow