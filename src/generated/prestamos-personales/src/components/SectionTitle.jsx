export function SectionTitle({ title, subtitle, description }) {
  return (
    <div className="text-center mb-16">
      <p className="text-[#2D6A4F] text-sm font-semibold uppercase tracking-widest mb-3">
        {subtitle}
      </p>
      <h2 
        className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-4" 
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {title}
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}