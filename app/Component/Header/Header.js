import Image from "next/image";
import { FaLinkedin, FaGithubSquare, FaMedium } from "react-icons/fa";
import ThemeToggle from "@/app/Component/ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-around border-2 transition duration-700 ease-linear dark:bg-neutral-900 dark:text-white">
      <div>Logo</div>
      <nav>
        <ul className="flex items-center justify-between gap-4 border-2">
          <li className="hover:text-gray-500">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#showcase">Showcase</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#blog">Blog</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-between gap-4">
        <ul className="flex items-center justify-between gap-2 border-2">
          <li>
            <a href="https://github.com" title="Github">
              <FaGithubSquare size={28} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" title="Linkedin">
              <FaLinkedin size={28} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" title="Twitter">
              <FaMedium size={28} />
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </header>
  );
}
