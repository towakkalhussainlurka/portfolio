// import { useState } from 'react'
// import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
// import About from './Components/About'
// import Projects from './Components/Projects'
// import Contact from './Components/Contact'
// import './index.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Navbar/>
//       <Hero/>
//       <About/>
//       <Projects/>
//       <Contact/>
//     </>
//   )
// }

// export default App
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
          <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
