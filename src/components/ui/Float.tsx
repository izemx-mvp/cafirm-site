import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FloatProps = {
  children?: ReactNode;
  className?: string;
  /** Durée d'un cycle complet, en secondes. */
  duration?: number;
  /** Amplitude verticale, en pixels. */
  delta?: number;
  delay?: number;
  "aria-hidden"?: boolean;
};

/** Flottement vertical continu et doux (désactivé si prefers-reduced-motion). */
export function Float({ children, className, duration = 8, delta = 8, delay = 0, ...rest }: FloatProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -delta, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
