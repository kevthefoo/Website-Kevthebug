import "./about.css";

export default function About() {
  return (
    <section id="about" className="h-screen flex-col justify-start pt-16">
      <h1>About Me</h1>
      <span className="text-xl text-gray-500">What I am made of</span>
      <div className="bubble_container">
        <div className="bubble main">Goodness</div>
        <div className="bubble mbti">INTP</div>
        <div className="bubble pet">Dog Lover</div>
        <div className="bubble company">Disney</div>
        <div className="bubble food">Sushi</div>
        <div className="bubble sport">NBA</div>
        <div className="bubble film">Interstellar</div>
        <div className="bubble music">Piano</div>
        <div className="bubble trait">Creativity</div>
      </div>
    </section>
  );
}
