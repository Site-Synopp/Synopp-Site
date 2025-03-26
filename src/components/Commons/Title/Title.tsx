import type React from "react"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <h1
      className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${className}`}
      style={{
        background: "linear-gradient(to top, #BFBEC3, #E2E1E4, #F2F2F3)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "#EFF1F3",
        display: "inline-block",
      }}
    >
      {children}
    </h1>
  )
}
