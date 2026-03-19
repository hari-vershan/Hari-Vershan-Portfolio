"use client";
import Image from "next/image";
import { useMousePosition } from "@/lib/use-mouse-position";
import { motion } from "framer-motion";

export function ParallaxPhoto() {
  const mouse = useMousePosition();

  return (
    <motion.div
      className="relative w-64 h-80 md:w-80 md:h-96 rounded-sm overflow-hidden"
      animate={{ x: mouse.x * 15, y: mouse.y * 10 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <Image
        src="/images/hari-headshot.jpg"
        alt="Hari Vershan — Product Design Lead"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
    </motion.div>
  );
}
