import { useState } from "react";
import SEO from "../components/SEO";
import FeatureSection from "../components/FeatureSection";
import PortfolioListSection from "../components/PortfolioListSection";
import CTASection from "../components/CTASection";
import TechStack from "../components/TechStack";

export default function Home() {
  const [phone, setPhone] = useState("");

  const handleCallback = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    setPhone("");
  };

  return (
    <>
      <SEO
        title="Medent Technologies - Web & Mobile App Development"
        description="Transform your business with cutting-edge websites and mobile applications. Custom, scalable solutions for businesses of all sizes."
        keywords="web development, mobile app development, custom software, AI ML development, ecommerce solutions"
        ogImage="https://medenttechnologies.com/og-image.jpg"
      />

      <div className="bg-black text-white">
        <div className="min-h-screen relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#5DAA4D] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-[#3E7B2F] rounded-full blur-3xl opacity-15"></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 sm:w-72 h-56 sm:h-72 bg-[#5DAA4D] rounded-full blur-3xl opacity-10"></div>

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

              <form onSubmit={handleCallback} className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 max-w-2xl mx-auto mb-8">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Your Mobile No *"
                  required
                  className="w-full sm:flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full sm:rounded-l-full bg-zinc-900 border border-zinc-800 focus:border-[#5DAA4D] focus:outline-none text-sm placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#5DAA4D] hover:bg-[#3E7B2F] rounded-full sm:rounded-r-full font-medium transition-all text-sm whitespace-nowrap"
                >
                  Request a Callback
                </button>
              </form>
            </div>
          </main>
        </div>

        <FeatureSection />
        <PortfolioListSection />
        <CTASection />
        <TechStack />
      </div>
    </>
  );
}
