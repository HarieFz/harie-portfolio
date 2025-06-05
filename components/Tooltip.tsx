import React from "react";

interface TooltipProps {
  tooltip: TooltipState;
  config?: TooltipConfig;
  className?: string;
  arrowClassName?: string;
}

const defaultConfig = {
  offset: { x: 15, y: 15 },
};

export const Tooltip: React.FC<TooltipProps> = ({ tooltip, config = {}, className = "" }) => {
  const finalConfig = { ...defaultConfig, ...config };

  if (!tooltip.show) return null;

  return (
    <div
      className={`lg:block hidden fixed z-50 px-2 py-0.5 border bg-white border-black text-black text-sm pointer-events-none transition-all transform ${
        tooltip.visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-1"
      } ${className}`}
      style={{
        left: tooltip.x + (finalConfig.offset?.x || 0),
        top: tooltip.y + (finalConfig.offset?.y || 0),
      }}
    >
      {tooltip.text}
    </div>
  );
};
