'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const productItems = ['Produkte', 'Erfahrungen', 'FAQ'];
const serviceItems = ['Leistungen', 'News'];
const newsItems = ['News', 'Blog'];
const contactItems = ['\u00dcber uns', 'Kontakt'];

const menuGroups = [
  { title: 'Produkte', items: productItems, href: '#navigation' },
  { title: 'Leistungen', items: serviceItems, href: '#scaling' },
  { title: 'News', items: newsItems, href: '#contrast' },
  { title: 'Kontakt', items: contactItems, href: '#backToTop' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white w-full px-6 sm:px-[20%] py-4 relative">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          aria-label="F\u00fchrt zur\u00fcck zur Startseite"
          className="relative w-[3em] h-[2em] shrink-0"
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
        <div className="hidden md:flex gap-10 ml-10">
          {menuGroups.map((group) => (
            <Menu as="div" className="relative" key={group.title}>
              <MenuButton className="inline-flex items-center gap-x-1 font-semibold hover:text-gray-300">
                <span>{group.title}</span>
                <ChevronDownIcon aria-hidden="true" className="w-5 h-5" />
              </MenuButton>
              <MenuItems className="absolute left-0 mt-2 w-40 origin-top-left rounded-md bg-white text-black shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="flex flex-col p-2">
                  {group.items.map((item) => (
                    <MenuItem key={item}>
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="px-4 py-2 rounded-md ui-active:bg-gray-100"
                      >
                        {item}
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          aria-label="Men\u00fc umschalten"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 bg-blue-950 text-white">
          {menuGroups.map((group) => (
            <div key={group.title}>
              <span className="block font-semibold mb-2">{group.title}</span>
              <div className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-2 py-1 hover:bg-blue-900 rounded"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
