import { useState } from "react";
import SEO from "../components/SEO";
import { ExternalLink, ChevronRight } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "ai", name: "AI/ML" },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      category: "ecommerce",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
      description: "A full-featured online store with advanced filtering, secure payments, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "mobile",
      image: "https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Patient management app with telemedicine features, appointment booking, and health tracking.",
      technologies: ["React Native", "Firebase", "Node.js"],
      link: "#",
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      category: "ai",
      image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Intelligent business analytics platform with predictive insights and data visualization.",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      link: "#",
    },
    {
      id: 4,
      title: "Restaurant Website & Ordering",
      category: "web",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Beautiful restaurant website with online ordering, reservations, and menu management.",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      id: 5,
      title: "Fitness Tracking Mobile App",
      category: "mobile",
      image: "https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Comprehensive fitness app with workout plans, nutrition tracking, and progress analytics.",
      technologies: ["Flutter", "Firebase", "Node.js"],
      link: "#",
    },
    {
      id: 6,
      title: "Corporate Website Redesign",
      category: "web",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Professional corporate website with CMS, blog, career portal, and contact forms.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
      link: "#",
    },
    {
      id: 7,
      title: "Fashion E-commerce Store",
      category: "ecommerce",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Trendy online fashion store with virtual try-on, wishlist, and personalized recommendations.",
      technologies: ["Shopify", "React", "Node.js", "AI"],
      link: "#",
    },
    {
      id: 8,
      title: "Real Estate Platform",
      category: "web",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Property listing platform with advanced search, virtual tours, and agent management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
      link: "#",
    },
    {
      id: 9,
      title: "Chatbot with NLP",
      category: "ai",
      image: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Intelligent chatbot for customer support with natural language understanding.",
      technologies: ["Python", "NLP", "TensorFlow", "React"],
      link: "#",
    },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <>
      <SEO
        title="Portfolio - Our Work | Medent Technologies"
        description="Explore our portfolio of successful web development, mobile app, AI/ML, and ecommerce projects. See how we've helped businesses grow."
        keywords="portfolio, web development projects, mobile app projects, AI projects, ecommerce projects"
      />

      <div className="bg-black text-white min-h-screen">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5DAA4D] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3E7B2F] rounded-full blur-3xl opacity-15"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Our <span className="text-[#5DAA4D]">Portfolio</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Showcasing our finest work and the success stories we've created for our clients.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    filter === cat.id
                      ? "bg-gradient-to-r from-[#5DAA4D] to-[#3E7B2F] text-white"
                      : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#5DAA4D] transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.link}
                        className="bg-[#5DAA4D] hover:bg-[#3E7B2F] px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        View Project
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-zinc-800 text-[#5DAA4D] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5DAA4D] to-[#3E7B2F] hover:from-[#6FC85C] hover:to-[#4E8C3B] px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                Start Your Project
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
