
import React, { useState, useEffect } from 'react';
import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react';

interface WeatherEffect {
  name: string;
  icon: React.ReactNode;
  particles: string;
  overlay: string;
  duration: number;
}

const weatherEffects: WeatherEffect[] = [
  {
    name: 'sunny',
    icon: <Sun className="w-8 h-8 text-yellow-400" />,
    particles: 'sun-rays',
    overlay: 'bg-gradient-to-br from-yellow-400/20 via-orange-300/10 to-transparent',
    duration: 8000,
  },
  {
    name: 'rainy',
    icon: <CloudRain className="w-8 h-8 text-blue-400" />,
    particles: 'rain-drops',
    overlay: 'bg-gradient-to-br from-blue-900/30 via-gray-700/20 to-transparent',
    duration: 6000,
  },
  {
    name: 'cloudy',
    icon: <Cloud className="w-8 h-8 text-gray-300" />,
    particles: 'mist',
    overlay: 'bg-gradient-to-br from-gray-600/25 via-gray-400/15 to-transparent',
    duration: 7000,
  },
  {
    name: 'snowy',
    icon: <Snowflake className="w-8 h-8 text-blue-200" />,
    particles: 'snowflakes',
    overlay: 'bg-gradient-to-br from-blue-200/20 via-white/10 to-transparent',
    duration: 9000,
  },
];

const WeatherEffects = () => {
  const [currentWeather, setCurrentWeather] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentWeather((prev) => (prev + 1) % weatherEffects.length);
        setIsTransitioning(false);
      }, 500);
    }, weatherEffects[currentWeather].duration);

    return () => clearInterval(interval);
  }, [currentWeather]);

  const weather = weatherEffects[currentWeather];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Weather overlay */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${weather.overlay} ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`} 
      />

      {/* Weather particles */}
      <div className={`absolute inset-0 ${weather.particles}`}>
        {weather.name === 'rainy' && (
          <>
            {[...Array(50)].map((_, i) => (
              <div
                key={`rain-${i}`}
                className="absolute w-0.5 h-8 bg-blue-300/60 rain-drop"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`
                }}
              />
            ))}
          </>
        )}

        {weather.name === 'snowy' && (
          <>
            {[...Array(30)].map((_, i) => (
              <div
                key={`snow-${i}`}
                className="absolute w-2 h-2 bg-white/80 rounded-full snowflake"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </>
        )}

        {weather.name === 'sunny' && (
          <>
            {[...Array(20)].map((_, i) => (
              <div
                key={`ray-${i}`}
                className="absolute w-1 h-20 bg-yellow-300/30 sun-ray"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Weather indicator */}
      <div className="absolute top-8 right-8 z-20">
        <div className={`transition-all duration-500 ${isTransitioning ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
          <div className="backdrop-blur-lg bg-white/10 rounded-full p-3 border border-white/20">
            {weather.icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherEffects;
