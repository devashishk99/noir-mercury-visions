
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const titles = ['Visual Artist', 'Quantum Physicist', 'AI Researcher', 'Sound Explorer'];
  const subtitles = [
    'Experimenting with sound and visual art',
    'Exploring quantum mechanics and reality',
    'Researching artificial intelligence frontiers',
    'Creating immersive audio experiences'
  ];
  
  const currentTitle = useTypewriter({ 
    words: titles, 
    typeSpeed: 100, 
    deleteSpeed: 80, 
    delaySpeed: 2000 
  });
  
  const currentSubtitle = useTypewriter({ 
    words: subtitles, 
    typeSpeed: 120, 
    deleteSpeed: 90, 
    delaySpeed: 2000 
  });

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4 sm:mb-6 min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] flex items-center justify-center">
            <span className="inline-block">
              {currentTitle}
              <span className="animate-pulse text-gray-400">|</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center px-4">
            <span className="inline-block text-center">
              {currentSubtitle}
              <span className="animate-pulse text-gray-500">|</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
