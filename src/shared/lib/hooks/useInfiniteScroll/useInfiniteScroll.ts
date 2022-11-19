import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollOptions {
  triggerRef: MutableRefObject<HTMLDivElement>;
  wrapperRef: MutableRefObject<HTMLDivElement>;
  callback?: () => void;
}

export function UseInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;
    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);
    }

    observer?.observe(triggerElement);

    return () => {
      if (observer) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
