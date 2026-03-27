export const SolutionsSection = () => {
  const solutions = [
    {
      icon: 'ri-funds-line',
      title: 'Capital de Trabajo',
      description: 'Mantenga la operación diaria de su empresa con liquidez oportuna para cubrir nómina, inventario y gastos operativos.',
      badge: 'Más solicitado'
    },
    {
      icon: 'ri-expand-right-line',
      title: 'Expansión de Negocio',
      description: 'Financie la apertura de nuevas sucursales, entrada a nuevos mercados o el crecimiento estratégico de su empresa.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Equipamiento Industrial',
      description: 'Adquiera maquinaria, tecnología y equipos especializados para elevar la productividad y competitividad de su negocio.'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Refinanciamiento Empresarial',
      description: 'Restructure sus obligaciones financieras actuales en condiciones más favorables, optimizando el flujo de su empresa.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-widest mb-3">
            Soluciones
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Para Cada Etapa de Su Empresa
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="flex gap-6 p-8 border-l-4 border-[#1B4332] bg-[#F8F7F4] rounded-r-xl"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#1B4332] rounded-lg">
                <i className={`${solution.icon} text-white text-xl`}></i>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-[#1C1C1C] text-lg">{solution.title}</h3>
                  {solution.badge && (
                    <span className="px-2 py-0.5 bg-[#1B4332] text-white text-xs rounded-full whitespace-nowrap">
                      {solution.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};