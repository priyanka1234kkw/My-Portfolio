// src/components/Achievements.js
const achievements = [
  "1st Rank in Department – Third Year (Computer Engineering)",
  "3rd Rank in Department – First & Second Year(Computer Engineering)",
  "Top Performer – Tech Pragyan Hackathon 2025",
  "Finalist – Winjit FinTech Competition",
  "Completed Zensar Employability Skills Training Program ",
  "Completed Employability Skills Training Program - Mahindra Pride Classroom",
  "80% – IIT Bombay PostgreSQL Certification (Spoken Tutorial)",
  "NPTEL Certified – Design and Analysis of Algorithms, C++ Programming,Java Programming",
  "AWS Cloud Foundations – Academy Graduate",
  "Python 3.4.3 Certification – IIT Bombay",
  "Volunteer – E-Waste Collection Drive"
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-gray-600 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Recognition & Growth
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Achievements & Activities
            </h2>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A track record of academic excellence, competitive achievements, and continuous professional development.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-gray-400 p-6 shadow-md rounded-md hover:shadow-lg hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 group-hover:bg-gray-600 transition-colors duration-300"></div>
                <p className="text-gray-800 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}