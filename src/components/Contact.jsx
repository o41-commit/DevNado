import {
  FaGithub,
  FaXTwitter,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa6";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const socials = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/o41-commit",
      label: "GitHub",
    },
    {
      icon: <FaWhatsapp size={20} />,
      href: "https://wa.me/15488256699",
      label: "WhatsApp",
    },
    {
      icon: <FaXTwitter size={18} />,
      href: "https://x.com/oluwatobil48396",
      label: "X",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/devnado.code?igsh=MTIxb28zdnUzNHlhZA==",
      label: "Instagram",
    },
    {
      icon: <FaFacebook size={20} />,
      href: "https://www.facebook.com/devnado.code",
      label: "Facebook",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-4 sm:px-6 md:px-16 overflow-hidden"
    >
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-slate-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center lg:text-left mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-500 uppercase px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: Professional Info Panel (Slides in from Left) */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left animate-[slideInLeft_1s_ease-out_forwards] px-2 sm:px-4">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Collaborate with an Engineer
              </h3>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                Whether you have a groundbreaking startup idea, require custom
                native/web software integrations, or simply want to inquire
                about technical architectures, feel free to reach out. I am
                always open to discussing new projects and technical strategies.
              </p>
            </div>

            {/* Quick Contact Specs */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 justify-center lg:justify-start group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-red-500 group-hover:border-red-500/40 transition-colors duration-300">
                  <IoMailOutline size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide uppercase">
                    Email Me Directly
                  </p>
                  <a
                    href="mailto:oluwatobilobafatoba@gmail.com"
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    oluwatobilobafatoba@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-red-500 group-hover:border-red-500/40 transition-colors duration-300">
                  <IoLocationOutline size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-semibold tracking-wide uppercase">
                    Current Location
                  </p>
                  <p className="text-sm sm:text-base text-gray-300 font-medium">
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Animated Social Links */}
            <div className="space-y-4 pt-4">
              <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Connect on Social Networks
              </h4>
              <ul className="flex items-center gap-3 justify-center lg:justify-start">
                {socials.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white transition-all duration-300 relative group overflow-hidden hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:-translate-y-1"
                    >
                      {/* Hover Slide Background Effect */}
                      <span className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 -z-10" />
                      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                        {social.icon}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Form Container (Slides in from Right) */}
          <div className="lg:col-span-7 animate-[slideInRight_1s_ease-out_forwards] px-2 sm:px-4">
            <div className="relative group">
              {/* Outer Decorative Glow Frame */}
              <div className="absolute inset-0 bg-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />

              {/* Main Glassmorphic Form Card */}
              <form
                action="https://formspree.io/f/mvzegvea"
                method="POST"
                className="relative p-6 sm:p-10 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/10"
              >
                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="flex flex-col text-left">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-xl bg-slate-950/60 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 transition-colors duration-300 font-light"
                    />
                  </div>

                  {/* Gmail (Email) Input */}
                  <div className="flex flex-col text-left">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2"
                    >
                      Gmail Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="johndoe@gmail.com"
                      className="w-full px-5 py-4 rounded-xl bg-slate-950/60 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 transition-colors duration-300 font-light"
                    />
                  </div>

                  {/* Info (Message) Input */}
                  <div className="flex flex-col text-left">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2"
                    >
                      Additional Project Info
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      placeholder="Describe your project goals, timelines, or specifications..."
                      className="w-full px-5 py-4 rounded-xl bg-slate-950/60 border border-white/5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 transition-colors duration-300 font-light resize-none"
                    />
                  </div>

                  {/* Submit Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-bold tracking-widest text-white uppercase bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:-translate-y-0.5 active:translate-y-0 group"
                    >
                      Send Message
                      <FaPaperPlane
                        size={11}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
