import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import HowWeDoIt from '@/components/sections/HowWeDoIt';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Work from '@/components/sections/Work';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <FloatingContactButton />
      <main>
        <Hero />
        <WhatWeDo />
        <HowWeDoIt />
        <WhyChooseUs />
        <Work />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
