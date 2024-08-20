import Hero from "@/app/Home/Hero/Hero";
import About from "@/app/Home/About/About";
import Blog from "@/app/Home/Blog/Blog";
import Contact from "@/app/Home/Contact/Contact";
import Services from "@/app/Home/Services/Services";
import Showcase from "@/app/Home/Showcase/Showcase";
import Skills from "@/app/Home/Skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Showcase />
      <Services />
      <Contact />
    </>
  );
}
