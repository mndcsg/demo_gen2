import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Header(props) {
  const {
    isMenuOpen: controlledIsMenuOpen,
    setIsMenuOpen: controlledSetIsMenuOpen,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = props || {};

  const [internalOpen, setInternalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [creditsOpen, setCreditsOpen] = useState(false);
  const closeCreditsTimerRef = useRef(null);

  const isOpen = useMemo(() => {
    if (typeof controlledIsMenuOpen === "boolean") return controlledIsMenuOpen;
    if (typeof mobileMenuOpen === "boolean") return mobileMenuOpen;
    return internalOpen;
  }, [controlledIsMenuOpen, mobileMenuOpen, internalOpen]);

  const setOpen = (value) => {
    if (typeof controlledSetIsMenuOpen === "function") controlledSetIsMenuOpen(value);
    if (typeof setMobileMenuOpen === "function") setMobileMenuOpen(value);
    if (typeof controlledSetIsMenuOpen !== "function" && typeof setMobileMenuOpen !== "function") {
      setInternalOpen(value);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeCreditsTimerRef.current) {
        clearTimeout(closeCreditsTimerRef.current);
      }
    };
  }, []);

  const openCreditsMenu = () => {
    if (closeCreditsTimerRef.current) clearTimeout(closeCreditsTimerRef.current);
    setCreditsOpen(true);
  };

  const closeCreditsMenu = () => {
    if (closeCreditsTimerRef.current) clearTimeout(closeCreditsTimerRef.current);
    closeCreditsTimerRef.current = setTimeout(() => setCreditsOpen(false), 180);
  };

  const topNav = [
    { label: "Portada", href: "/" },
    { label: "Quiénes Somos", href: "/sobre-nosotros" },
    { label: "Directiva", href: "/equipo-directivo" },
];

const creditNav = [
    { label: "Créditos Personales", href: "/prestamos-personales" },
    { label: "Créditos Empresariales", href: "/prestamos-empresariales" },
];

const rightNav = [
    { label: "Innovación", href: "/tecnologia-innovadora" },
    { label: "Capacitación", href: "/educacion-financiera" },
    { label: "Consultas", href: "/preguntas-frecuentes" },
    { label: "Compromiso Social", href: "/responsabilidad-social" },
];

const mobileNav = [
    ...topNav,
    ...creditNav,
    ...rightNav,

    
];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#111111]">
   

      <div className="max-w-screen-2xl mx-auto px-4 lg:px-6 h-[68px] hidden lg:grid grid-cols-3 items-center">
        <nav className="flex items-center gap-1 justify-start">
          {topNav.map((item) => (
            <Link key={item.href} to={item.href} className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap tracking-wide">
              {item.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={openCreditsMenu}
            onMouseLeave={closeCreditsMenu}
          >
            <button
              type="button"
              onClick={() => setCreditsOpen((prev) => !prev)}
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap tracking-wide inline-flex items-center gap-1"
              aria-expanded={creditsOpen}
              aria-haspopup="menu"
            >
              Créditos
              <i className={`ri-arrow-down-s-line text-sm transition-transform ${creditsOpen ? "rotate-180" : ""}`} />
            </button>
            {creditsOpen && (
              <div className="absolute left-0 top-full pt-2 w-56 z-50">
                <div className="rounded-lg border border-white/10 bg-[#111111] shadow-xl py-2">
                  {creditNav.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setCreditsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex justify-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center  rounded-sm group-hover:bg-[#3D8A6F] transition-colors">
              <img src="/logo.png" alt="Guelt logo" className="w-12 h-12 object-contain" />
            </div>
            <span className="font-bold text-white text-base tracking-wide leading-none" style={{ fontFamily: "\"Playfair Display\", serif" }}>
              Guelt, S.A. de C.V., SOFOM, E.N.R.
            </span>
          </Link>
        </div>

        <nav className="flex items-center gap-1 justify-end">
          {rightNav.map((item) => (
            <Link key={item.href} to={item.href} className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap tracking-wide">
              {item.label}
            </Link>
          ))}
          <div className="w-px h-5 bg-white/10 mx-2" />
     
        </nav>
      </div>

      <div className="lg:hidden flex items-center justify-between px-5 h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-sm">
            <img src="/logo.png" alt="Guelt logo" className="w-6 h-6 object-contain" />
          </div>
          <span className="font-bold text-white text-base tracking-wider" style={{ fontFamily: "\"Playfair Display\", serif" }}>
          Guelt, S.A. de C.V., SOFOM, E.N.R.
          </span>
        </Link>
        <button className="w-10 h-10 flex items-center justify-center text-white" onClick={() => setOpen(!isOpen)}>
          <i className="ri-menu-3-line text-2xl" />
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-white/10">
          <div className="max-w-screen-xl mx-auto px-5 py-3 space-y-2">
            {mobileNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
