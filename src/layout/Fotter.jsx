import { FaGithub, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const Fotter = () => {
  const currentYear = new Date().getFullYear();

  // Curated minimalist selection of main social icons
  const footerSocials = [
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
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-slate-950/40 backdrop-blur-md py-8 px-4 sm:px-6 md:px-16 mt-auto">
      <div className="max-w-6xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side: Brand Name & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-base font-extrabold tracking-wider text-white">
            Dev<span className="text-red-500">Nado</span>
          </span>
          <span className="hidden sm:inline-block w-[1px] h-4 bg-white/15" />
          <p className="text-xs text-gray-500 font-light">
            &copy; {currentYear} Fatoba Victor. All rights reserved.
          </p>
        </div>

        {/* Right Side: Curated Socials */}
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-3">
            {footerSocials.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-red-500/30 hover:bg-red-500/10 hover:shadow-[0_0_10px_rgba(239,68,68,0.2)] transition-all duration-300"
                >
                  <span className="transition-transform duration-300 hover:scale-110">
                    {social.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
