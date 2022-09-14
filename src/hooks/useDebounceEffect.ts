import React from 'react';

export const useDebounceEffect = (callback: () => void, delay: number, deps: any) => {
  const timerRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setTimeout(callback, delay);

    return () => clearInterval(timerRef.current);
  }, [callback, delay, deps]);
};