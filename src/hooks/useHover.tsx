import { useCallback, useRef, useState } from 'react';

const useHover = <T extends HTMLElement>(): [
  (node?: T | null) => void,
  boolean
] => {
  const [value, setValue] = useState(false);
  const handleMouseEnter = useCallback(() => setValue(true), []);
  const handleMouseLeave = useCallback(() => setValue(false), []);

  const ref = useRef<T>();

  const callbackRef = useCallback(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', handleMouseEnter);
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener('mouseenter', handleMouseEnter);
        ref.current.addEventListener('mouseleave', handleMouseLeave);
      }
    },
    [handleMouseEnter, handleMouseLeave]
  );

  return [callbackRef, value];
};

export default useHover;
