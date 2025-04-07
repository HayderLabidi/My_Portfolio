
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 transition-all duration-300 ${
        scrolled ? 'py-2 backdrop-blur-xl bg-black/60' : 'py-4 backdrop-blur-md bg-black/40'
      } border-b border-white/5`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="text-xl font-poppins font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className={`text-white text-sm font-medium relative ${
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                  layoutId="activeSection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur-xl mt-3 rounded-lg p-3 border border-white/10"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className={`text-white text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-primary/20 text-primary'
                      : 'hover:bg-white/5'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
