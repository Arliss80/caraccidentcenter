import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../../ui/Button';
import { CONTACT_PHONE_HREF } from '../../../constants/contact';

interface PIPAssistanceProps {
  title: string;
  points: string[];
  cta: string;
}

export default function PIPAssistance({ title, points, cta }: PIPAssistanceProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-4 mb-6">
        {points.map((point, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant="secondary" 
        href={CONTACT_PHONE_HREF}
        className="w-full sm:w-auto group"
      >
        {cta}
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}