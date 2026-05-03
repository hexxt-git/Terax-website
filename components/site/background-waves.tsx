"use client"

import { useTheme } from "next-themes"
import LineWaves from "../line-waves"

export function BackgroundWaves() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme !== "light"

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0">
        <LineWaves
          rotation={-38}
          speed={0.18}
          warpIntensity={0.95}
          innerLineCount={28}
          outerLineCount={34}
          edgeFadeWidth={0.05}
          colorCycleSpeed={0}
          brightness={isDark ? 0.16 : 0.32}
          color1="#ffffff"
          color2="#000000"
          color3="#ffffff"
          enableMouseInteraction
          mouseInfluence={1.6}
        />
      </div>
      {/* Top + bottom fade so content remains readable */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      {/* Center vignette to anchor content */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_92%)] opacity-70"
        style={{ ["--background" as never]: "var(--background)" }}
      />
    </div>
  )
}
