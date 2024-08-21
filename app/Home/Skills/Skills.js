import "./skills.css";
import { HiAcademicCap } from "react-icons/hi2";
import { FaAppleAlt } from "react-icons/fa";
export default function Skills() {
  return (
    <section id="skills" className="flex-col justify-start pt-16">
      <h1>Skills</h1>
      <span className="mb-4 text-xl text-gray-500">What I got in my bag</span>
      <div className="grid h-full grid-cols-2 justify-center gap-8">
        <div className="flex w-80 flex-col rounded-xl border-2 border-gray-400 bg-slate-200 p-4 dark:bg-slate-800">
          <h3 className="mb-4 self-center text-xl">Frontend</h3>
          <div>
            <ul className="grid grid-flow-col grid-cols-2 grid-rows-4 items-center justify-center gap-4">
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                React
              </li>
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                Next.js
              </li>
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                Tailwindcss
              </li>
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                JavaScript
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-80 flex-col rounded-xl border-2 border-gray-400 bg-slate-200 p-4 dark:bg-slate-800">
          <h3 className="mb-4 self-center text-xl">Backend</h3>
          <div>
            <ul className="grid grid-flow-col grid-cols-2 grid-rows-4 items-center justify-center gap-4">
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                Python
              </li>
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                Node.js
              </li>
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                Mongodb
              </li>
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                MySQL
              </li>
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                AWS
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-80 flex-col rounded-xl border-2 border-gray-400 bg-slate-200 p-4 dark:bg-slate-800">
          <h3 className="mb-4 self-center text-xl">Blockchain</h3>
          <div>
            <ul className="grid grid-flow-col grid-cols-2 grid-rows-4 items-center justify-center gap-4">
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                Solidity
              </li>
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                Truffle
              </li>
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                Web3.js
              </li>
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                Ether.js
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-80 flex-col rounded-xl border-2 border-gray-400 bg-slate-200 p-4 dark:bg-slate-800">
          <h3 className="mb-4 self-center text-xl">Others</h3>
          <div>
            <ul className="grid grid-flow-col grid-cols-2 grid-rows-4 items-center justify-center gap-4">
              <li className="flex items-center justify-start gap-1">
                <HiAcademicCap />
                Figma
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
