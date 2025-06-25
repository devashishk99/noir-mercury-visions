
import { Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-200">
            NATHANAEL NOIR
          </Link>
          <div className="flex items-center space-x-8">
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
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
