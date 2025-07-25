export default function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "Java", "JavaScript"],
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "MySQL"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "VS Code", "Android Studio", "Postman"],
    },
    {
      title: "Core CS Subjects",
      skills: ["DSA", "OOP", "DBMS", "Computer Networks", "OS"],
    },
  ];

  return (
    <section id="skills" className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        My Skills
      </h2>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto">
        A quick overview of the technologies I work with across development and computer science fundamentals.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
        {skills.map((category, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-cyan-600 mb-4">{category.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
