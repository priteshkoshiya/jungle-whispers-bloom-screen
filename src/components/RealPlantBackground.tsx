
import React from 'react';

interface RealPlantBackgroundProps {
  weatherFilter?: string;
}

const RealPlantBackground = ({ weatherFilter = 'none' }: RealPlantBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Single clear forest background - High visibility */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-95 transition-all duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=95')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter === 'none' ? 'contrast(1.3) saturate(1.4) brightness(1.1)' : weatherFilter
          }}
        />
      </div>

      {/* Subtle depth overlay - Minimal interference */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />

      {/* Natural light rays - Enhanced and more visible */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={`light-ray-${i}`}
            className="absolute bg-gradient-to-b from-yellow-100/20 via-green-100/10 to-transparent transition-all duration-1000"
            style={{
              left: `${5 + (i * 8)}%`,
              top: '0%',
              width: '3px',
              height: '80%',
              transform: `rotate(${-15 + Math.random() * 30}deg)`,
              transformOrigin: 'top center',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RealPlantBackground;
