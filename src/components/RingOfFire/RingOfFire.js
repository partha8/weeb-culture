import React from "react";
import "./ring-of-fire.css";

export const RingOfFire = () => {
  return (
    <div className="circle-container">
      <div className="circle"></div>
      <svg>
        <filter id="wavy">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.09"
            numOctaves="10"
            seed="5"
          >
            <animate
              attributeName="baseFrequency"
              dur="20s"
              values="0.02;0.005;0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="40" />
        </filter>
      </svg>
    </div>
  );
};
