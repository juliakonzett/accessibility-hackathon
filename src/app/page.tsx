import Intro from '@/components/Intro';
import Product from '@/components/Product';
import Service from '@/components/Service';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Accordion from '@/components/Accordion';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <main>
      <div className='mx-[25%] my-[10%] hyphens-auto flex flex-col gap-10'>
        <section id='intro'>
          <Intro />
        </section>
        <section id='navigation'>
          <Product />
        </section>
        <section id='stats'>
          <Stats/>
        </section>
        <section id='faq'>
          <Accordion/>
        </section>
        <section id='scaling'>
          <Service />
        </section>
        <section id='contrast'>
          <News />
        </section>
        <section id='backToTop'>
          <Contact />
        </section>
      </div>
    </main>
  );
}
