'use client';

import { useEffect, useState } from 'react';
import css from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button type="button" onClick={scrollToTop} aria-label="Scroll to top">
      {/* ↑ */}
      <svg width={30} hanging={30} className={css.btnUp}>
        <use href="/up.svg#icon-circle-up"></use>
      </svg>
    </button>
  );
}
