"use client"

import Image from "next/image";

export default function Popup({ content, onClose }) {
  return (
    <div
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-500/70"
      onClick={onClose}
    >
      <div
        className="relative flex h-1/2 w-1/3 flex-col items-start justify-start rounded-xl border-4 border-black bg-white p-4 dark:border-white dark:bg-blue-300"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute right-1 top-1 cursor-pointer text-5xl dark:text-black"
          onClick={onClose}
        >
          &times;
        </span>
        <h1 className="dark:text-black">{content.value}</h1>
        <p className="dark:text-black">{content.description}</p>
        <Image
          src={content.icon}
          alt={content.value}
          priority={true}
          loading="eager"
          width={150}
          heith={150}
          className="absolute bottom-0 right-1/2 translate-x-1/2"
        />
      </div>
    </div>
  );
}
