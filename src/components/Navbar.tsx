import Image from 'next/image';
import Link from 'next/link';

const productItems = ['Produkte', 'Erfahrungen', 'FAQ'];
const serviceItems = ['Leistungen', 'News'];
const newsItems = ['News', 'Blog'];
const contactItems = ['Über uns', 'Kontakt'];

export default function Navbar() {
  return (
    <nav className='navbar px-[20%] py-[2%] hyphens-auto flex flex-row gap-4 justify-between items-center bg-blue-950 text-white'>
      <Link
        href='/'
        aria-label='Führt zurück zur Startseite'
        className='custom-focus relative w-[3em] h-[2em]'>
        <Image
          src='/duck-logo.png'
          alt='Ein hellblaues Logo mit einem Rollstuhlfahrer Icon in der Mitte'
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw, 3em'
        />
      </Link>
      <Link
        aria-label={
          'Scrollt zum Abschnitt der Seite der Reduzierten Navigation'
        }
        tabIndex={0}
        href='#navigation'
        className='custom-focus'>
        Produkte
      </Link>
      {productItems.length > 0 &&
        productItems.map((item, index) => {
          return (
            <Link
              key={index}
              aria-label={`Scrollt zum Abschnitt der Seite des ${item} Abschnitts`}
              tabIndex={0}
              href={`#${item.toLowerCase()}`}
              className='custom-focus'>
              {item}
            </Link>
          );
        })}
      <Link
        aria-label={'Scrollt zum Abschnitt der Seite der Skalierungsfunktion'}
        tabIndex={0}
        href='#scaling'
        className='custom-focus'>
        Leistungen
      </Link>
      <Link
        aria-label={'Scrollt zum Abschnitt der Seite der Hochkontrastfunktion'}
        tabIndex={0}
        href='#contrast'
        className='custom-focus'>
        News
      </Link>
      <Link
        aria-label={'Scrollt zum Abschnitt der Seite des Back to Top Buttons'}
        tabIndex={0}
        href='#backToTop'
        className='custom-focus'>
        Kontakt
      </Link>
    </nav>
  );
}
