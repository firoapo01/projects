"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

function createCluster(canvasW: number, canvasH: number): Particle[] {
  const baseVx = 0.3 + Math.random() * 0.5;
  const baseVy = -(0.1 + Math.random() * 0.2);
  const count = 3 + Math.floor(Math.random() * 3);
  const cx = Math.random() * canvasW;
  const cy = Math.random() * canvasH;
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: cx + (Math.random() - 0.5) * 40,
      y: cy + (Math.random() - 0.5) * 40,
      vx: baseVx + (Math.random() - 0.5) * 0.3,
      vy: baseVy + (Math.random() - 0.5) * 0.15,
      radius: 1 + Math.random(),
      opacity: 0.15 + Math.random() * 0.2,
    });
  }
  return particles;
}

export default function SandParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const particles: Particle[] = [];
    const clusterCount = Math.ceil(70 / 4);
    for (let i = 0; i < clusterCount; i++) {
      particles.push(...createCluster(canvas.width, canvas.height));
    }
    while (particles.length > 70) particles.pop();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const speedMul = 1 + scrollRef.current * 0.0003;

      for (const p of particles) {
        p.x += p.vx * speedMul;
        p.y += p.vy * speedMul;

        if (p.x > canvas.width + 10) {
          p.x = -10;
          p.y = Math.random() * canvas.height;
        }
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 168, 130, ${p.opacity})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ willChange: "transform" }}
    />
  );
}
