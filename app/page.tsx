"use client";

import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const messages = [
    "Software Engineering Student",
    "Frontend Developer",
    "Future Full-Stack Developer",
  ];

  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(messages[messageIndex].slice(0, index + 1));
      index++;

      if (index === messages[messageIndex].length) {
        clearInterval(interval);

        setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % messages.length);
          setText("");
        }, 1500);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">

        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-10 w-48 h-48 bg-pink-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="w-full max-w-5xl mx-auto text-center">

          {/* Small introduction */}
          <p className="text-sm md:text-base text-purple-400 font-medium tracking-[0.2em] uppercase mb-6">
            Hello, I'm Sameer
          </p>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            I build things for the{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              web.
            </span>
          </h1>

          {/* Typing text */}
          <div className="mt-6 min-h-[40px] text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
            {text}
            <span className="text-purple-400 animate-pulse">|</span>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-8">
            I'm a Software Engineering student passionate about building
            modern websites, learning new technologies, and turning ideas
            into real-world projects.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              href="/Projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full
              bg-white text-black font-semibold
              hover:bg-gray-200
              transition-all duration-300
              hover:-translate-y-1"
            >
              View My Projects
            </Link>

            <a
              href="#about"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full
              border border-white/20
              bg-white/5
              text-white font-semibold
              hover:bg-white/10
              transition-all duration-300
              hover:-translate-y-1"
            >
              About Me
            </a>

          </div>

          {/* Social links */}
          <div className="mt-10 flex justify-center gap-5">

            <a
              href="https://github.com/sameer890678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-white/10 bg-white/5
              text-gray-400 hover:text-white hover:border-white/30
              hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sameer-hassan-uol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-white/10 bg-white/5
              text-gray-400 hover:text-white hover:border-white/30
              hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:maliksameer890678@gmail.com"
              aria-label="Email"
              className="p-3 rounded-full border border-white/10 bg-white/5
              text-gray-400 hover:text-white hover:border-white/30
              hover:-translate-y-1 transition-all duration-300"
            >
              <FaEnvelope size={20} />
            </a>

          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2
            text-gray-500 hover:text-white transition-colors"
            aria-label="Scroll to About section"
          >
            <FaArrowDown className="animate-bounce" />
          </a>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
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


      {/* ================= PROJECTS ================= */}
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


      {/* ================= CONTACT ================= */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.2em] text-purple-400 font-medium mb-4">
            Get In Touch
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Let's build something together.
          </h2>

          <p className="mt-6 text-gray-400 text-base sm:text-lg leading-8">
            Whether you want to discuss a project, technology, or simply
            connect, feel free to reach out.
          </p>

          <a
            href="mailto:maliksameer890678@gmail.com"
            className="inline-block mt-8 px-7 py-3.5 rounded-full
            bg-white text-black font-semibold
            hover:bg-gray-200
            hover:-translate-y-1
            transition-all duration-300"
          >
            Send Me an Email
          </a>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/5 py-8 px-6">

        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row
        items-center justify-between gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Sameer. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="https://github.com/sameer890678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sameer-hassan-uol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="mailto:maliksameer890678@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}

