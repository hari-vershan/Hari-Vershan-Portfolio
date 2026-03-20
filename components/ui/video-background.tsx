"use client";
import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface VideoBackgroundProps {
  src: string;
  /** Overall opacity of the video layer (0–1). Default 0.15 */
  opacity?: number;
  /** CSS blend mode. Default "screen" for dark backgrounds */
  blendMode?: string;
  /** Optional overlay gradient for readability */
  overlay?: "dark" | "cinematic" | "none";
  /** Playback speed multiplier. Default 0.7 for ambient feel */
  playbackRate?: number;
}

/**
 * Fullscreen looping video background — muted, autoplay, lazy-loaded.
 * Degrades gracefully: reduced-motion users see nothing.
 */
export function VideoBackground({
  src,
  opacity = 0.15,
  blendMode = "screen",
  overlay = "cinematic",
  playbackRate = 0.7,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return;
    video.playbackRate = playbackRate;
  }, [playbackRate, reduced]);

  if (reduced) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{
          opacity: loaded ? opacity : 0,
          mixBlendMode: blendMode as React.CSSProperties["mixBlendMode"],
          filter: "blur(1px) saturate(0.7)",
        }}
      />
      {overlay === "cinematic" && (
        <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/60 to-bg/90" />
      )}
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-bg/80" />
      )}
    </div>
  );
}
