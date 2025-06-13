
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
      panelClass: 'from-white/15 via-white/10 to-white/5',
      titleColor: 'text-emerald-300',
      buttonClass: 'bg-emerald-500/80 hover:bg-emerald-400/90 border-emerald-300/50 hover:border-emerald-200'
    };

    switch (currentWeatherEffect.name) {
      case 'sunny':
        return {
          backgroundClass: 'bg-gradient-to-br from-yellow-800 via-orange-700 to-amber-800',
          panelClass: 'from-yellow-100/20 via-orange-50/15 to-amber-50/10',
          titleColor: 'text-yellow-200',
          buttonClass: 'bg-yellow-500/80 hover:bg-yellow-400/90 border-yellow-300/50 hover:border-yellow-200'
        };
      case 'rainy':
        return {
          backgroundClass: 'bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900',
          panelClass: 'from-slate-100/15 via-gray-50/10 to-blue-50/8',
          titleColor: 'text-slate-200',
          buttonClass: 'bg-slate-500/80 hover:bg-slate-400/90 border-slate-300/50 hover:border-slate-200'
        };
      case 'snowy':
        return {
          backgroundClass: 'bg-gradient-to-br from-blue-900 via-cyan-800 to-slate-900',
          panelClass: 'from-blue-100/20 via-cyan-50/15 to-white/10',
          titleColor: 'text-blue-100',
          buttonClass: 'bg-blue-500/80 hover:bg-blue-400/90 border-blue-300/50 hover:border-blue-200'
        };
      case 'cloudy':
        return {
          backgroundClass: 'bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900',
          panelClass: 'from-gray-100/15 via-slate-50/10 to-gray-50/8',
          titleColor: 'text-gray-200',
          buttonClass: 'bg-gray-500/80 hover:bg-gray-400/90 border-gray-300/50 hover:border-gray-200'
        };
      default:
        return {
          backgroundClass: 'bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950',
          panelClass: 'from-white/15 via-white/10 to-white/5',
          titleColor: 'text-emerald-300',
          buttonClass: 'bg-emerald-500/80 hover:bg-emerald-400/90 border-emerald-300/50 hover:border-emerald-200'
        };
    }
  };

  const styles = getWeatherBasedStyles();

  return (
    <div className={`relative min-h-screen overflow-hidden transition-all duration-1000 ${styles.backgroundClass}`}>
      {/* Real Plant Background with weather filter */}
      <RealPlantBackground 
        weatherFilter={currentWeatherEffect?.backgroundOverlay || 'sepia(20%) saturate(120%) hue-rotate(90deg)'}
      />

      {/* Weather Effects */}
      <WeatherEffects onWeatherChange={setCurrentWeatherEffect} />

      {/* Enhanced atmospheric overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 transition-all duration-1000" />
        <div className="jungle-atmosphere absolute inset-0 opacity-30 transition-all duration-1000" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced Weather-Responsive Glassmorphism Content Panel */}
          <div className={`dynamic-panel backdrop-blur-xl bg-gradient-to-br ${styles.panelClass} rounded-3xl border border-white/25 p-8 sm:p-12 shadow-2xl transition-all duration-1000`}>
            <div className="flex items-center justify-center mb-6">
              <Leaf className={`w-8 h-8 ${styles.titleColor} mr-3 animate-pulse`} />
              <div className={`h-px bg-gradient-to-r from-transparent via-current to-transparent flex-1 ${styles.titleColor}`} />
              <Leaf className={`w-8 h-8 ${styles.titleColor} ml-3 animate-pulse`} />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 dynamic-title transition-all duration-1000">
              Welcome to the
              <span className={`block jungle-highlight transition-all duration-1000 ${styles.titleColor}`}>
                Living Jungle
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000">
              Experience nature's ever-changing beauty. Watch as weather transforms the landscape, 
              bringing life to every moment in this dynamic ecosystem.
            </p>

            <Button 
              onClick={handleExploreClick}
              className={`enhanced-cta ${styles.buttonClass} text-white border-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm`}
            >
              <Leaf className="w-5 h-5 mr-2" />
              Explore the Wild
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center dynamic-scroll-hint">
          <div className={`${styles.titleColor}/80 text-sm mb-2 font-medium transition-all duration-1000`}>Experience More</div>
          <ArrowDown className={`w-6 h-6 ${styles.titleColor}/80 animate-bounce transition-all duration-1000`} />
          <div className={`w-px h-16 bg-gradient-to-b from-current to-transparent mt-2 ${styles.titleColor}/80 transition-all duration-1000`} />
        </div>
      </div>
    </div>
  );
};

export default JungleHero;
