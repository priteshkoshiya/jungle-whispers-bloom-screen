
import React from 'react';

interface RealPlantBackgroundProps {
  weatherFilter?: string;
}

const RealPlantBackground = ({ weatherFilter = 'none' }: RealPlantBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Crystal Clear background plant images */}
      <div className="absolute inset-0">
        {/* Main forest backdrop - Ultra high resolution, crystal clear */}
        <div 
          className="absolute inset-0 opacity-90 transition-all duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=95')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter === 'none' ? 'contrast(1.1) saturate(1.2)' : weatherFilter
          }}
        />
        
        {/* Secondary forest layer for depth - Clear and sharp */}
        <div 
          className="absolute inset-0 opacity-60 transition-all duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=95')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            filter: weatherFilter === 'none' ? 'contrast(1.1) saturate(1.2)' : weatherFilter
          }}
        />

        {/* Tertiary forest layer - Sharp detail */}
        <div 
          className="absolute inset-0 opacity-35 transition-all duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=95')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter === 'none' ? 'contrast(1.1) saturate(1.2)' : weatherFilter
          }}
        />
      </div>

      {/* Clear floating plant elements - No blur, sharp details */}
      <div className="absolute top-16 left-8 transition-all duration-1000">
        <div 
          className="w-40 h-40 opacity-50"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=90')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter === 'none' ? 'contrast(1.2) saturate(1.3)' : weatherFilter,
            borderRadius: '20px'
          }}
        />
      </div>

      <div className="absolute top-32 right-12 transition-all duration-1000">
        <div 
          className="w-48 h-48 opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=90')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter === 'none' ? 'contrast(1.2) saturate(1.3)' : weatherFilter,
            borderRadius: '25px'
          }}
        />
      </div>

      <div className="absolute bottom-28 left-16 transition-all duration-1000">
        <div 
          className="w-44 h-44 opacity-55"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=90')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter === 'none' ? 'contrast(1.2) saturate(1.3)' : weatherFilter,
            borderRadius: '22px'
          }}
        />
      </div>

      <div className="absolute top-72 right-6 transition-all duration-1000">
        <div 
          className="w-36 h-36 opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter === 'none' ? 'contrast(1.2) saturate(1.3)' : weatherFilter,
            borderRadius: '18px'
          }}
        />
      </div>

      {/* Natural light rays - Subtle and realistic */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`light-ray-${i}`}
            className="absolute bg-gradient-to-b from-yellow-100/10 via-green-100/5 to-transparent transition-all duration-1000"
            style={{
              left: `${10 + (i * 12)}%`,
              top: '0%',
              width: '4px',
              height: '70%',
              transform: `rotate(${-10 + Math.random() * 20}deg)`,
              transformOrigin: 'top center',
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RealPlantBackground;
