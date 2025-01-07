import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div>
        <h1 className={`text-lg font-bold leading-tight ${className || 'text-gray-900'}`}>
          Car Accident Center
        </h1>
        <p className={`text-xs ${className || 'text-gray-600'}`}>
          Complete Healing, Complete Support
        </p>
      </div>
    </div>
  );
}