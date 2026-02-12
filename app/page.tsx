"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Home() {
  const messages = [
    "Welcome to Sameer's Website",
    "I am a Software Engineering Student",
    "I love coding in C++..."
  ];

  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    if (messageIndex >= messages.length) return;

    const interval = setInterval(() => {
      setText(messages[messageIndex].slice(0, index + 1));
      index++;

      if (index === messages[messageIndex].length) {
        clearInterval(interval);
        if (messageIndex + 1 < messages.length) {
          setTimeout(() => {
            setMessageIndex(messageIndex + 1);
            setText("");
          }, 1000);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <div className="bg-blue text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-xl">
          Hi! I’m Sameer, a passionate Software engineering student learning modern web development.
        </p>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          I am a software engineering student at University of Lahore. I love building websites and learning modern web technologies like TypeScript, Next.js, and Tailwind CSS.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-sm">
            <h3 className="text-2xl font-semibold mb-2">Tic Tac Toe game</h3>
            <p className="text-gray-300">Built a 2-player Tic Tac Toe game in C++. Learned about arrays, loops, functions, and game logic implementation. Applied programming concepts to create an interactive console game.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-sm">
            <h3 className="text-2xl font-semibold mb-2">Army Management System</h3>
            <p className="text-gray-300">Developed a console-based Army Management System in C++. Managed soldiers, weapons, and resources using data structures and file handling. Learned object-oriented programming concepts and organized complex data efficiently.</p>
          </div>
        </div>
      </section>
{/* Links Section */}
<section className="py-20 px-4 bg-gray-800 text-center">
  <h2 className="text-4xl font-bold mb-6">Links</h2>
  <div className="flex justify-center gap-6 flex-wrap">

    {/* GitHub Button */}
    <a
      href="https://github.com/sameer890678"
      target="_blank"
      className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-white text-xs font-semibold
                 transform hover:scale-105 transition-all duration-300"
      style={{
        background: "linear-gradient(to right, black, purple)"
      }}
    >
      <FaGithub size={17} />
    </a>

    {/* LinkedIn Button */}
    <a
      href="https://www.linkedin.com/in/sameer-hassan-974441284"
      target="_blank"
      className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-white text-xs font-semibold
                 transform hover:scale-105 transition-all duration-300"
      style={{
        background: "linear-gradient(to right, blue, cyan)"
      }}
    >
      <FaLinkedin size={17} />
    </a>
    {/* Email Button */}
<a
  href="mailto:maliksameer890678@gmail.com"
  className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-white text-xs font-semibold
             transform hover:scale-105 transition-all duration-300"
  style={{
    background: "linear-gradient(to right, red, yellow, blue)"
  }}
>
  <FaEnvelope size={14} />
</a>


  </div>
</section>
</div>
  );
}


