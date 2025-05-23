import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='footer px-[5%] py-[5%] hyphens-auto bg-blue-950 text-white flex flex-col gap-10'>
      <Link
        href='/'
        aria-label='Führt zurück zur Startseite'
        className='custom-focus relative w-[3em] h-[2em]'>
        <Image
          src='/accessibility_logo.png'
          alt='Ein hellblaues Logo mit einem Rollstuhlfahrer Icon in der Mitte'
          fill
          style={{ objectFit: 'contain' }}
          sizes='(max-width: 768px) 100vw, 3em'
        />
      </Link>
      <h4 className='text-2xl'>Auswirkungen des Barrierefreiheitsgesetzes</h4>

      <hr className='border border-white/20'></hr>

      <div className='flex flex-row justify-between w-full'>
        {/* Kontakt */}
        <div className='flex flex-col gap-2'>
          <span>Kontakt</span>
          <span>Julia Konzett & Dominik Illmer</span>
        </div>

        {/* Navigation */}
        <div className='flex flex-col text-right gap-2'>
          <Link
            aria-label='Scrollt zum Abschnitt der Seite der Reduzierten Navigation'
            tabIndex={0}
            href='#navigation'
            className='custom-focus'>
            Produkte
          </Link>
          <Link
            aria-label='Scrollt zum Abschnitt der Seite der Skalierungsfunktion'
            tabIndex={0}
            href='#scaling'
            className='custom-focus'>
            Leistungen
          </Link>
          <Link
            aria-label='Scrollt zum Abschnitt der Seite der Hochkontrastfunktion'
            tabIndex={0}
            href='#contrast'
            className='custom-focus'>
            News
          </Link>
          <Link
            aria-label='Scrollt zum Abschnitt der Seite des Back to Top Buttons'
            tabIndex={0}
            href='#backToTop'
            className='custom-focus'>
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}
