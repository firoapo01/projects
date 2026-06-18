"use client";

import { motion } from "framer-motion";

export default function DesertDunes() {
  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 z-[2] w-full"
      style={{ filter: "url(#heat-haze)" }}
    >
      {/* Layer 1 — farthest, lightest */}
      <motion.svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-[120px] w-[150%] md:h-[160px]"
        animate={{ x: [0, -60, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M0,160 Q180,100 360,130 T720,110 T1080,140 T1440,120 T1800,130 T2160,110 L2160,200 L0,200 Z"
          fill="#EDE5D0"
          opacity="0.5"
        />
      </motion.svg>

      {/* Layer 2 — mid */}
      <motion.svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-[100px] w-[150%] md:h-[130px]"
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M0,140 Q200,90 400,120 T800,100 T1200,130 T1600,110 T2000,125 T2160,105 L2160,200 L0,200 Z"
          fill="#D4C5A0"
          opacity="0.6"
        />
      </motion.svg>

      {/* Layer 3 — nearest, darkest */}
      <motion.svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-[80px] w-[150%] md:h-[100px]"
        animate={{ x: [0, -25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M0,150 Q240,110 480,135 T960,115 T1440,140 T1920,120 T2160,135 L2160,200 L0,200 Z"
          fill="#B8A882"
          opacity="0.7"
        />
      </motion.svg>
    </div>
  );
}
