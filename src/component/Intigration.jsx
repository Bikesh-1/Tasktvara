import React from 'react'

function Intigration() {
  return (
    <div className="relative p-2 w-screen h-auto  bg-white xs:p-4 sm:p-8 sm:h-[110vh]">
      <div className="flex flex-col gap-8 justify-center items-start w-full h-full sm:gap-10">
        <div className="w-full">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#AEAEAE] leading-tight ">
            Tvara integrates seemlesly <br /> into your existing workflows
          </h1>
        </div>
        <div className="flex flex-1 justify-center items-center w-full h-full">
          <div
            className="flex flex-col gap-8 justify-center items-stretch w-full max-w-7xl xs:flex-row xs:gap-4 sm:gap-6 lg:gap-8 sm:flex-row"
          >
            <div
              className="
                w-full xs:w-[16rem] sm:w-[20rem]
                h-[18rem] xs:h-[22rem] sm:h-[25rem]
                rounded-2xl flex items-center justify-center flex-col gap-4 sm:gap-8
                mx-auto
              "
              style={{
                backgroundImage:
                  "url('https://ik.imagekit.io/lxvqyrkjo/41474b18664e4742ed9a20e13e71413d58fadd70.png?updatedAt=1759954458682')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h1 className="text-6xl xs:text-7xl sm:text-[10rem] leading-[1] font-bold text-white">
                3x
              </h1>
              <p className="text-[#AEAEAE] font-medium text-lg xs:text-xl sm:text-3xl text-center">
                Make your <br /> workflow 3x faster
              </p>
            </div>
            <div
              className="
                h-[18rem] xs:h-[22rem] sm:h-[25rem]
                w-full xs:w-[13rem] sm:w-[17rem]
                rounded-2xl relative text-white overflow-hidden bg-black flex flex-col justify-end mx-auto
              "
            >
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
              <div className="flex relative z-20 flex-col items-start px-4 pb-4 sm:px-6 sm:pb-8">
                <span className="text-3xl font-bold leading-none text-white xs:text-4xl sm:text-5xl">100k+</span>
                <span className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#AEAEAE] mt-1">Executions</span>
              </div>
            </div>
            <div
              className="
                h-[15rem] xs:h-[18rem] sm:h-[22rem]
                w-full xs:w-[11rem] sm:w-[15rem]
                rounded-2xl relative overflow-hidden bg-black mx-auto flex flex-col justify-end
              "
            >
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
                <span className="mb-1 text-3xl font-bold leading-none text-white sm:mb-2 xs:text-4xl sm:text-5xl">87%</span>
                <span className="text-[#AEAEAE] text-lg xs:text-xl sm:text-2xl font-semibold leading-tight">
                  Improved<br />Decision<br />Making
                </span>
              </div>
            </div>
            <div
              className="
                h-[12rem] xs:h-[14rem] sm:h-[17rem]
                w-full xs:w-[11rem] sm:w-[15rem]
                bg-black rounded-2xl flex flex-col px-2 sm:px-4 pt-4 sm:pt-6 pb-2 sm:pb-4 justify-start items-start mx-auto
              "
            >
              <h1 className="mb-2 text-4xl font-bold text-white sm:mb-6 xs:text-5xl sm:text-6xl">75%</h1>
              <p className="text-base xs:text-lg sm:text-[1.35rem] font-bold text-white leading-tight">
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