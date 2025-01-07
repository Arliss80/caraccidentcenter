import React from 'react';
import { Scale, Stethoscope, DollarSign } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();
  
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">{t('why_title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Scale className="h-8 w-8 text-blue-600" />}
            title={t('why_1_title')}
            description={t('why_1_desc')}
          />
          <FeatureCard
            icon={<Stethoscope className="h-8 w-8 text-blue-600" />}
            title={t('why_2_title')}
            description={t('why_2_desc')}
          />
          <FeatureCard
            icon={<DollarSign className="h-8 w-8 text-blue-600" />}
            title={t('why_3_title')}
            description={t('why_3_desc')}
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center p-6">
      <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}