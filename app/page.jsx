"use client";

import { useState, useEffect } from "react";
import { Styles } from "./styles";
// import { Github } from "lucide-react";
import { ME, PROJECTS } from './content'
import { JournalPage } from './pages/Journal'
import { Nav } from './components/Nav'
import { ProjectsPage } from "./pages/Projects";
import { HomePage } from "./pages/Home";
import { ProjectDetail } from "./components/ProjectDetails";
import { JournalDetail } from "./components/JournalDetails";

/* ═══════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════ */
// function Nav({ page, setPage, theme, toggleTheme }) {
//   const tabs = [
//     { id: "home", label: "About", Icon: User },
//     { id: "projects", label: "Projects", Icon: Folder },
//     { id: "journal", label: "Journal", Icon: BookOpen },
//   ];
//   return (
//     <nav className="nav">
//       <span className="nav-logo" onClick={() => setPage("home")}>{ME.name}</span>
//       <ul className="nav-links">
//         {tabs.map(({ id, label, Icon }) => (
//           <li key={id}>
//             <button className={`nav-btn${page === id ? " active" : ""}`} onClick={() => setPage(id)}>
//               <Icon size={13} />
//               {label}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
//         {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
//       </button>
//     </nav>
//   );
// }
/* ═══════════════════════════════════════════
   ROOT
═══════════════════════════════════════════ */
export default function Portfolio() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState("light");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      return;
    }

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(systemDark ? "dark" : "light");
  }, []);

  // APPLY THEME + SAVE
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  // SYSTEM THEME CHANGE LISTENER
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      // only auto-update if user hasn't manually chosen
      const savedTheme = localStorage.getItem("theme");

      if (!savedTheme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => setTheme(t => t === "light" ? "dark" : "light");

  return (
    <div style={{ minHeight: "100vh" }}>
      <Styles />
      <Nav page={page} setPage={(p) => { 
        setPage(p); 
        setSelectedProject(null); 
        setSelectedJournal(null); 
        console.log("print clicked!")
      }} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        
        />
      <main style={{ paddingTop: 64 }} >
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "projects" && <ProjectsPage filter={filter} setFilter={setFilter} onSelect={setSelectedProject} />}
        {page === "journal" && <JournalPage onSelect={setSelectedJournal} />}
      </main>
      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {selectedJournal && <JournalDetail entry={selectedJournal} onClose={() => setSelectedJournal(null)} />}
    </div>
  );
}
