import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface PIPBenefitsProps {
  benefits: string[];
}

export default function PIPBenefits({ benefits }: PIPBenefitsProps) {
  return (
    <div className="space-y-4">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-start space-x-3">
          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
          <span className="text-gray-700">{benefit}</span>
        </div>
      ))}
    </div>
  );
}