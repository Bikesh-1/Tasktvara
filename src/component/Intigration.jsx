import React from 'react'

function Intigration() {
  return (
    <div className='relative w-screen h-[100vh] bg-white p-8'>
        <div className='flex flex-col gap-8 justify-center items-start'>
            <div className='text-5xl font-bold text-[#AEAEAE]'>
                <h1>Tvara integrates seemlesly <br /> into your existing workflows</h1>
            </div>
            <div className="flex flex-1 justify-center items-center w-full h-full">
              <div className="flex gap-8 justify-center items-start">
                <div
                  className='w-[18rem] h-[23rem] rounded-2xl flex items-center justify-center flex-col gap-8'
                  style={{
                    backgroundImage: "url('https://ik.imagekit.io/lxvqyrkjo/41474b18664e4742ed9a20e13e71413d58fadd70.png?updatedAt=1759954458682')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                    <h1 className='text-[10rem] leading-[1] font-bold text-white'>3x</h1>
                    <p className='text-[#AEAEAE] font-medium text-3xl'>Make your <br /> workflow 3x faster</p>
                </div>
                <div className="h-[23rem] w-[15rem] rounded-2xl relative text-white overflow-hidden bg-black flex flex-col justify-end">
                  {/* Grid background */}
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, #262626 1px, transparent 1px),
                        linear-gradient(to bottom, #262626 1px, transparent 1px)
                      `,
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <img
                    src="https://ik.imagekit.io/lxvqyrkjo/Group%20371.png?updatedAt=1759956175386"
                    alt="Executions Chart"
                    className="object-contain absolute inset-0 z-10 w-full h-full pointer-events-none"
                    draggable={false}
                  />
                  {/* Text overlay */}
                  <div className="flex relative z-20 flex-col items-start px-6 pb-8">
                    <span className="text-5xl font-bold leading-none text-white">100k+</span>
                    <span className="text-2xl font-semibold text-[#AEAEAE] mt-1">Executions</span>
                  </div>
                </div>
                <div className="h-[20rem] w-[13rem] rounded-2xl mt-2 relative overflow-hidden bg-black">
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, #262626 1px, transparent 1px),
                        linear-gradient(to bottom, #262626 1px, transparent 1px)
                      `,
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className="flex absolute bottom-4 left-4 z-10 flex-col items-start">
                    <span className="mb-2 text-5xl font-bold leading-none text-white">87%</span>
                    <span className="text-[#AEAEAE] text-2xl font-semibold leading-tight">
                      Improved<br />Decision<br />Making
                    </span>
                  </div>
                </div>
                <div className="h-[15rem] w-[13rem] bg-black rounded-2xl mt-4 flex flex-col px-4 pt-6 pb-4 justify-start items-start">
                  <h1 className="mb-6 text-6xl font-bold text-white">75%</h1>
                  <p className="text-[1.35rem] font-bold text-white leading-tight">
                    Faster than<br />
                    manual<br />
                    process
                  </p>
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Intigration