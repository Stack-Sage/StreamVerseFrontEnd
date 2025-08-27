'use client';
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      className={`relative flex items-center w-16 h-9 rounded-full px-1 py-1 transition-colors duration-300
        ${isDark ? "bg-black" : "bg-white"}
        shadow-lg border-none focus:outline-none hover:ring-1 hover:ring-gray-300 hover:dark:ring-gray-700 ring-1 ring-gray-400
        active:scale-95`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      tabIndex={0}
    >
      <span
        className={`absolute left-1 top-1 flex items-center justify-center w-7 h-7 rounded-full transition-transform duration-300
          ${isDark ? "translate-x-7 bg-gray-900" : "translate-x-0 bg-gray-100"}
          transition-all`}
        style={{ transitionTimingFunction: "cubic-bezier(.4,2,.3,1)" }}
      >
        {isDark ? (
          <FaMoon className="text-white transition-colors duration-300" />
        ) : (
          <FaSun className="text-black transition-colors duration-300" />
        )}
      </span>
      {/* Decorative background icons */}
      <FaSun className="absolute left-2 top-2 h-4 w-4 text-black opacity-70 pointer-events-none" />
      <FaMoon className="absolute right-2 top-2 h-4 w-4 text-white opacity-70 pointer-events-none" />
    </button>
  );
}