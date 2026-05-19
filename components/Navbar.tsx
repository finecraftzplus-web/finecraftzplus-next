"use client";

import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}

        <a href="/" className="flex items-center">

          <img
            src="/logos/logo-main.png"
            alt="FinecraftzPlus"
            className="h-16 md:h-20 w-auto object-contain"
          />

        </a>

        {/* DESKTOP NAVIGATION */}

        <nav className="hidden md:flex items-center gap-10 text-[#222] text-sm uppercase tracking-[2px] font-semibold">

          <a href="/" className="hover:text-[#7ED321] transition">
            Home
          </a>

          <a href="/solutions" className="hover:text-[#7ED321] transition">
            Solutions
          </a>

          <a href="/projects" className="hover:text-[#7ED321] transition">
            Projects
          </a>

          <a href="/products" className="hover:text-[#7ED321] transition">
            Products
          </a>

          <a href="/about" className="hover:text-[#7ED321] transition">
            About
          </a>

          <a href="/contact" className="hover:text-[#7ED321] transition">
            Contact
          </a>

        </nav>

        {/* MOBILE HAMBURGER */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1 ml-4 z-50"
        >

          <span className="w-8 h-[3px] bg-black rounded-full"></span>
          <span className="w-8 h-[3px] bg-black rounded-full"></span>
          <span className="w-8 h-[3px] bg-black rounded-full"></span>

        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="md:hidden bg-white border-t border-black/5 shadow-lg">

          <nav className="flex flex-col px-6 py-6 text-[#222] text-sm uppercase tracking-[2px] font-semibold">

            <a
              href="/"
              className="py-4 border-b border-black/5"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="/solutions"
              className="py-4 border-b border-black/5"
              onClick={() => setMenuOpen(false)}
            >
              Solutions
            </a>

            <a
              href="/projects"
              className="py-4 border-b border-black/5"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="/products"
              className="py-4 border-b border-black/5"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </a>

            <a
              href="/about"
              className="py-4 border-b border-black/5"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="/contact"
              className="py-4"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

          </nav>

        </div>

      )}

    </header>
  );
}