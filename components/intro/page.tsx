"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "@/components/intro/IntroScreen";
import { useHasSeenIntro } from "@/hooks/useHasSeenIntro";

/**
 * This mirrors your existing app/page.tsx — swap in your real
 * Navbar / Hero / Projects components where marked below.
 */
export default function Home() {
  const { shouldPlayIntro, checked } = useHasSeenIntro();
  const [introDone, setIntroDone] = useState(false);

  // Avoid rendering anything until we know whether the intro should play —
  // prevents a flash of the landing page before the intro mounts.
  if (!checked) return null;

  const showIntro = shouldPlayIntro && !introDone;

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroScreen key="intro" onComplete={() => setIntroDone(true)} />
        )}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* <Navbar /> */}
        {/* <Hero /> */}
        {/* ...rest of your landing page */}
      </motion.main>
    </>
  );
}
