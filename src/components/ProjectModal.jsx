const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-3 sm:px-6"
      onClick={onClose}
    >
      <div
        className="
          bg-white rounded-xl w-full max-w-4xl
          max-h-[90svh] overflow-y-auto
          relative
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4
            text-gray-500 hover:text-gray-800 text-2xl font-bold z-10"
          aria-label="Close"
        >
          ×
        </button>

        {/* IMAGE */}
        <img
          src={project.images[0]}
          alt={project.title}
          className="
            w-full h-48 sm:h-56 md:h-72
            object-cover
            rounded-t-xl
          "
        />

        {/* CONTENT */}
        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* FEATURES & TECH */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 border-b pb-1">
                Features
              </h3>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 border-b pb-1">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="
                      bg-gray-200 text-gray-800
                      px-3 py-1 rounded-full
                      text-xs sm:text-sm font-medium
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="
            flex flex-col sm:flex-row
            gap-3 sm:gap-4
            mt-6 pt-6 border-t
          ">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full sm:w-auto text-center
                bg-blue-600 text-white
                px-6 py-3 rounded-md
                hover:bg-blue-700 transition
                font-semibold text-sm sm:text-base
              "
            >
              Live Link
            </a>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full sm:w-auto text-center
                bg-gray-700 text-white
                px-6 py-3 rounded-md
                hover:bg-gray-800 transition
                font-semibold text-sm sm:text-base
              "
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
