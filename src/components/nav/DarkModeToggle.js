import React, { useEffect, useState } from "react";
import { Moon, Sun } from "react-bootstrap-icons";

const DarkModeToggle = () => {
  const getPreferredTheme = () =>
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <a onClick={toggleTheme} className="show-cursor scale-1">
      {theme === "light" ? (
        <Moon size={20} color="black" />
      ) : (
        <Sun size={20} color="white" />
      )}
    </a>
  );
};

export default DarkModeToggle;
