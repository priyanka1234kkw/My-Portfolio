import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-cyan-200 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-gray-800">
        <h1 className="text-xl font-extrabold text-cyan-600 tracking-wide">
          Priyanka's Portfolio
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold tracking-wide">
          {["Home", "Projects", "Skills", "Achievements", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              offset={-70}
              activeClass="text-cyan-600 border-b-2 border-cyan-500"
              spy={true}
              className="cursor-pointer hover:text-cyan-700 transition-colors pb-1"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cyan-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur px-6 pb-4 pt-2 space-y-2 border-t border-cyan-100 shadow-sm text-gray-700">
          {["Home", "Projects", "Skills", "Achievements", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="block text-cyan-700 hover:text-cyan-900 font-medium py-1"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
