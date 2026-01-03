import { Variants } from "framer-motion";

export const fadeInVarients: Variants = {
  hidden: {
    opacity: 0,
    y: 40, // start lower
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 3,
      ease: [0.22, 1, 0.36, 1], // smooth easeOut
    },
  },
};

export const viewport = {
  once: true,
  margin: "-80px",
  fallback: true,
};
