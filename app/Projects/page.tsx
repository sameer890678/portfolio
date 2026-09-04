import Link from "next/link";
import {
  FaArrowLeft,
  FaCode,
  FaDatabase,
  FaCoffee,
  FaCubes,
  FaTerminal,
} from "react-icons/fa";

const projects = [
  {
    title: "Library Management System",
    description:
      "A full-stack library management application built to manage books, users, borrowing, and administrative operations. The project includes database integration, authentication, CRUD operations, and role-based functionality.",
    technologies: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    icon: FaDatabase,
    featured: true,
  },
  {
    title: "Bean Haven",
    description:
      "A modern and fully responsive coffee shop website designed and developed with a focus on clean UI, smooth navigation, responsive layouts, and an engaging user experience across mobile, tablet, and desktop devices.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    icon: FaCoffee,
    featured: true,
  },
  {
    title: "Adaptive Selection Sort with Merge",
    description:
      "Designed and implemented A-SSM, an algorithm that improves the performance of ISSA Selection Sort by integrating it with a merge-based approach. The project explored algorithm optimization and time-complexity analysis in C++.",
    technologies: ["C++", "DSA", "Algorithms", "Complexity Analysis"],
    icon: FaCode,
    featured: false,
  },
  {
    title: "Army Management System",
    description:
      "Developed a console-based management system for handling soldiers, weapons, and resources. The project helped me apply object-oriented programming, data structures, and file handling to a larger C++ application.",
    technologies: ["C++", "OOP", "File Handling", "Data Structures"],
    icon: FaCubes,
    featured: false,
  },
  {
    title: "Tic Tac Toe",
    description:
      "Built a two-player console Tic Tac Toe game while learning fundamental programming concepts such as arrays, loops, functions, conditions, and basic game logic.",
    technologies: ["C++", "Arrays", "Functions", "Game Logic"],
    icon: FaTerminal,
    featured: false,
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Background glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <section className="px-6 py-16 sm:py-20 md:py-28">

        <div className="max-w-6xl mx-auto">

          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400
            hover:text-white transition-colors mb-16"
          >
            <FaArrowLeft size={13} />
            Back to Home
          </Link>

          {/* Page heading */}
          <div className="max-w-3xl mb-16 md:mb-20">

            <p className="text-sm uppercase tracking-[0.2em] text-purple-400 font-medium mb-4">
              My Work
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Projects I've{" "}
              <span className="text-gray-500">
                worked on.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-400 leading-8 max-w-2xl">
              A collection of projects I've built while learning software
              engineering, web development, databases, algorithms, and
              application development.
            </p>

          </div>


          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <article
                  key={index}
                  className={`group relative rounded-2xl border
                  border-white/10 bg-white/[0.03]
                  p-6 sm:p-8
                  hover:bg-white/[0.06]
                  hover:border-white/20
                  hover:-translate-y-1
                  transition-all duration-300
                  ${
                    project.featured
                      ? "md:first:col-span-1"
                      : ""
                  }`}
                >

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl
                    bg-purple-500/10 border border-purple-500/20
                    flex items-center justify-center
                    text-purple-400 mb-7
                    group-hover:bg-purple-500/20
                    transition-colors"
                  >
                    <Icon size={20} />
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <span
                      className="absolute top-6 right-6
                      text-[11px] sm:text-xs
                      uppercase tracking-wider
                      text-purple-300
                      bg-purple-500/10
                      border border-purple-500/20
                      px-3 py-1 rounded-full"
                    >
                      Featured
                    </span>
                  )}

                  {/* Project name */}
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-7">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-xs sm:text-sm
                        text-gray-400
                        bg-white/5
                        border border-white/10
                        px-3 py-1.5
                        rounded-full"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </article>
              );
            })}

          </div>


          {/* Bottom section */}
          <div
            className="mt-20 md:mt-28
            border-t border-white/5
            pt-12
            flex flex-col sm:flex-row
            sm:items-center sm:justify-between
            gap-6"
          >

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                More projects coming.
              </h2>

              <p className="mt-2 text-gray-500">
                I'm continuously learning and building new things.
              </p>
            </div>

            <a
              href="https://github.com/sameer890678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center
              px-6 py-3 rounded-full
              bg-white text-black font-semibold
              hover:bg-gray-200
              hover:-translate-y-1
              transition-all duration-300"
            >
              View GitHub
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}