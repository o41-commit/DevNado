import {
  FaReact,
  FaJsSquare,
  FaLaravel,
  FaPhp,
  FaWordpress,
  FaVuejs,
  FaHtml5,
  FaNodeJs,
  FaCss3Alt,
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiMysql 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  // Organized skill data structured for a clean portfolio presentation
  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "Vue.js", icon: <FaVuejs className="text-emerald-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-sky-500" /> },
      ],
    },
    {
      title: "Mobile & CMS Ecosystem",
      skills: [
        { name: "React Native", icon: <TbBrandReactNative className="text-sky-400" /> },
        { name: "WordPress", icon: <FaWordpress className="text-sky-600" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-20 px-4 sm:px-6 md:px-16 overflow-hidden"
    >
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-slate-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-500 uppercase px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
            My Toolbox
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto mt-4 font-light">
            A specialized collection of frameworks, languages, and tools I
            I leverage to build premium, modern web applications.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-14">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-6">
              {/* Category Subtitle */}
              <h3 className="text-lg sm:text-xl font-bold tracking-wider text-gray-300 border-l-2 border-red-500 pl-3">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-red-500/40 hover:bg-slate-900/80 hover:shadow-[0_8px_20px_rgba(239,68,68,0.1)] group"
                  >
                    {/* Icon Container with subtle scale on parent hover */}
                    <div className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    {/* Skill Name */}
                    <span className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;