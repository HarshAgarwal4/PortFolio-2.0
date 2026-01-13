import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ portfolioData }) => {
  const [open, setOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-10 sm:w-12 rounded-full">
            <img src="/logo.png" alt="logo" className="rounded-full" />
          </div>
          <div className="text-lg sm:text-2xl font-extrabold text-white">
            {portfolioData.name}
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {["home", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* SLIDE-DOWN MENU (OVERLAY VIA Z-INDEX, NO PUSH) */}
      <div
        className={`
          md:hidden
          absolute top-full left-0 w-full
          bg-gray-900/98 backdrop-blur
          border-t border-gray-700
          z-40
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${open ? "max-h-[65vh] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col items-center justify-center gap-6 py-8 text-lg">
          {["home", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-yellow-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
