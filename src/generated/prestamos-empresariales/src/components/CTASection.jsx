import { Link } from "react-router-dom";
export const CTASection = () => {
  return (
    <section className="py-20 bg-[#F8F7F4] text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Hable con un Asesor Empresarial
        </h2>
        <p className="text-gray-500 mb-8">
          Nuestros especialistas en crédito empresarial están disponibles para analizar las necesidades de su negocio.
        </p>
        <Link 
          to="/contacto" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold rounded-md transition-colors whitespace-nowrap"
        >
          Contactar Ahora <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </section>
  );
};