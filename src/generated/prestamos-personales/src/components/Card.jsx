export function Card({ icon, title, description, features, className = '' }) {
  return (
    <div className={`p-8 border border-gray-100 rounded-xl hover:border-[#2D6A4F]/40 hover:shadow-sm transition-all group ${className}`}>
      <div className="w-12 h-12 flex items-center justify-center bg-[#1B4332] rounded-lg mb-5 group-hover:bg-[#2D6A4F] transition-colors">
        <i className={`${icon} text-white text-xl`}></i>
      </div>
      <h3 className="font-bold text-[#1C1C1C] text-lg mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
      <ul className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
            <i className="ri-check-line text-[#2D6A4F] text-sm"></i>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}