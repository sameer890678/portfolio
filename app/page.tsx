"use client";

import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

