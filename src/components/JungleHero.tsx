
import React from 'react';
import { ArrowDown, Leaf } from 'lucide-react';
import AnimatedLeaves from './AnimatedLeaves';
import FloatingParticles from './FloatingParticles';
import { Button } from '@/components/ui/button';

const JungleHero = () => {
  const handleExploreClick = () => {
    // Smooth scroll to next section
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Base jungle backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/40 to-emerald-800/60" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="jungle-mist absolute top-0 left-0 w-full h-full opacity-30" />
          <div className="jungle-depth absolute inset-0 opacity-20" />
        </div>
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Animated Leaves */}
      <AnimatedLeaves />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Glassmorphism Content Panel */}
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 p-8 sm:p-12 shadow-2xl jungle-panel">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-emerald-300 mr-3 animate-pulse" />
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent flex-1" />
              <Leaf className="w-8 h-8 text-emerald-300 ml-3 animate-pulse" />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 jungle-title">
              Welcome to the
              <span className="block text-emerald-300 jungle-highlight">
                Jungle of Life
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-emerald-100/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Step into a world where nature meets design. Discover the magic of growth, 
              the power of green living, and the beauty of sustainable harmony.
            </p>

            <Button 
              onClick={handleExploreClick}
              className="jungle-cta bg-emerald-500/80 hover:bg-emerald-400/90 text-white border-2 border-emerald-300/50 hover:border-emerald-200 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Leaf className="w-5 h-5 mr-2" />
              Explore Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center jungle-scroll-hint">
          <div className="text-emerald-300/70 text-sm mb-2 font-medium">Discover More</div>
          <ArrowDown className="w-6 h-6 text-emerald-300/70 animate-bounce" />
          <div className="w-px h-16 bg-gradient-to-b from-emerald-300/70 to-transparent mt-2" />
        </div>
      </div>
    </div>
  );
};

export default JungleHero;
