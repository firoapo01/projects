"use client";

export default function HeatHaze() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[3]">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="heat-haze">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.008"
              numOctaves={2}
              seed={2}
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.015 0.008;0.018 0.011;0.015 0.008"
                dur="8s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={5}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
