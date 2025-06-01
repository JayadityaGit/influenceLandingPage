"use client"

import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 h-full w-full", className)}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" />

      {/* Animated Beams */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-200 to-transparent animate-pulse" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-pink-200 to-transparent animate-pulse delay-1000" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent animate-pulse delay-2000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-300/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-2000" />
    </div>
  )
}
