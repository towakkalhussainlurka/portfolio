function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub"
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 text-white">

      <h2 className="text-4xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">

        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-800 px-5 py-2 rounded-full text-gray-300 hover:bg-blue-600 hover:text-white transition"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}

export default Skills;