export default function Projects() {
  const projects = [
    {
      title: "AI-Driven Fraud Detection System",
      description: "Protects rural bank customers from phishing, fraud calls, and malicious URLs using ML and a user-friendly chatbot.",
      technologies: ["Python", "Machine Learning", "Flask", "NLP", "REST APIs", "HTML/CSS", "JavaScript"],
      image: "hackathon.jpeg",
      github: "https://github.com/priyanka1234kkw",
      category: "AI/ML",
      featured: true
    },
    {
      title: "FindMyStay – Hostel Finder",
      description: "Responsive web platform to find and compare hostels based on location, pricing, and amenities.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: "images.jpg",
      github: "https://github.com/priyanka1234kkw/FindMyStay-Hostel-Finder.git",
      category: "Full Stack"
    },
    {
      title: "Kindred Spirit – Donation App",
      description: "Provides essential services to underprivileged individuals and NGOs through a donation-based Android platform.",
      technologies: ["Java", "Android Studio", "Firebase"],
      image: "DBMS_presentation.jpeg",
      github: "https://github.com/priyanka1234kkw/Kindered_Spirit_NonProfit_Organization.git",
      category: "Mobile App"
    },
    {
      title: "Event Management Web Application",
      description: "Web application to manage college-level technical and non-technical events efficiently.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "event.png",
      github: "https://github.com/priyanka1234kkw/Event-Management-Web-Application.git",
      category: "Web Development"
    },
    {
      title: "Smart Dustbin using Arduino Uno",
      description: "Automated smart dustbin system using sensors and Arduino Uno for better waste management.",
      technologies: ["Arduino Uno", "Sensors", "IoT"],
      image: "iot_Presentation.jpeg",
      github: "#",
      category: "IoT"
    },
    {
      title: "WeatherNow – React Weather App",
      description: "Simple weather forecast app using OpenWeather API with real-time updates and clean UI.",
      technologies: ["React.js", "Tailwind CSS", "OpenWeather API"],
      image: "weather.png",
      github: "https://github.com/priyanka1234kkw/React-Weather-finding-application.git",
      category: "Frontend"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "AI/ML": "from-purple-500 to-pink-600",
      "Full Stack": "from-blue-500 to-cyan-600",
      "Mobile App": "from-green-500 to-teal-600",
      "Web Development": "from-orange-500 to-red-600",
      "IoT": "from-indigo-500 to-purple-600",
      "Frontend": "from-cyan-500 to-blue-600"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-2 block">
              My Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-slate-600 mt-6 max-w-3xl mx-auto">
            A showcase of innovative solutions I've built, from AI-powered applications to full-stack web platforms and mobile apps.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Featured
                  </span>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg`}>
                  {project.category}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-md hover:bg-slate-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    <span>View Code</span>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
}