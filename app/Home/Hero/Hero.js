import Image from "next/image";
import pfp from "@/asset/materials/pfp.png";
import HelloIcon from "./HelloIcon";

export default function Hero() {
  return (
    <section className="justify-around">
      <Image
        src={pfp}
        alt="Kevin Caviar"
        width={350}
        className="pfp_image rounded-3xl"
      />

      <div className="flex w-1/2 flex-col">
        <h1 className="mb-4 flex items-center justify-start gap-x-3.5">
          Kevin Caviar
          <HelloIcon />
        </h1>
        <h3 className="mb-4">
          <i>A Programming Enthusiasm</i>
        </h3>
        <p className="mb-16 text-gray-700 dark:text-white">
          I found that programming is my destiny when I was 27 then I devoted in
          it with all my heart. Sometimes I wish I could learn programming
          earlier in my life, the industry and its community are just so
          attractive to me. Life is like a box of chocolate, isn&#39;t?
        </p>
        <a
          href="/#about"
          className="self-center rounded-2xl bg-gray-700 px-8 py-4 font-bold text-white hover:bg-gray-900 dark:bg-blue-700 dark:text-black dark:hover:bg-blue-600"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
