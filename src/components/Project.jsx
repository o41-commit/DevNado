import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import Project1 from "../images/Project 1.jpeg";
import Project2 from "../images/Project 2.jpeg";
import Project3 from "../images/Project 3.jpeg";
import Project4 from "../images/Project 4.jpeg";
import Project5 from "../images/Project 5.jpeg";

const Project = () => {
  const projects = [
    {
      id: "01",
      name: "Mobile Savings Plan",
      image: Project1,
      link: "https://mobileplansasset.com/",
      tags: ["React", "Node.js", "Express", "Tailwind CSS"],
      desc: "A premium, high-security fintech platform designed to democratize investing and micro-savings. Built with highly reactive charts, secure transaction simulation, and modular dashboards to make personal wealth growth seamless and intuitive.",
    },
    {
      id: "02",
      name: "Rivo e-Commerce",
      image: Project2,
      link: "https://rivocommerce.netlify.app/",
      tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      desc: "A boutique, high-end fashion e-commerce storefront. Features lightning-fast product filtering, reactive cart states, persistent user sessions, and sleek transitions tailored for a premium luxury retail experience.",
    },
    {
      id: "03",
      name: "ChatBox",
      image: Project3,
      link: "https://chat-box-omega-jet.vercel.app/",
      tags: ["React Native", "Socket.io", "Node.js", "Express"],
      desc: "An ultra-responsive, real-time messaging workspace bridging global communities. Engineered with low-latency WebSockets, active room state management, typing indicators, and a clean interface for instant global connection.",
    },
    {
      id: "04",
      name: "SwiftLogix",
      image: Project4,
      link: "https://swiftlogix-plc.vercel.app/",
      tags: ["React", "Vite", "Tailwind CSS", "AOS"],
      desc: "A modern, high-performance logistics landing architecture. Built to display complex supply chain pipelines with high visual clarity, custom delivery trackers, interactive contact funnels, and optimized static rendering.",
    },
    {
      id: "05",
      name: "IRONGYM",
      image: Project5,
      link: "https://irongym-rose.vercel.app/",
      tags: ["React", "CSS3", "Tailwind CSS", "Framer Motion"],
      desc: "An elite, energetic physical fitness landing portal. Features interactive class scheduling widgets, membership booking engines, premium trainer profiles, and smooth parallax effects designed to maximize user conversion.",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-20 px-4 sm:px-6 md:px-16 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-slate-800/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-24">
          <span className="text-xs font-semibold tracking-widest text-red-500 uppercase px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            Selected{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto mt-4 font-light">
            A hand-picked selection of production-ready web and mobile
            applications I have designed, built, and deployed.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-36">
          {projects.map((project, idx) => {
            // Determine if layout should be reversed (desktop-only alternation)
            const isEven = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className={`flex flex-col lg:items-center gap-8 lg:gap-16 ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* 1. Image Container (Responsive, includes slide animations) */}
                <div
                  className={`w-full lg:w-1/2 flex justify-center ${
                    isEven
                      ? "animate-[slideInRight_1s_ease-out_forwards]"
                      : "animate-[slideInLeft_1s_ease-out_forwards]"
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] max-w-[500px] group cursor-pointer">
                    {/* Shadow Ambient Red Glow behind image */}
                    <div className="absolute inset-0 bg-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />

                    {/* Floating Wireframe Outline */}
                    <div className="absolute -inset-3 rounded-2xl border border-red-500/10 transition-all duration-500 group-hover:scale-102 group-hover:border-red-500/30" />

                    {/* Actual Image wrapper */}
                    <div className="w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-slate-900 shadow-2xl transition-all duration-500 group-hover:border-red-500/40 group-hover:shadow-[0_12px_40px_rgba(239,68,68,0.15)]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Text Content Container */}
                <div
                  className={`w-full lg:w-1/2 flex flex-col justify-center text-left ${
                    isEven
                      ? "animate-[slideInLeft_1s_ease-out_forwards]"
                      : "animate-[slideInRight_1s_ease-out_forwards]"
                  }`}
                >
                  {/* Floating ID Number */}
                  <span className="text-4xl md:text-5xl font-black tracking-widest text-slate-900 border-b border-white/5 pb-2 select-none">
                    {project.id}
                  </span>

                  {/* Project Name */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-4">
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mt-4">
                    {project.desc}
                  </p>

                  {/* Built-with Badges */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-300 px-3 py-1 rounded-full bg-white/5 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Interactive CTA buttons */}
                  <div className="flex items-center gap-4 mt-8">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] group"
                    >
                      Live Preview
                      <FaArrowUpRightFromSquare
                        size={11}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
