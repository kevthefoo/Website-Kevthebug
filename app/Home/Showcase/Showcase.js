import Carousel from "@/app/Component/Carousel/Carousel";

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="flex-col justify-start border-2 border-red-300 pb-16 pt-16"
    >
      <h1>Showcase</h1>
      <span className="mb-4 text-xl text-gray-500">My Highlight Projects</span>
      <Carousel />
    </section>
  );
}
