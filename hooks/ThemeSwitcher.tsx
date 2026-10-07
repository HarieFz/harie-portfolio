"use client";

import { useTheme } from "./ThemeContext";

const themes = ["auto", "day", "dusk", "night"] as const;

export function ThemeSwitcher({ children }: Readonly<{ children: React.ReactNode }>) {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];

    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleChange}
      aria-label={`Theme: ${theme}. Click to change theme.`}
      className="flex items-center justify-center gap-1 border-2 border-transparent border-dashed hover:border-white px-3 py-1.5 transition-colors"
    >
      <span className="font-light text-sm uppercase text-white">{children}</span>
    </button>
  );
}
