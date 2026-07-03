"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { num: "01", label: "Home", href: "#hero" },
  { num: "03", label: "About", href: "#about" },
  { num: "02", label: "Projects", href: "#projects" },
  { num: "04", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6
              bg-[#0F0A1F]/75 backdrop-blur-md border-b border-[#6D28D9]/35 lg:mx-44"
    >
      <div className="flex items-center gap-2">
    <span
  className="md:pl-3 md:ml-1 md:border-l border-[#6D28D9]/35 text-2xl text-[#C4B5FD]"
  style={{ fontFamily: "'Rubik Wet Paint', cursive" }}
>
  Patrick Walshak
</span>
      </div>

      <ul
        className={`font-mono text-2xl gap-10 items-center md:text-lg md:gap-8 p-5 pt-16 md:p-0 
        md:flex md:static md:flex-row md:bg-transparent md:w-auto md:h-auto md:translate-x-0
        fixed top-0 right-0 h-screen w-[70%] max-w-[300px] flex-col justify-center
        bg-[#1E1440] transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {links.map((l) => (
          <li key={l.num} className="mt-6 md:mt-0">
            <a
              href={l.href}
              onClick={() => setOpen(false)}
              className="relative text-[#C4B5FD] no-underline hover:opacity-100
                         after:content-[''] after:absolute after:left-0 after:-bottom-1
                         after:h-px after:w-0 after:bg-[#C4B5FD] hover:after:w-full
                         after:transition-all after:duration-300" style={{ fontFamily: "'Rubik Wet Paint', cursive" }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      
       <a href="/resume"
  className="hidden md:inline-block font-mono text-lg font-semibold
             bg-[#C4B5FD] text-[#0F0A1F] px-4 py-2 rounded
             hover:-translate-y-0.5 transition-transform"
>
  Resume ↓
</a>

      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1"
      >
        <span className={`w-5 h-0.5 bg-[#C4B5FD] transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
        <span className={`w-5 h-0.5 bg-[#C4B5FD] transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`w-5 h-0.5 bg-[#C4B5FD] transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
      </button>
    </motion.nav>
  );
}