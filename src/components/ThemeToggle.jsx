import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // opcional: ícones

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded border dark:border-gray-500 border-gray-300"
      aria-label="Alternar tema"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}