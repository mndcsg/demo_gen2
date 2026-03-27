import React from 'react';

export const TimelineSection = () => {
  const timelineItems = [
    {
      year: '2008',
      title: 'Fundación',
      description: 'GUELT es fundada en la Ciudad de México por un grupo de profesionales financieros con visión de crear una institución crediticia centrada en el cliente mexicano.'
    },
    {
      year: '2012',
      title: 'Expansión Regional',
      description: 'Apertura de operaciones en Guadalajara y Monterrey, consolidando nuestra presencia en los tres principales mercados financieros del país.'
    },
    {
      year: '2016',
      title: 'Transformación Digital',
      description: 'Lanzamiento de nuestra plataforma digital y sistemas de evaluación crediticia con inteligencia artificial, reduciendo tiempos de respuesta en un 65%.'
    },
    {
      year: '2020',
      title: 'Resiliencia',
      description: 'Implementación de programas especiales de apoyo a clientes durante la pandemia, manteniendo la estabilidad operativa y reforzando el vínculo de confianza.'
    },
    {
      year: '2024',
      title: 'Liderazgo Reconocido',
      description: 'Reconocidos como una de las instituciones financieras no bancarias más confiables de México por diversas publicaciones del sector.'
    }
  ];

  return (
    <section className="py-24 bg-light-100">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-primary-800 text-sm font-semibold uppercase tracking-widest mb-3">
            Trayectoria
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 font-display">
            Nuestro Camino
          </h2>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-800/20"></div>
          
          <div className="flex flex-col gap-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center rounded-full bg-primary-900 border-4 border-light-100 shadow-md z-10">
                  <span className="text-primary-500 text-xs font-bold">{item.year}</span>
                </div>
                <div className="flex-1 pt-3 pb-6">
                  <h3 className="text-dark-900 font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};