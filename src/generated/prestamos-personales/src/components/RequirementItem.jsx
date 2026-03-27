export function RequirementItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1B4332] flex-shrink-0 mt-0.5">
        <i className="ri-check-line text-white text-xs"></i>
      </div>
      <span className="text-gray-600 text-sm">{children}</span>
    </li>
  );
}