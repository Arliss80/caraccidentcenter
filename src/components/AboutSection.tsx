import React from 'react';
import { useLanguage } from './LanguageContext';
import { Shield, Users, Clock } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80"
              alt="Team of professionals"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('about_title')}</h2>
            <p className="text-gray-600 mb-8">{t('about_description')}</p>
            
            <div className="space-y-4">
              <Stat
                icon={<Shield className="w-6 h-6 text-blue-600" />}
                title={t('about_stat_1_title')}
                description={t('about_stat_1_desc')}
              />
              <Stat
                icon={<Users className="w-6 h-6 text-blue-600" />}
                title={t('about_stat_2_title')}
                description={t('about_stat_2_desc')}
              />
              <Stat
                icon={<Clock className="w-6 h-6 text-blue-600" />}
                title={t('about_stat_3_title')}
                description={t('about_stat_3_desc')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Stat({ icon, title, description }: StatProps) {
  return (
    <div className="flex items-start">
      <div className="p-2 bg-blue-50 rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}