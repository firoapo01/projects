"use client";

import { motion } from "framer-motion";

const shimmerVariants = {
  rest: { translateX: "-150%" },
  hover: { translateX: "350%" },
};

const borderVariants = {
  rest: { pathLength: 0, opacity: 0 },
  hover: { pathLength: 1, opacity: 1 },
};

export function ShimmerSweep() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
      style={{ zIndex: 2 }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "100%",
          background:
            "linear-gradient(105deg, transparent 40%, rgba(212,180,120,0.15) 50%, transparent 60%)",
        }}
        variants={shimmerVariants}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
    </div>
  );
}

export function BorderTrace() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ zIndex: 3 }}
    >
      <motion.rect
        x="0.5%"
        y="0.5%"
        width="99%"
        height="99%"
        rx="12"
        ry="12"
        fill="none"
        stroke="rgba(139,115,85,0.6)"
        strokeWidth="1.5"
        variants={borderVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </svg>
  );
}
