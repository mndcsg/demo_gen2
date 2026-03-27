import React from 'react';

export const CategoryTabs = () => {
  const categories = [
    { name: 'Todos', active: true },
    { name: 'Conceptos Básicos', active: false },
    { name: 'Planificación', active: false },
    { name: 'Inversión', active: false },
    { name: 'Ahorro', active: false },
  ];

  return (
    <section className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-4 flex items-center gap-3 overflow-x-auto">
        {categories.map((category, index) => (
          <button 
            key={index}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${category.active ? 'bg-[#1B4332] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
};