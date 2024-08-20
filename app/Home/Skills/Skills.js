export default function Skills() {
  return (
    <section id="skills" className="flex-col justify-start pt-16">
      <h1>Skills</h1>
      <span className="text-xl text-gray-500">What I got in my bag</span>
      <div className="grid grid-cols-2 items-stretch gap-x-16 gap-y-10 justify-center border-2 border-red-700">
        <div className="flex flex-col rounded-xl border-2 border-black">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwindcss</li>
            <li>React</li>
          </ul>
        </div>

        <div className="flex flex-col rounded-xl border-2 border-black">
          <h3>Backend</h3>
          <ul>
            <li>Python</li>
            <li>Node.js</li>
            <li>Mongodb</li>
            <li>MySQL</li>
            <li>AWS</li>
          </ul>
        </div>

        <div className="flex flex-col rounded-xl border-2 border-black">
          <h3>Blockchain</h3>
          <ul>
            <li>Solidity</li>
            <li>Ethers.js</li>
            <li>Web3.js</li>
            <li>Truffle</li>
          </ul>
        </div>

        
        <div className="flex flex-col rounded-xl border-2 border-black">
          <h3>Others</h3>
          <ul>
            <li>Figma</li>

          </ul>
        </div>













      </div>
    </section>
  );
}
