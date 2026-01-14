import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ portfolioData }) => {
  const [showAll, setShowAll] = useState(false);
  const [category, setCategory] = useState("all");

  // Filter projects
  const filteredProjects =
    category === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category.includes(category)
        );

  // Show only 6 unless expanded
  const cards = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading + Filter */}
        <div className="relative mb-12">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Projects
          </h2>

          {/* Filter */}
          {showAll && (
            <div className="mt-6 sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 flex justify-center sm:justify-end">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  bg-white border border-gray-300 rounded-lg
                  px-12 py-2 text-gray-800 font-medium
                  shadow-sm focus:outline-none focus:ring-2
                  focus:ring-yellow-400
                "
              >
                <option value="all">All</option>
                <option value="frontend">Frontend</option>
                <option value="full stack">Full Stack</option>
                <option value="python">Python</option>
              </select>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6 sm:gap-8
        ">
          {cards.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Show More / Less */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-10 sm:mt-12">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="
                bg-yellow-400 text-black
                px-8 py-3
                rounded-full font-semibold
                hover:bg-yellow-300 transition
                shadow-lg active:scale-95
              "
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
