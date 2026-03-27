export const SectorsSection = () => {
  const sectors = [
    { icon: 'ri-store-2-line', name: 'Comercio al Detalle' },
    { icon: 'ri-restaurant-line', name: 'Alimentos y Bebidas' },
    { icon: 'ri-health-book-line', name: 'Salud y Bienestar' },
    { icon: 'ri-truck-line', name: 'Logística y Transporte' },
    { icon: 'ri-computer-line', name: 'Tecnología' },
    { icon: 'ri-home-office-line', name: 'Servicios Profesionales' },
    { icon: 'ri-plant-line', name: 'Agroindustria' },
    { icon: 'ri-building-4-line', name: 'Construcción' }
  ];

  return (
    <section className="py-24 bg-[#F8F7F4]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-widest mb-3">
            Alcance Sectorial
          </p>
          <h2 className="text-4xl font-bold text-[#1C1C1C]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Sectores que Atendemos
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#2D6A4F]/40 transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#F8F7F4] rounded-full">
                <i className={`${sector.icon} text-[#1B4332] text-2xl`}></i>
              </div>
              <span className="text-[#1C1C1C] text-sm font-medium text-center">
                {sector.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};