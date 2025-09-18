'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type ParallaxHeroProps = {
  img: string;
  height?: string;
  /** Parallax magnitude; 0 = pure fixed. Try 0.08–0.2 */
  strength?: number;
  className?: string;
  children?: React.ReactNode;
};

export default function ParallaxHero({
  img,
  height = '100vh',        // full screen by default
  strength = 0.15,
  className = '',
  children,
}: ParallaxHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const speed = strength;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        // Move in the opposite direction of scroll:
        const raw = window.scrollY * speed * -1;

        // Clamp to avoid exposing edges even on huge screens:
        // ~10% of viewport height, capped at 80px is a good safe range.
        const maxShift = Math.min(80, window.innerHeight * 0.1);
        const y = Math.max(-maxShift, Math.min(maxShift, raw));

        el.style.backgroundPosition = `center calc(50% + ${y}px)`;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial paint

    return () => window.removeEventListener('scroll', onScroll);
  }, [strength]);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-fixed bg-center bg-cover ${className}`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat', // never tile
        backgroundSize: 'cover',       // always fill screen
        height,                        // default 100vh, but configurable
      }}
    >
      {/* Overlay tint for contrast */}
      <div className="absolute inset-0 z-0 hero-overlay" />

      {/* Foreground content */}
      <motion.div
        className="relative z-10 px-4 max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        variants={{ hidden: { opacity: 0, x: 70 }, visible: { opacity: 1, x: 0 } }}
      >
        {children}
      </motion.div>
    </section>
  );
}
