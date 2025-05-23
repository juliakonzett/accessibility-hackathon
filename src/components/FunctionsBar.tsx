'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FuncitonsBar() {
  const [isContrast, setIsContrast] = useState(false);
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    const savedContrast = localStorage.getItem('highContrast') === 'true';
    const savedScale = localStorage.getItem('fontScale') === '200';

    setIsContrast(savedContrast);
    setIsScaled(savedScale);

    document.body.classList.toggle('contrast', savedContrast);
    document.documentElement.style.setProperty(
      '--scale',
      savedScale ? '2' : '1'
    );
  }, []);

  const toggleContrast = () => {
    const newState = !isContrast;
    setIsContrast(newState);
    document.body.classList.toggle('contrast', newState);
    localStorage.setItem('highContrast', String(newState));
  };

  const toggleFontSize = () => {
    const newScale = isScaled ? '1' : '2';
    setIsScaled(!isScaled);
    document.documentElement.style.setProperty('--scale', newScale);
    localStorage.setItem('fontScale', newScale);
  };

  return (
    <div className='functions-bar w-full px-[20%] py-[2%] flex flex-row gap-10 bg-[#a9dced] text-black fixed top-0'>
      <button
        onClick={toggleFontSize}
        aria-label='Textgröße umschalten (100% / 200%)'
        className='relative w-6 h-6 custom-focus hover:cursor-pointer'>
        <Image
          src='/letter.png'
          alt='Ein großes A mit einem Pluszeichen'
          fill
          style={{ objectFit: 'contain' }}
        />
      </button>

      <button
        onClick={toggleContrast}
        aria-label='Kontrastmodus ein- oder ausschalten'
        className='custom-focus relative w-6 h-6 hover:cursor-pointer'>
        <Image
          src='/brightness.png'
          alt='Kontrast-Symbol (Sonne)'
          fill
          style={{ objectFit: 'contain' }}
        />
      </button>
    </div>
  );
}
