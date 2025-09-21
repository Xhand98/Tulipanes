"use client"

import { useId } from "react"

interface SimpleFlowerProps {
  size?: number | string
  petalCount?: number
  duration?: number
}

// Animated SVG flower with sweep (barrido) reveal per petal
export function SimpleFlower({ size = 240, petalCount = 8, duration = 0.6 }: SimpleFlowerProps) {
  const uid = useId()
  const center = 120 // viewBox is 240x240
  // Make petals vertical (taller than wide)
  const rx = 18 // horizontal radius (narrower)
  const ry = 34 // vertical radius (longer)
  const angles = Array.from({ length: petalCount }, (_, i) => (i * 360) / petalCount)

  return (
    <div style={{ width: typeof size === 'number' ? `${size}px` : size, margin: '0 auto' }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Flor amarilla animada"
      >
        <defs>
          {angles.map((_, i) => (
            <mask key={`mask-${uid}-${i}`} id={`petal-mask-${uid}-${i}`} maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
              {/* White reveals, black hides. We animate width from 0 -> 1 to create a sweep. */}
              <rect x="0" y="0" width="0" height="1" fill="white">
                <animate
                  attributeName="width"
                  from="0"
                  to="1"
                  dur={`${duration}s`}
                  begin={`${i * (duration * 0.6)}s`}
                  fill="freeze"
                  calcMode="spline"
                  keySplines=".25 .1 .25 1"
                />
              </rect>
            </mask>
          ))}
          {/* subtle radial gradient for petals */}
          <radialGradient id={`petal-grad-${uid}`} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="70%" stopColor="#FFD23F" />
            <stop offset="100%" stopColor="#FFC300" />
          </radialGradient>
          {/* center gradient */}
          <radialGradient id={`center-grad-${uid}`} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#DFA15B" />
            <stop offset="100%" stopColor="#8B4513" />
          </radialGradient>
        </defs>

  {/* Whole flower group to position at center and breathe */}
        <g transform={`translate(${center} ${center})`}>
          {/* Stem (grows downward) */}
          <rect x={-3} y={0} width={6} height={0} rx={3} fill="#2e8b57">
            <animate attributeName="height" from="0" to="120" dur="0.7s" begin="0s" fill="freeze" />
          </rect>

          {/* Petals */}
          {angles.map((angle, i) => (
            <g key={`petal-${i}`} transform={`rotate(${angle})`}>
              {/* Petal ellipse positioned outward on local Y-axis; mask reveals left->right (barrido) */}
              <ellipse
                cx={0}
                cy={-30}
                rx={rx}
                ry={ry}
                fill={`url(#petal-grad-${uid})`}
                mask={`url(#petal-mask-${uid}-${i})`}
                opacity="0"
              >
                {/* fade in synced with sweep */}
                <animate
                  attributeName="opacity"
                  from="0"
                  to="1"
                  dur={`${Math.max(0.2, duration * 0.6)}s`}
                  begin={`${0.3 + i * (duration * 0.6)}s`}
                  fill="freeze"
                />
                {/* slight scale pop after reveal */}
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  additive="sum"
                  from="0.9 0.9"
                  to="1 1"
                  dur="0.25s"
                  begin={`${0.3 + i * (duration * 0.6) + duration}s`}
                  fill="freeze"
                />
              </ellipse>
            </g>
          ))}

          {/* Center */}
          <g>
            <circle r="0" fill={`url(#center-grad-${uid})`}>
              <animate attributeName="r" from="0" to="14" dur="0.4s" begin={`${0.3 + petalCount * (duration * 0.6)}s`} fill="freeze" />
            </circle>
            <circle r="12" fill="transparent" stroke="#6B3F1E" strokeOpacity="0.2">
              <animate
                attributeName="r"
                values="12;14;12"
                dur="1.6s"
                begin={`${0.3 + petalCount * (duration * 0.6) + 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Subtle overall breathe effect after fully revealed */}
          <animateTransform
            attributeName="transform"
            type="scale"
            values={`1 1;1.02 1.02;1 1`}
            dur="4s"
            begin={`${0.3 + petalCount * (duration * 0.6) + 0.8}s`}
            repeatCount="indefinite"
            additive="sum"
          />
        </g>
      </svg>
    </div>
  )
}