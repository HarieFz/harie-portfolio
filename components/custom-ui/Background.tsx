import type React from "react";
import { cn } from "@/lib/utils";

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function Background({ children, className }: Readonly<BackgroundProps>) {
  return (
    <div className={cn("relative min-w-dvw w-full mb-[80vh] rounded-b-4xl bg-[#E34234]", className)}>
      <div
        className="absolute z-10 inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: 'url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png")',
          backgroundSize: "149.76px",
        }}
      />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute z-10 inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Subtle radial highlight */}
      <div className="absolute z-10 inset-0 bg-gradient-radial from-slate-800/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-30 font-tiktok-sans">{children}</div>
    </div>
  );
}
