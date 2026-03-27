import React from 'react';
import { theme } from '../theme.js';
import Header from '../../../../components/Header.jsx';
import Footer from '../../../../components/Footer.jsx';
import { Link } from "react-router-dom";

const Home = () => {
  // Hero section image URLs
  const heroImage = '/image/home-0.png';
  const whyUsImage = '/image/home-1.png';
  const techImage = '/image/home-2.png';
  const eduImages = [
    '/image/home-3.png',
    '/image/home-4.png',
    '/image/home-5.png'
  ];
  const ctaPattern = '/image/home-6.png';

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              alt="Guelt sede corporativa" 
              className="w-full h-full object-cover object-top" 
              src={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f17]/98 via-[#0d1f17]/85 to-[#0d1f17]/50"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-10 pt-28 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex gap-6">
                <div className="hidden md:flex flex-col items-center gap-2 pt-2 flex-shrink-0">
                  <div className="w-px h-16 bg-[#52B788]/60"></div>
                  <div className="w-2 h-2 rounded-full bg-[#52B788]"></div>
                  <div className="w-px flex-1 bg-[#52B788]/20"></div>
                </div>
                <div className="flex-1">
              
                  <h1 className="mb-8 leading-none" style={{ fontFamily: theme.fonts.playfair }}>
                    <span className="block text-[13px] font-normal text-gray-400 uppercase tracking-[0.25em] mb-4" style={{ fontFamily: theme.fonts.sans }}>Soluciones de Capital</span>
                    <span className="block text-6xl lg:text-[82px] font-bold text-white leading-[0.9]">Financiamiento</span>
                    <span className="block text-6xl lg:text-[82px] font-light text-[#52B788] leading-[0.9] italic ml-4 lg:ml-8">de élite</span>
                    <span className="block text-6xl lg:text-[82px] font-bold text-white leading-[0.9]">para México.</span>
                  </h1>
                  <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md" style={{ fontFamily: theme.fonts.sans }}>
                    Más de 15 años construyendo el futuro financiero de familias y empresas mexicanas con rigor, transparencia y excelencia.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/prestamos-personales" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-sm font-semibold rounded-sm transition-colors whitespace-nowrap cursor-pointer">
                      Préstamos Personales
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                    <Link to="/prestamos-empresariales" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-[#52B788]/70 text-white text-sm font-semibold rounded-sm transition-colors whitespace-nowrap cursor-pointer">
                      Préstamos Empresariales
                      <i className="ri-building-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <div className="border border-[#52B788]/20 bg-[#061209]/90 backdrop-blur-sm rounded-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                    <span className="text-white/60 text-[11px] uppercase tracking-widest" style={{ fontFamily: theme.fonts.sans }}>Nuestras Soluciones</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#52B788]/50"></div>
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                  <Link to="/prestamos-personales" className="flex items-start gap-4 px-6 py-5 border-b border-white/8 hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="w-9 h-9 flex items-center justify-center border border-[#52B788]/30 group-hover:border-[#52B788]/60 transition-colors rounded-sm flex-shrink-0 mt-0.5">
                      <i className="ri-user-line text-[#52B788] text-base"></i>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold mb-0.5" style={{ fontFamily: theme.fonts.sans }}>Préstamos Personales</div>
                      <div className="text-gray-500 text-xs leading-relaxed">Liquidez inmediata para proyectos personales y emergencias</div>
                    </div>
                    <i className="ri-arrow-right-up-line text-white/20 group-hover:text-[#52B788]/60 text-sm ml-auto flex-shrink-0 mt-1 transition-colors"></i>
                  </Link>
                  <Link to="/prestamos-empresariales" className="flex items-start gap-4 px-6 py-5 border-b border-white/8 hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="w-9 h-9 flex items-center justify-center border border-[#52B788]/30 group-hover:border-[#52B788]/60 transition-colors rounded-sm flex-shrink-0 mt-0.5">
                      <i className="ri-building-2-line text-[#52B788] text-base"></i>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold mb-0.5" style={{ fontFamily: theme.fonts.sans }}>Préstamos Empresariales</div>
                      <div className="text-gray-500 text-xs leading-relaxed">Capital de trabajo y expansión para su negocio</div>
                    </div>
                    <i className="ri-arrow-right-up-line text-white/20 group-hover:text-[#52B788]/60 text-sm ml-auto flex-shrink-0 mt-1 transition-colors"></i>
                  </Link>
                  <Link to="/sobre-nosotros" className="flex items-start gap-4 px-6 py-5 border-b border-white/8 hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="w-9 h-9 flex items-center justify-center border border-[#52B788]/30 group-hover:border-[#52B788]/60 transition-colors rounded-sm flex-shrink-0 mt-0.5">
                      <i className="ri-shield-check-line text-[#52B788] text-base"></i>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold mb-0.5" style={{ fontFamily: theme.fonts.sans }}>Gestión Patrimonial</div>
                      <div className="text-gray-500 text-xs leading-relaxed">Asesoría integral para proteger y hacer crecer su capital</div>
                    </div>
                    <i className="ri-arrow-right-up-line text-white/20 group-hover:text-[#52B788]/60 text-sm ml-auto flex-shrink-0 mt-1 transition-colors"></i>
                  </Link>
                  <Link to="/educacion-financiera" className="flex items-start gap-4 px-6 py-5 border-b border-white/8 hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="w-9 h-9 flex items-center justify-center border border-[#52B788]/30 group-hover:border-[#52B788]/60 transition-colors rounded-sm flex-shrink-0 mt-0.5">
                      <i className="ri-lightbulb-line text-[#52B788] text-base"></i>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold mb-0.5" style={{ fontFamily: theme.fonts.sans }}>Educación Financiera</div>
                      <div className="text-gray-500 text-xs leading-relaxed">Recursos y herramientas para decisiones informadas</div>
                    </div>
                    <i className="ri-arrow-right-up-line text-white/20 group-hover:text-[#52B788]/60 text-sm ml-auto flex-shrink-0 mt-1 transition-colors"></i>
                  </Link>
                  <div className="px-6 py-4 flex items-center justify-between">
                    <span className="text-gray-500 text-xs">¿No sabe por dónde empezar?</span>
                    <Link to="/contacto" className="text-[#52B788] text-xs font-semibold hover:text-white transition-colors whitespace-nowrap cursor-pointer">Contáctenos →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 border-t border-white/10 bg-[#0a1a10]/80 backdrop-blur-sm">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-5 flex items-center">
              <div className="flex items-center flex-1">
                <div className="text-center flex-1">
                  <div className="text-xl font-bold text-[#52B788]" style={{ fontFamily: theme.fonts.playfair }}>+15 años</div>
                  <div className="text-gray-500 text-[11px] mt-0.5 uppercase tracking-wider" style={{ fontFamily: theme.fonts.sans }}>de trayectoria</div>
                </div>
                <div className="w-px h-8 bg-white/10 flex-shrink-0"></div>
              </div>
              <div className="flex items-center flex-1">
                <div className="text-center flex-1">
                  <div className="text-xl font-bold text-[#52B788]" style={{ fontFamily: theme.fonts.playfair }}>80,000+</div>
                  <div className="text-gray-500 text-[11px] mt-0.5 uppercase tracking-wider" style={{ fontFamily: theme.fonts.sans }}>clientes atendidos</div>
                </div>
                <div className="w-px h-8 bg-white/10 flex-shrink-0"></div>
              </div>
              <div className="flex items-center flex-1">
                <div className="text-center flex-1">
                  <div className="text-xl font-bold text-[#52B788]" style={{ fontFamily: theme.fonts.playfair }}>98%</div>
                  <div className="text-gray-500 text-[11px] mt-0.5 uppercase tracking-wider" style={{ fontFamily: theme.fonts.sans }}>satisfacción</div>
                </div>
                <div className="w-px h-8 bg-white/10 flex-shrink-0"></div>
              </div>
              <div className="flex items-center flex-1">
                <div className="text-center flex-1">
                  <div className="text-xl font-bold text-[#52B788]" style={{ fontFamily: theme.fonts.playfair }}>3 ciudades</div>
                  <div className="text-gray-500 text-[11px] mt-0.5 uppercase tracking-wider" style={{ fontFamily: theme.fonts.sans }}>presencia nacional</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-[#F8F7F4]">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-widest mb-3">Nuestros Servicios</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-4" style={{ fontFamily: theme.fonts.playfair }}>Financiamiento a su Medida</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">Contamos con productos diseñados para atender necesidades específicas tanto de personas como de empresas.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#1B4332] rounded-2xl p-10 flex flex-col justify-between min-h-[420px]">
                <div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 mb-6">
                    <i className="ri-user-heart-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: theme.fonts.playfair }}>Préstamos Personales</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">Soluciones crediticias diseñadas para personas que buscan consolidar deudas, financiar proyectos o atender necesidades urgentes con condiciones claras y transparentes.</p>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                      <i className="ri-check-line text-[#52B788]"></i> Consolidación de deudas
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                      <i className="ri-check-line text-[#52B788]"></i> Proyectos personales
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                      <i className="ri-check-line text-[#52B788]"></i> Necesidades de emergencia
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                      <i className="ri-check-line text-[#52B788]"></i> Mejora de vivienda
                    </li>
                  </ul>
                </div>
                <Link to="/prestamos-personales" className="inline-flex items-center gap-2 mt-8 text-[#52B788] text-sm font-semibold hover:gap-3 transition-all whitespace-nowrap">
                  Conocer más <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
              <div className="bg-[#212121] rounded-2xl p-10 flex flex-col justify-between min-h-[420px]">
                <div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 mb-6">
                    <i className="ri-building-2-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: theme.fonts.playfair }}>Préstamos Empresariales</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">Financiamiento estratégico para empresas de todos los tamaños. Capital de trabajo, expansión, equipamiento y refinanciamiento con asesoría especializada.</p>
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                      <i className="ri-check-line text-[#52B788]"></i> Capital de trabajo
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                      <i className="ri-check-line text-[#52B788]"></i> Expansión de negocio
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                      <i className="ri-check-line text-[#52B788]"></i> Equipamiento industrial
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                      <i className="ri-check-line text-[#52B788]"></i> Refinanciamiento
                    </li>
                  </ul>
                </div>
                <Link to="/prestamos-empresariales" className="inline-flex items-center gap-2 mt-8 text-[#52B788] text-sm font-semibold hover:gap-3 transition-all whitespace-nowrap">
                  Conocer más <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-widest mb-3">Por Qué Elegirnos</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6 leading-tight" style={{ fontFamily: theme.fonts.playfair }}>Solidez y Confianza en Cada Paso</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">GUELT combina rigor institucional, tecnología avanzada y un servicio al cliente de excelencia para ser el aliado financiero que usted merece.</p>
                <img 
                  alt="Equipo de asesores GUELT" 
                  className="w-full h-64 object-cover object-top rounded-xl" 
                  src={whyUsImage}
                />
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-5 p-6 rounded-xl border border-gray-100 hover:border-[#2D6A4F]/30 hover:bg-[#F8F7F4] transition-all">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#1B4332]">
                    <i className="ri-shield-check-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400 font-mono">01</span>
                      <h3 className="text-[#1C1C1C] font-bold text-base">Cumplimiento Normativo</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">Operamos bajo las disposiciones de la CNBV y CONDUSEF. Cada proceso está diseñado para garantizar el cumplimiento riguroso del marco regulatorio mexicano.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 rounded-xl border border-gray-100 hover:border-[#2D6A4F]/30 hover:bg-[#F8F7F4] transition-all">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#1B4332]">
                    <i className="ri-eye-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400 font-mono">02</span>
                      <h3 className="text-[#1C1C1C] font-bold text-base">Transparencia Total</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">Comunicamos cada condición de manera clara antes de cualquier formalización. Sin letra pequeña, sin sorpresas: información completa desde el primer contacto.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 rounded-xl border border-gray-100 hover:border-[#2D6A4F]/30 hover:bg-[#F8F7F4] transition-all">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#1B4332]">
                    <i className="ri-cpu-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400 font-mono">03</span>
                      <h3 className="text-[#1C1C1C] font-bold text-base">Tecnología de Vanguardia</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">Plataforma digital segura con cifrado de nivel bancario. Nuestros sistemas protegen su información y agilizan los procesos sin comprometer la seguridad.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 rounded-xl border border-gray-100 hover:border-[#2D6A4F]/30 hover:bg-[#F8F7F4] transition-all">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#1B4332]">
                    <i className="ri-group-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400 font-mono">04</span>
                      <h3 className="text-[#1C1C1C] font-bold text-base">Equipo Especializado</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">Más de 200 profesionales con formación financiera y experiencia comprobada. Asesoría personalizada en cada etapa de su proceso crediticio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 bg-[#1B4332]">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#52B788] text-sm font-semibold uppercase tracking-widest mb-3">Innovación Tecnológica</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: theme.fonts.playfair }}>Tecnología que Protege y Agiliza</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">Nuestra plataforma digital utiliza inteligencia artificial, cifrado avanzado y análisis de datos para brindar un servicio seguro, eficiente y personalizado.</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <i className="ri-lock-2-line text-[#52B788] text-xl"></i>
                    <span className="text-gray-300 text-sm">Cifrado de nivel bancario</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <i className="ri-cpu-line text-[#52B788] text-xl"></i>
                    <span className="text-gray-300 text-sm">IA de análisis crediticio</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <i className="ri-smartphone-line text-[#52B788] text-xl"></i>
                    <span className="text-gray-300 text-sm">Plataforma multiplataforma</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
                    <i className="ri-database-2-line text-[#52B788] text-xl"></i>
                    <span className="text-gray-300 text-sm">Datos en tiempo real</span>
                  </div>
                </div>
                <Link to="/tecnologia-innovadora" className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white hover:bg-white/10 rounded-md transition-colors font-semibold whitespace-nowrap">
                  Explorar tecnología <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
              <div className="relative">
                <img 
                  alt="Plataforma tecnológica GUELT" 
                  className="w-full h-80 object-cover object-top rounded-2xl" 
                  src={techImage}
                />
               
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 bg-[#F8F7F4]">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-widest mb-3">Educación Financiera</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight" style={{ fontFamily: theme.fonts.playfair }}>Conozca Más sobre<br />sus Finanzas</h2>
              </div>
              <Link to="/educacion-financiera" className="inline-flex items-center gap-2 text-[#2D6A4F] font-semibold text-sm hover:gap-3 transition-all whitespace-nowrap flex-shrink-0">
                Ver todos los artículos <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eduImages.map((img, index) => (
                <article key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    <img 
                      alt={index === 0 ? "¿Qué es el Buró de Crédito y cómo impacta su historial?" : index === 1 ? "Cómo construir un presupuesto familiar efectivo en México" : "Diversificación de portafolio: principios para el inversor mexicano"} 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                      src={img}
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-emerald-900 text-white text-xs font-semibold rounded-full mb-3">{index === 0 ? 'Conceptos Básicos' : index === 1 ? 'Planificación' : 'Inversión'}</span>
                    <h3 className="text-[#1C1C1C] font-bold text-base leading-snug mb-3 line-clamp-2">
                      {index === 0 ? '¿Qué es el Buró de Crédito y cómo impacta su historial?' : 
                       index === 1 ? 'Cómo construir un presupuesto familiar efectivo en México' : 
                       'Diversificación de portafolio: principios para el inversor mexicano'}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {index === 0 ? 'El historial crediticio es uno de los factores más determinantes al solicitar un financiamiento. Conozca cómo se construye y cómo mantenerlo saludable.' : 
                       index === 1 ? 'La planificación presupuestaria es la base de la estabilidad financiera. Aprenda las metodologías más efectivas para organizar sus finanzas personales.' : 
                       'Comprender los principios de diversificación le permite gestionar mejor el riesgo en sus decisiones de inversión y proteger su patrimonio a largo plazo.'}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><i className="ri-time-line"></i> {index === 0 ? '5 min' : index === 1 ? '7 min' : '8 min'}</span>
                      <span className="flex items-center gap-1"><i className="ri-calendar-line"></i> {index === 0 ? '15 mar 2025' : index === 1 ? '10 mar 2025' : '5 mar 2025'}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

 
      </main>

      <Footer />

      {/* Watermark - Removed as requested for production deployment */}
    </div>
  );
};

export default Home;