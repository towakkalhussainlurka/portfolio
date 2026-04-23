// function Navbar() {
//   return (
//     <nav style={{ padding: "20px", background: "#111", color: "#fff" }}>
//       <h2>My Portfolio</h2>
//     </nav>
//   );
// }

// export default Navbar;
// function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md shadow-md z-50">
//       <div className="flex justify-between items-center px-8 py-4">
//         <h1 className="text-xl font-bold">Towakkal Hussain</h1>

//         <div className="space-x-6 text-gray-300">
//           <a href="#home" className="hover:text-white">Home</a>
//           <a href="#about" className="hover:text-white">About</a>
//           <a href="#projects" className="hover:text-white">Projects</a>
//           <a href="#contact" className="hover:text-white">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md text-white shadow-md z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

//         <h1 className="text-xl font-bold">Towakkal.dev</h1>

//         <div className="space-x-6 text-gray-300">
//           <a href="#home" className="hover:text-white">Home</a>
//           <a href="#about" className="hover:text-white">About</a>
//           <a href="#projects" className="hover:text-white">Projects</a>
//           <a href="#contact" className="hover:text-white">Contact</a>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;
function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md text-white z-50">
      <div className="flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold">Towakkal.dev</h1>

        <div className="hidden md:flex space-x-6 text-gray-300">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;