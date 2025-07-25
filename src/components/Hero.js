export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100 text-gray-900 min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden"
    >
      {/* Subtle professional background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Professional greeting */}
        <div className="mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
          <span className="inline-block text-gray-600 text-sm sm:text-base font-medium tracking-wide uppercase mb-2">
            Welcome to my portfolio
          </span>
        </div>

        {/* Clean profile image */}
        <div className="relative mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          <img
            src="/portfolio_picture.jpeg"
            alt="Priyanka Kshirsagar - MERN Stack Developer"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-3 border-gray-300 shadow-xl object-cover mx-auto"
          />
        </div>

        {/* Name with professional typography */}
        <div className="mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight">
            Hello, I'm{' '}
            <span className="text-gray-800 font-extrabold">
              Priyanka Kshirsagar
            </span>
          </h1>
          <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
        </div>

        {/* Professional title */}
        <div className="mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
            MERN Stack Developer & AI Enthusiast
          </h2>
        </div>

        {/* Professional description */}
        <div className="mb-10 opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Final-year Computer Engineering student passionate about crafting{' '}
            <span className="text-gray-800 font-medium">exceptional web experiences</span> and exploring the frontiers of{' '}
            <span className="text-gray-800 font-medium">Data Science & Artificial Intelligence</span>.
            I transform ideas into powerful, user-centric digital solutions.
          </p>
        </div>

        {/* Professional CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]">
          <a
            href="/resume.pdf"
            className="group relative bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              View Resume
            </span>
          </a>
          <a
            href="#contact"
            className="group relative bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-gray-300 hover:border-gray-400"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Let's Connect
            </span>
          </a>
        </div>

       
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}