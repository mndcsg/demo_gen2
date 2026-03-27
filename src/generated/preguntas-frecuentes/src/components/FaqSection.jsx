import { useState } from 'react';

export function FaqSection({ faqItems }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#F8F7F4]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-3">
          {faqItems.length === 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 text-gray-500">
              No hay preguntas para esta categoria por el momento.
            </div>
          )}
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border bg-white transition-all duration-300 ${
                openIndex === index
                  ? 'border-[#2D6A4F]/30 shadow-[0_12px_26px_rgba(27,67,50,0.10)]'
                  : 'border-gray-200 hover:border-[#2D6A4F]/25 hover:shadow-[0_8px_18px_rgba(0,0,0,0.04)]'
              }`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`text-[15px] leading-relaxed font-semibold ${
                  openIndex === index ? 'text-[#1B4332]' : 'text-[#1C1C1C]'
                }`}>
                  {item.question}
                </span>
                <div className={`h-8 w-8 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  openIndex === index
                    ? 'bg-[#1B4332] border-[#1B4332]'
                    : 'bg-[#F3F4F6] border-gray-200'
                }`}>
                  <i className={`ri-${openIndex === index ? 'subtract-line' : 'add-line'} text-sm ${openIndex === index ? 'text-white' : 'text-gray-600'}`}></i>
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 pt-1 border-t border-gray-100 text-gray-600 text-[15px] leading-relaxed bg-[#FCFCFB]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}