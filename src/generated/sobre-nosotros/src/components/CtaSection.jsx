import React from 'react';
import { Link } from "react-router-dom";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-dark-900 mb-4 font-display">
          ¿Listo para conocernos?
        </h2>
        <p className="text-gray-500 mb-8">
          Nuestro equipo está disponible para responder sus consultas y presentarle nuestras soluciones.
        </p>
        <Link 
          to="/contacto" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-800 hover:bg-primary-900 text-white font-semibold rounded-md transition-colors whitespace-nowrap"
        >
          Contactar Ahora <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </section>
  );
};