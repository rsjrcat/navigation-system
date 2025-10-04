import React, { useState } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function FeatureSection() {
  const [phone, setPhone] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-black text-white relative overflow-hidden">
      
{/* What We Do Section */}
        <div className="mt-32 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
              What We <span className="text-orange-500">Do</span>
            </h2>
            <p className="text-gray-400 text-lg">Comprehensive digital solutions for your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-orange-500 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent transition-all duration-300"></div>
              <div className="absolute -inset-1 bg-orange-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3">Web Design & Development</h3>
                <p className="text-gray-400 text-sm">Stunning, responsive websites that captivate your audience and drive conversions.</p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-cyan-400 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:to-transparent transition-all duration-300"></div>
              <div className="absolute -inset-1 bg-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-3">Mobile App Development</h3>
                <p className="text-gray-400 text-sm">Native and cross-platform mobile apps that deliver seamless user experiences.</p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-purple-500 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-300"></div>
              <div className="absolute -inset-1 bg-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold mb-3">AI & ML Development</h3>
                <p className="text-gray-400 text-sm">Intelligent solutions powered by artificial intelligence and machine learning.</p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="group relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-orange-500 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent transition-all duration-300"></div>
              <div className="absolute -inset-1 bg-orange-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-3">Custom Applications</h3>
                <p className="text-gray-400 text-sm">Tailored software solutions designed to meet your unique business requirements.</p>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="group relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-cyan-400 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:to-transparent transition-all duration-300"></div>
              <div className="absolute -inset-1 bg-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-3">WordPress & Shopify Websites</h3>
                <p className="text-gray-400 text-sm">Professional CMS and ecommerce platforms that are easy to manage and scale.</p>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="group relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-purple-500 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-300"></div>
              <div className="absolute -inset-1 bg-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold mb-3">Ecommerce Solutions</h3>
                <p className="text-gray-400 text-sm">Complete online stores with secure payment gateways and inventory management.</p>
              </div>
            </div>
          </div>
        </div>



    </div>
  );
}