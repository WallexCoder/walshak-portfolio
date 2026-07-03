"use client";

import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  featured: boolean;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string; // leave undefined to show the placeholder box
}

const projects: Project[] = [
  {
    featured: true,
    title: "NovaFit",
    description:
      "NovaFit is an e-commerce website for fashion and streetwear, where users can browse products, add items to their cart, and checkout .",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/WallexCoder/novafit",
    liveUrl: "https://novafit-indol.vercel.app/",
  },
];

export default function Projects() {
  return (
  <section id="projects" className="px-6 md:px-[8vw] py-20 md:py-28 text-center">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-4 mb-14"
    >
      <span className="font-mono text-sm text-[#5EEAD4]">04.</span>
      <h2
        className="text-3xl md:text-5xl text-[#C4B5FD]"
        style={{ fontFamily: "'Rubik Wet Paint', cursive" }}
      >
        Some Things I've Built
      </h2>
    </motion.div>

    <div className="space-y-16 max-w-3xl mx-auto">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          {/* Image / carousel header */}
          <div className="relative rounded-xl overflow-hidden border border-[#6D28D9]/35 mb-6">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-72 object-cover"
              />
            ) : (
              <div className="w-full h-64 md:h-72 bg-[#1E1440]/60 flex items-center justify-center">
                <span className="font-mono text-sm text-[#6D28D9]">
                 <img src="/img/Screenshot from 2026-07-03 10-35-37.png" alt="" />
                </span>
              </div>
            )}

            <button
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
                         bg-black/30 backdrop-blur-sm flex items-center justify-center
                         text-[#C4B5FD] hover:bg-black/50 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
                         bg-black/30 backdrop-blur-sm flex items-center justify-center
                         text-[#C4B5FD] hover:bg-black/50 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {project.featured && (
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#5EEAD4] mb-2">
              Featured Project
            </p>
          )}

          <h3 className="font-mono font-bold text-2xl md:text-3xl text-[#5EEAD4] mb-4">
            {project.title}
          </h3>

          <div className="bg-[#1E1440]/50 border border-[#6D28D9]/25 rounded-lg p-5 mb-4">
            <p className="text-[15px] md:text-base text-[#C4B5FD]/90 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4 font-mono text-xs text-[#6D28D9]">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            
              <a href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="w-5 h-5 flex items-center justify-center"
            >
              <img
                src="https://cdn.simpleicons.org/github"
                alt="GitHub"
                className="w-5 h-5 invert brightness-0 contrast-200 hover:opacity-70 transition-opacity"
              />
            </a>
            
              <a href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live project"
              className="text-[#C4B5FD] hover:text-[#5EEAD4] transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
}