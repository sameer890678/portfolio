import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa6";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiSupabase,
  SiCplusplus,
  SiVercel,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Languages",
    description: "Languages I use to build and understand software.",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Frontend",
    description: "Tools I use to create modern and responsive interfaces.",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Database",
    description: "Technologies I'm learning for full-stack development.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Supabase", icon: SiSupabase },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Tools",
    description: "Tools I use throughout my development workflow.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: FaFigma },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="max-w-3xl mb-14 md:mb-16">

          <p className="text-sm uppercase tracking-[0.2em] text-purple-400 font-medium mb-4">
            My Toolkit
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Technologies I{" "}
            <span className="text-gray-500">
              work with.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-8">
            A growing collection of languages, frameworks, databases, and
            tools I've learned and used throughout my projects.
          </p>

        </div>


        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10
              bg-white/[0.03] p-6 sm:p-7
              hover:bg-white/[0.05]
              hover:border-white/20
              transition-all duration-300"
            >

              {/* Group title */}
              <div className="flex items-center gap-3 mb-2">

                <div
                  className="w-9 h-9 rounded-lg
                  bg-purple-500/10
                  border border-purple-500/20
                  flex items-center justify-center
                  text-purple-400"
                >
                  <FaCode size={15} />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {group.title}
                </h3>

              </div>

              {/* Group description */}
              <p className="text-sm text-gray-500 leading-6 mb-6">
                {group.description}
              </p>


              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">

                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2
                      rounded-xl
                      border border-white/10
                      bg-black/30
                      px-3.5 py-2.5
                      text-sm text-gray-300
                      hover:text-white
                      hover:border-white/20
                      hover:bg-white/5
                      transition-all duration-200"
                    >
                      <Icon size={17} />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}