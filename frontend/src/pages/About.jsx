import SEO from "../components/SEO";
import { Target, Eye, Award, Users, Zap, Shield } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and creative solutions.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Quality",
      description: "Delivering exceptional results that exceed expectations.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Collaboration",
      description: "Working closely with clients as partners in success.",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do.",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
  ];

  return (
    <>
      <SEO
        title="About Us - Medent Technologies | Web & App Development Company"
        description="Learn about Medent Technologies, a leading web and mobile app development company delivering innovative digital solutions worldwide."
        keywords="about medent technologies, web development company, mobile app development company, software development team"
      />

      <div className="bg-black text-white min-h-screen">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5DAA4D] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#3E7B2F] rounded-full blur-3xl opacity-15"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
                About <span className="text-[#5DAA4D]">Us</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                We are a passionate team of developers, designers, and innovators dedicated to transforming ideas into reality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#5DAA4D] p-3 rounded-xl">
                    <Target className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                    <p className="text-gray-400 leading-relaxed">
                      To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We strive to be the trusted technology partner for companies looking to thrive in the digital age.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#3E7B2F] p-3 rounded-xl">
                    <Eye className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                    <p className="text-gray-400 leading-relaxed">
                      To become a global leader in digital transformation, recognized for our exceptional quality, innovation, and commitment to client success. We envision a world where every business has access to world-class technology solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-zinc-900 to-zinc-900/50 rounded-3xl p-8 sm:p-12 mb-20 border border-zinc-800">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Our <span className="text-[#5DAA4D]">Values</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, idx) => (
                  <div key={idx} className="text-center">
                    <div className="inline-flex items-center justify-center text-[#5DAA4D] mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Our <span className="text-[#5DAA4D]">Journey</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Founded with a vision to revolutionize digital experiences, Medent Technologies has grown from a small startup to a recognized name in the industry. Our journey has been marked by countless successful projects, satisfied clients, and a team that continues to push boundaries.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We specialize in web development, mobile applications, AI/ML solutions, and custom software development. Our diverse portfolio spans across various industries including healthcare, e-commerce, education, finance, and more.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    What sets us apart is our commitment to understanding each client's unique needs and delivering tailored solutions that not only meet but exceed expectations. We believe in building long-term partnerships and being there for our clients every step of the way.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#5DAA4D]/10 to-[#3E7B2F]/10 rounded-3xl p-8 sm:p-12 border border-[#5DAA4D]/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Our <span className="text-[#5DAA4D]">Impact</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-[#5DAA4D] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#5DAA4D] to-[#3E7B2F] hover:from-[#6FC85C] hover:to-[#4E8C3B] px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                Work With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
