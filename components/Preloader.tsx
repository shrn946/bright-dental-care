'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Smoothly fade out the preloader after a brief delay
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, 150);

    // Completely unmount and remove from DOM once transition finishes
    const removeTimer = setTimeout(() => {
      setMounted(false);
    }, 750);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="preloader"
      style={{
        transition: 'opacity 0.6s ease',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'all' : 'none',
      }}
    >
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="/images/loader.svg" alt="loading..." />
        </div>
      </div>
    </div>
  );
}
