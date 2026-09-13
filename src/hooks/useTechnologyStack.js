import { useState } from 'react';
import { toast } from 'react-toastify';

export const useTechnologyStack = () => {
  const [stack, setStack] = useState([]);

  const addToStack = (tech) => {
    const exists = stack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`, { position: 'top-right' });
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, { position: 'top-right' });
  };

  const removeFromStack = (techId, techName) => {
    setStack((prev) => prev.filter((item) => item.id !== techId));
    toast.info(`Removed ${techName} from stack.`, { position: 'top-right' });
  };

  const clearStack = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('Cleared all technologies from stack!', { position: 'top-right' });
  };

  return { stack, addToStack, removeFromStack, clearStack };
};