import React from 'react';
import { useLanguage } from './LanguageContext';
import Button from './ui/Button';
import GradientText from './ui/GradientText';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-48 -left-48 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <GradientText>{t('hero_title')}</GradientText>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('hero_subtitle')}
            </p>
            <div className="flex gap-4">
              <Button 
                variant="primary" 
                size="lg"
                className="group transform hover:scale-105 transition-all duration-200"
              >
                {t('cta_free_consultation')}
                <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up delay-200">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80"
                alt="Professional legal team"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold text-blue-600">15+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}