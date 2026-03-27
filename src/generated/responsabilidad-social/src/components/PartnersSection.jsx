import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'UNAM', title: 'Universidad Nacional Autónoma de México' },
    { name: 'AMFE', title: 'Asociación Mexicana de Fintech y Empresas' },
    { name: 'CONCAMIN', title: 'Confederación de Cámaras Industriales' },
    { name: 'COPARMEX', title: 'Confederación Patronal de la República Mexicana' },
    { name: 'GIZ México', title: 'Cooperación Alemana al Desarrollo Sustentable' },
    { name: 'INADEM', title: 'Instituto Nacional del Emprendedor' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Alianzas Estratégicas
          </h2>
          <p className="text-gray-500 mt-3">
            Colaboramos con instituciones de primer nivel para maximizar el impacto social.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              title={partner.title} 
              className="flex items-center justify-center p-5 bg-[#F8F7F4] rounded-xl border border-gray-100 hover:border-[#2D6A4F]/30 transition-all"
            >
              <span className="text-gray-500 font-bold text-sm text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;