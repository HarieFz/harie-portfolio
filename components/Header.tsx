"use client";

import dayjs from "dayjs";
import { ThemeSwitcher } from "@/hooks/ThemeSwitcher";
import { Theme, useTheme } from "@/hooks/ThemeContext";

export default function Header() {
  const { theme } = useTheme();

  const themeMap = (theme: Theme) => {
    switch (theme) {
      case "auto":
        return "A";
      case "day":
        return "B";
      case "dusk":
        return "C";
      case "night":
        return "D";
      default:
        break;
    }
  };

  return (
    <header>
      <div className="fixed inset-x-0 top-0 z-40 px-8 py-8 w-full flex items-center justify-between text-white">
        <p className="font-mochiy-pop-one font-bold tracking-widest">HARIE</p>

        <nav>
          <ul className="hidden md:flex items-center gap-10 font-mochiy-pop-one">
            <li>
              <button
                type="button"
                className="border-[2px] border-transparent border-dashed hover:border-white px-3 py-1 transition-colors"
              >
                <span className="font-light text-sm uppercase">WORK</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="border-[2px] border-transparent border-dashed hover:border-white px-3 py-1 transition-colors"
              >
                <span className="font-light text-sm uppercase">CONTACT</span>
              </button>
            </li>
            <li>
              <ThemeSwitcher>Theme [{themeMap(theme)}]</ThemeSwitcher>
            </li>
          </ul>
        </nav>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 px-8 md:px-11 py-8 w-full flex items-center justify-end text-white">
        <p className="font-mochiy-pop-one font-light text-sm uppercase">{dayjs().format("DD/MM/YYYY - HH:mm")}</p>
      </div>
    </header>
  );
}
