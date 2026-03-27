import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import PhilosophySection from './components/PhilosophySection.jsx';
import ProgramsSection from './components/ProgramsSection.jsx';

import Footer from '../../../components/Footer.jsx';

function App() {
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-grow">
        <HeroSection />
        <PhilosophySection />
        <ProgramsSection />
       
     
      </main>
      <Footer />
    </div>
  );
}

export default App;