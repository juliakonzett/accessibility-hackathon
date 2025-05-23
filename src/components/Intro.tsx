export default function Intro() {
  return (
    <div className='flex flex-col gap-8'>
      <h1 className='font-semibold text-6xl'>
        Auswirkungen des Barrierefreiheitsgesetzes
      </h1>
      <h2 className='font-medium text-4xl'>Leitfaden</h2>
      <p className='font-serif italic'>- Julia Konzett & Dominik Illmer</p>
      <p>
        Im folgenden Leitfaden zeigen wir, wie sich eine einfache Website
        mithilfe gängiger Module barrierefrei gestalten lässt. Dazu stellen wir
        übersichtliche Bausteine vor, die nach den WCAG 2.2-Richtlinien
        entwickelt wurden und sich leicht in jede Basis­struktur integrieren
        lassen. <br />
        <br />
        Die Standards und Richtlinien der Web Content Accessibility Guidelines
        (WCAG) 2.2 finden Sie{' '}
        <strong>
          <a
            aria-label='Öffnet die WCAG 2.2 in einem neuen Tab'
            target='blank'
            className='underline underline-offset-4 custom-focus'
            tabIndex={0}
            href='https://www.w3.org/TR/WCAG22/'>
            hier
          </a>
          . <br />
        </strong>
        Das österreichische Barrierefreiheitsgesetz finden Sie{' '}
        <strong>
          <a
            aria-label='Öffnet das Barrierefreiheitsgesetz in einem neuen Tab'
            target='blank'
            tabIndex={0}
            className='underline underline-offset-4 custom-focus'
            href='https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2023_I_76/BGBLA_2023_I_76.html'>
            hier
          </a>
          . <br />
        </strong>
      </p>
    </div>
  );
}
