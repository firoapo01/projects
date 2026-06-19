"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface HoverZoomProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function HoverZoom({ src, alt, caption }: HoverZoomProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-lg cursor-zoom-in">
        <Image src={src} alt={alt} fill className="object-cover" />
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center bg-black/10"
        >
          <div className="rounded-full bg-black/30 p-3 backdrop-blur-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(212,180,120,0.95)" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
            </svg>
          </div>
        </motion.div>
      </div>

      {caption && (
        <p className="mt-2 font-body text-xs text-[var(--color-text-tertiary)]">{caption}</p>
      )}

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ pointerEvents: "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
            <motion.div
              className="relative z-10 overflow-hidden rounded-2xl shadow-2xl"
              style={{ width: "92vw", maxWidth: "1400px", aspectRatio: "16/9" }}
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={src} alt={alt} fill className="object-contain" sizes="85vw" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
