import { Link } from "react-router-dom";
export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          alt="Soluciones para empresas" 
          className="w-full h-full object-cover object-top" 
          src="./image/prestamos-empresariales-0.png" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f17]/95 via-[#0d1f17]/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-[#52B788] text-sm font-semibold uppercase tracking-widest mb-4">
          Préstamos Empresariales
        </p>
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 max-w-2xl leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          Impulse Su <span className="italic text-[#52B788]">Empresa</span>
        </h1>
        <p className="text-gray-300 text-xl max-w-xl leading-relaxed mb-10">
          Financiamiento estratégico para empresas de todos los tamaños. Soluciones diseñadas para potenciar el crecimiento de su negocio en México.
        </p>
        
      </div>
    </section>
  );
};