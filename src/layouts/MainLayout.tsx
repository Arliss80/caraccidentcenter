import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import PIPInfo from '../components/sections/PIPInfo';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Separator from '../components/ui/Separator';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <PIPInfo />
      <Separator />
      <Services />
      <Separator />
      <Testimonials />
      <Separator />
      <Contact />
    </div>
  );
}