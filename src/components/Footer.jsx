import { Link } from "react-router-dom";
export function Footer() {
  const quickLinks = [
    {
      title: "Servicios",
      links: [
        { name: "Prestamos Personales", href: "/prestamos-personales" },
        { name: "Prestamos Empresariales", href: "/prestamos-empresariales" },
        { name: "Educacion Financiera", href: "/educacion-financiera" },
        { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "/sobre-nosotros" },
        { name: "Equipo Directivo", href: "/equipo-directivo" },
        { name: "Tecnologia Innovadora", href: "/tecnologia-innovadora" },
        { name: "Responsabilidad Social", href: "/responsabilidad-social" },
      ],
    },
  ];

  const contactInfo = [
    { icon: "ri-phone-line", text: "Av. Prolongación Bosque de la Reforma 1813\ninterior Piso 14 Oficina 1403\nColonia Lomas de Vista Hermosa\nC.P. 05100, Cuajimalpa de Morelos\nCiudad de México" }
  ];

  return (
    <footer className="bg-[#141414] text-white mt-auto">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
            <div className="w-16 h-16 flex items-center justify-center  rounded-sm group-hover:bg-[#3D8A6F] transition-colors">
              <img src="./logo.png" alt="Guelt logo" className="w-16 h-16 object-contain" />
            </div>
              <span className="font-bold text-white text-lg" style={{ fontFamily: "\"Playfair Display\", serif" }}>
              Guelt, S.A. de C.V., SOFOM, E.N.R. 
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empresa financiera mexicana comprometida con la excelencia, la transparencia y el desarrollo economico de nuestros clientes.
            </p>
          </div>

          {quickLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">{section.title}</h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-gray-400 text-sm hover:text-[#52B788] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">Contacto</h4>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <li key={item.icon + item.text} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                    <i className={`${item.icon} text-[#52B788] text-base`} />
                  </div>
                  <span className="text-gray-400 text-sm whitespace-pre-line">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

       
      </div>
    </footer>
  );
}

export default Footer;
