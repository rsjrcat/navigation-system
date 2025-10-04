import React, { useState } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function HeroSection() {
  const [phone, setPhone] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Radial Glow Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-15"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
      
      {/* Header */}
      <header className="flex items-center justify-between px-8 lg:px-16 py-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold">
            <span className="text-white">inv</span>
            <span className="text-orange-500">❍</span>
            <span className="text-white">idea</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="tel:+917292050505" className="flex items-center gap-2 hover:text-orange-500 transition-colors text-sm">
            <Phone size={16} />
            <span>+91 7292 050505</span>
          </a>
          <a href="mailto:hello@invoidea.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors text-sm">
            <Mail size={16} />
            <span>hello@invoidea.com</span>
          </a>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded-full text-sm font-medium transition-all">
            Get a Free Quote
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:bg-orange-600 px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center"
          >
            <div className="flex flex-col gap-1">
              <div className="w-4 h-0.5 bg-white"></div>
              <div className="w-4 h-0.5 bg-white"></div>
              <div className="w-4 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Navigation Menu */}
      <div className={`fixed inset-0 bg-black z-50 transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between px-8 lg:px-16 py-6">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold">
                <span className="text-white">inv</span>
                <span className="text-orange-500">❍</span>
                <span className="text-white">idea</span>
              </div>
            </div>
            <button 
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-orange-500 transition-colors text-4xl"
            >
              ×
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex items-center justify-center">
            <ul className="space-y-8 text-center">
              <li>
                <a href="#home" className="text-5xl font-bold hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-5xl font-bold hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-5xl font-bold hover:text-orange-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-5xl font-bold hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-5xl font-bold hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Menu Footer */}
          <div className="px-8 lg:px-16 py-8 border-t border-zinc-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <a href="tel:+917292050505" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <Phone size={20} />
                <span>+91 7292 050505</span>
              </a>
              <a href="mailto:hello@invoidea.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                <Mail size={20} />
                <span>hello@invoidea.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <main className="container mx-auto px-8 lg:px-16 pt-24 pb-16 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <p className="text-gray-400 uppercase tracking-wider text-xs font-medium mb-8">
            THE BEST DIGITAL SERVICE PROVIDER
          </p>
          
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
            Stunning{' '}
            <span className="text-orange-500">
              Websites
            </span>{' '}
            &<br />
            Powerful{' '}
            <span className="relative inline-block">
              <span className="text-cyan-400">
                Apps
              </span>
              <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-cyan-400"></div>
            </span>
            {' '}That Perform
          </h1>

          <p className="text-base lg:text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Transform your business with cutting-edge websites and mobile applications. Our team creates 
            custom, scalable solutions that help businesses of all sizes establish a powerful online presence 
            and connect with audiences worldwide.
          </p>

          {/* CTA Form */}
          <div className="flex items-center justify-center gap-0 max-w-2xl mx-auto mb-8">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Your Mobile No  *"
              className="flex-1 px-6 py-4 rounded-l-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 focus:outline-none text-sm placeholder-gray-500"
            />
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-r-full font-medium transition-all text-sm whitespace-nowrap">
              Request a Callback
            </button>
          </div>
        </div>
      </main>

      {/* Floating Action Buttons - Right Side */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col z-50">
        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-4 transition-all flex flex-col items-center justify-center gap-1 text-xs">
          <Phone size={20} />
          <span className="font-medium">Call Us Now</span>
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 px-5 py-4 transition-all flex flex-col items-center justify-center gap-1 text-xs border-t border-zinc-700">
          <Mail size={20} />
          <span className="font-medium">Mail To Us</span>
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 px-5 py-4 transition-all flex flex-col items-center justify-center gap-1 text-xs border-t border-zinc-700">
          <MessageSquare size={20} />
          <span className="font-medium">Inquiry</span>
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 z-50">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>
    </div>
  );
}