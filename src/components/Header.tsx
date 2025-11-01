import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // fecha com ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setIsOpen(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="relative max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" onClick={close} className="text-2xl font-bold text-blue-900">
          Guilherme Henry
        </Link>

        {/* desktop */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          {links.map(l => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `hover:text-blue-900 ${isActive ? "text-blue-900 font-semibold" : ""}`
                }
                onClick={close}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* botão mobile */}
        <button
          className="md:hidden text-2xl text-blue-900"
          onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          id="mobile-menu"
          className={`absolute left-0 right-0 top-full md:hidden overflow-hidden transition-[max-height,opacity] duration-300
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          style={{ zIndex: 60 }}
        >
          <ul className="bg-white text-gray-800 shadow-xl border-t border-slate-200 flex flex-col items-center justify-center gap-1 py-3">
            {links.map(l => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  onClick={close}
                  className="block w-full px-5 py-3 text-base font-medium hover:bg-slate-50 hover:text-blue-900 "
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
