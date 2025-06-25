
import { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

interface PortfolioGridProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Quantum Resonance",
    category: "installation",
    description: "live visuals & installation",
    image: "photo-1526374965328-7f61d4dc18c5",
    tags: ["installation", "live", "quantum"]
  },
  {
    id: 2,
    title: "Neural Landscapes",
    category: "musicvideo",
    description: "AI-generated visuals",
    image: "photo-1470813740244-df37b8c1edcb",
    tags: ["musicvideo", "ai", "neural"]
  },
  {
    id: 3,
    title: "Sonic Explorations",
    category: "artwork",
    description: "experimental sound design",
    image: "photo-1500673922987-e212871fec22",
    tags: ["artwork", "sound", "experimental"]
  },
  {
    id: 4,
    title: "Interactive Waves",
    category: "show",
    description: "interactive installation",
    image: "photo-1482938289607-e9573fc25ebb",
    tags: ["show", "interactive", "waves"]
  },
  {
    id: 5,
    title: "Frequency Studies",
    category: "collectible",
    description: "digital art collection",
    image: "photo-1504893524553-b855bce32c67",
    tags: ["collectible", "digital", "frequency"]
  },
  {
    id: 6,
    title: "Minimalist Forms",
    category: "design",
    description: "generative design",
    image: "photo-1486718448742-163732cd1544",
    tags: ["design", "generative", "minimal"]
  }
];

const filters = [
  { key: 'all', label: 'all' },
  { key: 'installation', label: '#installation' },
  { key: 'musicvideo', label: '#musicvideo' },
  { key: 'artwork', label: '#artwork' },
  { key: 'collectible', label: '#collectible' },
  { key: 'show', label: '#show' },
  { key: 'design', label: '#design' }
];

const PortfolioGrid = ({ activeFilter, setActiveFilter }: PortfolioGridProps) => {
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="works" className="px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-6 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`text-lg transition-colors duration-200 ${
                activeFilter === filter.key
                  ? 'text-white underline'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-900 aspect-square mb-4">
                <img
                  src={`https://images.unsplash.com/${item.image}?w=800&h=800&fit=crop`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-light group-hover:text-gray-300 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-400 italic text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
