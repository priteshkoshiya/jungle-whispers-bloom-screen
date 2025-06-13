
import React from 'react';
import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WeatherControllerProps {
  currentWeather: number;
  onWeatherChange: (index: number) => void;
  weatherEffects: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
}

const WeatherController = ({ currentWeather, onWeatherChange, weatherEffects }: WeatherControllerProps) => {
  return (
    <div className="absolute top-4 left-4 z-30">
      <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-3 border border-white/20 shadow-lg">
        <div className="flex gap-2">
          {weatherEffects.map((weather, index) => (
            <Button
              key={weather.name}
              onClick={() => onWeatherChange(index)}
              variant="ghost"
              size="sm"
              className={`p-2 h-auto transition-all duration-300 ${
                currentWeather === index
                  ? 'bg-white/30 scale-110 shadow-lg'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {weather.icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherController;
