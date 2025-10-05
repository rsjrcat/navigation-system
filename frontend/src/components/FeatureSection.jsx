import React from "react";

export default function FeatureSection() {
return ( <div className="relative min-h-screen max-w-7xl mx-auto bg-black text-white overflow-hidden px-4 sm:px-6 lg:px-8 py-16">
{/* Radial Glow Backgrounds */} <div className="absolute top-20 right-1/9 w-72 sm:w-96 h-72 sm:h-96 bg-[#5DAA4D] rounded-full blur-3xl opacity-20"></div> <div className="absolute top-1/3 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-[#3E7B2F] rounded-full blur-3xl opacity-15"></div> <div className="absolute bottom-1/4 left-1/3 w-56 sm:w-72 h-56 sm:h-72 bg-[#5DAA4D] rounded-full blur-3xl opacity-10"></div>

  {/* Title */}
  <div className="relative z-10 text-center mb-16">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
      What We <span className="text-[#5DAA4D]">Do</span>
    </h2>
    <p className="text-gray-400 text-base sm:text-lg">
      Comprehensive digital solutions for your business
    </p>
  </div>

  {/* Grid of Services */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        icon: "🎨",
        title: "Web Design & Development",
        desc: "Stunning, responsive websites that captivate your audience and drive conversions.",
      },
      {
        icon: "📱",
        title: "Mobile App Development",
        desc: "Native and cross-platform apps that deliver seamless user experiences.",
      },
      {
        icon: "🤖",
        title: "AI & ML Development",
        desc: "Intelligent solutions powered by artificial intelligence and machine learning.",
      },
      {
        icon: "⚙️",
        title: "Custom Applications",
        desc: "Tailored software solutions designed to meet your unique business requirements.",
      },
      {
        icon: "🌐",
        title: "WordPress & Shopify Websites",
        desc: "Professional CMS and ecommerce platforms that are easy to manage and scale.",
      },
      {
        icon: "🛒",
        title: "Ecommerce Solutions",
        desc: "Complete online stores with secure payment gateways and inventory management.",
      },
    ].map((service, idx) => (
      <div
        key={idx}
        className="group relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-[#5DAA4D] transition-all duration-300 overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5DAA4D]/0 to-[#3E7B2F]/0 group-hover:from-[#5DAA4D]/10 group-hover:to-transparent transition-all duration-300"></div>
        <div className="absolute -inset-1 bg-[#5DAA4D] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>

        <div className="relative z-10">
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-lg sm:text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-400 text-sm sm:text-base">{service.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>


);
}
