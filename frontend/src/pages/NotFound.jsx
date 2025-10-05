import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Medent Technologies"
        description="The page you are looking for does not exist."
      />

      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="relative overflow-hidden w-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5DAA4D] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3E7B2F] rounded-full blur-3xl opacity-15"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10 py-20">
            <div className="mb-8">
              <h1 className="text-9xl sm:text-[200px] font-bold text-[#5DAA4D] opacity-50">404</h1>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Page Not <span className="text-[#5DAA4D]">Found</span>
            </h2>

            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Oops! The page you are looking for doesn't exist. It might have been moved or deleted.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5DAA4D] to-[#3E7B2F] hover:from-[#6FC85C] hover:to-[#4E8C3B] px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                <Home size={20} />
                Go to Homepage
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-8 py-4 rounded-full text-lg font-semibold transition-all"
              >
                <ArrowLeft size={20} />
                Go Back
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link
                to="/services"
                className="bg-zinc-900 hover:bg-zinc-800 p-6 rounded-xl border border-zinc-800 hover:border-[#5DAA4D] transition-all"
              >
                <h3 className="font-semibold mb-2">Services</h3>
                <p className="text-sm text-gray-400">Explore our offerings</p>
              </Link>

              <Link
                to="/portfolio"
                className="bg-zinc-900 hover:bg-zinc-800 p-6 rounded-xl border border-zinc-800 hover:border-[#5DAA4D] transition-all"
              >
                <h3 className="font-semibold mb-2">Portfolio</h3>
                <p className="text-sm text-gray-400">View our work</p>
              </Link>

              <Link
                to="/about"
                className="bg-zinc-900 hover:bg-zinc-800 p-6 rounded-xl border border-zinc-800 hover:border-[#5DAA4D] transition-all"
              >
                <h3 className="font-semibold mb-2">About Us</h3>
                <p className="text-sm text-gray-400">Learn about us</p>
              </Link>

              <Link
                to="/contact"
                className="bg-zinc-900 hover:bg-zinc-800 p-6 rounded-xl border border-zinc-800 hover:border-[#5DAA4D] transition-all"
              >
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-sm text-gray-400">Get in touch</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
