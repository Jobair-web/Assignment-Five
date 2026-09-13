import React from 'react';
import TechnologyCard from './TechnologyCard';
import StackSidebar from './StackSidebar';

const TechnologySection = ({ technologies, loading, stack, onAdd, onRemove, onClearAll }) => {
  return (
    <section id="technologies" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Grid Container */}
      {loading ? (
        <div className="flex justify-center items-center py-20 text-gray-400 font-medium">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500 mr-3"></div>
          Loading Technologies...
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tech Cards (3 Cols) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech) => {
              const isAdded = stack.some((item) => item.id === tech.id);
              return (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  onAdd={onAdd}
                  isAdded={isAdded}
                />
              );
            })}
          </div>

          {/* Sidebar (1 Col) */}
          <div className="lg:col-span-1">
            <StackSidebar
              stack={stack}
              onRemove={onRemove}
              onClearAll={onClearAll}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TechnologySection;