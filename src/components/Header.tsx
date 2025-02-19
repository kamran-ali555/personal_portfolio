import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Testimonials', 'Contact'];

  return (
    <header className={`border-b border-neutral-700/80  fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 ">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            Kamran Ali
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/kamran-ali555" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/kamranail/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="kamranaelikakakhail@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm py-4">
            <div className="flex flex-col space-y-4 px-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/kamran-ali555" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/kamranail/" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="kamranaelikakakhail@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}