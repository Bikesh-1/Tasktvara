import React from 'react'
import Particles from '../ReactbitsComponent/Particles';

function Footer() {
  return (
    <div className="relative w-full min-h-[100vh] h-[100vh] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] bg-gradient-to-r from-[#152125] to-[#111b20] overflow-hidden">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={500}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={70}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={true}
        cameraDistance={40}
      />
      <img
        src="https://ik.imagekit.io/lxvqyrkjo/b463528ca3ee2f6a7d3cb5e42c2d6ccbd37eac1d.png?updatedAt=1759949213265"
        alt="Tvara Logo"
        className="object-contain absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
        style={{ zIndex: 2 }}
      />
      <div className="flex absolute left-0 bottom-4 z-10 flex-row flex-wrap gap-4 justify-center items-center px-2 w-full  sm:gap-6 md:gap-10 sm:px-4">
        <span className="text-[#b3b3b3] text-base sm:text-lg md:text-xl font-semibold tracking-wider" style={{fontFamily: 'inherit'}}>TVARA</span>
        <span className="text-[#b3b3b3] text-base sm:text-lg md:text-xl font-semibold tracking-wider" style={{fontFamily: 'inherit'}}>ತ್ವರಾ</span>
        <span className="text-[#b3b3b3] text-base sm:text-lg md:text-xl font-semibold tracking-wider" style={{fontFamily: 'inherit'}}>त्वरा</span>
        <span className="text-[#b3b3b3] text-base sm:text-lg md:text-xl font-semibold tracking-wider" style={{fontFamily: 'inherit'}}>トヴァラ</span>
        <span className="text-[#b3b3b3] text-base sm:text-lg md:text-xl font-semibold tracking-wider" style={{fontFamily: 'inherit'}}>טווארה</span>
        <span className="text-[#b3b3b3] text-base sm:text-lg md:text-xl font-semibold tracking-wider" style={{fontFamily: 'inherit'}}>TVARA</span>
        <span className="text-[#b3b3b3] text-base sm:text-lg md:text-xl font-semibold tracking-wider" style={{fontFamily: 'inherit'}}>ತ್ವರಾ</span>
        <span className="text-[#b3b3b3] text-base sm:text-lg md:text-xl font-semibold tracking-wider" style={{fontFamily: 'inherit'}}>त्वरा</span>
      </div>
    </div>
  )
}

export default Footer