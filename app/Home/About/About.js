"use client";
import { useState } from "react";

import "./about.css";
import Popup from "@/app/Component/Popup/Popup";
import descriptionData from "./Description";

export default function About() {
  const [popupContent, setPopupContent] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleBubbleClick = (content) => {
    setPopupContent(content);
    setIsPopupVisible(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="about" className="h-screen flex-col justify-start pt-16">
      <h1>About Me</h1>
      <span className="text-xl text-gray-500">What I am made of</span>
      <div className="bubble_container relative">
        {Object.keys(descriptionData).map((key) => (
          <div
            key={key}
            className={`bubble ${key}`}
            onClick={() => handleBubbleClick(descriptionData[key])}
          >
            {descriptionData[key].value}
          </div>
        ))}
      </div>
      {isPopupVisible && <Popup content={popupContent} onClose={closePopup} />}
    </section>
  );
}
