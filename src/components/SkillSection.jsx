const Skills = ({ portfolioData }) => {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-14 lg:mb-16">
          Skills
        </h2>

        {/* SCROLL CONTAINER */}
        <div className="relative">
          <div
            className="
              flex gap-4 sm:gap-6 lg:gap-8
              overflow-x-auto pb-4
              snap-x snap-mandatory
              scroll-smooth
              scrollbar-hide
            "
          >
            {portfolioData.skills.map((group, index) => (
              <div
                key={index}
                className="
                  group
                  snap-start
                  min-w-[85%]
                  sm:min-w-[60%]
                  md:min-w-[45%]
                  lg:min-w-[30%]
                  xl:min-w-[25%]

                  bg-white rounded-xl
                  p-4 sm:p-6

                  shadow-lg
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                {/* CARD HEADING */}
                <h3
                  className="
                    text-lg sm:text-xl font-semibold mb-4 sm:mb-6
                    text-gray-900
                    transition-colors duration-300
                    group-hover:text-yellow-600
                  "
                >
                  {group.category}
                </h3>

                {/* TIMELINE */}
                <div className="relative pl-6 sm:pl-8 space-y-3 sm:space-y-4">
                  {/* LINE */}
                  <div
                    className="
                      absolute left-1.5 sm:left-2 top-0 h-full w-1
                      bg-yellow-400 rounded-full
                      transition-all duration-500
                      group-hover:scale-y-105
                    "
                  />

                  {group.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="
                        relative bg-gray-50 p-3 rounded-md
                        transition-all duration-300
                        hover:bg-yellow-50
                        hover:translate-x-1
                        hover:shadow-md
                      "
                    >
                      {/* DOT */}
                      <span
                        className="
                          absolute -left-4 sm:-left-5
                          top-3 sm:top-4
                          h-3 w-3 bg-yellow-400
                          rounded-full
                          border-2 border-white
                          transition-transform duration-300
                          hover:scale-125
                        "
                      />

                      <p className="text-sm sm:text-base text-gray-800 font-medium">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
