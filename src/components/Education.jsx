import { FaGraduationCap, FaCode, FaBriefcase, FaAward } from "react-icons/fa6";

const Education = () => {
  // Stat counters
  const stats = [
    {
      number: "150+",
      label: "Completed Projects",
      icon: <FaCode className="text-red-500" size={24} />,
      desc: "Delivered premium web & native applications",
    },
    {
      number: "+2 Years",
      label: "Professional Experience",
      icon: <FaBriefcase className="text-red-500" size={24} />,
      desc: "Active engineering in the tech ecosystem",
    },
  ];

  // Timeline events representing both academic and vocational education
  const timelineData = [
    {
      type: "Academic",
      title: "Electrical & Electronic Engineering",
      institution: "Federal University of Oye-Ekiti (FUOYE)",
      location: "Ekiti State, Nigeria",
      icon: <FaGraduationCap />,
      desc: "Deep focus on hardware architectures, digital logic systems, electronics design, and systems engineering. Merging physical computing principles with robust computational logic.",
    },
    {
      type: "Vocational",
      title: "Full-Stack Web Development",
      institution: "Traversy Media Academy",
      location: "United States (Remote)",
      icon: <FaAward />,
      desc: "Rigorous specialization in contemporary JavaScript/TypeScript architectures, advanced backend engineering (Node, Express, PHP/Laravel, Databases), API development, and software design patterns.",
    },
  ];

  return (
    <section
      id="education"
      className="relative w-full py-20 px-4 sm:px-6 md:px-16 overflow-hidden"
    >
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-500 uppercase px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            Education &{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Metrics
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto mt-4 font-light">
            An intersection of formal engineering discipline and cutting-edge
            software development methodologies.
          </p>
        </div>

        {/* --- High Impact Stats Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/30 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 hover:bg-slate-900/60 hover:shadow-[0_10px_30px_rgba(239,68,68,0.05)] group"
            >
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {stat.number}
                </h3>
                <p className="text-base font-semibold text-gray-200 mt-1">
                  {stat.label}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 font-light leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Responsive Interactive Timeline --- */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet Node with Hover Pulse */}
              <div className="absolute -left-[39px] sm:-left-[47px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-red-500/50 bg-slate-950 text-red-500 text-sm sm:text-base shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                {item.icon}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-slate-900/20 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:border-red-500/20 hover:bg-slate-900/50 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold tracking-widest text-red-500 uppercase px-2.5 py-0.5 rounded bg-red-500/10 border border-red-500/10">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {item.location}
                  </span>
                </div>

                {/* Major/Field */}
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Institution */}
                <h4 className="text-sm sm:text-base font-semibold text-gray-300 mt-1">
                  {item.institution}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-400 mt-4 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
