// function About() {
//   return (
//     <section style={{ padding: "50px" }}>
//       <h2>About Me</h2>
//       <p>I am a frontend developer skilled in React.js.</p>
//     </section>
//   );
// }

// export default About;
// function About() {
//   return (
//     <section id="about" className="py-20 px-10 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

//       <p className="text-gray-400 text-center leading-7">
//         I am a passionate React developer focused on building modern, responsive,
//         and user-friendly web applications. I enjoy turning ideas into real-world projects.
//       </p>
//     </section>
//   );
// }

// export default About;
function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-950 text-white">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-400 leading-7 text-lg">
          I am a passionate Frontend Developer specializing in React.js.
          I enjoy building modern, responsive, and user-friendly web applications.
          My focus is on writing clean code and creating great user experiences.
        </p>

      </div>

    </section>
  );
}

export default About;