"use client";

import { useState, useEffect } from "react";
import { Moon, Menu, Sun,  BookOpen, Folder, User} from "lucide-react";
import { ME } from '../content';

export function Nav({ page, setPage, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: "home", label: "About", Icon: User },
    { id: "projects", label: "Projects", Icon: Folder },
    { id: "journal", label: "Journal", Icon: BookOpen },
  ];

  const handleNavClick = (id) => {
    setPage(id);
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      {/* LOGO */}
      <span
        className="nav-logo"
        onClick={() => handleNavClick("home")}
      >
        {ME.name}
      </span>

      {/* DESKTOP NAV */}
      <ul className="nav-links desktop-nav">
        {tabs.map(({ id, label, Icon }) => (
          <li key={id}>
            <button
              className={`nav-btn${page === id ? " active" : ""}`}
              onClick={() => handleNavClick(id)}
            >
              <Icon size={13} />
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* THEME BUTTON */}
        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon size={15} />
          ) : (
            <Sun size={15} />
          )}
        </button>

        {/* MOBILE BURGER */}
        <button
          className="burger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              className={`mobile-nav-btn${
                page === id ? " active" : ""
              }`}
              onClick={() => handleNavClick(id)}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}