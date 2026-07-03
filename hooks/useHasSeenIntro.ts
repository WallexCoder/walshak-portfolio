"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "portfolio_intro_seen";

// Set to `false` to restore "only once per session" behavior later.
const PLAY_EVERY_REFRESH = true;

export function useHasSeenIntro() {
  const [shouldPlayIntro, setShouldPlayIntro] = useState(true);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (PLAY_EVERY_REFRESH) {
      setShouldPlayIntro(true);
    } else {
      const seen = sessionStorage.getItem(SESSION_KEY);
      setShouldPlayIntro(!seen);
    }
    setChecked(true);
  }, []);

  const markIntroSeen = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
  };

  return { shouldPlayIntro, checked, markIntroSeen };
}