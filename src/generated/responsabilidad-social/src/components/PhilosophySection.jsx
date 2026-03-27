import React from 'react';

const PhilosophySection = () => {
  const stats = [
    { value: '15,000+', label: 'Personas beneficiadas' },
    { value: '3,200+', label: 'Microempresas apoyadas' },
    { value: '8,500+', label: 'Familias asesoradas' },
    { value: '12', label: 'Proyectos comunitarios' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-widest mb-3">Nuestra Filosofía</p>
          <h2 className="text-4xl font-bold text-[#1C1C1C] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Más Allá del Negocio
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            En GUELT creemos que el éxito empresarial y el bienestar social son complementarios. Por eso, cada año destinamos recursos significativos a programas que fortalecen a las comunidades mexicanas.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Nuestros programas de responsabilidad social se enfocan en educación financiera, apoyo a microempresarios y desarrollo comunitario en las regiones donde operamos.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-7 bg-[#F8F7F4] rounded-xl border border-gray-100 text-center">
              <div className="text-3xl font-bold text-[#1B4332] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;