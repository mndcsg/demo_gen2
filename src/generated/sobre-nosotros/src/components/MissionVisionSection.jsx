import React from 'react';

export const MissionVisionSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="p-10 bg-light-100 rounded-2xl border border-gray-100">
          <div className="w-12 h-12 flex items-center justify-center bg-primary-900 rounded-lg mb-6">
            <i className="ri-focus-2-line text-white text-xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-dark-900 mb-4 font-display">
            Nuestra Misión
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Proveer soluciones financieras accesibles, transparentes y responsables que impulsen el desarrollo económico de familias y empresas mexicanas, actuando siempre con los más altos estándares de ética e integridad.
          </p>
        </div>
        
        <div className="p-10 bg-primary-900 rounded-2xl">
          <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mb-6">
            <i className="ri-eye-line text-white text-xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 font-display">
            Nuestra Visión
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Ser la institución financiera de referencia en México, reconocida por nuestra solidez, innovación tecnológica y el impacto positivo generado en la vida de nuestros clientes y comunidades.
          </p>
        </div>
      </div>
    </section>
  );
};