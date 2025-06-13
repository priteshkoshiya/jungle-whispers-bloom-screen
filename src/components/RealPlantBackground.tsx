
import React from 'react';

const RealPlantBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background plant images */}
      <div className="absolute inset-0">
        {/* Main forest backdrop */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'sepia(20%) saturate(120%) hue-rotate(90deg)'
          }}
        />
        
        {/* Layered plant imagery for depth */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            filter: 'sepia(10%) saturate(110%) hue-rotate(75deg)'
          }}
        />
      </div>

      {/* Floating real plant elements */}
      <div className="absolute top-20 left-10 real-plant-1">
        <div 
          className="w-32 h-32 rounded-full opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'sepia(30%) saturate(140%) hue-rotate(60deg)'
          }}
        />
      </div>

      <div className="absolute top-40 right-16 real-plant-2">
        <div 
          className="w-40 h-40 rounded-full opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'sepia(20%) saturate(130%) hue-rotate(80deg)'
          }}
        />
      </div>

      <div className="absolute bottom-32 left-20 real-plant-3">
        <div 
          className="w-36 h-36 rounded-full opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'sepia(25%) saturate(120%) hue-rotate(70deg)'
          }}
        />
      </div>

      {/* Additional layered foliage for mobile */}
      <div className="absolute top-80 right-8 real-plant-4 sm:hidden">
        <div 
          className="w-24 h-24 rounded-full opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'sepia(20%) saturate(125%) hue-rotate(85deg)'
          }}
        />
      </div>

      {/* Organic light rays through trees */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`light-ray-${i}`}
            className="absolute bg-gradient-to-b from-yellow-200/10 via-green-200/5 to-transparent light-ray"
            style={{
              left: `${10 + (i * 12)}%`,
              top: '0%',
              width: '4px',
              height: '100%',
              transform: `rotate(${-10 + Math.random() * 20}deg)`,
              transformOrigin: 'top center',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RealPlantBackground;
