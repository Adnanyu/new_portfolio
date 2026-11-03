"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Menu, Sun,  BookOpen, Folder, User} from "lucide-react";
import { ME } from '../content';

export function Nav({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const tabs = [
    { id: "home", href: "/", label: "About", Icon: User },
    { id: "projects", href: "/projects", label: "Projects", Icon: Folder },
    // hidden for now — set to false to bring the Journal tab back
    { id: "journal", href: "/journal", label: "Journal", Icon: BookOpen, hidden: true },
  ].filter((t) => !t.hidden);

  // a tab stays active on its sub-pages, e.g. /projects/dromos
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      {/* LOGO */}
      <Link
        href="/"
        className="nav-logo"
        onClick={closeMenu}
      >
        {ME.name}
      </Link>

      {/* DESKTOP NAV */}
      <ul className="nav-links desktop-nav">
        {tabs.map(({ id, href, label, Icon }) => (
          <li key={id}>
            <Link
              href={href}
              className={`nav-btn${isActive(href) ? " active" : ""}`}
              onClick={closeMenu}
            >
              <Icon size={13} />
              {label}
            </Link>
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
          {tabs.map(({ id, href, label, Icon }) => (
            <Link
              key={id}
              href={href}
              className={`mobile-nav-btn${
                isActive(href) ? " active" : ""
              }`}
              onClick={closeMenu}
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}