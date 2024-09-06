import Header from '@/components/Header';
import BizReview from '@/components/BizReview';
import DownloadApp from '@/components/DownloadApp';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import HeroPage from '@/components/HeroPage';
import Reviews from '@/components/Reviews';
// import Image from 'next/image';

export default function Hero() {
  return (
    <main className="placeholder:mx-auto flex flex-col justify-between items-center">
      <Header />
      <HeroPage />
      <BizReview />
      <Features />
      <DownloadApp />
      <Reviews />
      <Footer />
    </main>
  );
}
