import type React from "react"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <h1
      className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${className} text-gray-50`}
    >
      {children}
    </h1>
  )
}
