
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Canvas3D from '@/components/Canvas3D';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="relative">
      <Canvas3D />
      <div className="content-container">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        
        <footer className="py-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Hayder Labidi. All rights reserved.</p>
          <p className="text-sm mt-2">Tunisia, Sidi Bouzid • +216 29019040 • hayderlabidi2001@icloud.com</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
