import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#5DAA4D] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <h3 className="text-xl font-bold">
                <span className="text-white">Medent </span>
                <span className="text-[#5DAA4D]">Technologies</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Creating stunning digital experiences that help businesses grow and succeed online.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 hover:bg-[#5DAA4D] p-2 rounded-full transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 hover:bg-[#5DAA4D] p-2 rounded-full transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 hover:bg-[#5DAA4D] p-2 rounded-full transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 hover:bg-[#5DAA4D] p-2 rounded-full transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#5DAA4D] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#5DAA4D] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-[#5DAA4D] transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#5DAA4D] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#5DAA4D] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Web Design & Development</li>
              <li className="text-gray-400 text-sm">Mobile App Development</li>
              <li className="text-gray-400 text-sm">AI & ML Development</li>
              <li className="text-gray-400 text-sm">Custom Applications</li>
              <li className="text-gray-400 text-sm">Ecommerce Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-[#5DAA4D] mt-1 flex-shrink-0" />
                <a href="tel:+918696403065" className="text-gray-400 hover:text-[#5DAA4D] text-sm transition-colors">
                  +91 8696403065
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-[#5DAA4D] mt-1 flex-shrink-0" />
                <a href="mailto:hello@medenttechnologies.com" className="text-gray-400 hover:text-[#5DAA4D] text-sm transition-colors break-all">
                  hello@medenttechnologies.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#5DAA4D] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2025 Medent Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-[#5DAA4D] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#5DAA4D] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
