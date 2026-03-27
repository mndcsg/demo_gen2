import { theme } from "../theme";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const capabilities = [
  "Cifrado de nivel bancario",
  "IA de analisis crediticio",
  "Monitoreo en tiempo real",
  "Plataforma multiplataforma",
];

export default function TecnologiaInnovadoraPage() {
  return (
    <div className="min-h-screen bg-[#0d1f17] text-white pt-28">
      <Header />
      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 pb-16">
        <p className="text-[#52B788] text-sm font-semibold uppercase tracking-widest mb-3">Innovacion Tecnologica</p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: theme.fonts.display }}>
          Tecnologia que Protege y Agiliza
        </h1>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Nuestra plataforma digital utiliza inteligencia artificial, cifrado avanzado y analitica para brindar una experiencia segura, eficiente y personalizada.
        </p>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 lg:px-10 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-white/10 border border-white/15 p-8">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: theme.fonts.display }}>
            Capacidades Clave
          </h2>
          <ul className="space-y-3">
            {capabilities.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-100">
                <i className="ri-check-line text-[#52B788]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-[#1B4332] border border-[#52B788]/30 p-8">
          <h3 className="text-xl font-semibold mb-4">Seguridad Certificada</h3>
          <p className="text-gray-200 mb-6">
            Infraestructura con estandares de ciberseguridad y trazabilidad de operaciones para proteger la informacion financiera de nuestros clientes.
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-black/20 p-3">ISO 27001</div>
            <div className="rounded-lg bg-black/20 p-3">Monitoreo 24/7</div>
            <div className="rounded-lg bg-black/20 p-3">Backup cifrado</div>
            <div className="rounded-lg bg-black/20 p-3">Autenticacion robusta</div>
          </div>
        </div>
      </section>

     
      <Footer />
    </div>
  );
}
