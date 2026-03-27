import React from 'react';

export const Card = ({ article }) => {
  const categoryColors = {
    'Conceptos Básicos': 'bg-emerald-900',
    'Planificación': 'bg-stone-800',
    'Inversión': 'bg-emerald-900',
    'Ahorro': 'bg-stone-700',
  };

  const categoryBg = categoryColors[article.category] || 'bg-emerald-900';

  return (
    <article className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
      <div className="h-52 overflow-hidden">
        <img 
          alt={article.title} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
          src={article.image} 
        />
      </div>
      <div className="p-7">
        <span className={`${categoryBg} text-white text-xs font-semibold rounded-full mb-4 px-3 py-1`}>{article.category}</span>
        <h2 className="text-[#1C1C1C] font-bold text-lg leading-snug mb-3 line-clamp-2 font-serif">{article.title}</h2>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5">{article.description}</p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <i className="ri-time-line"></i> {article.readTime}
          </span>
          <span className="flex items-center gap-1">
            <i className="ri-calendar-line"></i> {article.date}
          </span>
        </div>
      </div>
    </article>
  );
};