
import { useState } from 'react';
import { Instagram } from 'lucide-react';
import Navigation from '../components/Navigation';
import PortfolioGrid from '../components/PortfolioGrid';
import Hero from '../components/Hero';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="w-full">
        <Hero />
        <div className="px-4 sm:px-6">
          <PortfolioGrid activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </div>
      </main>
    </div>
  );
};

export default Index;
