"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import JetSmokeCanvas from "./JetSmokeCanvas";
import WelcomeText from "./WelcomeText";
import SkipButton from "./SkipButton";
import { useHasSeenIntro } from "@/hooks/useHasSeenIntro";

type Phase = "black" | "flight" | "text" | "exiting" | "done";

interface IntroScreenProps {
  /** Called when the intro finishes (or is skipped) so the parent can
   *  reveal the actual landing page. */
  onComplete: () => void;
}

/**
 * State machine, not a single long timeline:
 * Coordinating a canvas particle system + SVG jet + staggered text purely
 * with nested setTimeouts gets unreadable and fragile fast (one delay
 * shifts, everything downstream drifts). Instead each phase transition is
 * triggered either by a timer OR a real signal from a child (the canvas
 * tells us when the jet's flight animation has actually finished, rather
 * than us guessing the duration twice in two files).
 */
export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<Phase>("black");
  const { markIntroSeen } = useHasSeenIntro();

  // Phase: black -> flight, after the 0.3s beat
  useEffect(() => {
    if (phase !== "black") return;
    const t = setTimeout(() => setPhase("flight"), 300);
    return () => clearTimeout(t);
  }, [phase]);

  // Phase: text -> exiting, hold the text briefly then fade
  useEffect(() => {
    if (phase !== "text") return;
    // NOTE: spec asked for ~1s hold AND ~2s total intro. Those two numbers
    // don't both fit (0.3s delay + ~0.9s flight + ~0.3s text-in already
    // eats most of the 2s budget), so this hold is compressed to 0.5s to
    // stay close to the 2s target. Bump this back toward 1000ms if you'd
    // rather prioritize "text lingers" over the exact total duration.
    const t = setTimeout(() => setPhase("exiting"), 500);
    return () => clearTimeout(t);
  }, [phase]);

  // Phase: exiting -> done
  useEffect(() => {
    if (phase !== "exiting") return;
    const t = setTimeout(() => {
      setPhase("done");
      markIntroSeen();
      onComplete();
    }, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const handleSkip = () => {
    markIntroSeen();
    onComplete();
  };

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden bg-[#0F0A1F]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {(phase === "flight" || phase === "text" || phase === "exiting") && (
        <JetSmokeCanvas
          onFlightComplete={() => setPhase("text")}
          stopSpawning={phase === "text" || phase === "exiting"}
        />
      )}

      <AnimatePresence>
        {(phase === "text" || phase === "exiting") && <WelcomeText />}
      </AnimatePresence>

      {phase !== "black" && <SkipButton onSkip={handleSkip} />}
    </motion.div>
  );
}
