"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      <nav className="mx-auto max-w-6xl px-4 sm:px-6 pt-4">

        <div className="flex items-center justify-between
          rounded-2xl border border-white/10
          bg-black/60 backdrop-blur-xl
          px-5 py-3">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-white">Sameer</span>
            <span className="text-purple-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="/#about"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="/#skills"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </a>

            <Link
              href="/Projects"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </Link>

            <a
              href="/#contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>

          </div>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center gap-3">

            <a
              href="https://github.com/sameer890678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-gray-400 hover:text-white
              transition-colors"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/sameer-hassan-uol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-gray-400 hover:text-white
              transition-colors"
            >
              <FaLinkedin size={18} />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white
            transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FaXmark size={21} />
            ) : (
              <FaBars size={21} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden mt-2 rounded-2xl
            border border-white/10
            bg-black/90 backdrop-blur-xl
            p-4"
          >

            <div className="flex flex-col gap-1">

              <a
                href="/#about"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl
                text-gray-300 hover:text-white
                hover:bg-white/5 transition-colors"
              >
                About
              </a>

              <a
                href="/#skills"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl
                text-gray-300 hover:text-white
                hover:bg-white/5 transition-colors"
              >
                Skills
              </a>

              <Link
                href="/Projects"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl
                text-gray-300 hover:text-white
                hover:bg-white/5 transition-colors"
              >
                Projects
              </Link>

              <a
                href="/#contact"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl
                text-gray-300 hover:text-white
                hover:bg-white/5 transition-colors"
              >
                Contact
              </a>

            </div>

            {/* Mobile socials */}
            <div className="flex items-center gap-4
              border-t border-white/10 mt-3 pt-4 px-4">

              <a
                href="https://github.com/sameer890678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/sameer-hassan-uol"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={19} />
              </a>

            </div>

          </div>
        )}

      </nav>

    </header>
  );
}