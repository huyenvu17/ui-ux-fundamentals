"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface FloatCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FloatCard({ children, className = "", delay = 0 }: FloatCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-3 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-[0_16px_48px_rgb(0_0_0/0.35)] backdrop-blur"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
