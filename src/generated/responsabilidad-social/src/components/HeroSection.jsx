import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-0 overflow-hidden">
      <div className="relative mx-4 lg:mx-10 rounded-3xl overflow-hidden" style={{ minHeight: '60vh' }}>
        <img 
          alt="Responsabilidad social GUELT" 
          className="w-full h-96 lg:h-[500px] object-cover object-top" 
          src="./image/responsabilidad-social-0.png" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17]/90 via-[#0d1f17]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-10 lg:p-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold uppercase tracking-widest mb-5">
            <i className="ri-heart-line text-[#52B788]"></i> Compromiso Social
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Construyendo<br />
            <span className="italic text-[#52B788]">Comunidades Fuertes</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;