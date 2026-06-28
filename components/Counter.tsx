'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function Counter({ end, duration = 800, suffix = '', prefix = '' }: CounterProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [count, setCount] = useState(0);

  // Set mounted state once client-side execution starts
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    if (end <= 0) {
      setCount(end);
      return;
    }

    const steps = 40; // Number of updates over the duration
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Smooth ease-out quad deceleration curve
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * end));

      if (currentStep >= steps) {
        setCount(end); // Lock exactly onto the target end value
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasMounted, end, duration]);

  // Server-rendered fallback matches the initial client-render (0)
  if (!hasMounted) {
    return (
      <span className="counter">
        {prefix}0{suffix}
      </span>
    );
  }

  return (
    <span className="counter">
      {prefix}{count}{suffix}
    </span>
  );
}
