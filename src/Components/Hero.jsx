// function Hero() {
//   return (
//     <section style={{ padding: "50px", textAlign: "center" }}>
//       <h1>Hi, I'm Towakkal 👋</h1>
//       <p>React Developer</p>
//     </section>
//   );
// }

// export default Hero;
// function Hero() {
//   return (
//     <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
//       <h1 className="text-5xl font-bold mb-4">
//         Hi, I'm <span className="text-blue-500">Towakkal</span> 👋
//       </h1>

//       <p className="text-gray-400 text-xl mb-6">
//         Frontend React Developer
//       </p>

//       <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
//         View Projects
//       </button>
//     </section>
//   );
// }

// export default Hero;
// function Hero() {
//   return (
//     <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-950 text-white">

//       <h1 className="text-5xl font-bold mb-4">
//         Hi, I'm <span className="text-blue-500">Towakkal</span> 👋
//       </h1>

//       <p className="text-gray-400 text-xl mb-6">
//         Frontend React Developer
//       </p>

//       <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
//         View My Work
//       </button>

//     </section>
//   );
// }

// export default Hero;
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-950 text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm <span className="text-blue-500">Towakkal</span> 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-xl mb-6"
      >
        Frontend React Developer
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
      >
        Hire Me
      </motion.button>
    </section>
  );
}

export default Hero;