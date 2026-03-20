"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const trailIdRef = useRef(0);

  const updateTrail = useCallback((x: number, y: number) => {
    trailIdRef.current += 1;
    setTrail((prev) => [
      { x, y, id: trailIdRef.current },
      ...prev.slice(0, 4),
    ]);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    let frameId: number;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      // Throttle trail updates
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => updateTrail(e.clientX, e.clientY));
    };

    const enter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']");
      if (interactive) {
        setHovering(true);
        // Determine cursor label
        const el = interactive as HTMLElement;
        if (el.tagName === "A") setCursorLabel("VIEW");
        else if (el.tagName === "BUTTON" || el.getAttribute("role") === "button") setCursorLabel("CLICK");
        else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") setCursorLabel("TYPE");
        else setCursorLabel("");
      }
    };
    const leave = () => {
      setHovering(false);
      setCursorLabel("");
    };
    const hide = () => setVisible(false);
    const mouseDown = () => setClicking(true);
    const mouseUp = () => setClicking(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    document.addEventListener("mouseleave", hide);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      document.removeEventListener("mouseleave", hide);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      cancelAnimationFrame(frameId);
    };
  }, [updateTrail]);

  if (isTouch || !visible) return null;

  return (
    <>
      {/* Trail echoes */}
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 pointer-events-none z-[9996] rounded-full bg-papaya/30"
          style={{ width: 6 - i, height: 6 - i }}
          initial={{ x: point.x - 3, y: point.y - 3, opacity: 0.4 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      {/* Click ripple */}
      <AnimatePresence>
        {clicking && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full border-2 border-papaya/60"
            style={{ width: 40, height: 40 }}
            initial={{ x: pos.x - 20, y: pos.y - 20, scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Cursor label */}
      <AnimatePresence>
        {cursorLabel && hovering && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] font-mono text-[9px] text-papaya tracking-widest"
            initial={{ opacity: 0, y: 5 }}
            animate={{
              opacity: 1,
              y: 0,
              x: pos.x + 24,
              y2: pos.y - 8,
            }}
            exit={{ opacity: 0 }}
            style={{ x: pos.x + 24, y: pos.y - 8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {cursorLabel}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-papaya"
        style={{ width: 8, height: 8 }}
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: clicking ? 0.6 : hovering ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-papaya/40"
        style={{ width: 40, height: 40 }}
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hovering ? 1.5 : clicking ? 0.8 : 1,
          opacity: hovering ? 0.8 : 0.4,
          borderColor: hovering ? "rgba(255,128,0,0.6)" : "rgba(255,128,0,0.3)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />

      {/* Hovering glow */}
      {hovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full"
          style={{
            width: 60,
            height: 60,
            background: "radial-gradient(circle, rgba(255,128,0,0.1) 0%, transparent 70%)",
          }}
          animate={{
            x: pos.x - 30,
            y: pos.y - 30,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        />
      )}
    </>
  );
}
