import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiWordpress,
  SiLaravel,
} from "react-icons/si";

export default function TechStack() {
  const tech = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "WordPress", icon: <SiWordpress className="text-slate-300" /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-[#5DAA4D] to-[#3E7B2F] bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Tools & technologies we use to build high-performing digital solutions
        </p>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
          {tech.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-zinc-900/60 backdrop-blur-md 
                         border border-white/10 rounded-2xl shadow-lg p-6
                         hover:border-[#5DAA4D]/40 hover:shadow-[0_0_20px_rgba(93,170,77,0.3)]
                         transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                {item.icon}
              </div>
              <p className="text-gray-300 font-medium text-sm sm:text-base">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
