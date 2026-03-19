"use client";
import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <span className="text-xs font-mono text-text-muted tracking-widest uppercase">Scroll</span>
      <motion.div
        className="w-5 h-8 rounded-full border border-text-muted flex items-start justify-center p-1"
        aria-hidden="true"
      >
        <motion.div
          className="w-1 h-2 rounded-full bg-papaya"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
