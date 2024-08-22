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
      document
        .querySelector(".pfp_image_dark")
        .classList.remove("invisible", "opacity-0");
      document
        .querySelector(".pfp_image_light")
        .classList.add("invisible", "opacity-0");
    } else {
      document.body.classList.remove("dark");
      document
        .querySelector(".pfp_image_light")
        .classList.remove("invisible", "opacity-0");
      document
        .querySelector(".pfp_image_dark")
        .classList.add("invisible", "opacity-0");
    }
  }, [darkMode]);

  return (
    <>
      <input
        className="toggle_input"
        type="checkbox"
        id="darkmode-toggle"
        onClick={toggleDarkMode}
      />
      <label className="toggle_label" htmlFor="darkmode-toggle"></label>
    </>
  );
}
