export function TagFilter({ tags, activeTag, onTagChange }) {
  return (
    <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-4 flex items-center gap-2.5 overflow-x-auto">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagChange(tag)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
              activeTag === tag
                ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-[0_6px_16px_rgba(27,67,50,0.25)]'
                : 'bg-[#F3F4F6] text-gray-600 border-gray-200 hover:bg-white hover:border-[#2D6A4F]/40 hover:text-[#1B4332]'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}