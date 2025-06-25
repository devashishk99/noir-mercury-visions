
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 dark:text-gray-100 mb-12 leading-none min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] flex items-center justify-center">
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
