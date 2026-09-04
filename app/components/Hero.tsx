"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-10 w-48 h-48 bg-pink-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-5xl mx-auto text-center">

        <p className="text-sm md:text-base text-purple-400 font-medium tracking-[0.2em] uppercase mb-6">
          Hello, I'm Sameer
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
          I build things for the{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            web.
          </span>
        </h1>

        <div className="mt-6 min-h-[40px] text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
          {text}
          <span className="text-purple-400 animate-pulse">|</span>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-8">
          I'm a Software Engineering student passionate about building
          modern websites, learning new technologies, and turning ideas
          into real-world projects.
        </p>

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
  );
}