import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Integridad',
      description: 'Actuamos con total transparencia y ética en cada decisión y proceso.'
    },
    {
      icon: 'ri-award-line',
      title: 'Excelencia',
      description: 'Elevamos constantemente nuestros estándares de servicio y operación.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Compromiso',
      description: 'Nos comprometemos con el bienestar financiero de cada cliente.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Sostenibilidad',
      description: 'Nuestro modelo de negocio impulsa el desarrollo económico responsable.'
    }
  ];

  return (
    <section className="py-24 bg-[#1B4332]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 
            className="text-4xl font-bold text-white mb-4" 
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Los Valores que Nos Guían
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Cada miembro del equipo directivo personifica los valores institucionales que definen nuestra cultura organizacional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white/10 rounded-xl p-7 text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                <i className={`${value.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-white font-bold mb-2">{value.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;