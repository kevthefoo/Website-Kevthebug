"use client";
import { useState } from "react";
import { FaLinkedin, FaGithubSquare, FaMedium } from "react-icons/fa";
import ThemeToggle from "@/app/Component/ThemeToggle/ThemeToggle";

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <header className="fixed z-50 flex h-16 w-full items-center justify-around border-b-2 bg-white transition duration-700 ease-linear max-md:border-2 max-md:border-red-500 dark:bg-neutral-900 dark:text-white">
      <div>Logo</div>
      <nav className="border-2 border-red-500 max-md:hidden">
        <ul className="flex items-center justify-between gap-4">
          <li className="hover:text-gray-500">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#showcase">Showcase</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-between gap-4 border-2 border-red-500">
        <ul className="flex items-center justify-between gap-2">
          <li>
            <a href="https://github.com" target="_blank" title="Github">
              <FaGithubSquare size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kevthebug/"
              target="_blank"
              title="Linkedin"
            >
              <FaLinkedin size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@kevthefoo"
              target="_blank"
              title="Medium"
            >
              <FaMedium size={28} />
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </div>

      <div
        className="relative z-50 hidden h-7 w-7 cursor-pointer flex-col justify-between max-md:flex"
        onClick={() => {
          setActive(!active);
        }}
      >
        <div
          className={
            active
              ? "absolute left-0 top-1/2 h-1 w-full rotate-45 bg-black transition ease-in-out"
              : "h-1 w-full bg-black transition ease-in-out"
          }
        ></div>
        <div
          className={
            active ? "" : "h-1 w-full bg-black transition delay-150 ease-in-out"
          }
        ></div>
        <div
          className={
            active
              ? "absolute left-0 top-1/2 h-1 w-full rotate-[-45deg] bg-black transition ease-in-out"
              : "h-1 w-full bg-black transition ease-in-out"
          }
        ></div>
      </div>

      <nav
        className={
          active
            ? "fixed left-0 top-0 z-30 flex h-screen w-full items-center justify-center border-2 bg-white"
            : "fixed left-full top-0 z-30 flex h-screen w-full items-center justify-center border-2 bg-white"
        }
      >
        <ul className="flex flex-col justify-center gap-8 text-center">
          <li className="relative before:absolute before:right-[95px] before:top-[10px] before:h-[1px] before:w-16 before:bg-black before:content-[''] after:absolute after:left-[95px] after:top-[10px] after:h-[1px] after:w-16 after:bg-black after:content-['']">
            <a href="#about" onClick={() => setActive(false)}>
              About
            </a>
          </li>
          <li className="relative before:absolute before:right-[95px] before:top-[10px] before:h-[1px] before:w-16 before:bg-black before:content-[''] after:absolute after:left-[95px] after:top-[10px] after:h-[1px] after:w-16 after:bg-black after:content-['']">
            <a href="#skills" onClick={() => setActive(false)}>
              Skills
            </a>
          </li>
          <li className="relative before:absolute before:right-[95px] before:top-[10px] before:h-[1px] before:w-16 before:bg-black before:content-[''] after:absolute after:left-[95px] after:top-[10px] after:h-[1px] after:w-16 after:bg-black after:content-['']">
            <a href="#showcase" onClick={() => setActive(false)}>
              Showcase
            </a>
          </li>
          <li className="relative before:absolute before:right-[95px] before:top-[10px] before:h-[1px] before:w-16 before:bg-black before:content-[''] after:absolute after:left-[95px] after:top-[10px] after:h-[1px] after:w-16 after:bg-black after:content-['']">
            <a href="#services" onClick={() => setActive(false)}>
              Services
            </a>
          </li>
          <li className="relative before:absolute before:right-[95px] before:top-[10px] before:h-[1px] before:w-16 before:bg-black before:content-[''] after:absolute after:left-[95px] after:top-[10px] after:h-[1px] after:w-16 after:bg-black after:content-['']">
            <a href="#contact" onClick={() => setActive(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
