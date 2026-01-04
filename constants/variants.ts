import { Variants } from "framer-motion";

export const fadeInVarients: Variants = {
  hidden: {
    y: 100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const viewport = {
  once: true,
  margin: "-200px",
  fallback: true,
};
