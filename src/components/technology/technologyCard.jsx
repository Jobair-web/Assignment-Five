import React from 'react';
import { Star } from 'lucide-react';

const TechnologyCard = ({ tech, onAdd, isAdded }) => {
  const getBadgeColor = (badge) => {
    switch (badge?.toLowerCase()) {
      case 'popular': return 'bg-sky-50 text-sky-600 border-sky-100';
      case 'versatile': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'fast': return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-indigo-50 text-indigo-600 border-indigo-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Top Header: Icon & Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          </div>
          {tech.badge && (
            <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${getBadgeColor(tech.badge)}`}>
              {tech.badge}
            </span>
          )}
        </div>

        {/* Name & Description */}
        <h3 className="font-bold text-lg text-slate-800 mb-2">{tech.name}</h3>
        <p className="text-gray-500 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6">
          {tech.description}
        </p>
      </div>

      <div>
        {/* Meta details */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pt-2 border-t border-gray-50">
          <span className="font-medium text-gray-500">{tech.category}</span>
          <span>{tech.difficulty}</span>
          <div className="flex items-center gap-1 font-semibold text-gray-700">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            {tech.rating}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
            isAdded
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;