// function Contact() {
//   return (
//     <section style={{ padding: "50px" }}>
//       <h2>Contact</h2>
//       <p>Phone: 03403830470</p>
//       <p>Email: towakkalhussain3@gmail.com</p>
//     </section>
//   );
// }

// export default Contact;
// function Contact() {
//   return (
//     <section id="contact" className="py-20 px-10 text-center">
//       <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

//       <p className="text-gray-400 mb-4">03403830470</p>
//       <p className="text-gray-400 mb-4">towakkalhussain3@gmail.com</p>

//       <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
//         Send Message
//       </button>
//     </section>
//   );
// }

// export default Contact;
function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Have a project or opportunity? Feel free to reach out 🚀
        </p>

        {/* Contact Card */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg">

          <p className="text-lg mb-2">Email:</p>
          <p className="text-blue-400 mb-6">
            towakkalhussain3@gmail.com
          </p>

          <p className="text-lg mb-2">Phone:</p>
          <p className="text-blue-400 mb-6">
            +92 340 3830470
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
            Send Message
          </button>

        </div>
      </div>
    </section>
  );
}

export default Contact;