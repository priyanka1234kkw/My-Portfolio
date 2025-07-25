export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-gray-600 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Get to know me
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            {/* Main description */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  I'm an aspiring <span className="font-semibold text-gray-900">software developer</span> with a passion for solving real-world problems through technology. I specialize in <span className="font-semibold text-gray-900">full-stack development</span> and mobile app design, working on impactful projects that integrate AI and advanced database systems.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  Currently pursuing <span className="font-semibold text-gray-900">B.Tech in Computer Engineering</span> at K. K. Wagh Institute of Engineering Education and Research, I've maintained academic excellence with consistent top-3 rankings throughout my studies.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  I actively participate in <span className="font-semibold text-gray-900">hackathons and coding competitions</span>, collaborating with diverse teams to transform innovative ideas into practical, efficient software solutions. I'm passionate about learning emerging technologies to stay ahead in our dynamic tech landscape.
                </p>
              </div>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Academic Excellence</h4>
                </div>
                <p className="text-gray-600 text-sm">Top performer with 9.29 CGPA and departmental rank #1</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Problem Solver</h4>
                </div>
                <p className="text-gray-600 text-sm">Active in hackathons and competitive programming</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Full-Stack Dev</h4>
                </div>
                <p className="text-gray-600 text-sm">MERN stack specialist with AI integration experience</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Team Player</h4>
                </div>
                <p className="text-gray-600 text-sm">Collaborative approach to turning ideas into solutions</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 text-center">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Explore My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}