"use client";

import { motion } from "framer-motion";

import { Mail } from "lucide-react"; // Mail isn't a brand logo, so it's still available

const socials = [
  { label: "GitHub", href: "https://github.com/WallexCoder", slug: "github", invert: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/Patrick Walshak", slug: "linkedin", invert: true },
  { label: "X", href: "https://x.com/wallex002", slug: "x", invert: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-[8vw] pt-16 pb-8 border-t border-[#6D28D9]/25">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h3
          className="text-3xl md:text-4xl text-[#C4B5FD] mb-4"
          style={{ fontFamily: "'Rubik Wet Paint', cursive" }}
        >
          Wallex
        </h3>
        <p className="text-sm md:text-base text-[#6D28D9] max-w-md mx-auto leading-relaxed">
          Building fast, scalable, and user-focused digital experiences with
          modern web technologies. Let's build something extraordinary.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-10"
      >
        <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#C4B5FD] mb-4">
          Connect
        </p>
        <div className="flex justify-center gap-4">
  {socials.map(({ label, href, slug, invert }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full
                 border border-[#6D28D9]/40 hover:border-[#C4B5FD]/70 hover:-translate-y-0.5 transition-all"
    >
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={label}
        className={`w-4 h-4 ${invert ? "invert brightness-0 contrast-200" : ""}`}
        loading="lazy"
      />
    </a>
  ))}
  
    <a href="mailto:patrickwalshak1@gmail.com.com"
    aria-label="Email"
    className="w-10 h-10 flex items-center justify-center rounded-full
               border border-[#6D28D9]/40 text-[#C4B5FD]
               hover:border-[#C4B5FD]/70 hover:-translate-y-0.5 transition-all"
  >
    <Mail size={18} />
  </a>
</div>
      </motion.div>

      <div className="border-t border-[#6D28D9]/20 pt-6 text-center space-y-1.5">
        <p className="font-mono text-xs text-[#6D28D9]">© {year} Wallex.</p>
        <p className="font-mono text-xs text-[#6D28D9]">Designed &amp; Developed by Wallex.</p>
        
      </div>
    </footer>
  );
}