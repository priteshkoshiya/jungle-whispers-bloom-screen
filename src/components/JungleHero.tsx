
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
      backgroundClass: 'bg-gradient-to-br from-emerald-900/30 via-green-800/20 to-emerald-950/30',
      titleColor: 'text-emerald-100',
      textColor: 'text-emerald-50',
      buttonClass: 'bg-emerald-500/90 hover:bg-emerald-400 border-emerald-300/70 hover:border-emerald-200',
      scrollColor: 'text-emerald-100'
    };

    switch (currentWeatherEffect.name) {
      case 'sunny':
        return {
          backgroundClass: 'bg-gradient-to-br from-yellow-800/25 via-orange-700/15 to-amber-800/25',
          titleColor: 'text-yellow-50',
          textColor: 'text-yellow-25',
          buttonClass: 'bg-yellow-500/90 hover:bg-yellow-400 border-yellow-300/70 hover:border-yellow-200',
          scrollColor: 'text-yellow-50'
        };
      case 'rainy':
        return {
          backgroundClass: 'bg-gradient-to-br from-slate-900/35 via-gray-800/25 to-blue-900/35',
          titleColor: 'text-slate-50',
          textColor: 'text-slate-25',
          buttonClass: 'bg-slate-500/90 hover:bg-slate-400 border-slate-300/70 hover:border-slate-200',
          scrollColor: 'text-slate-50'
        };
      case 'snowy':
        return {
          backgroundClass: 'bg-gradient-to-br from-blue-900/30 via-cyan-800/20 to-slate-900/30',
          titleColor: 'text-blue-25',
          textColor: 'text-blue-50',
          buttonClass: 'bg-blue-500/90 hover:bg-blue-400 border-blue-300/70 hover:border-blue-200',
          scrollColor: 'text-blue-25'
        };
      case 'cloudy':
        return {
          backgroundClass: 'bg-gradient-to-br from-gray-800/30 via-slate-700/20 to-gray-900/30',
          titleColor: 'text-gray-50',
          textColor: 'text-gray-25',
          buttonClass: 'bg-gray-500/90 hover:bg-gray-400 border-gray-300/70 hover:border-gray-200',
          scrollColor: 'text-gray-50'
        };
      default:
        return {
          backgroundClass: 'bg-gradient-to-br from-emerald-900/30 via-green-800/20 to-emerald-950/30',
          titleColor: 'text-emerald-100',
          textColor: 'text-emerald-50',
          buttonClass: 'bg-emerald-500/90 hover:bg-emerald-400 border-emerald-300/70 hover:border-emerald-200',
          scrollColor: 'text-emerald-100'
        };
    }
  };

  const styles = getWeatherBasedStyles();

  return (
    <div className={`relative min-h-screen overflow-hidden transition-all duration-1000 ${styles.backgroundClass}`}>
      {/* Clear Real Plant Background - More visible */}
      <RealPlantBackground 
        weatherFilter={currentWeatherEffect?.backgroundOverlay || 'none'}
      />

      {/* Floating Particles - Behind weather */}
      <FloatingParticles />

      {/* Weather Effects - On top with higher z-index */}
      <div style={{ zIndex: 15 }}>
        <WeatherEffects onWeatherChange={setCurrentWeatherEffect} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced Glass Panel with animations */}
          <div className="premium-glass-panel backdrop-blur-xl bg-white/20 rounded-3xl border-2 border-white/30 p-8 sm:p-12 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-center mb-6 animate-scale-in">
              <Leaf className={`w-8 h-8 ${styles.titleColor} mr-3 animate-pulse`} />
              <div className={`h-px bg-gradient-to-r from-transparent via-current to-transparent flex-1 ${styles.titleColor}`} />
              <Leaf className={`w-8 h-8 ${styles.titleColor} ml-3 animate-pulse`} />
            </div>

            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold ${styles.textColor} mb-6 transition-all duration-1000 animate-fade-in`}>
              <span className="block animate-slide-in-right">Welcome to the</span>
              <span className={`block ${styles.titleColor} transition-colors duration-1000 animate-slide-in-right`} style={{ animationDelay: '0.3s' }}>
                Living Jungle
              </span>
            </h1>

            <p className={`text-lg sm:text-xl ${styles.textColor}/90 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-1000 animate-fade-in`} style={{ animationDelay: '0.6s' }}>
              Experience nature's ever-changing beauty. Watch as weather transforms the landscape, 
              bringing life to every moment in this dynamic ecosystem.
            </p>

            <div className="animate-scale-in" style={{ animationDelay: '0.9s' }}>
              <Button 
                onClick={handleExploreClick}
                className={`${styles.buttonClass} text-white border-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover-scale`}
              >
                <Leaf className="w-5 h-5 mr-2" />
                Explore the Wild
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with better text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="flex flex-col items-center hover-scale cursor-pointer" onClick={handleExploreClick}>
          <div className={`${styles.scrollColor}/90 text-sm mb-3 font-medium transition-colors duration-1000 animate-pulse`}>
            Discover More Below
          </div>
          <ArrowDown className={`w-6 h-6 ${styles.scrollColor}/90 animate-bounce transition-colors duration-1000`} />
          <div className={`w-px h-16 bg-gradient-to-b from-current to-transparent mt-2 ${styles.scrollColor}/90 transition-colors duration-1000`} />
        </div>
      </div>
    </div>
  );
};

export default JungleHero;
