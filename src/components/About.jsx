import { FaTerminal, FaRobot, FaMicrochip, FaLightbulb } from "react-icons/fa6";
import HeroImg from "../images/HeroImg.jpeg";

const About = () => {
  const pillars = [
    {
      icon: <FaTerminal className="text-red-500" size={20} />,
      title: "Full-Stack Architecture",
      desc: "Building seamless digital flows from high-fidelity user interfaces to robust backend server logic.",
    },
    {
      icon: <FaMicrochip className="text-red-500" size={20} />,
      title: "Hardware Integration",
      desc: "Leveraging my background in Electrical Engineering to understand compute resources and hardware-level performance.",
    },
    {
      icon: <FaLightbulb className="text-red-500" size={20} />,
      title: "Problem Solving",
      desc: "Approaching bugs and complex system scaling challenges with structured analytical thinking.",
    },
    {
      icon: <FaRobot className="text-red-500" size={20} />,
      title: "Clean Code Advocate",
      desc: "Writing modular, self-documenting code that is maintainable, highly optimized, and scales with the business.",
    },
  ];

  return (
    <section id="about" className="relative w-full py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center lg:text-left mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-500 uppercase px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            About <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Premium Image Container with Enlarge Hover Effect */}
          <div className="lg:col-span-5 flex justify-center px-4 animate-[slideInLeft_1s_ease-out_forwards]">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-square group cursor-pointer">
              
              {/* Outer Decorative Floating Red Frame (Expands outwards on hover) */}
              <div className="absolute -inset-4 rounded-3xl border border-red-500/30 translate-x-3 translate-y-3 transition-all duration-500 group-hover:translate-x-5 group-hover:translate-y-5 group-hover:border-red-500/50" />
              
              {/* Inner Accent Block (Rotates dynamically on hover) */}
              <div className="absolute inset-0 rounded-3xl bg-red-500/10 -rotate-3 transition-all duration-500 group-hover:rotate-3 group-hover:scale-105" />
              
              {/* Primary Image Container (Full color, enlarges smoothly on hover with a premium glow) */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_40px_rgba(239,68,68,0.25)]">
                <img
                  src={HeroImg}
                  alt="Fatoba Victor"
                  className="w-full h-full object-cover transition-all duration-750 ease-out scale-100 group-hover:scale-110"
                />
                {/* Subtle dark overlay that fades out on hover to bring out the colors even more */}
                <div className="absolute inset-0 bg-slate-950/10 transition-opacity duration-500 group-hover:opacity-0" />
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left animate-[slideInRight_1s_ease-out_forwards]">
            
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                I'm <span className="text-red-500">Fatoba Victor (DevNado)</span>, a Problem-Solving Engineer & Full-Stack Developer.
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                Currently pursuing a degree in <span className="text-white font-medium">Electrical & Electronic Engineering</span> at the Federal University of Oye-Ekiti (FUOYE), Nigeria, my coding foundation is augmented with intensive software specialization from <span className="text-white font-medium">Traversy Media Academy</span> (USA). 
              </p>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                I operate at the intersection of logical hardware workflows and contemporary web development. This rare duality allows me to approach performance optimization, state management, and algorithmic problems with the rigor of a classical engineer.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center lg:items-start gap-3 p-5 rounded-2xl bg-slate-900/20 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:border-red-500/20 hover:bg-slate-900/50"
                >
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/10 text-red-500">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wide mt-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 text-center lg:text-left leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;