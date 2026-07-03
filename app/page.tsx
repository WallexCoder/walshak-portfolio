"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "@/components/intro/IntroScreen";
import { useHasSeenIntro } from "@/hooks/useHasSeenIntro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Projector } from "lucide-react";
import Projects from "@/components/Projects";

export default function Home() {
  const { shouldPlayIntro, checked } = useHasSeenIntro();
  const [introDone, setIntroDone] = useState(false);

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
        className="min-h-screen bg-[#0F0A1F]"
      >
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </motion.main>

    </>
  );
}