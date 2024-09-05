import Image from "next/image";
import pfp from "@/asset/materials/pfp.png";
import pfp_3 from "@/asset/materials/pfp_3.png";
import HelloIcon from "./HelloIcon";
import "./hero.css";

export default function Hero() {
  return (
    <section className="h-screen items-center justify-evenly pt-20 max-md:flex-col max-md:justify-evenly">
      <div className="php_image_container relative h-[500px] w-[300px] max-[992px]:h-[400px] max-[992px]:w-[250px] max-md:h-[200px] max-md:w-[200px] max-md:rounded-full max-[496px]:h-[150px] max-[496px]:w-[150px]">
        <Image
          priority={true}
          loading="eager"
          placeholder="empty"
          src={pfp}
          alt="Kevin Caviar"
          className="pfp_image_light absolute h-full w-full rounded-3xl object-cover max-md:rounded-full"
        />
        <Image
          priority={true}
          loading="eager"
          placeholder="empty"
          src={pfp_3}
          alt="Kevin Caviar"
          className="pfp_image_dark invisible absolute h-full w-full rounded-3xl object-cover opacity-0 max-md:rounded-full"
        />
      </div>

      <div className="flex w-1/2 flex-col max-[992px]:text-[14px] max-md:h-auto max-md:w-full">
        <h1 className="mb-4 flex items-center justify-start gap-x-3.5 max-[992px]:text-xl max-[496px]:text-base">
          Kevin Caviar
          <HelloIcon />
        </h1>
        <h3 className="mb-4">
          <i>A Programming Enthusiasm</i>
        </h3>
        <p className="mb-16 max-[992px]:mb-10 max-[992px]:text-[14px] max-md:mb-4 max-md:leading-6">
          I found that programming is my destiny when I was 27 then I devoted in
          it with all my heart. Sometimes I wish I could learn programming
          earlier in my life, the industry and its communities are just so
          attractive to me. Life is like a box of chocolate, isn&#39;t it?
        </p>
        <a
          href="/#about"
          className="self-center rounded-2xl bg-gray-700 px-8 py-4 font-bold text-white hover:bg-gray-900 max-[992px]:rounded-xl max-[992px]:px-4 max-[992px]:py-2 max-[992px]:text-[12px] dark:bg-blue-700 dark:text-black dark:hover:bg-blue-600"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
