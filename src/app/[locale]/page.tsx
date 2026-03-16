import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

