import { useState, useRef, useEffect } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        onClick={() => setShowDetail(true)}
        className={`
          group relative
          bg-white rounded-xl overflow-hidden
          cursor-pointer

          transition-all duration-700 ease-out
          hover:-translate-y-3 hover:shadow-2xl
          active:scale-[0.98]

          before:absolute before:inset-0
          before:rounded-xl
          before:bg-linear-to-r before:from-yellow-400 before:via-pink-500 before:to-purple-500
          before:opacity-0 before:transition-opacity before:duration-500
          hover:before:opacity-10

          ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"}
        `}
      >
        {/* SHINE OVERLAY */}
        <div className="
          pointer-events-none
          absolute inset-0
          bg-linear-to-tr from-white/0 via-white/20 to-white/0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700
        " />

        <div className="relative p-4 sm:p-6 flex flex-col h-full">
          {/* TITLE */}
          <h3 className="
            text-lg sm:text-xl md:text-2xl font-bold mb-2
            text-gray-900
            transition-colors duration-300
            group-hover:text-yellow-600
          ">
            {project.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base text-gray-700 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* TECH STACK */}
          <div className="mb-4">
            <h4 className="font-semibold text-sm sm:text-base mb-2">
              Technologies Used:
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="
                    bg-yellow-200 text-yellow-800
                    px-3 py-1 rounded-full
                    text-xs sm:text-sm

                    transition-all duration-300
                    group-hover:bg-yellow-300
                    hover:scale-110 hover:shadow-md
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:gap-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                text-blue-600 text-sm sm:text-base
                transition-all duration-300
                hover:underline hover:translate-x-1
              "
            >
              Live Demo →
            </a>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                text-blue-600 text-sm sm:text-base
                transition-all duration-300
                hover:underline hover:translate-x-1
              "
            >
              Source Code →
            </a>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showDetail && (
        <ProjectModal
          project={project}
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
