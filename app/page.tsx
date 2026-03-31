import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Differentials from '@/components/Differentials';
import Portfolio from '@/components/Portfolio';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-neutral-800 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Portfolio />
      <Cta />
      <Footer />
    </main>
  );
}
