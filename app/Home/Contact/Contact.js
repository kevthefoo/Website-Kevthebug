import { MdEmail } from "react-icons/md";

import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import "./contact.css";

export default function Conatct() {
  return (
    <section id="contact" className="h-auto flex-col justify-start pb-24 pt-16">
      <h1>Contact</h1>

      <span className="mb-12 text-xl text-gray-500">Get in touch with me</span>

      <div className="flex h-full w-full items-stretch justify-center gap-10 max-sm:flex-col">
        <div className="flex flex-col items-stretch justify-between gap-4 max-sm:flex-row max-sm:justify-center max-sm:gap-2">
          <a
            href="mailto:kevthebug@gmail.com"
            className="flex aspect-square flex-1 flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 px-8 py-4 max-md:p-0 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            <MdEmail className="mb-2 text-3xl max-md:text-xl" />
            <h3 className="text-xl max-[992px]:text-[12px]">Email</h3>
          </a>
          <a
            href="https://www.linkedin.com/in/kevthebug/"
            target="_blank"
            className="flex aspect-square flex-1 flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 px-8 py-4 max-md:p-0 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            <FaLinkedin className="mb-2 text-3xl max-md:text-xl" />
            <h3 className="text-xl max-[992px]:text-[12px]">LinkedIn</h3>
          </a>
          <a
            href="https://maps.app.goo.gl/srk7XxEz989FP3Ws8"
            target="_blank"
            className="flex aspect-square flex-1 flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 px-8 py-4 max-md:p-0 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            <FaLocationDot className="mb-2 text-3xl max-md:text-xl" />
            <h3 className="text-xl max-[992px]:text-[12px]">Location</h3>
          </a>
        </div>

        <form action="" className="rounded-3xl border-2 border-gray-400 p-8">
          <div className="mb-8 flex flex-col items-start justify-start">
            <label htmlFor="name" className="mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border-2 p-2 text-black"
              required
            />
          </div>

          <div className="mb-8 flex flex-col items-start justify-start">
            <label htmlFor="email" className="mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border-2 p-2 text-black"
              required
            />
          </div>

          <div className="mb-8 flex flex-col items-start justify-start">
            <label htmlFor="message" className="mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="form_messaage w-full rounded border-2 p-2 text-black"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="self-center rounded-2xl bg-gray-700 px-8 py-4 font-bold text-white hover:bg-gray-900 dark:bg-blue-700 dark:text-black dark:hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
