import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navlinks connected to their respective section IDs
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // URL-encoded custom message for WhatsApp API
  const whatsappUrl = "https://wa.me/15488256699?text=Hello%20DevNado%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20work%20with%20you%21";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl px-4 py-3 font-sans">
      {/* Main Container */}
      <div className="animate-nav-container mx-auto flex items-center justify-between border rounded-full backdrop-blur-md transition-all duration-300">
        
        {/* Content Wrapper */}
        <div className="animate-nav-content flex items-center justify-between w-full px-6 py-4">
          
          {/* Logo Section */}
          <div className="text-xl font-extrabold tracking-[0.2em] text-white">
            <span className="text-red-500">V</span>ICTOR
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative text-gray-300 hover:text-white font-medium text-sm transition-colors duration-300 py-1 group"
                  >
                    {link.name}
                    {/* Left-to-right red underline animation */}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Action Button: Linked to WhatsApp */}
          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-full text-xs font-bold tracking-widest text-white uppercase bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu Container */}
      <div
        className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out rounded-3xl border border-white/5 bg-slate-950/90 backdrop-blur-lg ${
          isOpen ? "max-h-80 opacity-100 p-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-4 mb-5">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-red-500 font-medium text-base transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Action Button: Linked to WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 rounded-full text-xs font-bold tracking-widest text-white uppercase bg-gradient-to-r from-red-600 to-red-700 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all duration-300 text-center"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default NavBar;