import { useState, useEffect } from "react";
import { FaGithub, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import HeroImg from "../images/HeroImg.jpeg";

const Hero = () => {
  // --- Custom Premium Typing Hook ---
  const words = ["Victor (DevNado)", "A FullStack Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeWord = words[currentWordIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === activeWord) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const socials = [
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/o41-commit",
      label: "GitHub",
    },
    {
      icon: <FaWhatsapp size={18} />,
      href: "https://wa.me/15488256699",
      label: "WhatsApp",
    },
    {
      icon: <FaXTwitter size={16} />,
      href: "https://x.com/oluwatobil48396",
      label: "X",
    },
    {
      icon: <IoMailOutline size={20} />,
      href: "mailto:oluwatobilobafatoba@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-140px)] flex items-center justify-center px-4 sm:px-6 md:px-16 py-8 md:py-16 overflow-hidden">
      {/* Background Decorative Mesh Gradients (Set explicitly to z-0) */}
      <div className="absolute z-0 top-1/2 left-1/4 -translate-y-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-red-600/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute z-0 top-1/3 right-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-slate-800/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      {/* Hero Content Wrapper (Raised to z-10) */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-8 items-center relative z-10">
        
        {/* Right Side / Top on Mobile: Floating Image Container */}
        {/* Added top padding 'pt-6' to give bounce animation room to breathe without hitting anything */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 px-4 pt-6 pb-2">
          {/* Raised target area to z-20 so it always stays visually on top of everything */}
          <div className="relative z-20 group w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            
            {/* Ambient Background Red Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-transparent rounded-full opacity-25 blur-2xl transition-all duration-700 group-hover:scale-110 pointer-events-none" />

            {/* Double Border Outer Floating Ring */}
            <div className="absolute -inset-2 sm:-inset-4 border border-dashed border-red-500/20 rounded-full animate-[spin_40s_linear_infinite] group-hover:border-red-500/40 transition-colors duration-300" />

            {/* Primary Container: Animated Float (Full natural color, no grayscale) */}
            <div className="w-full h-full rounded-full border border-red-500/30 overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-500 group-hover:border-red-500/70 group-hover:shadow-[0_0_45px_rgba(239,68,68,0.3)] animate-[bounce_6s_ease-in-out_infinite] bg-slate-900">
              <img
                src={HeroImg}
                alt="Victor"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Left Side / Bottom on Mobile: Copy and Details */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 px-2 sm:px-4">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] sm:text-xs font-semibold tracking-wider text-red-400 uppercase mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Based in United States
          </div>

          {/* Main Title with Typing Effect */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight min-h-[90px] sm:min-h-[130px] md:min-h-[150px] lg:min-h-[180px]">
            Hello, I am <br />
            <span className="text-red-500 relative inline-block">
              {currentText}
              <span className="absolute -right-1 bottom-1 w-1 h-[75%] bg-red-500 animate-[ping_1s_infinite]" />
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl mb-6 sm:mb-8 leading-relaxed font-light mx-auto lg:mx-0">
            I build hyper-performance, visually striking digital solutions.
            Specializing in crafting intuitive architectures and premium
            interfaces using cutting-edge web methodologies.
          </p>

          {/* Premium Animated Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
            <ul className="flex items-center gap-3 sm:gap-4">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white transition-all duration-300 relative group overflow-hidden hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:-translate-y-1"
                  >
                    {/* Background Slide Effect on Hover */}
                    <span className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 -z-10" />
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Subtle Divider Line */}
            <span className="hidden sm:inline-block w-[1px] h-8 bg-white/10" />

            {/* Quick Portfolio Link */}
            <a
              href="#projects"
              className="text-xs sm:text-sm font-semibold tracking-wider text-red-500 hover:text-red-400 transition-colors duration-300 flex items-center gap-1.5 group py-2"
            >
              Explore Portfolio
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;