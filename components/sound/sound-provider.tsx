"use client";
import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type SoundName = "rev" | "whoosh" | "ambient" | "click" | "transition";

interface SoundContextType {
  enabled: boolean;
  toggle: () => void;
  play: (name: SoundName) => void;
}

const SoundContext = createContext<SoundContextType>({
  enabled: false,
  toggle: () => {},
  play: () => {},
});

export function useSoundContext() {
  return useContext(SoundContext);
}

const SOUND_FILES = {
  rev: "/sounds/engine-rev.mp3",
  whoosh: "/sounds/whoosh.mp3",
  ambient: "/sounds/ambient-hum.mp3",
} as const;

/**
 * Generates synthesized sounds via Web Audio API.
 * Only click and transition — hover removed to reduce noise.
 */
function createSynthBuffer(ctx: AudioContext, type: "click" | "transition"): AudioBuffer {
  const sampleRate = ctx.sampleRate;

  if (type === "click") {
    const length = Math.floor(sampleRate * 0.03);
    const buffer = ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      const t = i / sampleRate;
      const env = Math.exp(-t * 200);
      data[i] = (Math.sin(2 * Math.PI * 2000 * t) * 0.3 + (Math.random() * 2 - 1) * 0.1) * env;
    }
    return buffer;
  }

  // transition — rising sweep 200ms
  const length = Math.floor(sampleRate * 0.2);
  const buffer = ctx.createBuffer(1, length, sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    const t = i / sampleRate;
    const freq = 300 + 600 * (t / 0.2);
    const env = Math.sin((Math.PI * t) / 0.2) * 0.2;
    data[i] = Math.sin(2 * Math.PI * freq * t) * env;
  }
  return buffer;
}

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef<Record<string, AudioBuffer>>({});
  const reduced = useReducedMotion();
  const lastPlayRef = useRef<Record<string, number>>({});
  const ambientSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const ambientGainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    if (reduced) {
      setEnabled(false);
      return;
    }
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

    // Load file-based sounds
    for (const [key, url] of Object.entries(SOUND_FILES)) {
      try {
        const res = await fetch(url);
        const data = await res.arrayBuffer();
        buffersRef.current[key] = await ctx.decodeAudioData(data);
      } catch {
        // Sound file not found — silently skip
      }
    }

    // Generate synth sounds
    buffersRef.current.click = createSynthBuffer(ctx, "click");
    buffersRef.current.transition = createSynthBuffer(ctx, "transition");

    return ctx;
  }, []);

  // Start/stop ambient engine loop based on enabled state
  useEffect(() => {
    if (!enabled || reduced) {
      // Stop ambient if playing
      if (ambientSourceRef.current) {
        try { ambientSourceRef.current.stop(); } catch { /* already stopped */ }
        ambientSourceRef.current = null;
      }
      return;
    }

    // Start ambient engine loop
    const startAmbient = async () => {
      const ctx = await ensureContext();
      const buffer = buffersRef.current.ambient;
      if (!buffer || !ctx) return;

      // Don't restart if already playing
      if (ambientSourceRef.current) return;

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      const gain = ctx.createGain();
      gain.gain.value = 0.06; // Very mild — background hum
      ambientGainRef.current = gain;

      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);
      ambientSourceRef.current = source;
    };

    startAmbient();

    return () => {
      if (ambientSourceRef.current) {
        try { ambientSourceRef.current.stop(); } catch { /* already stopped */ }
        ambientSourceRef.current = null;
      }
    };
  }, [enabled, reduced, ensureContext]);

  const play = useCallback(
    async (name: SoundName) => {
      if (!enabled || reduced) return;
      // Ambient is handled separately as a loop
      if (name === "ambient") return;

      // Debounce: don't play same sound within 100ms
      const now = Date.now();
      if (now - (lastPlayRef.current[name] ?? 0) < 100) return;
      lastPlayRef.current[name] = now;

      const ctx = await ensureContext();
      const buffer = buffersRef.current[name];
      if (!buffer || !ctx) return;

      const source = ctx.createBufferSource();
      source.buffer = buffer;

      const gain = ctx.createGain();
      const volumes: Record<string, number> = {
        rev: 0.4,
        whoosh: 0.2,
        click: 0.25,
        transition: 0.2,
      };
      gain.gain.value = volumes[name] ?? 0.2;

      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);
    },
    [enabled, reduced, ensureContext]
  );

  return <SoundContext.Provider value={{ enabled, toggle, play }}>{children}</SoundContext.Provider>;
}
