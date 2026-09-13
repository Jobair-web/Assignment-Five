import React from 'react';
import { X } from 'lucide-react';

const StackItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-2xs">
      <div className="flex items-center gap-3">
        <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
        <div>
          <h4 className="font-bold text-sm text-slate-800">{item.name}</h4>
          <p className="text-xs text-gray-400">{item.category}</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id, item.name)}
        className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default StackItem;