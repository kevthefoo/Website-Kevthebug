import About from "@/app/Home/About/About";
import Blog from "@/app/Home/Blog/Blog";
import Contact from "@/app/Home/Contact/Contact";
import Services from "@/app/Home/Services/Services";
import Showcase from "@/app/Home/Showcase/Showcase";

export default function Home() {
  return (
    <section>
      <About />
      <Blog />
      <Contact />
      <Services />
      <Showcase />
    </section>
  );
}
