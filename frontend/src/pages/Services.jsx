import SEO from "../components/SEO";
import { Code, Smartphone, Brain, Layers, ShoppingCart, Globe } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Design & Development",
      description:
        "Create stunning, responsive websites that captivate your audience and drive conversions. From simple landing pages to complex web applications.",
      features: [
        "Custom Website Design",
        "Responsive Development",
        "SEO Optimization",
        "Performance Tuning",
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description:
        "Build native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android devices.",
      features: [
        "iOS App Development",
        "Android App Development",
        "React Native Apps",
        "Flutter Development",
      ],
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & ML Development",
      description:
        "Harness the power of artificial intelligence and machine learning to create intelligent solutions that give your business a competitive edge.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Custom Applications",
      description:
        "Tailored software solutions designed to meet your unique business requirements and streamline your operations.",
      features: [
        "Enterprise Software",
        "CRM Systems",
        "Business Automation",
        "API Development",
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "WordPress & Shopify",
      description:
        "Professional CMS and ecommerce platforms that are easy to manage, customize, and scale as your business grows.",
      features: [
        "Custom WordPress Themes",
        "Plugin Development",
        "Shopify Store Setup",
        "Theme Customization",
      ],
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Ecommerce Solutions",
      description:
        "Complete online stores with secure payment gateways, inventory management, and user-friendly shopping experiences.",
      features: [
        "Payment Gateway Integration",
        "Shopping Cart Development",
        "Product Management",
        "Order Processing",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Services - Web & App Development | Medent Technologies"
        description="Comprehensive digital solutions including web development, mobile apps, AI/ML, custom software, and ecommerce platforms."
        keywords="web development services, mobile app development, AI development, custom software, ecommerce solutions"
      />

      <div className="bg-black text-white min-h-screen">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5DAA4D] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#3E7B2F] rounded-full blur-3xl opacity-15"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Our <span className="text-[#5DAA4D]">Services</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Comprehensive digital solutions tailored to your business needs. We combine creativity with technology to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-[#5DAA4D] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5DAA4D]/0 to-[#3E7B2F]/0 group-hover:from-[#5DAA4D]/10 group-hover:to-transparent transition-all duration-300"></div>
                  <div className="absolute -inset-1 bg-[#5DAA4D] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>

                  <div className="relative z-10">
                    <div className="text-[#5DAA4D] mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-[#5DAA4D] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#5DAA4D] to-[#3E7B2F] hover:from-[#6FC85C] hover:to-[#4E8C3B] px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
