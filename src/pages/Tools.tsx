
import Navigation from '../components/Navigation';

const Tools = () => {
  const tools = [
    {
      category: "Visual",
      items: ["TouchDesigner", "Processing", "Three.js", "WebGL", "Blender", "After Effects"]
    },
    {
      category: "Audio",
      items: ["Max/MSP", "SuperCollider", "Ableton Live", "Pure Data", "Web Audio API"]
    },
    {
      category: "AI/ML",
      items: ["TensorFlow", "PyTorch", "Stable Diffusion", "RunwayML", "Google Colab"]
    },
    {
      category: "Development",
      items: ["Python", "JavaScript", "React", "Node.js", "OpenFrameworks", "Arduino"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-12 text-center">
            Tools
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {tools.map((toolCategory) => (
              <div key={toolCategory.category} className="space-y-4">
                <h2 className="text-2xl font-light text-gray-300 border-b border-gray-800 pb-2">
                  {toolCategory.category}
                </h2>
                <ul className="space-y-2">
                  {toolCategory.items.map((tool) => (
                    <li key={tool} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-light mb-4">Approach</h2>
            <p className="text-gray-300 leading-relaxed">
              My practice combines scientific methodology with artistic intuition. I use computational 
              tools not just as instruments, but as collaborators in the creative process. Each project 
              begins with a question about perception, consciousness, or the nature of reality, which 
              then gets translated into code, sound, and visual form.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
