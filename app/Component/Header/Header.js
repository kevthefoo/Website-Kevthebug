import Image from "next/image";
import { FaLinkedin, FaGithubSquare, FaMedium } from "react-icons/fa";

export default function Header() {
    return (
        <header className='flex justify-around items-center border-2 h-16'>
            <div>
                Logo
            </div>
            <nav>
                <ul className='flex justify-between items-center gap-4 border-2'>
                    <li className="hover:text-gray-500">
                        <a href="#">About</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#">Services</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#">Showcase</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#">Blog</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <div>
                <ul className='flex justify-between items-center gap-2 border-2'>
                    <li>
                        <a href="https://github.com" title="Github"><FaGithubSquare size={28} /></a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" title="Linkedin"><FaLinkedin size={28} /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com" title="Twitter"><FaMedium size={28} /></a>
                    </li>
                </ul>
            </div>
        </header>
    );
}