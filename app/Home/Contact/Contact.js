import { MdEmail } from "react-icons/md";

import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import "./contact.css";

export default function Conatct() {
  return (
    <section
      id="contact"
      className="h-screen flex-col justify-start border-2 border-red-500 pt-16"
    >
      <h1>Contact</h1>
      <span className="text-xl text-gray-500">Get in touch with me</span>
      <div className="flex h-full items-stretch justify-center border-2 border-blue-300">
        <div className="flex flex-col items-stretch justify-between border-2 border-red-500">
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 px-8 py-4">
            <MdEmail className="text-3xl" />
            <h3 className="text-xl">Email</h3>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 px-8 py-4">
            <FaLinkedin className="text-3xl" />
            <h3 className="text-xl">LinkedIn</h3>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 px-8 py-4">
            <FaLocationDot className="text-3xl" />
            <h3 className="text-xl">Location</h3>
          </div>
        </div>

        <form
          action=""
          className="w-3/5 rounded-3xl border-2 border-gray-400 p-8"
        >
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
              className="w-full rounded border-2 p-2 text-black"
              required
            ></textarea>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
