// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm mb-4">
          <p className="text-center md:text-left mb-2 md:mb-0">
            © {new Date().getFullYear()} <span className="text-white font-medium">Priyanka Kshirsagar</span>. MERN Stack Developer.
          </p>
          <p className="text-center md:text-right">
            Portfolio built with <span className="text-white font-medium">React & Tailwind CSS</span>
          </p>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
            <p className="mb-2 sm:mb-0">
              Crafted with precision and attention to detail
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#about" 
                className="hover:text-gray-300 transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="#skills" 
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Skills
              </a>
              <a 
                href="#achievements" 
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Achievements
              </a>
              <a 
                href="#contact" 
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}