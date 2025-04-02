import React, { useState } from 'react';
import { Car } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <Car className="h-8 w-8 text-blue-600" />
        <span className="text-xl font-bold">Car Accident Center</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://static.wixstatic.com/media/39a8a6_7770e5eb143f4d449e0f808b16978d38~mv2.webp"
        alt="Utah Car Accident Center Logo" 
        className="h-16 w-auto"
        onError={() => setImageError(true)}
      />
    </div>
  );
}