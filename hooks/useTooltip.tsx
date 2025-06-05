import { useState, useEffect, useRef } from "react";

const defaultConfig: TooltipConfig = {
  showDelay: 500,
  hideDelay: 200,
  offset: { x: 15, y: 15 },
};

export const useTooltip = (config: TooltipConfig = {}): UseTooltipReturn => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    show: false,
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const finalConfig = { ...defaultConfig, ...config };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>, text: string): void => {
    // Clear any existing timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

    // Set position immediately but show with delay
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
      text: text,
      show: true,
    }));

    // Show tooltip after delay
    timeoutRef.current = setTimeout(() => {
      setTooltip((prev) => ({ ...prev, visible: true }));
    }, finalConfig.showDelay);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>): void => {
    if (tooltip.show) {
      setTooltip((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
      }));
    }
  };

  const handleMouseLeave = (): void => {
    // Clear show timeout if still pending
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Hide immediately (fade out)
    setTooltip((prev) => ({ ...prev, visible: false }));

    // Remove from DOM after animation
    hideTimeoutRef.current = setTimeout(() => {
      setTooltip({ show: false, visible: false, x: 0, y: 0, text: "" });
    }, finalConfig.hideDelay);
  };

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  return {
    tooltip,
    handleMouseEnter,
    handleMouseMove,
    handleMouseLeave,
  };
};
