import React from 'react';
import Particles from '../ReactbitsComponent/Particles';

function TopBg() {
  return (
    <div
      className="fixed z-0 w-screen h-screen bg-black"
    >
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}

export default TopBg;