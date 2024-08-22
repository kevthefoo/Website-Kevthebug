import Image from "next/image";
import {
  FaSignal,
  FaFigma,
  FaReact,
  FaShopify,
  FaDiscord,
  FaEthereum,
} from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="flex-col justify-start pt-16">
      <h1>Services</h1>
      <span className="mb-4 text-xl text-gray-500">What I can provide</span>
      <div className="grid h-full grid-cols-3 gap-20">
        <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 p-2 dark:border-white dark:bg-black">
          <FaReact className="mb-4 text-5xl" />
          <h3>Website Development</h3>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 p-2 dark:border-white dark:bg-black">
          <FaFigma className="mb-4 text-5xl" />
          <h3>UI/UX Design</h3>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 p-2 dark:border-white dark:bg-black">
          <FaShopify className="mb-4 text-5xl" />
          <h3>E-commerce Development</h3>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 p-2 dark:border-white dark:bg-black">
          <FaSignal className="mb-4 text-5xl" />
          <h3>SEO</h3>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 p-2 dark:border-white dark:bg-black">
          <FaDiscord className="mb-4 text-5xl" />
          <h3>Custom Discord Bot</h3>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-gray-400 bg-slate-200 p-2 dark:border-white dark:bg-black">
          <FaEthereum className="mb-4 text-5xl" />
          <h3>Smart Contract Development</h3>
        </div>
      </div>
    </section>
  );
}
