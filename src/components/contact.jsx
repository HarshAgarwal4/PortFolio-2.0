import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Contact = ({ portfolioData }) => {
  const formRef = useRef();
  const sectionRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxUQuLC7J4BC8pMpDbYsuxS7vJqr6YfgBmMgMSuoHdUPKGASO1K6LE5r5Uzy-_LPMr-/exec",
        { method: "POST", body: data }
      );
      toast.success("Form submitted successfully!");
      formRef.current.reset();
    } catch {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`
        px-6 py-20 md:px-24 bg-gray-800 text-white
        transition-all duration-700
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div
            ref={leftRef}
            className={`
              flex flex-col
              transition-all duration-700 delay-100 ease-out
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-4">
              Contact Me
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Let’s connect
            </h3>

            <p className="text-gray-400 text-sm sm:text-base max-w-md mb-8">
              Feel free to reach out for collaborations, opportunities, or just a friendly hello.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 sm:gap-6 mb-8">
              {[
                { href: portfolioData.contact.github, Icon: FaGithub },
                { href: portfolioData.contact.linkedin, Icon: FaLinkedinIn },
                { href: `mailto:${portfolioData.contact.email}`, Icon: FaEnvelope },
                { href: portfolioData.contact.instagram, Icon: FaInstagram },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-3 sm:p-4 bg-gray-700 rounded-full
                    hover:bg-yellow-400 hover:text-black
                    transition transform hover:-translate-y-1
                  "
                >
                  <Icon className="text-lg sm:text-2xl" />
                </a>
              ))}
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              className="w-fit bg-yellow-400 text-black px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg"
            >
              Download Resume
            </a>
          </div>

          {/* RIGHT FORM */}
          <div
            ref={rightRef}
            className={`
              bg-gray-700 w-full max-w-lg mx-auto rounded-2xl
              p-6 sm:p-8 md:p-10 shadow-xl
              transition-all duration-700 delay-300 ease-out
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            `}
          >
            <form ref={formRef} onSubmit={submit} className="space-y-5">
              <input
                name="name"
                placeholder="Your Name"
                className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                rows="4"
                name="message"
                placeholder="Your Message (optional)"
                className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-yellow-400 resize-none"
              />

              <button
                type="submit"
                className="
                  w-full bg-yellow-400 text-black py-3 rounded-full
                  font-semibold hover:bg-yellow-300
                  transition transform hover:-translate-y-0.5
                "
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
