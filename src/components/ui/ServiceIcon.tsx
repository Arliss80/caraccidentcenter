import React from 'react';

interface ServiceIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceIcon({ icon, title, description }: ServiceIconProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <div className="p-3 bg-blue-50 rounded-xl w-fit mb-4">
        <div className="text-blue-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}