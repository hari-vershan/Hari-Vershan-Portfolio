"use client";
import { useScrollProgress } from "@/lib/use-scroll-progress";

export function TrackMap() {
  const progress = useScrollProgress();

  const pathD = "M10,30 Q10,10 30,10 L60,10 Q80,10 80,25 Q80,40 65,45 Q50,50 50,35 Q50,20 65,15 L85,15 Q95,15 95,30 L95,50 Q95,65 80,65 L20,65 Q10,65 10,50 Z";

  return (
    <div className="hidden md:block w-24 h-10" aria-hidden="true">
      <svg viewBox="0 0 105 75" className="w-full h-full">
        <path d={pathD} fill="none" stroke="#333" strokeWidth="2" />
        <circle r="3" fill="#FF8000">
          <animateMotion dur="1s" fill="freeze" keyPoints={`${progress};${progress}`} keyTimes="0;1" calcMode="linear">
            <mpath href="#track-path" />
          </animateMotion>
        </circle>
        <path id="track-path" d={pathD} fill="none" stroke="none" />
      </svg>
    </div>
  );
}
