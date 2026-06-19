"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const overlayEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface LightboxImage {
  src: string;
  alt: string;
}

export function useLightbox() {
  const [selected, setSelected] = useState<LightboxImage | null>(null);
  const open = useCallback((src: string, alt: string) => setSelected({ src, alt }), []);
  const close = useCallback(() => setSelected(null), []);
  return { selected, open, close };
}

export default function ImageLightbox({
  image,
  onClose,
}: {
  image: LightboxImage | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!image) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: overlayEase }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] max-w-5xl"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: overlayEase }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              className="max-h-[90vh] w-auto rounded-lg object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
