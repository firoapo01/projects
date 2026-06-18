"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function CalligraphyElement() {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 400], [0.05, 0]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[1] select-none"
      style={{
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        fontSize: "45vw",
        fontFamily: "var(--font-amiri), 'Amiri', serif",
        color: "rgba(139, 115, 85, 1)",
        lineHeight: 1,
        whiteSpace: "nowrap",
        opacity: scrollOpacity,
      }}
      animate={{
        rotate: [0, 360],
        y: [0, -18, 0],
      }}
      transition={{
        rotate: { duration: 120, repeat: Infinity, ease: "linear" },
        y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      الصبر
    </motion.div>
  );
}
