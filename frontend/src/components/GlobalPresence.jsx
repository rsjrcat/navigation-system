import React, { useState } from 'react';

export default function GlobalPresence() {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const locations = [
    { name: 'India', x: '68%', y: '48%', color: 'from-orange-500 to-orange-600' },
    { name: 'Australia', x: '82%', y: '75%', color: 'from-blue-500 to-blue-600' },
    { name: 'USA', x: '18%', y: '42%', color: 'from-purple-500 to-purple-600' },
    { name: 'Dubai, UAE', x: '60%', y: '48%', color: 'from-pink-500 to-pink-600' },
    { name: 'Iraq', x: '58%', y: '44%', color: 'from-cyan-500 to-cyan-600' },
    { name: 'Nigeria', x: '48%', y: '52%', color: 'from-green-500 to-green-600' }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Presence</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Delivering Digital Solutions Across the Globe
          </p>
        </div>

        {/* World Map Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Map Background with Grid */}
          <div className="relative aspect-[2/1] bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            {/* Real World Map Image */}
            <img 
              src="https://raw.githubusercontent.com/djaiss/mapsicon/master/all/world/vector.svg" 
              alt="World Map" 
              className="absolute inset-0 w-full h-full object-contain opacity-30 filter brightness-75"
            />
            
            {/* Dotted overlay effect */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(156, 163, 175, 0.4) 1px, transparent 1px)',
              backgroundSize: '15px 15px'
            }}></div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {locations.map((loc, i) => (
                locations.slice(i + 1).map((nextLoc, j) => (
                  <line
                    key={`${i}-${j}`}
                    x1={loc.x}
                    y1={loc.y}
                    x2={nextLoc.x}
                    y2={nextLoc.y}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    opacity="0.3"
                    className="transition-opacity duration-300"
                  />
                ))
              ))}
            </svg>

            {/* Location Markers */}
            {locations.map((location, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: location.x, top: location.y }}
                onMouseEnter={() => setHoveredCountry(location.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Pulsing Ring */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${location.color} animate-ping opacity-75`}
                  style={{ width: '24px', height: '24px', marginLeft: '-12px', marginTop: '-12px' }}
                ></div>
                
                {/* Marker Dot */}
                <div className={`relative w-6 h-6 rounded-full bg-gradient-to-r ${location.color} shadow-lg flex items-center justify-center transform transition-transform duration-300 ${hoveredCountry === location.name ? 'scale-125' : 'scale-100'}`}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Location Label */}
                <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${hoveredCountry === location.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <div className={`bg-gradient-to-r ${location.color} px-4 py-2 rounded-lg shadow-xl`}>
                    <span className="text-white font-semibold text-sm">{location.name}</span>
                  </div>
                  <div className={`w-2 h-2 bg-gradient-to-r ${location.color} transform rotate-45 mx-auto -mt-1`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-2">6+</div>
              <div className="text-gray-400 text-sm">Countries</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Satisfaction</div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}