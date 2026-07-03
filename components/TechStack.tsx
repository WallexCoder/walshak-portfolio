"use client";

import { motion } from "framer-motion";
import { Webhook } from "lucide-react";

interface StackItem {
  name: string;
  slug?: string; // simple-icons slug for the logo
  invert?: boolean;
}

const categories: { title: string; items: StackItem[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "Prisma ORM", slug: "prisma" },
      { name: "REST APIs" }, // no slug — uses fallback icon
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "GitHub", slug: "github", invert: true },
      { name: "Vercel", slug: "vercel", invert: true },
      { name: "VS Code", slug: "visualstudiocode" },
      { name: "Postman", slug: "postman" },
      { name: "Figma", slug: "figma" },
    ],
  },
];

// Accent color per category — mirrors the reference image's per-section labels
const categoryColors: Record<string, string> = {
  Frontend: "#5EEAD4",
  Backend: "#5EEAD4",
  Database: "#5EEAD4",
  Tools: "#5EEAD4",
};

export default function TechStack() {
  return (
    <section id="stack" className="px-6 md:px-[8vw] py-20 md:py-28 lg:mx-44">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs md:text-sm text-[#6D28D9] mb-1.5"
      >
        <span className="text-[#C4B5FD]">$</span> ls tech-stack/
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-mono font-bold text-[clamp(28px,4vw,42px)] text-[#C4B5FD] mb-12" style={{ fontFamily: "'Rubik Wet Paint', cursive" }}
      >
        My Development Stack
      </motion.h2>

      <div className="space-y-12">
        {categories.map((cat, ci) => (
          <div key={cat.title}>
            <motion.h3
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.05 }}
              className="font-mono font-bold text-xs tracking-[0.15em] uppercase mb-4"
              style={{ color: categoryColors[cat.title] }}
            >
              {cat.title}
            </motion.h3>

            <div className="flex flex-wrap gap-4">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center gap-2
                             rounded-xl border border-[#6D28D9]/35 bg-[#1E1440]/40
                             hover:border-[#C4B5FD]/60 hover:-translate-y-1 transition-all duration-300"
                >
                  {item.slug ? (
  <img
    src={`https://cdn.simpleicons.org/${item.slug}`}
    alt={item.name}
    className={`w-7 h-7 md:w-8 md:h-8 ${
      item.invert ? "invert brightness-0 contrast-200 opacity-90" : ""
    }`}
    loading="lazy"
    onError={(e) => {
      e.currentTarget.onerror = null;
      e.currentTarget.style.display = "none";
    }}
  />
) : (
  <Webhook className="w-7 h-7 md:w-8 md:h-8 text-[#C4B5FD]" />
)}
                  <span className="font-mono text-[10px] md:text-xs text-[#6D28D9] text-center leading-tight px-1 truncate w-full">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}