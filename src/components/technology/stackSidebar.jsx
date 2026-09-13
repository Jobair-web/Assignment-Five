import React from 'react';
import StackItem from './StackItem';
import Button from '../common/Button';

const StackSidebar = ({ stack, onRemove, onClearAll }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs h-fit sticky top-20">
      <h3 className="font-bold text-xl text-slate-800">Your Stack</h3>
      <p className="text-xs text-gray-400 mb-6">
        {stack.length > 0 ? `${stack.length} Technology Selected` : 'No technologies selected yet.'}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400 text-xs my-4">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {stack.map((item) => (
            <StackItem key={item.id} item={item} onRemove={onRemove} />
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <Button variant="dangerOutline" onClick={onClearAll}>
          Remove All
        </Button>
      )}
    </div>
  );
};

export default StackSidebar;