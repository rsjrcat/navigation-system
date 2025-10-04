import { SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiMysql, SiWordpress, SiLaravel } from "react-icons/si";

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
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
          Our <span className="text-orange-500">Tech Stack</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Tools & technologies we use to build high-performing digital solutions
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {tech.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-zinc-900 rounded-2xl shadow-lg p-6 hover:shadow-orange-500/20 transition duration-300"
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <p className="text-gray-300 font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
