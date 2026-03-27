import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Paul Zev Nerubay Toiber',
      role: 'Presidente',
      bio: 'Ejecutivo con amplia trayectoria en dirección corporativa y estructuración financiera. Lidera la visión estratégica, la expansión institucional y la toma de decisiones de alto impacto con enfoque en sostenibilidad, gobierno corporativo y creación de valor de largo plazo.',
    },
    {
      name: 'Carlos Pereda del Camino',
      role: 'Secretario',
      bio: 'Especialista en gestión societaria y coordinación ejecutiva, con sólida experiencia en seguimiento de acuerdos del órgano de gobierno, control documental y cumplimiento interno. Asegura la trazabilidad administrativa y la ejecución ordenada de procesos críticos.',
    },
    {
      name: 'Juan Manuel Zepeda González',
      role: 'Representante Legal',
      bio: 'Profesional con amplia experiencia en derecho corporativo y regulatorio financiero. Encabeza la representación legal de la institución, la prevención de riesgos jurídicos y la supervisión del cumplimiento normativo ante autoridades y contrapartes estratégicas.',
    }
  ];

  return (
    <section className="py-24 bg-[#F8F7F4]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              
              <div className="p-7">
                <h3 
                  className="font-bold text-[#1C1C1C] text-lg mb-1" 
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {member.name}
                </h3>
                <p className="text-[#2D6A4F] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.bio}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;