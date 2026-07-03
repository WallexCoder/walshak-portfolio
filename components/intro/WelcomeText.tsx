"use client";

import { motion } from "framer-motion";

const TEXT = "WELCOME TO MY PORTFOLIO";

/**
 * Simulates "smoke forming into text" without literal particle-to-glyph
 * physics: each letter starts blurred, translucent, and slightly displaced
 * (as if drifting smoke), then sharpens and settles into place. Staggering
 * the letters left-to-right mirrors the jet's flight direction, so the text
 * feels like a continuation of the smoke trail's motion rather than a
 * separate, disconnected animation.
 */
export default function WelcomeText() {
  const letters = TEXT.split("");

  return (
    <motion.div
      className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeIn" } }}
      transition={{ duration: 0.2 }}
    >
      <p className="flex flex-wrap justify-center px-6 text-center font-mono
                     text-3xl font-extrabold sm:text-3xl md:text-4xl tracking-[0.2em] text-[#B3CFE5]">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              filter: "blur(14px)",
              y: (Math.random() - 0.5) * 24,
              x: (Math.random() - 0.5) * 16,
            }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0, x: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05, // left-to-right stagger, echoes flight direction
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
