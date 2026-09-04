import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-white/5">

      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-purple-400 font-medium mb-4">
              Portfolio
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>

            <p className="mt-4 text-gray-400 max-w-xl">
              Some of the projects I've built while learning software
              engineering and web development.
            </p>
          </div>

          <Link
            href="/Projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full
            border border-white/10 bg-white/5
            hover:bg-white/10 hover:border-white/20
            transition-all duration-300"
          >
            View All Projects →
          </Link>

        </div>

      </div>

    </section>
  );
}