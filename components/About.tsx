"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "Node.js", "Express.js", "Prisma ORM",
];

const whatIDo = [
  {
    title: "Frontend Development",
    desc: "I build responsive, accessible, and interactive user interfaces using modern technologies like React, Next.js, TypeScript, and Tailwind CSS. My focus is on creating fast, intuitive, and visually engaging user experiences across all devices.",
  },
  {
    title: "Backend Development",
    desc: "I develop secure RESTful APIs and scalable backend applications with Node.js, Express.js, Prisma ORM, and relational databases. I enjoy designing systems that are reliable, maintainable, and built for growth.",
  },
  
  {
    title: "Performance & Optimization",
    desc: "I optimize applications for speed, scalability, and maintainability by writing clean code, reducing unnecessary complexity, improving loading performance, and following modern development best practices.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-[8vw] py-20 md:py-28 lg:mx-44">
      {/* Section heading */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs md:text-sm text-[#6D28D9] mb-1.5"
      >
        <span className="text-[#C4B5FD]">$</span> cat about.md
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-mono font-bold text-[clamp(28px,4vw,42px)] text-[#C4B5FD] mb-6" style={{ fontFamily: "'Rubik Wet Paint', cursive" }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-[#C4B5FD] font-medium max-w-3xl mb-8 leading-relaxed"
      >
        Building software isn't just what I do—it's how I solve problems and
        bring ideas to life.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-3xl space-y-5 text-[15px] md:text-base leading-relaxed text-[#C4B5FD] mb-10"
      >
        <p>
          I'm a <span className="text-[#6D28D9] font-semibold">Full-Stack Developer</span> from
          Nigeria with a passion for creating modern, scalable, and user-focused
          web applications. My journey into software development began with
          curiosity and has grown into a commitment to continuously learning,
          building, and improving every day.
        </p>
        <p>
          Over time, I've developed a strong foundation in modern web 
          technologies, including{" "}
          {skills.map((s, i) => (
            <span key={s}>
              <span className="text-[#C4B5FD]">{s}</span>
              {i < skills.length - 1 ? ", " : ""}
            </span>
          ))}
          , and relational databases. I enjoy building applications from the
          ground up—transforming ideas into products that are fast, reliable,
          and intuitive to use.
        </p>
        <p>
          Every project I build strengthens my technical skills and reinforces
          my belief that great software comes from consistency, clean
          architecture, attention to detail, and a genuine desire to solve
          real-world problems.
        </p>
      </motion.div>

      {/* What I Do */}
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono font-bold text-[clamp(28px,4vw,42px)] text-[#C4B5FD] mb-8"  style={{ fontFamily: "'Rubik Wet Paint', cursive" }}
      >
        What I Do
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {whatIDo.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl border border-[#6D28D9]/35 bg-[#1E1440]/40
                       hover:border-[#C4B5FD]/60 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-3xl mb-3"></div>
            <h4 className="font-mono font-semibold text-lg text-[#6D28D9] mb-2">
              {item.title}
            </h4>
            <p className="text-sm leading-relaxed text-[#C4B5FD]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}