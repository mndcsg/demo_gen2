import React, { useState } from 'react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-[#1C1C1C]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-serif">Reciba Consejos Mensuales</h2>
        <p className="text-gray-400 mb-8">
          Suscríbase a nuestro boletín y reciba artículos exclusivos de educación financiera directamente en su correo.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <input 
            placeholder="Su correo electrónico" 
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#52B788]"
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold rounded-md transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            Suscribirse <i className="ri-arrow-right-line"></i>
          </button>
        </form>
        {isSubscribed && (
          <div className="mt-4 text-green-400 text-sm font-medium">
            ¡Gracias por suscribirse!
          </div>
        )}
      </div>
    </section>
  );
};