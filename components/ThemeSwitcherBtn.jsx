"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";

export default function ThemeSwitcherBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // Fix hydration mismatch by ensuring the correct theme is set
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !currentTheme) { // 👈 Ensuring it's not undefined
    return null;
  }

  return (
    <button
      className="text-slate-900 dark:text-slate-50"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "light" ? <MoonStar /> : <Sun />}
    </button>
  );
}
