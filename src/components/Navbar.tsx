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

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-15 w-full transition-all duration-300 px-[20%] py-4 flex flex-row gap-8 justify-between items-start bg-blue-950 text-white ${
        isHovered ? 'pb-12' : 'pb-4'
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        aria-label="Führt zurück zur Startseite"
        className="custom-focus relative w-[3em] h-[2em]">
        <Image
          src="/accessibility_logo.png"
          alt="Ein hellblaues Logo mit einem Rollstuhlfahrer Icon in der Mitte"
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 100vw, 3em"
        />
      </Link>

      {/* Menügruppen */}
      <MenuGroup
        title="Produkte"
        href="#navigation"
        items={productItems}
        isVisible={isHovered}
      />
      <MenuGroup
        title="Leistungen"
        href="#scaling"
        items={serviceItems}
        isVisible={isHovered}
      />
      <MenuGroup
        title="News"
        href="#contrast"
        items={newsItems}
        isVisible={isHovered}
      />
      <MenuGroup
        title="Kontakt"
        href="#backToTop"
        items={contactItems}
        isVisible={isHovered}
      />
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
              className="custom-focus hover:underline"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
