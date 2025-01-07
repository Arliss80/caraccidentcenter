import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
}