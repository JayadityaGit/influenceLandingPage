"use client"

import { cn } from "@/lib/utils"
import type React from "react"

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode
  containerClassName?: string
  className?: string
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl transform-gpu transition-all duration-500 hover:scale-[1.02] group",
        containerClassName,
      )}
    >
      <div
        className={cn(
          "relative h-full w-full transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-gray-800 group-hover:to-gray-700",
          className,
        )}
      >
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
  )
}
