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
    <>
      <div
        className="relative w-full cursor-zoom-in"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          animate={{
            scale: hovered ? 1.03 : 1,
            filter: hovered ? "brightness(1.08)" : "brightness(1)",
          }}
          transition={{ duration: 0.3, ease: [0, 0, 0.58, 1] }}
          className="relative w-full aspect-video overflow-hidden rounded-lg"
        >
          <Image src={src} alt={alt} fill className="object-cover" />
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-2 right-2 rounded-full bg-black/40 p-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(212,180,120,0.9)" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
            </svg>
          </motion.div>
        </motion.div>
        {caption && (
          <p className="mt-2 font-body text-xs text-[var(--color-text-tertiary)]">{caption}</p>
        )}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 aspect-video w-[80vw] max-w-4xl overflow-hidden rounded-xl shadow-2xl"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={src} alt={alt} fill className="object-contain" sizes="80vw" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
