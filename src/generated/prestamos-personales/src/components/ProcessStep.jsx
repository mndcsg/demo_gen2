export function ProcessStep({ number, title, description }) {
  return (
    <div className="relative">
      <div className="relative z-10 bg-white/10 rounded-xl p-7">
        <div 
          className="relative z-10 w-14 h-14 flex items-center justify-center bg-[#52B788] rounded-full text-white font-bold text-xl mb-5" 
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {number}
        </div>
        <h3 className="text-white font-bold text-base mb-3">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}