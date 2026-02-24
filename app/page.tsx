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
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="mt-15 text-lg md:text-xl text-gray-300 text-center max-w-xl">
          Hi! I’m Sameer, a passionate Software engineering student learning modern web development. Im studying in UOL where im getting every skill and knowledge that i require
        </p>
      </section>

      {/* About Section */}
<section className="py-20 px-4 bg-gray-800 flex justify-center">
  <div className="max-w-2xl text-center p-8 rounded-lg text-white about-hover">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-lg">
      I’m a passionate Software Engineering student learning modern web development.
      I enjoy building interactive websites and improving my coding skills every day.
    </p>
  </div>
</section>

{/*Projetcs*/}
     

 <a
      href="https://sameerportfolio598.vercel.app/Projects"
      target="_blank"
      className="flex items-center justify-center gap-2 px-4 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
      style={{
        background: "linear-gradient(to right, black, purple)"
      }}
    >
      <FaGithub size={17} /> Projects
    </a>

{/* Links Section */}
<section className="py-20 px-4 bg-gray-800 text-center">
  <h2 className="text-4xl font-bold mb-6">Links</h2>
  <div className="flex justify-center gap-6 flex-wrap">

    {/* GitHub Button */}
    <a
      href="https://github.com/sameer890678"
      target="_blank"
      className="flex items-center justify-center gap-2 px-4 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
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
      className="flex items-center justify-center gap-2 px-4 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
      style={{
        background: "linear-gradient(to right, blue, cyan)"
      }}
    >
      <FaLinkedin size={17} />
    </a>
    {/* Email Button */}
<a
  href="mailto:maliksameer890678@gmail.com"
  className="flex items-center justify-center gap-2 px-4 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
  style={{
    background: "linear-gradient(to right, red, blue)"
  }}
>
  <FaEnvelope size={17} />
</a>


  </div>
</section>
</div>
  );
}


