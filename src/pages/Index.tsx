
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
      <Hero />
      <PortfolioGrid activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
    </div>
  );
};

export default Index;
