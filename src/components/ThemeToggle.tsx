
import { useState, useEffect } from 'react';
import { Sun, Moon, Lightbulb, Zap } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if user has a theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const Icon = isDark ? Sun : Moon;
  const quirkIcons = [Lightbulb, Zap];
  const QuirkIcon = quirkIcons[Math.floor(Math.random() * quirkIcons.length)];

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative group p-2 rounded-full transition-all duration-300 transform hover:scale-110
        ${isDark 
          ? 'bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400' 
          : 'bg-purple-600/20 hover:bg-purple-600/30 text-purple-600'
        }
      `}
      aria-label="Toggle theme"
    >
      <div className="relative">
        <Icon size={20} className="transition-transform duration-300 group-hover:rotate-12" />
        <QuirkIcon 
          size={8} 
          className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        />
      </div>
      
      {/* Quirky tooltip */}
      <div className={`
        absolute -bottom-8 left-1/2 transform -translate-x-1/2 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
        text-xs whitespace-nowrap px-2 py-1 rounded
        ${isDark ? 'bg-yellow-400/10 text-yellow-400' : 'bg-purple-600/10 text-purple-600'}
      `}>
        {isDark ? '☀️ Enlighten me!' : '🌙 Darken the void'}
      </div>
    </button>
  );
};

export default ThemeToggle;
