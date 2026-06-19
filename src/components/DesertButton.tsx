"use client";

import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface DesertButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export default function DesertButton({
  href,
  onClick,
  children,
  className = "",
  type,
}: DesertButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15) 0%, transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const shared = {
    className: `relative overflow-hidden rounded-md bg-sand-700 px-6 py-3 font-body text-sm font-medium tracking-wide text-white transition-colors duration-fast hover:bg-sand-800 ${className}`,
    onMouseMove: handleMouseMove,
    whileHover: {
      y: -2,
      boxShadow: "0 8px 24px rgba(139,115,85,0.35)",
    },
    whileTap: { scale: 0.96, y: 0 },
    transition: { duration: 0.2, ease: [0, 0, 0.58, 1] as [number, number, number, number] },
  };

  const ripple = (
    <motion.span
      className="pointer-events-none absolute inset-0"
      style={{ background }}
    />
  );

  if (href) {
    return (
      <motion.a ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...shared}>
        {ripple}
        <span className="relative">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type || "button"}
      onClick={onClick}
      {...shared}
    >
      {ripple}
      <span className="relative">{children}</span>
    </motion.button>
  );
}
