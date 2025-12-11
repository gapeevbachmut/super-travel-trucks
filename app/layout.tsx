import type { Metadata } from 'next';
import './globals.css';
import 'modern-normalize';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Loading from './loading';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Travel-Trucks',
  description: 'Campers of your dreams',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Travel Trucks — Camper Van Rentals in Ukraine',
    description:
      'Plan your trip with Travel Trucks. You can find everything you want in our catalog!',
    siteName: 'Travel Trucks',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/mainPage/camper.jpg`,
        width: 1200,
        height: 630,
        alt: 'Travel Trucks',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Suspense fallback={<Loading />}>
            <Header />
            <main>{children}</main>
            <Footer />
          </Suspense>

          <Toaster position="top-center" reverseOrder={false} />
        </TanStackProvider>
      </body>
    </html>
  );
}
