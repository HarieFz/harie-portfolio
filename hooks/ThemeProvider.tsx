"use client";

import { useEffect } from "react";
import { ThemeContextProvider, useTheme } from "./ThemeContext";

function ThemeRenderer({ children }: { children: React.ReactNode }) {
  const { activeTheme } = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = activeTheme;
  }, [activeTheme]);

  return children;
}

export function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeContextProvider>
      <ThemeRenderer>{children}</ThemeRenderer>
    </ThemeContextProvider>
  );
}
