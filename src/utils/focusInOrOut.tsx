// utils/useOutsideAlerter.ts
import { useEffect } from 'react';

export type UseOutsideAlerterProps = {
  ref: React.RefObject<HTMLElement>;
  functToRun: (val: boolean) => void;
  checkVal: boolean;
};

export function useOutsideAlerter({
  ref,
  functToRun,
  checkVal,
}: UseOutsideAlerterProps) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        if (checkVal) {
          functToRun(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, checkVal, functToRun]);
}
