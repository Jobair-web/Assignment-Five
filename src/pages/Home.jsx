import React, { useState, useEffect } from 'react';
import Hero from '../components/home/Hero';
import TechnologySection from '../components/technology/TechnologySection';
import techData from '../data/technologies.json';
import { useTechnologyStack } from '../hooks/useTechnologyStack';

const Home = () => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  const { stack, addToStack, removeFromStack, clearStack } = useTechnologyStack();

  useEffect(() => {
    // Simulating API fetch delay from JSON
    const timer = setTimeout(() => {
      setTechnologies(techData);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Hero />
      <TechnologySection
        technologies={technologies}
        loading={loading}
        stack={stack}
        onAdd={addToStack}
        onRemove={removeFromStack}
        onClearAll={clearStack}
      />
    </main>
  );
};

export default Home;