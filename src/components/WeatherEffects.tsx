
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
    overlay: 'bg-gradient-to-br from-yellow-300/30 via-orange-200/20 to-amber-100/10',
    backgroundOverlay: 'sepia(30%) saturate(150%) hue-rotate(15deg) brightness(1.2) contrast(1.1)',
    duration: 10000,
    particleCount: 25,
  },
  {
    name: 'rainy',
    icon: <CloudRain className="w-6 h-6 text-slate-300" />,
    particles: 'rain-drops',
    overlay: 'bg-gradient-to-br from-slate-700/40 via-blue-900/30 to-gray-800/20',
    backgroundOverlay: 'sepia(10%) saturate(80%) hue-rotate(200deg) brightness(0.7) contrast(1.3)',
    duration: 8000,
    particleCount: 80,
  },
  {
    name: 'cloudy',
    icon: <Cloud className="w-6 h-6 text-gray-200" />,
    particles: 'mist',
    overlay: 'bg-gradient-to-br from-gray-500/30 via-slate-400/20 to-gray-300/15',
    backgroundOverlay: 'sepia(5%) saturate(70%) hue-rotate(180deg) brightness(0.9) contrast(0.9)',
    duration: 12000,
    particleCount: 15,
  },
  {
    name: 'snowy',
    icon: <Snowflake className="w-6 h-6 text-blue-100" />,
    particles: 'snowflakes',
    overlay: 'bg-gradient-to-br from-blue-100/25 via-white/15 to-cyan-50/10',
    backgroundOverlay: 'sepia(5%) saturate(50%) hue-rotate(180deg) brightness(1.1) contrast(1.2)',
    duration: 9000,
    particleCount: 50,
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

      {/* Enhanced Weather overlay */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${weather.overlay} ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`} 
      />

      {/* Intense Weather particles */}
      <div className={`absolute inset-0 ${weather.particles}`}>
        {weather.name === 'rainy' && (
          <>
            {[...Array(weather.particleCount)].map((_, i) => (
              <div
                key={`rain-${i}`}
                className="absolute bg-blue-200/70 enhanced-rain-drop"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${1 + Math.random() * 2}px`,
                  height: `${15 + Math.random() * 25}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.3 + Math.random() * 0.4}s`
                }}
              />
            ))}
            
            {/* Rain splash effects */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`splash-${i}`}
                className="absolute w-3 h-3 bg-blue-300/40 rounded-full rain-splash"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 10}%`,
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
                className="absolute bg-white/90 rounded-full enhanced-snowflake"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
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
                className="absolute bg-yellow-200/40 enhanced-sun-ray"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50}%`,
                  width: `${1 + Math.random()}px`,
                  height: `${30 + Math.random() * 40}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 6}s`,
                }}
              />
            ))}

            {/* Sun glint effects */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`glint-${i}`}
                className="absolute w-2 h-2 bg-yellow-300/60 rounded-full sun-glint"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 40}%`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </>
        )}

        {weather.name === 'cloudy' && (
          <>
            {[...Array(weather.particleCount)].map((_, i) => (
              <div
                key={`mist-${i}`}
                className="absolute bg-gray-300/20 rounded-full mist-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                  animationDelay: `${Math.random() * 8}s`,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Enhanced Weather indicator */}
      <div className="absolute top-8 right-8 z-20">
        <div className={`transition-all duration-500 ${isTransitioning ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
          <div className="backdrop-blur-xl bg-white/15 rounded-full p-4 border border-white/30 shadow-xl">
            <div className="flex items-center gap-3">
              {weather.icon}
              <span className="text-white/90 font-medium capitalize text-sm">
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
