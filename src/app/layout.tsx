import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FuncitonsBar from '@/components/FunctionsBar';
import BackToTopButton from '@/components/BackToTopButton';
import FlyoutNav from '@/components/FlyoutNav';
import NavbarNew from '@/components/NavbarNew';

export const metadata: Metadata = {
  title: 'Barrierefreiheit',
  description: 'Wirtschaftliche Auswirkungen des Barrierefreiheitsgesetzes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body className='flex min-h-screen flex-col'>
        <div className='fixed top-0 w-full z-50'>
          <FuncitonsBar />
          {/* <Navbar /> */}
          {/* <FlyoutNav/> */}
          <NavbarNew/>
        </div>
        <main className='flex-grow pt-10 z-10'>{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
