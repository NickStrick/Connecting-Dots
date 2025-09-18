// app/components/Wave.tsx (or anywhere in your project)
import * as React from "react";

type WaveProps = {
  /** The fill color of the wave shape */
  color?: string;
  /** Background fill behind the wave */
  backgroundColor?: string;
  /** Height of the SVG (e.g., 160 or "160px") */
  height?: number | string;
  /** Optional extra class names */
  className?: string;
  /** Flip the wave vertically (true = crest downward) */
  flip?: boolean;
  /** Lower the wave’s opacity if you want it subtle */
  opacity?: number;
  /** Title for accessibility; aria-label fallback provided */
  title?: string;
  selection?: number
};

const Wave: React.FC<WaveProps> = ({
  color = "#3b82f6",           // default: Tailwind blue-500
  backgroundColor = "transparent",
  height = 160,
  className,
  flip = false,
  opacity = 1,
  title = "Decorative wave",
  selection = 0,
}) => {
  /**
   * The path below is a smooth “blob-like” wave that fills the bottom.
   * The SVG uses preserveAspectRatio="none" so it fluidly stretches to any width.
   */
 const d = [
  "M0,160 C240,200 480,80 720,120 C960,160 1200,60 1440,120 L1440,320 L0,320 Z",
  "M0,160 C360,100 720,220 1080,140 C1260,180 1440,120 1440,120 L1440,320 L0,320 Z",
  "M0,160 C480,80 960,240 1440,160 L1440,320 L0,320 Z",
  "M0,180 C480,100 960,220 1440,140 L1440,320 L0,320 Z",
  "M0,200 C300,100 600,300 900,200 C1200,100 1440,220 1440,220 L1440,320 L0,320 Z",
  "M0,140 C360,200 720,80 1080,180 C1260,220 1440,160 1440,160 L1440,320 L0,320 Z",
  "M0,180 C240,100 480,220 720,160 C960,100 1200,200 1440,140 L1440,320 L0,320 Z",
  "M0,200 C360,240 720,120 1080,200 C1260,240 1440,180 1440,180 L1440,320 L0,320 Z",
  "M0,160 C180,220 360,140 540,200 C720,260 1080,100 1440,180 L1440,320 L0,320 Z",

  // --- variations of the wide sweeping style ---
  "M0,180 C480,60 960,300 1440,180 L1440,320 L0,320 Z",
  "M0,200 C480,40 960,320 1440,200 L1440,320 L0,320 Z",
  "M0,160 C480,20 960,280 1440,160 L1440,320 L0,320 Z",
  "M0,220 C480,80 960,340 1440,220 L1440,320 L0,320 Z",
  "M0,140 C480,0 960,260 1440,140 L1440,320 L0,320 Z"
];

  // If flipped, mirror vertically using a transform
  const transform = flip ? "scale(1,-1) translate(0, -320)" : undefined;

  return (
    <svg
      role="img"
      aria-label={title}
      width="100%"
      height={typeof height === "number" ? `${height}px` : height}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={'section-seperator-wave '+ className + (flip?' flip':'')}
      style={{ display: "block", background: backgroundColor }}
    >
      {/* Optional <title> improves screen-reader support */}
      <title>{title}</title>

      {/* Wave shape */}
      <path d={d[selection]} fill={color} opacity={opacity} transform={transform} />
    </svg>
  );
};

export default Wave;

//   <Wave color="#22c55e" backgroundColor="#0f172a" height={160} />