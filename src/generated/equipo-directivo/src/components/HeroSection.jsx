import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-[#1C1C1C]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-[#52B788] text-sm font-semibold uppercase tracking-widest mb-4">
          Liderazgo
        </p>
        <h1 
          className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" 
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Equipo Directivo con<br/>
          <span className="italic text-[#52B788]">Experiencia Comprobada</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
          Un equipo de profesionales con décadas de experiencia en el sector financiero mexicano, comprometido con la excelencia y la ética institucional.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;