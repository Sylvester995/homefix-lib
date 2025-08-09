"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = mounted ? (theme ?? resolvedTheme) : "light";
  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800"
      aria-label="Toggle dark mode"
    >
      {current === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
