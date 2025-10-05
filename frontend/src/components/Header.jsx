import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4 sm:py-6 relative z-10">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5DAA4D] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg sm:text-xl">M</span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
            <span className="text-white">Medent </span>
            <span className="text-[#5DAA4D]">Technologies</span>
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href="tel:+918696403065"
              className="flex items-center gap-2 hover:text-[#5DAA4D] transition-colors text-xs sm:text-sm"
            >
              <Phone size={16} />
              <span>+91 8696403065</span>
            </a>
            <a
              href="mailto:hello@medenttechnologies.com"
              className="flex items-center gap-2 hover:text-[#5DAA4D] transition-colors text-xs sm:text-sm"
            >
              <Mail size={16} />
              <span>hello@medenttechnologies.com</span>
            </a>
            <Link
              to="/contact"
              className="bg-[#5DAA4D] hover:bg-[#3E7B2F] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all"
            >
              Get a Free Quote
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:bg-[#3E7B2F] p-3 rounded-full transition-all flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-1">
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black z-50 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 sm:px-8 lg:px-16 py-6">
            <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={() => setMenuOpen(false)}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5DAA4D] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">M</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
                <span className="text-white">Medent </span>
                <span className="text-[#5DAA4D]">Technologies</span>
              </h1>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#5DAA4D] transition-colors text-3xl sm:text-4xl"
            >
              ×
            </button>
          </div>

          <nav className="flex-1 flex items-center justify-center">
            <ul className="space-y-6 sm:space-y-8 text-center">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold transition-colors ${
                      isActive(item.path) ? "text-[#5DAA4D]" : "hover:text-[#5DAA4D]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
