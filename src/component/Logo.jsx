import React from 'react';

const imageLogos = [
  { src: "https://ik.imagekit.io/lxvqyrkjo/logos%20(1).png?updatedAt=1759851891604", alt: "Company 1", href: "#" },
  { src: "https://ik.imagekit.io/lxvqyrkjo/nvidia_vSAF0Uct3?updatedAt=1759995454215", alt: "Company 2", href: "#" },
  { src: "https://ik.imagekit.io/lxvqyrkjo/DPIIT_O8OOawzvF7?updatedAt=1759995533887", alt: "Company 3", href: "#" },
  { src: "https://ik.imagekit.io/lxvqyrkjo/langchain_l-VCTrpkhN?updatedAt=1759995725540", alt: "Company 4", href: "#" },
  { src: "https://ik.imagekit.io/lxvqyrkjo/google-logo.png?updatedAt=1759851891421", alt: "Company 5", href: "#"},
  { src: "https://ik.imagekit.io/lxvqyrkjo/modal_1tcLYQ74W?updatedAt=1759995880344", alt: "Company 6", href: "#" },
  { src: "https://ik.imagekit.io/lxvqyrkjo/logos%20(1).png?updatedAt=1759851891604", alt: "Company 1", href: "#" },
  { src: "https://ik.imagekit.io/lxvqyrkjo/nvidia_vSAF0Uct3?updatedAt=1759995454215", alt: "Company 2", href: "#" },
  { src: "https://ik.imagekit.io/lxvqyrkjo/DPIIT_O8OOawzvF7?updatedAt=1759995533887", alt: "Company 3", href: "#" },
  { src: "https://ik.imagekit.io/lxvqyrkjo/langchain_l-VCTrpkhN?updatedAt=1759995725540", alt: "Company 4", href: "#" },
  { src: "https://ik.imagekit.io/lxvqyrkjo/google-logo.png?updatedAt=1759851891421", alt: "Company 5", href: "#"},
];

function Logo() {
  const logosToShow = [...imageLogos, ...imageLogos];

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
          display: 'flex',
          alignItems: 'center',
          width: 'max-content',
          animation: 'logo-scroll 20s linear infinite'
        }}
      >
        {logosToShow.map((logo, idx) => (
          <a
            key={idx}
            href={logo.href}
            style={{
              display: 'inline-block',
              marginRight: 40,
              transition: 'transform 0.2s',
              height: 48,
              lineHeight: 0
            }}
            tabIndex={-1}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                height: 48,
                width: 'auto',
                verticalAlign: 'middle',
                objectFit: 'contain',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.04))'
              }}
              draggable={false}
            />
          </a>
        ))}
      </div>
      <style>
        {`
          @keyframes logo-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          div[style*="logo-scroll"]:hover a {
            transform: scale(1.08);
          }
        `}
      </style>
    </div>
  );
}

export default Logo;