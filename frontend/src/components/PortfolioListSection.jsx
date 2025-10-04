import React, { useState, useEffect } from "react";
import { Award, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    image:
      "https://res.cloudinary.com/dsol90tiu/image/upload/v1759520277/Screenshot_2025-10-04_010724_lkgh7q.png",
    title: "Creative Agency Website",
    description:
      "A modern agency website showcasing branding, digital strategy, and web design expertise.",
    color: "from-orange-500/20 to-pink-500/20",
    accent: "bg-gradient-to-r from-orange-500 to-pink-500",
  },
  {
    image:
      "https://res.cloudinary.com/dsol90tiu/image/upload/v1759520333/Screenshot_2025-10-04_010808_qyyhmr.png",
    title: "E-Commerce Platform",
    description:
      "A sleek e-commerce storefront optimized for user experience and smooth checkout flow.",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Portfolio Showcase",
    description:
      "Personal portfolio site crafted to highlight projects with animations and smooth UX.",
    color: "from-purple-500/20 to-indigo-500/20",
    accent: "bg-gradient-to-r from-purple-500 to-indigo-500",
  },
  {
    image: "https://images.unsplash.com/photo-1581093588401-22c3c50fda51",
    title: "Startup Landing Page",
    description:
      "Conversion-focused landing page designed for startups to acquire early users.",
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
];

const Card = ({ image, title, description, color, accent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="h-screen flex items-center justify-center sticky top-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-[90vw] max-w-7xl rounded-3xl overflow-hidden transition-all duration-700 shadow-2xl`}
      >
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-700 ${
            isHovered ? "opacity-100" : ""
          }`}
        ></div>

        {/* Main Card */}
        <div className="relative bg-zinc-900 backdrop-blur-xl border border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10">
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative group">
              <div className="relative overflow-hidden rounded-2xl">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 animate-pulse"></div>
                )}

                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-64 md:h-80 object-cover transition-all duration-700 ${
                    isHovered
                      ? "scale-110 brightness-110"
                      : "scale-100 brightness-100"
                  } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                {/* Featured Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full backdrop-blur-md bg-white/10 border border-white/20 transition-all duration-500 ${
                    isHovered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  <span className="text-white text-xs font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </span>
                </div>
              </div>

              {/* Glow */}
              <div
                className={`absolute -inset-1 ${accent} opacity-0 blur-2xl transition-opacity duration-700 -z-10 ${
                  isHovered ? "opacity-30" : ""
                }`}
              ></div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {title}
                </h3>
                <div
                  className={`h-1 w-20 rounded-full ${accent} transition-all duration-500 ${
                    isHovered ? "w-32" : ""
                  }`}
                ></div>
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  className={`group relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                >
                  <div className={`absolute inset-0 ${accent}`}></div>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button className="group px-6 py-3 rounded-xl font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    Live Demo
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["React", "Tailwind", "Animation"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>
    </div>
  );
};

const PortfolioListSection = () => {
  return (
    <section className="relative bg-black">
      {/* Section wrapper ensures stickiness is scoped */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* Sticky Header (scoped to this section only) */}
        <div className=" top-0 z-50 backdrop-blur-xl bg-black/80 ">
          <div className="text-center ">
            <h2 className="text-4xl lg:text-5xl text-white font-serif font-bold">
  Featured <span className="text-orange-500">Work</span>
</h2>
<p className="text-gray-400 text-lg">
  Showcasing some of our best projects and creative solutions
</p>

          </div>
        </div>

        {/* Cards */}
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioListSection;
