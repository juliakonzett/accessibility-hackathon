'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUpOnView(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { ref, count };
}

export default function CompanyStats() {
  const stats = [
    { label: 'Zufriedene Kund*innen', value: 1250 },
    { label: 'Projekte abgeschlossen', value: 340 },
    { label: 'Jahre Erfahrung', value: 15 },
  ];
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    const savedScale = localStorage.getItem('fontScale') === '200';
    console.log('Saved scale is 200:', savedScale);
    setIsScaled(savedScale);
  }, []);

  return (
    <div>
    <h2 className="font-medium text-4xl my-8"># Stats</h2>
    <section className="w-full max-w-5xl mx-auto py-16 px-6 text-center bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-10">Unsere Erfolge</h2>
      <div className={`grid  ${isScaled ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'} gap-10`}>
      {/* <div className='flex flex-col md:flex-row md:justify-around md:space-x-16 space-y-8 md:space-y-0 items-center'> */}
        {stats.map((stat, index) => {
          const { ref, count } = useCountUpOnView(stat.value);
          return (
            <div key={index} ref={ref} className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-indigo-600">{count}</span>
              <span className="mt-2 text-lg font-medium text-gray-700">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>

    </div>
  );
}
