export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">

        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.2em] text-purple-400 font-medium mb-4">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            A developer who is always{" "}
            <span className="text-gray-500">
              learning.
            </span>
          </h2>

          <p className="mt-8 text-gray-400 text-base sm:text-lg leading-8">
            I'm a passionate Software Engineering student learning modern
            web development. I enjoy building interactive websites,
            exploring new technologies, and continuously improving my
            programming skills.
          </p>

          <p className="mt-5 text-gray-400 text-base sm:text-lg leading-8">
            My goal is to become a skilled full-stack developer and build
            useful applications that solve real problems.
          </p>

        </div>

      </div>
    </section>
  );
}