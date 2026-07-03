"use client";

import { motion } from "framer-motion";

interface SkipButtonProps {
  onSkip: () => void;
}

/**
 * Fades in slightly after the intro starts (not instantly — an instant skip
 * button reads as an admission the intro isn't worth watching). Positioned
 * bottom-right, low-contrast until hovered, so it doesn't compete with the
 * jet/text for attention but is still easy to find and tap on mobile.
 */
export default function SkipButton({ onSkip }: SkipButtonProps) {
  return (
    <motion.button
      onClick={onSkip}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="absolute bottom-6 right-6 z-50 rounded-full border border-white/20
                 px-4 py-2 text-xs font-mono tracking-wide text-white/60
                 backdrop-blur-sm transition-colors hover:text-white hover:border-white/50"
      aria-label="Skip intro animation"
    >
      Skip Intro →
    </motion.button>
  );
}
