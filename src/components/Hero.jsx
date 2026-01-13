import { useEffect, useState, useRef } from "react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend developer",
  "Python programmer",
  "Problem Solver",
  "Tech Enthusiast",
];

const Hero = ({ portfolioData }) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const heroRef = useRef(null);

  /* 👀 VIEWPORT ANIMATION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  /* ⌨️ TYPEWRITER */
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-svh bg-linear-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-yellow-400/20 blur-[120px] rounded-full" />
      </div>

      <div
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 sm:gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div>
          <p
            className={`
              text-yellow-400 font-semibold tracking-widest uppercase mb-2 sm:mb-4
              transition-all duration-700 ease-out
              `}
          >
            Welcome to my portfolio
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="bg-linear-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent animate-pulse">
              {portfolioData.name}
            </span>
          </h1>

          {/* Typewriter */}
          <p className="text-lg sm:text-2xl text-gray-300 mt-3 sm:mt-6 h-8">
            {text}
            <span className="animate-pulse">|</span>
          </p>

          <p className="mt-3 sm:mt-6 text-gray-400 max-w-xl leading-relaxed">
            {portfolioData.about}
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-80 h-80 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center">
            <span className="text-6xl font-extrabold text-yellow-400">
              &lt;/&gt;
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce">
        <span className="text-sm mb-1">Scroll</span>
        <div className="w-1 h-6 bg-gray-400 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;