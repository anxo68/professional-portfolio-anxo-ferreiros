import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import KeyFacts from '@/components/KeyFacts';
import ImpactMetrics from '@/components/ImpactMetrics';
import About from '@/components/About';
import ClientLogos from '@/components/ClientLogos';
import Skills from '@/components/Skills';
import SkillsRadar from '@/components/SkillsRadar';
import ConsultingServices from '@/components/ConsultingServices';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import GlobalMobility from '@/components/GlobalMobility';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <Hero />
      <KeyFacts />
      <ImpactMetrics />
      <About />
      <ClientLogos />
      {/* <Skills /> */}
      <SkillsRadar />
      <ConsultingServices />
      <Portfolio />
      <Experience />
      <GlobalMobility />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

