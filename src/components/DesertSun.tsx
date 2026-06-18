"use client";

import { motion } from "framer-motion";

export default function DesertSun() {
  return (
    <motion.div
      className="pointer-events-none fixed z-0"
      style={{
        top: "-20vh",
        left: "50%",
        transform: "translateX(-50%)",
        width: "120vw",
        height: "70vh",
        borderRadius: "50%",
        background:
          "radial-gradient(ellipse, rgba(212,180,120,0.18) 0%, transparent 65%)",
      }}
      animate={{
        opacity: [0.8, 1, 0.8],
        scale: [1, 1.07, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
      }}
    />
  );
}
