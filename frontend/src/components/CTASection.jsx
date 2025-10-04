import React from "react";
import BackgroundBoxes from "./ui/background-boxes";

export default function CTASection() {
  return (
    <div className="relative h-[400px] max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-2xl border border-white/20">
      <BackgroundBoxes />
      <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none" />
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6 pointer-events-none">
        <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-6 leading-snug max-w-4xl mx-auto">
          Let's Discuss How We Can Elevate Your{" "}
          <span className="text-orange-400">Digital Presence</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          We build impactful solutions with modern technologies to help your
          business grow online.
        </p>
        <button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg pointer-events-auto">
          Get Started Today
        </button>
      </div>
    </div>
  );
}