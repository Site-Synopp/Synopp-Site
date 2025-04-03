"use client";

import type React from "react";
import { cn } from "@/utils/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import Image from "next/image";
interface ContactButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: string;
  isLeftSide?: boolean;
  iconWidth?: number;
  iconHeight?: number;
}

const PrimaryButton = forwardRef<HTMLButtonElement, ContactButtonProps>(
  ({ className, children, icon, isLeftSide, iconWidth, iconHeight, ...props }, ref) => {
    return (
      <button
        type="button"
        onClick={props.onClick}
        className={cn(
          "bg-[#6C40DBB2] border border-[#6C40DB] hover:shadow-[0_0_15px_rgba(126,34,206,0.6)] text-white text-sm py-[7px] px-4 rounded-xl transition-shadow duration-300 font-bold flex flex-row items-center justify-between gap-2",
          className
        )}
        ref={ref}
        {...props}
      >
         {icon && isLeftSide && (
          <Image src={icon} alt="Icon Right" width={iconWidth || 14} height={iconHeight || 14} />
        )}

        <span> {children}</span>
        {icon && !isLeftSide && (
          <Image src={icon} alt="Icon Right" width={iconWidth || 14} height={iconHeight || 14} />
        )}
      </button>
    );
  }
);
PrimaryButton.displayName = "Button";

export { PrimaryButton };
