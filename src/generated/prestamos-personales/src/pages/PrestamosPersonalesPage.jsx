import { Header } from '../../../../components/Header.jsx';
import { Footer } from '../../../../components/Footer.jsx';
import { SectionTitle } from '../components/SectionTitle.jsx';
import { Card } from '../components/Card.jsx';
import { ProcessStep } from '../components/ProcessStep.jsx';
import { RequirementItem } from '../components/RequirementItem.jsx';
import { Link } from "react-router-dom";

export function PrestamosPersonalesPage() {
  const creditLines = [
    {
      icon: 'ri-links-line',
      title: 'Consolidación de Deudas',
      description: 'Simplifique sus compromisos financieros unificando múltiples obligaciones en un solo plan estructurado y manejable.',
      features: [
        'Un solo pago mensual',
        'Proceso simplificado',
        'Asesoría personalizada',
        'Plazos flexibles',
      ],
    },
    {
      icon: 'ri-building-line',
      title: 'Proyectos Personales',
      description: 'Financiamiento para sus metas más importantes: remodelación de hogar, educación, viajes o cualquier proyecto de vida.',
      features: [
        'Evaluación rápida',
        'Destinos múltiples',
        'Sin garantías hipotecarias',
        'Respuesta ágil',
      ],
    },
    {
      icon: 'ri-first-aid-kit-line',
      title: 'Necesidades de Emergencia',
      description: 'Apoyo financiero inmediato ante imprevistos médicos, familiares o situaciones urgentes que requieren liquidez.',
      features: [
        'Proceso expedito',
        'Atención prioritaria',
        'Disponibilidad continua',
        'Apoyo integral',
      ],
    },
    {
      icon: 'ri-home-gear-line',
      title: 'Mejora de Vivienda',
      description: 'Transforme su hogar en el espacio que siempre soñó con soluciones financieras adaptadas a proyectos de construcción y remodelación.',
      features: [
        'Especializado en inmuebles',
        'Plazos extendidos',
        'Evaluación técnica',
        'Seguimiento de proyecto',
      ],
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Inversión Educativa',
      description: 'Invierta en el futuro académico de su familia con financiamiento para estudios de nivel superior, posgrados y certificaciones.',
      features: [
        'Cobertura integral',
        'Plazos académicos',
        'Enfoque en rendimiento',
        'Flexibilidad de pago',
      ],
    },
    {
      icon: 'ri-car-line',
      title: 'Adquisición de Vehículo',
      description: 'Acceda a su próximo automóvil con planes de financiamiento competitivos y procesos claros y transparentes.',
      features: [
        'Nuevos y seminuevos',
        'Proceso digital',
        'Cobertura nacional',
        'Evaluación inmediata',
      ],
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Consulta Inicial',
      description: 'Contacte a nuestro equipo de asesores especializados para una evaluación inicial de su situación.',
    },
    {
      number: '2',
      title: 'Análisis de Perfil',
      description: 'Nuestro equipo realiza un análisis integral de su perfil financiero con total confidencialidad.',
    },
    {
      number: '3',
      title: 'Propuesta a Medida',
      description: 'Reciba una propuesta personalizada con condiciones adaptadas a sus capacidades y necesidades reales.',
    },
    {
      number: '4',
      title: 'Formalización',
      description: 'Revise y formalice el acuerdo con total transparencia documental y asesoría jurídica incluida.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#F8F7F4]">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-widest mb-4">
                  Préstamos Personales
                </p>
                <h1 
                  className="text-5xl lg:text-6xl font-bold text-[#1C1C1C] mb-6 leading-tight" 
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Financiamiento para Sus Metas de Vida
                </h1>
                <p className="text-gray-500 text-xl leading-relaxed mb-8">
                  Soluciones crediticias transparentes y responsables diseñadas para acompañarle en cada etapa de su vida personal y familiar.
                </p>
                <div className="flex flex-wrap gap-4">
                  
                  <Link 
                    to="/preguntas-frecuentes" 
                    className="inline-flex items-center gap-2 px-7 py-4 border border-gray-300 text-[#1C1C1C] hover:border-[#2D6A4F] font-semibold rounded-md transition-colors whitespace-nowrap"
                  >
                    Ver FAQ
                  </Link>
                </div>
              </div>
              <div>
                <img 
                  alt="Asesoría de préstamos personales" 
                  className="w-full h-96 object-cover object-top rounded-2xl" 
                  src="/image/prestamos-personales-0.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Credit Lines Section */}
        <section className="py-24 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <SectionTitle 
              title="Nuestras Modalidades" 
              subtitle="Líneas de Crédito" 
              description="Cada modalidad está diseñada para atender una necesidad específica con condiciones transparentes y proceso claro."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creditLines.map((line, index) => (
                <Card 
                  key={index}
                  icon={line.icon}
                  title={line.title}
                  description={line.description}
                  features={line.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-[#1B4332]">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <SectionTitle 
              title="Simple y Transparente" 
              subtitle="Proceso" 
              description="Cuatro pasos claros para acceder al financiamiento que necesita."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <ProcessStep 
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-24 bg-[#F8F7F4]">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-widest mb-3">
                Requisitos Generales
              </p>
              <h2 
                className="text-4xl font-bold text-[#1C1C1C] mb-6" 
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Documentación Necesaria
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Para agilizar el proceso de evaluación, le recomendamos tener disponible la siguiente documentación básica. Nuestros asesores le orientarán sobre requisitos específicos según su perfil.
              </p>
              <ul className="flex flex-col gap-4">
                <RequirementItem>
                  Identificación oficial vigente (INE / Pasaporte)
                </RequirementItem>
                <RequirementItem>
                  Comprobante de domicilio reciente (no mayor a 3 meses)
                </RequirementItem>
                <RequirementItem>
                  Comprobantes de ingresos (últimos 3 meses)
                </RequirementItem>
                <RequirementItem>
                  CURP actualizado
                </RequirementItem>
                <RequirementItem>
                  Estado de cuenta bancario (últimos 3 meses)
                </RequirementItem>
              </ul>
            </div>
         
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}