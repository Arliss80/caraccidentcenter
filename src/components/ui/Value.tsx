import React from 'react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Value({ icon, title, description }: ValueProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-blue-50 rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}