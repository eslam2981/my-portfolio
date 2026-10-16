import { useEffect } from 'react';

/** Triggers callback on Escape key */
export function useEscapeKey(callback, isEnabled = true) {
  useEffect(() => {
    if (!isEnabled) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback, isEnabled]);
}

export default useEscapeKey;
