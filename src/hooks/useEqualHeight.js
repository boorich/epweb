// src/hooks/useEqualHeight.js
import { useEffect } from 'react';

const useEqualHeight = (ref1, ref2) => {
  useEffect(() => {
    const syncHeight = () => {
      if (ref1.current && ref2.current) {
        const maxHeight = Math.max(ref1.current.clientHeight, ref2.current.clientHeight);
        ref1.current.style.height = `${maxHeight}px`;
        ref2.current.style.height = `${maxHeight}px`;
      }
    };

    syncHeight();
    window.addEventListener('resize', syncHeight);
    return () => window.removeEventListener('resize', syncHeight);
  }, [ref1, ref2]);
};

export default useEqualHeight;
