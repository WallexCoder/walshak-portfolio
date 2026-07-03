"use client";

import { useEffect, useRef } from "react";

interface JetSmokeCanvasProps {
  /** Called once the jet has finished its flight path, so the parent
   *  knows when to start the text-formation phase. */
  onFlightComplete: () => void;
  /** When true, existing smoke particles keep drifting/fading but no
   *  new particles spawn — used while the text is dissolving in. */
  stopSpawning: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number; // 0 to 1, counts down
  decay: number;
}

export default function JetSmokeCanvas({
  onFlightComplete,
  stopSpawning,
}: JetSmokeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const jetProgressRef = useRef(0);
  const stopSpawningRef = useRef(stopSpawning);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    stopSpawningRef.current = stopSpawning;
  }, [stopSpawning]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const FLIGHT_DURATION_MS = 4000;
    const startX = () => 0.5 * window.innerWidth;   // bottom-center
const startY = () => 1.1 * window.innerHeight;  // starts below screen
const endX = () => 0.5 * window.innerWidth;     // same X — straight line up
const endY = () => -0.1 * window.innerHeight;   // exits above screen

    function drawJet(x: number, y: number, angle: number) {
      if (!ctx) return;
      const scale = 3.2; // bigger jet
      ctx.lineWidth = 1.5; // adds visible weight/outline — this is what makes it read as "bolder"
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.scale(scale, scale);
      ctx.fillStyle = "#C4B5FD";
      ctx.strokeStyle = "#6D28D9";
      ctx.beginPath();
      ctx.moveTo(26, 0);
      ctx.lineTo(4, -5);
      ctx.lineTo(-6, -14);
      ctx.lineTo(-10, -12);
      ctx.lineTo(-2, -2);
      ctx.lineTo(-16, -2);
      ctx.lineTo(-20, -6);
      ctx.lineTo(-22, -6);
      ctx.lineTo(-18, 0);
      ctx.lineTo(-22, 6);
      ctx.lineTo(-20, 6);
      ctx.lineTo(-16, 2);
      ctx.lineTo(-2, 2);
      ctx.lineTo(-10, 12);
      ctx.lineTo(-6, 14);
      ctx.lineTo(4, 5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    function spawnParticle(x: number, y: number) {
      const spread = 6;
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * spread,
        y: y + (Math.random() - 0.5) * spread,
        vx: -0.15 - Math.random() * 0.15,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 4 + Math.random() * 5,
        life: 1,
        decay: 0.006 + Math.random() * 0.006,
      });
    }

    function step(timestamp: number) {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const t = Math.min(elapsed / FLIGHT_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      jetProgressRef.current = eased;

      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const jx = startX() + (endX() - startX()) * eased;
      const jy = startY() + (endY() - startY()) * eased;
      const angle = Math.atan2(endY() - startY(), endX() - startX());

      if (t < 1) {
        drawJet(jx, jy, angle);
        if (!stopSpawningRef.current) {
          for (let i = 0; i < 2; i++) {
            spawnParticle(jx - Math.cos(angle) * 44, jy - Math.sin(angle) * 64);
          }
        }
      } else if (!completedRef.current) {
        completedRef.current = true;
        onFlightComplete();
      }

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.radius += 0.15;
      });
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);

      particlesRef.current.forEach((p) => {
        if (!ctx) return;
        ctx.beginPath();
        ctx.fillStyle = `rgba(196, 181, 253, ${p.life * 0.35})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 pointer-events-none"
    />
  );
}