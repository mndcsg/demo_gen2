import React from 'react';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          alt="Ciudad de México" 
          className="w-full h-full object-cover object-top opacity-20" 
          src="./image/sobre-nosotros-0.png"
        />
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-4">
          Nuestra Historia
        </p>
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight font-display">
          Construyendo <span className="italic text-primary-500">Confianza</span><br />desde 2008
        </h1>
        <p className="text-gray-300 text-xl max-w-2xl leading-relaxed">
          Somos una institución financiera mexicana comprometida con la excelencia, el cumplimiento normativo y el desarrollo económico de nuestros clientes.
        </p>
      </div>
    </section>
  );
};