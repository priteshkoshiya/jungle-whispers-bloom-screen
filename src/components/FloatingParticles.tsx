
import React from 'react';

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating spores/particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-emerald-300/40 rounded-full jungle-particle-${i + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 6}s`
          }}
        />
      ))}
      
      {/* Larger glowing particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`glow-${i}`}
          className={`absolute w-1 h-1 bg-emerald-200/60 rounded-full jungle-glow-particle`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
            boxShadow: '0 0 10px currentColor'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
