"use client";

import type React from "react";
import { cn } from "@/utils/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import Image from "next/image";
interface ContactButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: string;
}

const PrimaryButton = forwardRef<HTMLButtonElement, ContactButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "bg-[#6C40DBB2] border border-[#6C40DB] hover:shadow-[0_0_15px_rgba(126,34,206,0.6)] text-white text-sm py-[7px] px-4 rounded-xl transition-shadow duration-300 font-bold flex flex-row items-center justify-between gap-2",
          className
        )}
        ref={ref}
        {...props}
      >
        <span> {children}</span>
        {props.icon && (
          <Image src={props.icon} alt="Icon Right" width={14} height={14} />
        )}
      </button>
    );
  }
);
PrimaryButton.displayName = "Button";

export { PrimaryButton };
