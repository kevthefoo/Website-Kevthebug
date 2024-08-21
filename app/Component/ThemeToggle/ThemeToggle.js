"use client";

import { useState, useEffect } from "react";

import "./themetoggle.css";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <input type="checkbox" id="darkmode-toggle" onClick={toggleDarkMode} />
      <label htmlFor="darkmode-toggle"></label>
    </>
  );
}
