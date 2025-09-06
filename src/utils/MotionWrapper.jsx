'use client'
import { motion } from "framer-motion";
import React from "react";

export default function MotionWrapper({ children, initial, animate, transition, whileHover, whileTap, className }) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      className={className}
    >
      {children}
    </motion.div>
  );
}
