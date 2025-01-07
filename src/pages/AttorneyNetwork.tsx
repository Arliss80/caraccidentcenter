import React from 'react';
import Header from '../components/layout/Header';
import NetworkHero from '../components/ui/NetworkHero';
import AttorneyNetwork from '../components/sections/AttorneyNetwork';
import Contact from '../components/sections/Contact';
import { useLanguage } from '../hooks/useLanguage';

export default function AttorneyNetworkPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NetworkHero
        title={t.attorneyNetwork.hero.title}
        description={t.attorneyNetwork.hero.description}
        imageSrc="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
        imageAlt={t.attorneyNetwork.hero.imageAlt}
      />
      <div className="pt-12">
        <AttorneyNetwork />
        <Contact />
      </div>
    </div>
  );
}