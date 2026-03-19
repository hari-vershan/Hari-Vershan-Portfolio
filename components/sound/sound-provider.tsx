"use client";
import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface SoundContextType {
  enabled: boolean;
  toggle: () => void;
  play: (name: "rev" | "whoosh" | "ambient") => void;
}

const SoundContext = createContext<SoundContextType>({
  enabled: false,
  toggle: () => {},
  play: () => {},
});

export function useSoundContext() { return useContext(SoundContext); }

const SOUND_FILES = {
  rev: "/sounds/engine-rev.mp3",
  whoosh: "/sounds/whoosh.mp3",
  ambient: "/sounds/ambient-hum.mp3",
} as const;

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef<Record<string, AudioBuffer>>({});
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) { setEnabled(false); return; }
    const stored = localStorage.getItem("sound-enabled");
    if (stored === "true") setEnabled(true);
  }, [reduced]);

  useEffect(() => {
    localStorage.setItem("sound-enabled", String(enabled));
  }, [enabled]);

  const toggle = useCallback(() => {
    setEnabled((prev) => !prev);
  }, []);

  const ensureContext = useCallback(async () => {
    if (audioCtxRef.current) return audioCtxRef.current;
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;

    for (const [key, url] of Object.entries(SOUND_FILES)) {
      try {
        const res = await fetch(url);
        const data = await res.arrayBuffer();
        buffersRef.current[key] = await ctx.decodeAudioData(data);
      } catch {
        // Sound file not found — silently skip
      }
    }
    return ctx;
  }, []);

  const play = useCallback(async (name: keyof typeof SOUND_FILES) => {
    if (!enabled || reduced) return;
    const ctx = await ensureContext();
    const buffer = buffersRef.current[name];
    if (!buffer || !ctx) return;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
  }, [enabled, reduced, ensureContext]);

  return (
    <SoundContext.Provider value={{ enabled, toggle, play }}>
      {children}
    </SoundContext.Provider>
  );
}
