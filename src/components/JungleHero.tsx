
import React, { useState } from 'react';
import { ArrowDown, Leaf } from 'lucide-react';
import RealPlantBackground from './RealPlantBackground';
import WeatherEffects from './WeatherEffects';
import FloatingParticles from './FloatingParticles';
import { Button } from '@/components/ui/button';

interface WeatherEffect {
  name: string;
  icon: React.ReactNode;
  particles: string;
  overlay: string;
  backgroundOverlay: string;
  duration: number;
  particleCount: number;
}

const JungleHero = () => {
  const [currentWeatherEffect, setCurrentWeatherEffect] = useState<WeatherEffect | null>(null);

  const handleExploreClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const getWeatherBasedStyles = () => {
    if (!currentWeatherEffect) return {
      backgroundClass: 'bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950',
      titleColor: 'text-emerald-200',
      textColor: 'text-emerald-100',
      buttonClass: 'bg-emerald-500/90 hover:bg-emerald-400 border-emerald-300/70 hover:border-emerald-200',
      scrollColor: 'text-emerald-200'
    };

    switch (currentWeatherEffect.name) {
      case 'sunny':
        return {
          backgroundClass: 'bg-gradient-to-br from-yellow-800 via-orange-700 to-amber-800',
          titleColor: 'text-yellow-100',
          textColor: 'text-yellow-50',
          buttonClass: 'bg-yellow-500/90 hover:bg-yellow-400 border-yellow-300/70 hover:border-yellow-200',
          scrollColor: 'text-yellow-100'
        };
      case 'rainy':
        return {
          backgroundClass: 'bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900',
          titleColor: 'text-slate-100',
          textColor: 'text-slate-50',
          buttonClass: 'bg-slate-500/90 hover:bg-slate-400 border-slate-300/70 hover:border-slate-200',
          scrollColor: 'text-slate-100'
        };
      case 'snowy':
        return {
          backgroundClass: 'bg-gradient-to-br from-blue-900 via-cyan-800 to-slate-900',
          titleColor: 'text-blue-50',
          textColor: 'text-blue-25',
          buttonClass: 'bg-blue-500/90 hover:bg-blue-400 border-blue-300/70 hover:border-blue-200',
          scrollColor: 'text-blue-50'
        };
      case 'cloudy':
        return {
          backgroundClass: 'bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900',
          titleColor: 'text-gray-100',
          textColor: 'text-gray-50',
          buttonClass: 'bg-gray-500/90 hover:bg-gray-400 border-gray-300/70 hover:border-gray-200',
          scrollColor: 'text-gray-100'
        };
      default:
        return {
          backgroundClass: 'bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950',
          titleColor: 'text-emerald-200',
          textColor: 'text-emerald-100',
          buttonClass: 'bg-emerald-500/90 hover:bg-emerald-400 border-emerald-300/70 hover:border-emerald-200',
          scrollColor: 'text-emerald-200'
        };
    }
  };

  const styles = getWeatherBasedStyles();

  return (
    <div className={`relative min-h-screen overflow-hidden transition-all duration-1000 ${styles.backgroundClass}`}>
      {/* Clear Real Plant Background */}
      <RealPlantBackground 
        weatherFilter={currentWeatherEffect?.backgroundOverlay || 'none'}
      />

      {/* Weather Effects */}
      <WeatherEffects onWeatherChange={setCurrentWeatherEffect} />

      {/* Minimal atmospheric overlay - only for depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Consistent High-Opacity Glass Panel */}
          <div className="premium-glass-panel backdrop-blur-2xl bg-white/25 rounded-3xl border-2 border-white/40 p-8 sm:p-12 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <Leaf className={`w-8 h-8 ${styles.titleColor} mr-3 animate-pulse`} />
              <div className={`h-px bg-gradient-to-r from-transparent via-current to-transparent flex-1 ${styles.titleColor}`} />
              <Leaf className={`w-8 h-8 ${styles.titleColor} ml-3 animate-pulse`} />
            </div>

            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold ${styles.textColor} mb-6 transition-colors duration-1000`}>
              Welcome to the
              <span className={`block ${styles.titleColor} transition-colors duration-1000`}>
                Living Jungle
              </span>
            </h1>

            <p className={`text-lg sm:text-xl ${styles.textColor}/90 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-1000`}>
              Experience nature's ever-changing beauty. Watch as weather transforms the landscape, 
              bringing life to every moment in this dynamic ecosystem.
            </p>

            <Button 
              onClick={handleExploreClick}
              className={`${styles.buttonClass} text-white border-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm`}
            >
              <Leaf className="w-5 h-5 mr-2" />
              Explore the Wild
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <div className={`${styles.scrollColor}/90 text-sm mb-2 font-medium transition-colors duration-1000`}>Experience More</div>
          <ArrowDown className={`w-6 h-6 ${styles.scrollColor}/90 animate-bounce transition-colors duration-1000`} />
          <div className={`w-px h-16 bg-gradient-to-b from-current to-transparent mt-2 ${styles.scrollColor}/90 transition-colors duration-1000`} />
        </div>
      </div>
    </div>
  );
};

export default JungleHero;
