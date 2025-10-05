import React, { useState } from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import logo from "../assets/logo1.png";

export default function HeroSection() {
  const [phone, setPhone] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Radial Glow Background */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#5DAA4D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-[#3E7B2F] rounded-full blur-3xl opacity-15"></div>
      <div className="absolute bottom-1/4 left-1/3 w-56 sm:w-72 h-56 sm:h-72 bg-[#5DAA4D] rounded-full blur-3xl opacity-10"></div>

      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4 sm:py-6 relative z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={logo} alt="Medent Technologies Logo" className="h-8 sm:h-10 w-auto" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
            <span className="text-white">Medent </span>
            <span className="text-[#5DAA4D]">Technologies</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <a href="tel:+918696403065" className="flex items-center gap-2 hover:text-[#5DAA4D] transition-colors text-xs sm:text-sm">
            <Phone size={16} />
            <span>+91 8696403065</span>
          </a>
          <a href="mailto:hello@medenttechnologies.com" className="flex items-center gap-2 hover:text-[#5DAA4D] transition-colors text-xs sm:text-sm">
            <Mail size={16} />
            <span>hello@medenttechnologies.com</span>
          </a>
          <button className="bg-[#5DAA4D] hover:bg-[#3E7B2F] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all">
            Get a Free Quote
          </button>
          </div>
          {/* Mobile Menu Button */}
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

      {/* Fullscreen Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 lg:px-16 py-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={logo} alt="Medent Technologies Logo" className="h-8 sm:h-10 w-auto" />
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">
                <span className="text-white">Medent </span>
                <span className="text-[#5DAA4D]">Technologies</span>
              </h1>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#5DAA4D] transition-colors text-3xl sm:text-4xl"
            >
              ×
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex items-center justify-center">
            <ul className="space-y-6 sm:space-y-8 text-center">
              {["Home", "Services", "Portfolio", "About Us", "Contact"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold hover:text-[#5DAA4D] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-8 lg:px-16 pt-16 sm:pt-24 pb-12 sm:pb-16 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <p className="text-gray-400 uppercase tracking-wider text-xs font-medium mb-6 sm:mb-8">
            THE BEST DIGITAL SERVICE PROVIDER
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 leading-tight">
            Stunning <span className="text-[#5DAA4D]">Websites</span> &<br />
            Powerful{" "}
            <span className="relative inline-block">
              <span className="text-[#3E7B2F]">Apps</span>
              <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-[#3E7B2F]"></div>
            </span>{" "}
            That Perform
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Transform your business with cutting-edge websites and mobile
            applications. Our team creates custom, scalable solutions that help
            businesses of all sizes establish a powerful online presence and
            connect with audiences worldwide.
          </p>

          {/* CTA Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 max-w-2xl mx-auto mb-8">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Your Mobile No *"
              className="w-full sm:flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full sm:rounded-l-full bg-zinc-900 border border-zinc-800 focus:border-[#5DAA4D] focus:outline-none text-sm placeholder-gray-500"
            />
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#5DAA4D] hover:bg-[#3E7B2F] rounded-full sm:rounded-r-full font-medium transition-all text-sm whitespace-nowrap">
              Request a Callback
            </button>
          </div>
        </div>
      </main>

      {/* Floating Action Buttons (hidden on xs) */}
      <div className="hidden sm:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col z-50">
        <button className="bg-[#5DAA4D] hover:bg-[#3E7B2F] px-4 sm:px-5 py-3 sm:py-4 transition-all flex flex-col items-center justify-center gap-1 text-xs">
          <Phone size={18} />
          <span className="font-medium">Call Us</span>
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 px-4 sm:px-5 py-3 sm:py-4 transition-all flex flex-col items-center justify-center gap-1 text-xs border-t border-zinc-700">
          <Mail size={18} />
          <span className="font-medium">Mail</span>
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 px-4 sm:px-5 py-3 sm:py-4 transition-all flex flex-col items-center justify-center gap-1 text-xs border-t border-zinc-700">
          <MessageSquare size={18} />
          <span className="font-medium">Inquiry</span>
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <button className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 w-12 sm:w-14 h-12 sm:h-14 bg-[#5DAA4D] hover:bg-[#3E7B2F] rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 z-50">
        <svg
          className="w-6 sm:w-8 h-6 sm:h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>
    </div>
  );
}
