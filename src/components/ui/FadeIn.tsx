"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  staggerChildren?: boolean;
  delay?: number;
}

export default function FadeIn({
  children,
  className,
  as = "div",
  staggerChildren: useStagger = false,
  delay,
}: FadeInProps) {
  const variants = useStagger ? stagger : fadeUp;
  const motionProps = delay
    ? {
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: { ...fadeUp.visible.transition, delay },
        },
      }
    : variants;

  const Component = motion[as as "div"] as typeof motion.div;

  return (
    <Component
      className={cn(className)}
      variants={motionProps}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
    >
      {children}
    </Component>
  );
}
