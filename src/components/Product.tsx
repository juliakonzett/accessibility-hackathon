'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  { title: 'Cat Duck', img: '/cat-duck.png' },
  { title: 'Duck', img: '/duck.png' },
  { title: 'Evil Duck', img: '/evil-duck.png' },
  { title: 'Love Duck', img: '/love-duck.png' },
];

export default function HighlightCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    updateScrollButtons(); // On mount
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollButtons);
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * 0.7;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(updateScrollButtons, 300); // Wait for scroll to complete
    }
  };

  return (
    <div className="w-full">
      <div>
        <h2 className="font-medium text-4xl my-8"># Product</h2>
      </div>

      <section className="w-full">
        {/* Full-width header */}
        <div className="flex mb-6">
          <h2 className="text-3xl font-bold leading-tight w-full">Ducks in the House</h2>
        </div>

        {/* Carousel */}
        <div className="relative w-full">
          <div
            ref={containerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[250px] flex-shrink-0 rounded-lg overflow-hidden shadow-md bg-white"
              >
                {/* Image wrapper */}
                <div className="relative w-full h-48">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                  {/* Plus icon */}
                  <div className="absolute bottom-3 right-3 bg-black/50 rounded-full p-2">
                    <Plus className="text-white w-4 h-4" />
                  </div>
                </div>
                {/* Label */}
                <div className="px-4 py-2 text-center">
                  <p className="font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
            >
              <ChevronLeft />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
