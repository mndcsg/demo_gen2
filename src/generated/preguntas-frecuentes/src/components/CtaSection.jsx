import { Link } from "react-router-dom";
export function CtaSection() {
  return (
    <section className="py-20 bg-[#1B4332] text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          ¿No Encontró Su Respuesta?
        </h2>
        <p className="text-gray-300 mb-8">
          Nuestros asesores están disponibles para resolver cualquier consulta de manera personalizada.
        </p>
        <Link to="/contacto" className="btn-primary">
          Contactar Asesor <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </section>
  );
}