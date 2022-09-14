import React from 'react';

interface DebounceEffectProps {
  callback: () => void;
  delay: number;
  deps: any[];
}


export const useDebounceEffect = (props: DebounceEffectProps) => {
  const { callback, delay, deps } = props;
  const timerRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setTimeout(callback, delay);

    return () => clearInterval(timerRef.current);
  }, [callback, delay, deps]);
};