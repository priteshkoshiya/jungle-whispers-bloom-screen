import React, { useState, useEffect } from 'react';
import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react';
import WeatherController from './WeatherController';

interface WeatherEffect {
  name: string;
  icon: React.ReactNode;
  particles: string;
  overlay: string;
  backgroundOverlay: string;
  duration: number;
  particleCount: number;
}

const weatherEffects: WeatherEffect[] = [
  {
    name: 'sunny',
    icon: <Sun className="w-6 h-6 text-yellow-300" />,
    particles: 'sun-rays',
    overlay: 'bg-gradient-to-br from-yellow-300/20 via-orange-200/15 to-amber-100/10',
    backgroundOverlay: 'contrast(1.3) saturate(1.4) brightness(1.1) hue-rotate(10deg)',
    duration: 10000,
    particleCount: 20,
  },
  {
    name: 'rainy',
    icon: <CloudRain className="w-6 h-6 text-slate-300" />,
    particles: 'rain-drops',
    overlay: 'bg-gradient-to-br from-slate-600/30 via-blue-800/25 to-gray-700/20',
    backgroundOverlay: 'contrast(1.2) saturate(0.7) brightness(0.6) hue-rotate(220deg)',
    duration: 8000,
    particleCount: 100,
  },
  {
    name: 'cloudy',
    icon: <Cloud className="w-6 h-6 text-gray-200" />,
    particles: 'cloud-cover',
    overlay: 'bg-gradient-to-br from-gray-500/25 via-slate-400/20 to-gray-300/15',
    backgroundOverlay: 'contrast(0.9) saturate(0.8) brightness(0.8) hue-rotate(200deg)',
    duration: 12000,
    particleCount: 8,
  },
  {
    name: 'snowy',
    icon: <Snowflake className="w-6 h-6 text-blue-100" />,
    particles: 'snowflakes',
    overlay: 'bg-gradient-to-br from-blue-100/20 via-white/15 to-cyan-50/10',
    backgroundOverlay: 'contrast(1.3) saturate(0.6) brightness(1.1) hue-rotate(180deg)',
    duration: 9000,
    particleCount: 60,
  },
];

interface WeatherEffectsProps {
  onWeatherChange?: (weather: WeatherEffect) => void;
}

const WeatherEffects = ({ onWeatherChange }: WeatherEffectsProps) => {
  const [currentWeather, setCurrentWeather] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoMode, setAutoMode] = useState(true);

  const weather = weatherEffects[currentWeather];

  useEffect(() => {
    if (onWeatherChange) {
      onWeatherChange(weather);
    }
  }, [currentWeather, onWeatherChange, weather]);

  useEffect(() => {
    if (!autoMode) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentWeather((prev) => (prev + 1) % weatherEffects.length);
        setIsTransitioning(false);
      }, 800);
    }, weather.duration);

    return () => clearInterval(interval);
  }, [currentWeather, autoMode, weather.duration]);

  const handleManualWeatherChange = (index: number) => {
    if (index === currentWeather) return;
    
    setAutoMode(false);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentWeather(index);
      setIsTransitioning(false);
      
      // Resume auto mode after 30 seconds
      setTimeout(() => {
        setAutoMode(true);
      }, 30000);
    }, 500);
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Weather Controller */}
      <div className="pointer-events-auto">
        <WeatherController
          currentWeather={currentWeather}
          onWeatherChange={handleManualWeatherChange}
          weatherEffects={weatherEffects}
        />
      </div>

      {/* Weather overlay */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${weather.overlay} ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`} 
      />

      {/* Realistic Weather particles */}
      <div className={`absolute inset-0 ${weather.particles}`}>
        {weather.name === 'rainy' && (
          <>
            {[...Array(weather.particleCount)].map((_, i) => (
              <div
                key={`rain-${i}`}
                className="absolute bg-blue-200/80 rain-drop"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${1 + Math.random() * 1.5}px`,
                  height: `${20 + Math.random() * 30}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.4 + Math.random() * 0.3}s`
                }}
              />
            ))}
            
            {[...Array(25)].map((_, i) => (
              <div
                key={`splash-${i}`}
                className="absolute w-2 h-2 bg-blue-300/50 rain-splash-effect"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 5}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </>
        )}

        {weather.name === 'snowy' && (
          <>
            {[...Array(weather.particleCount)].map((_, i) => (
              <div
                key={`snow-${i}`}
                className="absolute bg-white/95 snowflake"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${3 + Math.random() * 4}px`,
                  height: `${3 + Math.random() * 4}px`,
                  borderRadius: '50%',
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 4}s`
                }}
              />
            ))}
          </>
        )}

        {weather.name === 'sunny' && (
          <>
            {[...Array(weather.particleCount)].map((_, i) => (
              <div
                key={`ray-${i}`}
                className="absolute bg-yellow-200/30 sun-ray"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                  width: `${1 + Math.random() * 0.5}px`,
                  height: `${40 + Math.random() * 50}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 8}s`,
                }}
              />
            ))}

            {[...Array(12)].map((_, i) => (
              <div
                key={`glint-${i}`}
                className="absolute w-1 h-1 bg-yellow-300/70 sun-sparkle"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 50}%`,
                  borderRadius: '50%',
                  animationDelay: `${Math.random() * 6}s`,
                }}
              />
            ))}
          </>
        )}

        {weather.name === 'cloudy' && (
          <>
            {/* Realistic cloud shapes instead of circles */}
            {[...Array(weather.particleCount)].map((_, i) => (
              <div
                key={`cloud-${i}`}
                className="absolute cloud-drift"
                style={{
                  left: `${Math.random() * 120 - 10}%`,
                  top: `${Math.random() * 80}%`,
                  width: `${80 + Math.random() * 120}px`,
                  height: `${40 + Math.random() * 60}px`,
                  background: `radial-gradient(ellipse ${60 + Math.random() * 40}% ${40 + Math.random() * 30}% at ${30 + Math.random() * 40}% ${30 + Math.random() * 40}%, rgba(255,255,255,0.15), transparent 70%)`,
                  animationDelay: `${Math.random() * 15}s`,
                  animationDuration: `${20 + Math.random() * 15}s`
                }}
              />
            ))}
            
            {/* Additional wispy cloud effects */}
            {[...Array(4)].map((_, i) => (
              <div
                key={`wisp-${i}`}
                className="absolute cloud-wisp"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                  width: `${150 + Math.random() * 200}px`,
                  height: `${30 + Math.random() * 40}px`,
                  background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${25 + Math.random() * 20}s`
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Weather indicator */}
      <div className="absolute top-8 right-8 z-20">
        <div className={`transition-all duration-500 ${isTransitioning ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
          <div className="backdrop-blur-xl bg-white/20 rounded-full p-4 border-2 border-white/40 shadow-xl">
            <div className="flex items-center gap-3">
              {weather.icon}
              <span className="text-white font-medium capitalize text-sm">
                {weather.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherEffects;
