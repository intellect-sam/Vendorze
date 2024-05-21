import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ChakraProvider } from '@/hoc';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vendorze App',
  description: 'Vendorze',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
