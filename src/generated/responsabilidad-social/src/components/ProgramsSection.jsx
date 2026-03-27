import React from 'react';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'Educación Financiera Comunitaria',
      description: 'Programa de talleres gratuitos en comunidades de bajos ingresos para promover la cultura financiera y el ahorro responsable.',
      value: '15,000+',
      valueLabel: 'personas beneficiadas',
      icon: 'ri-graduation-cap-line',
      image: './image/responsabilidad-social-1.png',
    },
    {
      title: 'Apoyo a Microempresarios',
      description: 'Respaldamos el crecimiento de pequeños negocios en zonas marginadas con acceso a financiamiento justo y capacitación empresarial.',
      value: '3,200+',
      valueLabel: 'microempresas apoyadas',
      icon: 'ri-seedling-line',
      image: './image/responsabilidad-social-2.png',
    },
    {
      title: 'Bienestar Financiero Familiar',
      description: 'Iniciativa de acompañamiento para familias en situación de sobreendeudamiento, ofreciendo asesoría gratuita y planes de recuperación.',
      value: '8,500+',
      valueLabel: 'familias asesoradas',
      icon: 'ri-heart-pulse-line',
      image: './image/responsabilidad-social-3.png',
    },
    {
      title: 'Desarrollo de Infraestructura Local',
      description: 'Participación activa en proyectos de infraestructura comunitaria en las ciudades donde operamos, generando impacto tangible en el entorno.',
      value: '12',
      valueLabel: 'proyectos completados',
      icon: 'ri-building-community-line',
      image: './image/responsabilidad-social-4.png',
    },
  ];

  return (
    <section className="py-24 bg-[#F8F7F4]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-widest mb-3">Programas</p>
          <h2 className="text-4xl font-bold text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nuestras Iniciativas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              <div className="h-56 overflow-hidden">
                <img 
                  alt={program.title} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                  src={program.image} 
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#1B4332] rounded-lg">
                    <i className={`${program.icon} text-white text-lg`}></i>
                  </div>
                  <h3 className="font-bold text-[#1C1C1C] text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {program.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {program.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#1B4332]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {program.value}
                  </span>
                  <span className="text-gray-400 text-sm">{program.valueLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;