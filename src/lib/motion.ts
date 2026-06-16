import type { TargetAndTransition, Transition } from "framer-motion";

type VariantMap = Record<string, TargetAndTransition & { transition?: Transition }>;

const enter: Transition = { duration: 0.45, ease: [0, 0, 0.2, 1] };

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
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};
