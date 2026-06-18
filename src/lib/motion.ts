import type { TargetAndTransition, Transition } from "framer-motion";

export type VariantMap = Record<string, TargetAndTransition & { transition?: Transition }>;

const enter: Transition = { duration: 0.45, ease: [0, 0, 0.2, 1] };
const easeOut: [number, number, number, number] = [0, 0, 0.58, 1];

export const fadeUp: VariantMap = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: enter },
};

export const stagger: VariantMap = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const pageVariants: VariantMap = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

export const scrollReveal: VariantMap = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export function staggerContainer(stagger: number): VariantMap {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };
}

const desertEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const excavateVariants: VariantMap = {
  hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: desertEase },
  },
};

export const carvingVariants: VariantMap = {
  hidden: { opacity: 0, y: 30, scale: 0.97, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: desertEase },
  },
};

export function excavateContainer(stagger: number): VariantMap {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };
}

export const artifactVariants: VariantMap = {
  hidden: { opacity: 0, y: 40, scale: 0.92, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: desertEase },
  },
};
