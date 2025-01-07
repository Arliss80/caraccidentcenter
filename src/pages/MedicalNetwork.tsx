import React from 'react';
import Header from '../components/layout/Header';
import NetworkHero from '../components/ui/NetworkHero';
import AffiliateServices from '../components/sections/AffiliateServices';
import Contact from '../components/sections/Contact';
import { useLanguage } from '../hooks/useLanguage';

export default function MedicalNetwork() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NetworkHero
        title={t.medicalNetwork.hero.title}
        description={t.medicalNetwork.hero.description}
        imageSrc="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80"
        imageAlt={t.medicalNetwork.hero.imageAlt}
      />
      <div className="pt-12">
        <AffiliateServices />
        <Contact />
      </div>
    </div>
  );
}