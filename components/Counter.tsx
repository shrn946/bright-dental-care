'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function Counter({ end, duration = 800, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    
    // Tiny delay to ensure layout is ready and visible to the user
    const timer = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Smooth ease-out quad deceleration curve
        const easeProgress = progress * (2 - progress);
        
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, 50);

    return () => clearTimeout(timer);
  }, [end, duration]);

  return (
    <span className="counter">
      {prefix}{count}{suffix}
    </span>
  );
}
