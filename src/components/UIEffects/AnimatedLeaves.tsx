import React from 'react';
import { Leaf } from 'lucide-react';

const AnimatedLeaves: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Leaf className="absolute top-20 left-[10%] text-indigo-200 h-12 w-12 animate-float" />
      <Leaf className="absolute top-40 right-[15%] text-purple-200 h-16 w-16 animate-float-delay-1" />
      <Leaf className="absolute bottom-20 left-[20%] text-pink-200 h-10 w-10 animate-float-delay-2" />
      <Leaf className="absolute bottom-40 right-[25%] text-indigo-200 h-14 w-14 animate-float-delay-3" />
    </div>
  );
};

export default AnimatedLeaves;