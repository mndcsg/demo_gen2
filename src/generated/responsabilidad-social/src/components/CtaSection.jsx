import React from 'react';
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-[#1B4332] text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Únase a Nuestros Programas
        </h2>
        <p className="text-gray-300 mb-8">
          ¿Su organización está interesada en colaborar con nuestros programas de responsabilidad social?
        </p>
        <Link 
          to="/contacto" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1B4332] font-bold rounded-md hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Contactar Área Social <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;