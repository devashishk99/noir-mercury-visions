
import { Instagram, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 dark:bg-black/90 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-lg sm:text-xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            NATHANAEL NOIR
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors duration-200 ${
                location.pathname === '/' ? 'text-white underline' : 'text-gray-300 hover:text-white'
              }`}
            >
              Works
            </Link>
            <Link 
              to="/tools" 
              className={`transition-colors duration-200 ${
                location.pathname === '/tools' ? 'text-white underline' : 'text-gray-300 hover:text-white'
              }`}
            >
              Tools
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-200 ${
                location.pathname === '/about' ? 'text-white underline' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>
            <a 
              href="https://www.instagram.com/moonsofmercury/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
            >
              <Instagram size={18} />
              <span className="hidden lg:inline">Instagram</span>
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/" 
                className={`transition-colors duration-200 ${
                  location.pathname === '/' ? 'text-white underline' : 'text-gray-300 hover:text-white'
                }`}
                onClick={closeMobileMenu}
              >
                Works
              </Link>
              <Link 
                to="/tools" 
                className={`transition-colors duration-200 ${
                  location.pathname === '/tools' ? 'text-white underline' : 'text-gray-300 hover:text-white'
                }`}
                onClick={closeMobileMenu}
              >
                Tools
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors duration-200 ${
                  location.pathname === '/about' ? 'text-white underline' : 'text-gray-300 hover:text-white'
                }`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <a 
                href="https://www.instagram.com/moonsofmercury/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                onClick={closeMobileMenu}
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
