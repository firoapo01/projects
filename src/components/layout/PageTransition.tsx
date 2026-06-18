"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const mirageEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter: "blur(8px) brightness(1.15)" }}
        animate={{ opacity: 1, filter: "blur(0px) brightness(1)" }}
        exit={{ opacity: 0, filter: "blur(6px) brightness(1.1)" }}
        transition={{ duration: 0.45, ease: mirageEase }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
