import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustResults from './components/TrustResults';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Process from './components/Process';
import WhyHireMe from './components/WhyHireMe';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustResults />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Process />
        <WhyHireMe />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
