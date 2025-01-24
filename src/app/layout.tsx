import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ChakraProvider } from '@/hoc';



const pop = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

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
      <body className={pop.className}>
        <ChakraProvider>


      {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
