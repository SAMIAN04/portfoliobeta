import React, { useEffect } from "react";

const StarsBackground = () => {
  useEffect(() => {
    const container = document.querySelector('.stars-container');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Keep all original properties
      const size = Math.random() * 3;
      const colorVal = Math.random();
      let color;
      
      if (colorVal < 0.6) {
        color = 'white';
      } else if (colorVal < 0.8) {
        color = 'cyan';
      } else {
        color = '#72fcc2';
      }
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = color;
      star.style.boxShadow = `0 0 ${size * 2}px ${size}px ${color}`;
      
      // Original random positioning
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      
      // Only changes: Faster galaxy movement (2x speed) + travel effect
      const duration = 25 + Math.random() * 50; // 2x faster (original was 50-100)
      const delay = Math.random() * 10;
      const opacity = 0.3 + Math.random() * 0.7;
      
      star.style.animation = `galaxy-float ${duration}s linear ${delay}s infinite`;
      star.style.opacity = opacity;
      star.style.setProperty('--travel-x', `${Math.random() > 0.5 ? '' : '-'}${15 + Math.random() * 30}px`);
      star.style.setProperty('--travel-y', `${20 + Math.random() * 40}px`);
      
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden stars-container">
      <style jsx global>{`
        @keyframes galaxy-float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translate(var(--travel-x), var(--travel-y)) scale(1.3);
            opacity: 0;
          }
        }
        
        /* Keep all original star styles exactly the same */
        .star {
          position: absolute;
          border-radius: 50%;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        
        .star::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200%;
          height: 200%;
          border-radius: 50%;
          background: radial-gradient(circle, currentColor, transparent 70%);
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
};

export default StarsBackground;