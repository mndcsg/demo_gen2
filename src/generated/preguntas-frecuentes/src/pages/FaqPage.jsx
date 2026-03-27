import { useState, useEffect } from 'react';
import { Header } from '../../../../components/Header.jsx';
import { Footer } from '../../../../components/Footer.jsx';
import { FaqSection } from '../components/FaqSection.jsx';
import { SupportBanner } from '../components/SupportBanner.jsx';
import { TagFilter } from '../components/TagFilter.jsx';

export function FaqPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTag, setActiveTag] = useState('General');

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const faqItemsByTag = {
    General: [
      {
        question: '¿Qué es GUELT y cuáles son sus servicios?',
        answer:
          'GUELT es una empresa financiera mexicana especializada en préstamos personales y empresariales, con enfoque en transparencia, acompañamiento y respuesta ágil.',
      },
      {
        question: '¿En qué estados de México operan?',
        answer:
          'Operamos a nivel nacional con cobertura digital y atención especializada para clientes de todo México.',
      },
      {
        question: '¿Cómo protegen mis datos personales?',
        answer:
          'Aplicamos controles de seguridad, cifrado y políticas de tratamiento de datos conforme a la normativa mexicana vigente.',
      },
    ],
    'Préstamos Personales': [
      {
        question: '¿Qué monto puedo solicitar en un préstamo personal?',
        answer:
          'El monto depende del perfil de riesgo, capacidad de pago y documentación presentada. Durante la evaluación le compartimos el rango aprobado.',
      },
      {
        question: '¿Puedo usar el préstamo para consolidar deudas?',
        answer:
          'Sí. Una de las finalidades más comunes es la consolidación de deudas para simplificar pagos y mejorar el flujo mensual.',
      },
      {
        question: '¿Cuánto tarda la respuesta de aprobación?',
        answer:
          'En la mayoría de los casos, la preevaluación se entrega en 24 a 48 horas hábiles después de completar la información.',
      },
    ],
    'Préstamos Empresariales': [
      {
        question: '¿Qué tipos de negocio pueden aplicar?',
        answer:
          'Atendemos pymes y empresas en expansión de distintos sectores, siempre que cuenten con operación comprobable y documentación fiscal.',
      },
      {
        question: '¿Puedo solicitar capital para expansión?',
        answer:
          'Sí. Los préstamos empresariales pueden destinarse a capital de trabajo, compra de equipo, crecimiento comercial o refinanciamiento.',
      },
      {
        question: '¿Solicitan garantía en todos los casos?',
        answer:
          'No en todos los casos. La estructura de garantía depende del monto, historial del negocio y esquema financiero elegido.',
      },
    ],
    'Proceso y Pagos': [
      {
        question: '¿Cómo inicia el proceso de solicitud?',
        answer:
          'Inicia con una consulta y diagnóstico financiero. Luego se integra expediente, se evalúa perfil y se presenta propuesta formal.',
      },
      {
        question: '¿Qué métodos de pago aceptan?',
        answer:
          'Aceptamos pagos por transferencia y otros medios definidos en su contrato, con calendario claro desde la firma.',
      },
      {
        question: '¿Puedo adelantar pagos sin penalización?',
        answer:
          'Según el producto contratado, existen esquemas con pagos anticipados permitidos. Se detalla en las condiciones de su propuesta.',
      },
    ],
  };

  const tags = Object.keys(faqItemsByTag);
  const faqItems = faqItemsByTag[activeTag] || [];

  return (
    <div className="flex flex-col min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="flex-grow">
        <SupportBanner />
        
        <TagFilter tags={tags} activeTag={activeTag} onTagChange={setActiveTag} />
        
        <FaqSection key={activeTag} faqItems={faqItems} />
        
       
      </main>
      
      <Footer />
    </div>
  );
}