"use client"

import { useState } from "react"
import type React from "react"

interface SolutionCardProps {
  title: string
  description: string
  className: string
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, className }) => {
  const [mouseEffect, setMouseEffect] = useState({
    x: 0,
    y: 0,
    alpha: 0,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 10
    const y = (e.clientY - top - height / 2) / 10
    const alpha = 0.35

    setMouseEffect({ x, y, alpha })
  }

  const handleMouseLeave = () => {
    setMouseEffect({ x: 0, y: 0, alpha: 0 })
  }

  return (
    <div
      className={`absolute w-[300px] h-[128px] xl:w-[380px] xl:h-[160px] rounded-xl bg-[#060416] border border-[#353344] ${className}`}
      style={{
        transform: `rotateY(${mouseEffect.x}deg) rotateX(${mouseEffect.y}deg)`,
        boxShadow: `${-mouseEffect.x * 0.4}px ${mouseEffect.y * 0.4}px 20px rgba(152, 60, 192, ${mouseEffect.alpha})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col p-4 justify-around h-full">
        <h3 className="text-white text-base xl:text-lg font-bold">{title}</h3>
        <p className="text-white text-xs xl:text-sm">{description}</p>
      </div>
    </div>
  )
}

