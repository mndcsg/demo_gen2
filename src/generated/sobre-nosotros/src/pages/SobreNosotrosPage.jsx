import React, { useState, useEffect } from 'react';
import { Header } from '../../../../components/Header.jsx';
import { Footer } from '../../../../components/Footer.jsx';
import { HeroSection } from '../components/HeroSection.jsx';
import { MissionVisionSection } from '../components/MissionVisionSection.jsx';
import { TimelineSection } from '../components/TimelineSection.jsx';
import { ValuesSection } from '../components/ValuesSection.jsx';
import { StatsSection } from '../components/StatsSection.jsx';

export const SobreNosotrosPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="flex-grow">
        <HeroSection />
        <MissionVisionSection />
        <TimelineSection />
        <ValuesSection />
        <StatsSection />
      </main>
      
      <Footer />
    </div>
  );
};