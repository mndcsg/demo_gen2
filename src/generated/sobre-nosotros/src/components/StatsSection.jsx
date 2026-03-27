import React from 'react';

export const StatsSection = () => {
  const stats = [
    { value: '15+', label: 'Años de experiencia', color: 'text-primary-500' },
    { value: '80,000+', label: 'Clientes atendidos', color: 'text-primary-500' },
    { value: '200+', label: 'Profesionales', color: 'text-primary-500' },
    { value: '3', label: 'Ciudades de presencia', color: 'text-primary-500' }
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`text-5xl font-bold ${stat.color} mb-2 font-display`}>
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};