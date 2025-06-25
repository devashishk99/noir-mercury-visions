
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const titles = ['Visual Artist', 'Quantum Physicist', 'AI Researcher', 'Sound Explorer'];
  
  const currentTitle = useTypewriter({ 
    words: titles, 
    typeSpeed: 100, 
    deleteSpeed: 80, 
    delaySpeed: 2000 
  });

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide mb-4 sm:mb-6 min-h-[6rem] sm:min-h-[7rem] md:min-h-[8rem] lg:min-h-[9rem] flex items-center justify-center">
            <span className="inline-block">
              {currentTitle}
              <span className="animate-pulse text-gray-400">|</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
