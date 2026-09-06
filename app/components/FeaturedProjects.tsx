import Link from "next/link";
import {
  FaDatabase,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { SiBuymeacoffee } from "react-icons/si";

const featuredProjects = [
  {
    title: "Library Management System",
    description:
      "A full-stack library management application built with Next.js, React, Supabase, and Tailwind CSS. It includes database integration, authentication, CRUD operations, book management, and role-based functionality.",
    technologies: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    icon: FaDatabase,
    url: "https://library-management-system-beta-orpin.vercel.app/",
  },
  {
    title: "Bean Haven",
    description:
      "A modern and responsive coffee shop website designed with a focus on clean UI, smooth navigation, and a polished user experience across mobile, tablet, and desktop devices.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    icon: SiBuymeacoffee,
    url: "https://bean-haven-seven.vercel.app/",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p
              className="text-sm uppercase tracking-[0.2em]
              text-purple-400 font-medium mb-4"
            >
              Portfolio
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl
              font-bold tracking-tight"
            >
              Featured Projects
            </h2>

            <p
              className="mt-4 text-gray-400
              max-w-xl
              text-base sm:text-lg
              leading-7"
            >
              A selection of projects that represent my experience in
              software development and web technologies.
            </p>
          </div>

          <Link
            href="/Projects"
            className="inline-flex items-center justify-center
            px-6 py-3 rounded-full
            border border-white/10
            bg-white/5
            text-sm font-medium
            hover:bg-white/10
            hover:border-white/20
            transition-all duration-300
            hover:-translate-y-1"
          >
            View All Projects →
          </Link>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group relative
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                overflow-hidden
                hover:bg-white/[0.05]
                hover:border-white/20
                transition-all duration-300
                hover:-translate-y-1"
              >
                {/* Project Preview */}
                <div
                  className="relative h-52
                  bg-gradient-to-br
                  from-purple-500/10
                  via-black
                  to-blue-500/10
                  border-b border-white/10
                  flex items-center justify-center
                  overflow-hidden"
                >
                  <div
                    className="absolute
                    w-40 h-40
                    bg-purple-600/10
                    rounded-full
                    blur-3xl
                    group-hover:bg-purple-600/20
                    transition-all duration-500"
                  />

                  <div
                    className="relative
                    w-20 h-20
                    rounded-2xl
                    border border-white/10
                    bg-black/40
                    backdrop-blur-sm
                    flex items-center justify-center
                    text-purple-400
                    group-hover:scale-110
                    group-hover:border-purple-400/30
                    transition-all duration-300"
                  >
                    <Icon size={34} />
                  </div>

                  <div
                    className="absolute top-4 right-4
                    px-3 py-1.5
                    rounded-full
                    border border-white/10
                    bg-black/50
                    backdrop-blur-sm
                    text-xs text-gray-400"
                  >
                    Featured
                  </div>
                </div>

                {/* Project Information */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="text-xl sm:text-2xl
                      font-semibold
                      group-hover:text-purple-300
                      transition-colors duration-300"
                    >
                      {project.title}
                    </h3>

                    <FaArrowUpRightFromSquare
                      size={15}
                      className="mt-1.5
                      shrink-0
                      text-gray-600
                      group-hover:text-purple-400
                      transition-colors duration-300"
                    />
                  </div>

                  <p
                    className="mt-4
                    text-sm sm:text-base
                    text-gray-400
                    leading-7"
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1.5
                        rounded-lg
                        border border-white/10
                        bg-black/30
                        text-xs sm:text-sm
                        text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2
                    mt-7
                    px-5 py-2.5
                    rounded-full
                    bg-white
                    text-black
                    text-sm
                    font-semibold
                    hover:bg-gray-200
                    hover:-translate-y-0.5
                    transition-all duration-300"
                  >
                    View Project
                    <FaArrowUpRightFromSquare size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}