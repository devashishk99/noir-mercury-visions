
import Navigation from '../components/Navigation';
import { Instagram } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-12 text-center">
            About
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-gray-300">
              Nathanael Noir is a quantum physicist turned AI researcher whose passion lies in the 
              intersection of science and art. His work explores the boundary between the measurable 
              and the experiential, using computational tools to create immersive audiovisual experiences.
            </p>
            
            <p className="text-gray-300">
              Drawing from his background in quantum mechanics and machine learning, Nathanael creates 
              installations and performances that translate complex scientific concepts into tangible, 
              emotional experiences. His work often features algorithmic sound design paired with 
              generative visuals that respond to real-time data and audience interaction.
            </p>
            
            <p className="text-gray-300">
              His artistic practice investigates themes of emergence, uncertainty, and the sublime in 
              digital spaces. Through experimental sound design and interactive installations, he 
              seeks to make the invisible visible and the inaudible heard.
            </p>
            
            <div className="pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-light mb-4">Connect</h2>
              <a 
                href="https://www.instagram.com/moonsofmercury/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram size={20} />
                <span>@moonsofmercury</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
