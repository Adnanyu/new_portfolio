"use client";

import { Styles } from "../styles";
import { useTheme } from "../useTheme";
import { Nav } from "./Nav";

export function SiteShell({ children }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ minHeight: "100vh" }}>
      <Styles />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main style={{ paddingTop: 64 }}>{children}</main>
    </div>
  );
}
