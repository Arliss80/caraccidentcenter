import React from 'react';

interface SeparatorProps {
  className?: string;
}

export default function Separator({ className = '' }: SeparatorProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <hr className="border-t border-gray-200" />
    </div>
  );
}