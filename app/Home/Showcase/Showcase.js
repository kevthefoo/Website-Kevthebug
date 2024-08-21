import Carousel from "@/app/Component/Carousel/Carousel";

export default function Showcase() {
  return (
    <section id="showcase" className="h-screen flex-col justify-start pt-16">
      <h1>Showcase</h1>
      <span className="text-xl text-gray-500 mb-4">My Highlight Projects</span>
      <Carousel />
    </section>
  );
}
