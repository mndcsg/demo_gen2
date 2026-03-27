import React from 'react';
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 
          className="text-3xl font-bold text-[#1C1C1C] mb-4" 
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Forme Parte de Nuestro Equipo
        </h2>
        <p className="text-gray-500 mb-8">
          Buscamos profesionales comprometidos con la excelencia financiera y el impacto social positivo.
        </p>
        <Link 
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold rounded-md transition-colors whitespace-nowrap" 
          to="/contacto"
        >
          Contactar Recursos Humanos <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;