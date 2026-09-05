import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Branding */}
          <div className="text-center md:text-left">
            <a
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              <span className="text-white">Sameer</span>
              <span className="text-purple-400">.</span>
            </a>

            <p className="mt-2 text-sm text-gray-500">
              Software Engineering Student
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="/#about"
              className="text-gray-500 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="/#skills"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Skills
            </a>

            <a
              href="/Projects"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="/#contact"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sameer890678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full
              border border-white/10
              text-gray-500
              hover:text-white
              hover:border-white/20
              hover:bg-white/5
              transition-all duration-300"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/sameer-hassan-uol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full
              border border-white/10
              text-gray-500
              hover:text-white
              hover:border-white/20
              hover:bg-white/5
              transition-all duration-300"
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="mailto:maliksameer890678@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-full
              border border-white/10
              text-gray-500
              hover:text-white
              hover:border-white/20
              hover:bg-white/5
              transition-all duration-300"
            >
              <FaEnvelope size={17} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-8 pt-6
          border-t border-white/5
          flex flex-col sm:flex-row
          items-center justify-between
          gap-3
          text-xs text-gray-600"
        >
          <p>
            © {new Date().getFullYear()} Sameer. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}