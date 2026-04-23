// function Projects() {
//   return (
//     <section style={{ padding: "50px" }}>
//       <h2>Projects</h2>
//       <ul>
//         <li>Username CRUD App</li>
//         <li>Clock App</li>
//       </ul>
//     </section>
//   );
// }

// export default Projects;
// function Projects() {
//   return (
//     <section id="projects" className="py-20 px-10 bg-gray-900">
//       <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
//           <h3 className="text-xl font-bold mb-2">CRUD App</h3>
//           <p className="text-gray-400">Add, edit, delete users using React.</p>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
//           <h3 className="text-xl font-bold mb-2">Clock App</h3>
//           <p className="text-gray-400">Live clock with dynamic UI.</p>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
//           <h3 className="text-xl font-bold mb-2">Portfolio</h3>
//           <p className="text-gray-400">This professional portfolio site.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
// function Projects() {
//   return (
//     <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      
//       <h2 className="text-4xl font-bold text-center mb-10">
//         Projects
//       </h2>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

//         <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
//           <h3 className="text-xl font-bold mb-2">CRUD App</h3>
//           <p className="text-gray-400">Add, edit, delete users in React.</p>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
//           <h3 className="text-xl font-bold mb-2">Clock App</h3>
//           <p className="text-gray-400">Live clock with dynamic UI.</p>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
//           <h3 className="text-xl font-bold mb-2">Portfolio</h3>
//           <p className="text-gray-400">This professional portfolio.</p>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Projects;
import { motion } from "framer-motion";

function Projects() {
  const projectList = [
    {
      title: "CRUD App",
      desc: "Add, edit, delete users in React."
    },
    {
      title: "Clock App",
      desc: "Live clock with dynamic UI."
    },
    {
      title: "Portfolio",
      desc: "Professional developer portfolio."
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {projectList.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>

            <button className="mt-4 text-blue-400 hover:text-blue-300">
              View Project →
            </button>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;