import { useState, useEffect, useCallback } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "lume-theme";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setThemeState(isDark ? "dark" : "light");

    const observer = new MutationObserver(() => {
      const currentlyDark = document.documentElement.classList.contains("dark");
      setThemeState(currentlyDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem(STORAGE_KEY, "dark");
      } catch (e) {
        console.error(e);
      }
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem(STORAGE_KEY, "light");
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  }, [setTheme]);

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme,
    setTheme,
    mounted,
  };
}
