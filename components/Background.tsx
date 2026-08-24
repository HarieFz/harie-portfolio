import type React from "react";
import { cn } from "@/lib/utils";

interface SoftButterGradientBgProps {
  children?: React.ReactNode;
  className?: string;
}

export function Background({ children, className }: Readonly<SoftButterGradientBgProps>) {
  return (
    <div className={cn("relative min-w-dvw w-full mb-[80vh] rounded-b-4xl bg-background transition-colors", className)}>
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 bg-repeat opacity-5 rounded-[inherit]"
        style={{
          backgroundImage: 'url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png")',
          backgroundSize: "149.76px",
        }}
      />

      {/* Content */}
      <div className="relative z-30 font-tiktok-sans">{children}</div>
    </div>
  );
}
