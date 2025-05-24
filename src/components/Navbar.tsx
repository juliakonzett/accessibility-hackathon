'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const productItems = ['Produkte', 'Erfahrungen', 'FAQ'];
const serviceItems = ['Leistungen', 'News'];
const newsItems = ['News', 'Blog'];
const contactItems = ['Über uns', 'Kontakt'];

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white w-full">
      <div className="flex gap-5 px-6 justify-between md:justify-start sm:px-[20%] py-4">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Führt zurück zur Startseite"
          className="relative w-[3em] h-[2em] flex shrink-0 justify-start"
        >
          <Image
            src="/duck-logo.png"
            alt="Ein hellblaues Logo mit einem Rollstuhlfahrer Icon in der Mitte"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 3em"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex justify-between w-full gap-8 transition-all duration-300 ${
            isHovered ? 'pb-8' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MenuGroup title="Produkte" href="#navigation" items={productItems} isVisible={isHovered} />
          <MenuGroup title="Leistungen" href="#scaling" items={serviceItems} isVisible={isHovered} />
          <MenuGroup title="News" href="#contrast" items={newsItems} isVisible={isHovered} />
          <MenuGroup title="Kontakt" href="#backToTop" items={contactItems} isVisible={isHovered} />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          aria-label="Menü umschalten"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col gap-4 px-6 sm:px-[10%] pb-4 md:hidden basis-auto right-0">
          <MenuGroup title="Produkte" href="#navigation" items={productItems} isVisible />
          <MenuGroup title="Leistungen" href="#scaling" items={serviceItems} isVisible />
          <MenuGroup title="News" href="#contrast" items={newsItems} isVisible />
          <MenuGroup title="Kontakt" href="#backToTop" items={contactItems} isVisible />
        </div>
      )}
    </nav>
  );
}

function MenuGroup({
  title,
  href,
  items,
  isVisible,
}: {
  title: string;
  href: string;
  items: string[];
  isVisible: boolean;
}) {
  return (
    <div className="flex flex-col">
      <Link
        href={href}
        aria-label={`Scrollt zum Abschnitt: ${title}`}
        className="custom-focus font-semibold"
      >
        {title}
      </Link>
      {isVisible && (
        <div className="flex flex-col mt-1 text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              aria-label={`Scrollt zum Abschnitt: ${item}`}
              className="custom-focus hover:"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
