import React from 'react';

const NUM_CARDS = 12;

function MoveableCard() {
  const cardsToShow = Array.from({ length: NUM_CARDS * 2 });

  return (
    <div
      style={{
        height: 'auto',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        background: '#000',
        padding: '16px 0'
      }}
    >
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '15%',
          minWidth: 60,
          height: '100%',
          zIndex: 3,
          background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.62) 55%, rgba(0,0,0,0.2) 85%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '15%',
          minWidth: 60,
          height: '100%',
          zIndex: 3,
          background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.62) 55%, rgba(0,0,0,0.2) 85%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: 'max-content',
          animation: 'logo-scroll 20s linear infinite'
        }}
      >
        {cardsToShow.map((_, idx) => (
          <div
            key={idx}
            className='bg-white w-96 rounded-2xl h-60'
            style={{
              marginRight: 40,
              transition: 'transform 0.2s'
            }}
          />
        ))}
      </div>
      <style>
        {`
          @keyframes logo-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          div[style*="logo-scroll"]:hover div.bg-white {
            transform: scale(1.08);
          }
        `}
      </style>
    </div>
  );
}

export default MoveableCard;