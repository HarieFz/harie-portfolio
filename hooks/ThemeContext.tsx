"use client";

import dayjs from "dayjs";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Theme = "auto" | "day" | "dusk" | "night";

export type ActiveTheme = Exclude<Theme, "auto">;

interface ThemeContextValue {
  theme: Theme;
  activeTheme: ActiveTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getTimeTheme(): ActiveTheme {
  const hour = dayjs().hour();

  if (hour >= 5 && hour < 16) return "day";
  if (hour >= 16 && hour < 19) return "dusk";

  return "night";
}

export function ThemeContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [theme, setThemeState] = useState<Theme>("auto");
  const [activeTheme, setActiveTheme] = useState<ActiveTheme>("day");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme) {
      setThemeState(storedTheme);
    }
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      const nextTheme = theme === "auto" ? getTimeTheme() : theme;

      setActiveTheme(nextTheme);

      document.documentElement.dataset.theme = nextTheme;
    };

    updateTheme();

    if (theme !== "auto") return;

    const interval = setInterval(updateTheme, 60 * 1000);

    return () => clearInterval(interval);
  }, [theme]);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);

    localStorage.setItem("theme", nextTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      activeTheme,
      setTheme,
    }),
    [theme, activeTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
