"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const name = "Patrick Walshak";
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      if (!deleting) {
        i++;
        setTyped(name.slice(0, i));
        if (i === name.length) {
          timer = setTimeout(() => { deleting = true; tick(); }, 1200);
          return;
        }
        timer = setTimeout(tick, 65);
      } else {
        i--;
        setTyped(name.slice(0, i));
        if (i === 0) {
          timer = setTimeout(() => { deleting = false; tick(); }, 500);
          return;
        }
        timer = setTimeout(tick, 35);
      }
    }

    timer = setTimeout(tick, 65);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-[8vw] pt-28 md:pt-32 pb-16"
    >
      {/* No order-* classes — DOM order (text, then image) naturally
          stacks correctly on mobile and lays out left-to-right on desktop */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 lg:mx-44">
        {/* Text column */}
        <div className="flex-1 w-full">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-mono lg:text-2xl font-bold md:text-sm text-[#6D28D9] mb-1.5"
          >
            <span className="text-[#C4B5FD] text-2xl">$</span> Hi, My Name Is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="font-mono font-bold lg:text-[80px] text-4xl leading-[1.15] text-[#C4B5FD] mb-4 break-words"
            style={{ fontFamily: "'Rubik Wet Paint', cursive" }}
          >
            <span className="text-[#6D28D9] mr-2">&gt;</span>
            {typed}
            <span className="inline-block w-[3px] h-[0.85em] bg-[#C4B5FD] ml-1 animate-pulse align-middle" />
          </motion.h1>

          <motion.h2 className=" md:text-5xl text-lg font-extrabold leading-tight tracking-tight font-mono text-gray-200">
                I build complete web applications that<br></br> solve real problems.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-xl md:text-[17px] mt-10 leading-8 tracking-wide text-[#C4B5FD] max-w-[520px] mb-10 md:mb-8 "
          >
            <b className="text-[#6D28D9] lg:text-2xl text-3xl font-semibold"   style={{ fontFamily: "'Rubik Wet Paint', cursive" }} >Full-Stack Developer</b> crafting high-performance digital experiences with Next.js, TypeScript, React, Node.js, and modern web technologies. From intuitive interfaces to scalable backend systems, I focus on building products that are fast, reliable, and designed with precision. Currently open to new opportunities.
          </motion.p>

          <motion.div
  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 0.5 }}
  className="flex flex-col md:flex-row w-full md:w-auto gap-3 md:gap-4"
>
  
    <a href="#projects"
    className="w-full md:w-auto text-center font-mono text-sm font-semibold
               border border-[#6D28D9]/50 text-[#C4B5FD] px-5 py-3 rounded-lg
               hover:border-[#C4B5FD] hover:-translate-y-0.5 transition-all
               md:bg-[#C4B5FD] md:text-[#0F0A1F] md:border-none"
  >
    View Projects
  </a>
  
    <a href="#contact"
    className="w-full md:w-auto text-center font-mono text-sm font-semibold
               border border-[#6D28D9]/50 text-[#C4B5FD] px-5 py-3 rounded-lg
               hover:border-[#C4B5FD] hover:-translate-y-0.5 transition-all"
  >
    Get in touch →
  </a>
</motion.div>
        </div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 self-center md:self-auto"
        >
          {/* <div className="relative w-64 h-80 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-[#6D28D9]/35">
            <Image
              src="/img/photo_2026-05-22_20-10-54.jpg"
              alt="Patrick Walshak"
              fill
              className="object-cover"
              priority
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}