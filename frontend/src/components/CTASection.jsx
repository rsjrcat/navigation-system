import React from "react";
import BackgroundBoxes from "./ui/background-boxes";

export default function CTASection() {
  return (
    <div className="relative h-auto min-h-[350px] md:h-[400px] max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-2xl border border-white/10">
      {/* Animated background */}
      <BackgroundBoxes />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8 py-10 md:py-0 pointer-events-none">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold text-white mb-4 sm:mb-6 leading-snug max-w-4xl mx-auto">
          Let's Discuss How We Can Elevate Your{" "}
          <span className="bg-gradient-to-r from-[#5DAA4D] to-[#3E7B2F] bg-clip-text text-transparent">
            Digital Presence
          </span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
          We build impactful solutions with modern technologies to help your
          business grow online.
        </p>

        <button className="bg-gradient-to-r from-[#5DAA4D] to-[#3E7B2F] hover:from-[#6FC85C] hover:to-[#4E8C3B] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg pointer-events-auto">
          Get Started Today
        </button>
      </div>
    </div>
  );
}
