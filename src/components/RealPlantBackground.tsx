
import React from 'react';

interface RealPlantBackgroundProps {
  weatherFilter?: string;
}

const RealPlantBackground = ({ weatherFilter = 'sepia(20%) saturate(120%) hue-rotate(90deg)' }: RealPlantBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced background plant images */}
      <div className="absolute inset-0">
        {/* Main forest backdrop - High resolution, clear */}
        <div 
          className="absolute inset-0 opacity-60 transition-all duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter
          }}
        />
        
        {/* Layered realistic forest imagery for depth */}
        <div 
          className="absolute inset-0 opacity-40 transition-all duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            filter: weatherFilter
          }}
        />

        {/* Additional forest layer for ultra-realism */}
        <div 
          className="absolute inset-0 opacity-25 transition-all duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter
          }}
        />
      </div>

      {/* Enhanced floating real plant elements with better clarity */}
      <div className="absolute top-16 left-8 real-plant-1 transition-all duration-1000">
        <div 
          className="w-40 h-40 rounded-full opacity-35"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter
          }}
        />
      </div>

      <div className="absolute top-32 right-12 real-plant-2 transition-all duration-1000">
        <div 
          className="w-48 h-48 rounded-full opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter
          }}
        />
      </div>

      <div className="absolute bottom-28 left-16 real-plant-3 transition-all duration-1000">
        <div 
          className="w-44 h-44 rounded-full opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter
          }}
        />
      </div>

      <div className="absolute top-72 right-6 real-plant-4 transition-all duration-1000">
        <div 
          className="w-36 h-36 rounded-full opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: weatherFilter
          }}
        />
      </div>

      {/* Enhanced organic light rays through trees */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={`light-ray-${i}`}
            className="absolute bg-gradient-to-b from-yellow-100/15 via-green-100/8 to-transparent enhanced-light-ray transition-all duration-1000"
            style={{
              left: `${5 + (i * 8)}%`,
              top: '0%',
              width: '6px',
              height: '100%',
              transform: `rotate(${-15 + Math.random() * 30}deg)`,
              transformOrigin: 'top center',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Depth enhancement with realistic tree silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div 
          className="h-32 opacity-20 transition-all duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            filter: `${weatherFilter} contrast(2) brightness(0.3)`
          }}
        />
      </div>
    </div>
  );
};

export default RealPlantBackground;
