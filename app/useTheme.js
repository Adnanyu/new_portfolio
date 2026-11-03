"use client";

import { useEffect, useSyncExternalStore } from "react";

const DARK_QUERY = "(prefers-color-scheme: dark)";
const THEME_EVENT = "themechange";

function readSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

// subscribe to system theme changes, other tabs, and toggles in this tab
function subscribe(callback) {
  const media = window.matchMedia(DARK_QUERY);
  media.addEventListener("change", callback);
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);
  return () => {
    media.removeEventListener("change", callback);
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

// a manually chosen theme wins; otherwise follow the system
function getSnapshot() {
  return readSavedTheme() || (window.matchMedia(DARK_QUERY).matches ? "dark" : "light");
}

function getServerSnapshot() {
  return "light";
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    try {
      localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    } catch {
      // storage unavailable — the toggle just won't persist
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return { theme, toggleTheme };
}
