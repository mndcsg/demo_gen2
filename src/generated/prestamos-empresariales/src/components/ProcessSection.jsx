export const ProcessSection = () => {
  const steps = [
    { number: '1', title: 'Consulta Inicial', description: 'Contacte a nuestro equipo de asesores especializados para una evaluación inicial de su situación.' },
    { number: '2', title: 'Análisis de Perfil', description: 'Nuestro equipo realiza un análisis integral de su perfil financiero con total confidencialidad.' },
    { number: '3', title: 'Propuesta a Medida', description: 'Reciba una propuesta personalizada con condiciones adaptadas a sus capacidades y necesidades reales.' },
    { number: '4', title: 'Formalización', description: 'Revise y formalice el acuerdo con total transparencia documental y asesoría jurídica incluida.' }
  ];

  return (
    <section className="py-24 bg-[#212121]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[#52B788] text-sm font-semibold uppercase tracking-widest mb-3">
            Proceso Empresarial
          </p>
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Cómo Funciona
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-xl p-7"
            >
              <div 
                className="w-12 h-12 flex items-center justify-center bg-[#2D6A4F] rounded-full text-white font-bold text-lg mb-5" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {step.number}
              </div>
              <h3 className="text-white font-bold text-base mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};