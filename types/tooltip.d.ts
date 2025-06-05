interface TooltipState {
  show: boolean;
  visible: boolean;
  x: number;
  y: number;
  text: string;
}

interface TooltipConfig {
  showDelay?: number;
  hideDelay?: number;
  offset?: { x: number; y: number };
}

interface UseTooltipReturn {
  tooltip: TooltipState;
  handleMouseEnter: (e: React.MouseEvent<HTMLElement>, text: string) => void;
  handleMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  handleMouseLeave: () => void;
}
