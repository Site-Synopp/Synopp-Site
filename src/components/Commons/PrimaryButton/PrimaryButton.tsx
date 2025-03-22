"use client"

import type React from "react"
import { cn } from "@/utils/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ContactButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const PrimaryButton = forwardRef<HTMLButtonElement, ContactButtonProps>(({ className, children, ...props }, ref) => {
  return (
    <button
      className={cn(
        "bg-[#6C40DBB2] border border-[#6C40DB] hover:shadow-[0_0_15px_rgba(126,34,206,0.6)] text-white text-sm py-[7px] px-4 rounded-xl transition-shadow duration-300 font-bold",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
PrimaryButton.displayName = "Button"

export { PrimaryButton }

