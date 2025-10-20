"use client";

import { useEffect, useRef, useState } from "react";

export function useCounterAnimation(
  end: number,
  duration = 2000,
  start = 0,
  run = true
) {
  const [count, setCount] = useState(start);
  const startedRef = useRef(false);

  // Reinicia si cambian parámetros
  useEffect(() => {
    startedRef.current = false;
    setCount(start);
  }, [end, duration, start]);

  useEffect(() => {
    if (!run || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const range = end - start;
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + range * easeOutQuart;

      setCount(current);

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(end);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start, run]);

  return count;
}
