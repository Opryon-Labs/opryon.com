import Header from '@/components/sections/v2/Header';
import Hero from '@/components/sections/v2/Hero';
import Work from '@/components/sections/v2/Work';
import FitCheck from '@/components/sections/v2/FitCheck';
import Process from '@/components/sections/v2/Process';
import Beliefs from '@/components/sections/v2/Beliefs';
import Contact from '@/components/sections/v2/Contact';
import Footer from '@/components/Footer';

/**
 * Homepage v2.
 *
 * Removed: Preloader (2.5s of nothing before a stranger reads a word),
 * WhatWeDo (six services = generalist signal), WhyChooseUs (unverifiable
 * "98% satisfaction" stats), FloatingContactButton.
 *
 * The old components are still on disk and still used by /services and
 * /about — nothing is deleted, just unwired from the homepage.
 */
export default function Home() {
  return (
    <div className="grain bg-ink text-bone">
      <Header />
      <main>
        <Hero />
        <Work />
        <FitCheck />
        <Process />
        <Beliefs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
