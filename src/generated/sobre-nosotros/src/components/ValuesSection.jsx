import React from 'react';

export const ValuesSection = () => {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Integridad',
      description: 'Actuamos con plena transparencia y ética en cada proceso, decisión y relación con nuestros clientes.',
      color: 'bg-primary-900'
    },
    {
      icon: 'ri-award-line',
      title: 'Excelencia',
      description: 'Establecemos y superamos constantemente los más altos estándares del sector financiero mexicano.',
      color: 'bg-primary-900'
    },
    {
      icon: 'ri-heart-line',
      title: 'Compromiso',
      description: 'Nos comprometemos genuinamente con el bienestar financiero de cada cliente y su familia.',
      color: 'bg-primary-900'
    },
    {
      icon: 'ri-global-line',
      title: 'Responsabilidad',
      description: 'Operamos con conciencia de nuestro impacto social, apoyando el desarrollo económico de México.',
      color: 'bg-primary-900'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-primary-800 text-sm font-semibold uppercase tracking-widest mb-3">
            Principios
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 font-display">
            Nuestros Valores
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="p-8 border border-gray-100 rounded-xl hover:border-primary-800/30 hover:bg-light-100 transition-all text-center"
            >
              <div className={`w-14 h-14 flex items-center justify-center ${value.color} rounded-full mx-auto mb-5`}>
                <i className={`${value.icon} text-white text-xl`}></i>
              </div>
              <h3 className="font-bold text-dark-900 text-lg mb-3">{value.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};