
import React from 'react';
import { Leaf } from 'lucide-react';

const AnimatedLeaves = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Large tropical leaves */}
      <div className="absolute top-20 left-10 jungle-leaf-1">
        <Leaf className="w-24 h-24 text-emerald-400/30 transform rotate-12" />
      </div>
      
      <div className="absolute top-40 right-16 jungle-leaf-2">
        <Leaf className="w-32 h-32 text-emerald-500/25 transform -rotate-24" />
      </div>
      
      <div className="absolute bottom-32 left-20 jungle-leaf-3">
        <Leaf className="w-28 h-28 text-emerald-300/35 transform rotate-45" />
      </div>
      
      <div className="absolute top-60 left-1/3 jungle-leaf-4">
        <Leaf className="w-20 h-20 text-emerald-600/30 transform -rotate-12" />
      </div>
      
      <div className="absolute bottom-40 right-24 jungle-leaf-5">
        <Leaf className="w-36 h-36 text-emerald-400/20 transform rotate-30" />
      </div>

      {/* Additional decorative leaves for mobile */}
      <div className="absolute top-80 right-8 jungle-leaf-6 sm:hidden">
        <Leaf className="w-16 h-16 text-emerald-500/25 transform -rotate-45" />
      </div>
    </div>
  );
};

export default AnimatedLeaves;
