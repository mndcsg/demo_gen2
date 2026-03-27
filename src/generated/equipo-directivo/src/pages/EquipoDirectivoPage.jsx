import React, { useState, useEffect } from 'react';
import Header from '../../../../components/Header.jsx';
import Footer from '../../../../components/Footer.jsx';
import TeamSection from '../components/TeamSection.jsx';
import ValuesSection from '../components/ValuesSection.jsx';
import HeroSection from '../components/HeroSection.jsx';

const EquipoDirectivoPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener('popstate', closeMenu);
    return () => window.removeEventListener('popstate', closeMenu);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#1C1C1C]">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <main className="flex-grow">
        <HeroSection />
        <TeamSection />
        <ValuesSection />
      
      </main>
      
      <Footer />
    </div>
  );
};

export default EquipoDirectivoPage;