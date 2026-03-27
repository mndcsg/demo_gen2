import React from 'react';
import { Header } from '../../../../components/Header.jsx';
import { Footer } from '../../../../components/Footer.jsx';
import { Watermark } from '../components/Watermark.jsx';
import { CategoryTabs } from '../components/CategoryTabs.jsx';
import { NewsletterSection } from '../components/NewsletterSection.jsx';
import { Card } from '../components/Card.jsx';

const articles = [
  {
    title: '¿Qué es el Buró de Crédito y cómo impacta su historial?',
    category: 'Conceptos Básicos',
    description: 'El historial crediticio es uno de los factores más determinantes al solicitar un financiamiento. Conozca cómo se construye y cómo mantenerlo saludable.',
    image: './image/educacion-financiera-0.png',
    readTime: '5 min de lectura',
    date: '15 mar 2025',
  },
  {
    title: 'Cómo construir un presupuesto familiar efectivo en México',
    category: 'Planificación',
    description: 'La planificación presupuestaria es la base de la estabilidad financiera. Aprenda las metodologías más efectivas para organizar sus finanzas personales.',
    image: './image/educacion-financiera-1.png',
    readTime: '7 min de lectura',
    date: '10 mar 2025',
  },
  {
    title: 'Diversificación de portafolio: principios para el inversor mexicano',
    category: 'Inversión',
    description: 'Comprender los principios de diversificación le permite gestionar mejor el riesgo en sus decisiones de inversión y proteger su patrimonio a largo plazo.',
    image: './image/educacion-financiera-2.png',
    readTime: '8 min de lectura',
    date: '5 mar 2025',
  },
  {
    title: 'Estrategias de ahorro: la regla 50/30/20 adaptada a México',
    category: 'Ahorro',
    description: 'Esta metodología internacional ajustada a la realidad económica mexicana puede transformar su relación con el dinero y acelerar sus metas financieras.',
    image: './image/educacion-financiera-3.png',
    readTime: '6 min de lectura',
    date: '28 feb 2025',
  },
  {
    title: 'Diferencias entre crédito simple y línea de crédito revolvente',
    category: 'Conceptos Básicos',
    description: 'Conocer los tipos de productos crediticios disponibles le permite tomar decisiones más informadas y seleccionar la herramienta financiera más adecuada.',
    image: './image/educacion-financiera-4.png',
    readTime: '5 min de lectura',
    date: '20 feb 2025',
  },
  {
    title: 'Fondo de emergencia: cuánto necesita y cómo construirlo',
    category: 'Planificación',
    description: 'Un fondo de emergencia sólido es el primer pilar de la seguridad financiera familiar. Descubra cuánto necesita acumular y las mejores estrategias para lograrlo.',
    image: './image/educacion-financiera-5.png',
    readTime: '6 min de lectura',
    date: '12 feb 2025',
  },
];

export const EducacionFinancieraPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-[#F8F7F4]">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 text-center">
            <p className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-widest mb-4">Conocimiento Financiero</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1C1C1C] mb-6 leading-tight font-serif">
              Centro de<br /><span className="italic text-[#2D6A4F]">Educación Financiera</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
              Conocimiento práctico y accesible para tomar mejores decisiones financieras y construir un futuro económico más sólido.
            </p>
          </div>
        </section>

   

        {/* Articles Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
      </main>

      <Footer />
      <Watermark />
    </div>
  );
};