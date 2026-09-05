import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 border-t border-white/5 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-72 h-72 md:w-96 md:h-96
          bg-purple-600/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-5xl mx-auto">

        <div
          className="relative rounded-3xl
          border border-white/10
          bg-white/[0.03]
          px-6 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20
          text-center overflow-hidden"
        >

          {/* Decorative glow */}
          <div
            className="absolute -top-24 -right-24
            w-48 h-48
            bg-purple-600/10
            rounded-full blur-3xl"
          />

          <div
            className="absolute -bottom-24 -left-24
            w-48 h-48
            bg-blue-600/10
            rounded-full blur-3xl"
          />

          {/* Heading */}
          <div className="relative">

            <p className="text-sm uppercase tracking-[0.2em]
              text-purple-400 font-medium mb-4"
            >
              Get In Touch
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl
              font-bold tracking-tight"
            >
              Let's{" "}
              <span className="text-gray-500">
                Connect.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto
              text-base sm:text-lg
              text-gray-400
              leading-8"
            >
              I'm a Software Engineering student focused on growing my
              skills in software development and web technologies. I'm
              always open to professional opportunities, internships,
              collaborations, and connecting with people in the industry.
            </p>

            <p
              className="mt-4 max-w-xl mx-auto
              text-base
              text-gray-500
              leading-7"
            >
              If you'd like to get in touch, feel free to reach out
              through email or connect with me on LinkedIn.
            </p>


            {/* Email button */}
            <a
              href="mailto:maliksameer890678@gmail.com"
              className="inline-flex items-center gap-3
              mt-9
              px-7 py-3.5
              rounded-full
              bg-white text-black
              font-semibold
              hover:bg-gray-200
              hover:-translate-y-1
              transition-all duration-300"
            >
              <FaEnvelope size={16} />
              Get In Touch
              <FaArrowRight size={14} />
            </a>


            {/* Social links */}
            <div className="mt-10 flex items-center justify-center gap-6">

              <a
                href="https://github.com/sameer890678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2
                text-sm text-gray-500
                hover:text-white
                transition-colors"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <span className="text-gray-700">
                /
              </span>

              <a
                href="https://www.linkedin.com/in/sameer-hassan-uol"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2
                text-sm text-gray-500
                hover:text-white
                transition-colors"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}