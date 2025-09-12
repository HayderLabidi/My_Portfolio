
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Full-Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, text]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary">
              <AvatarImage src="/lovable-uploads/hayder.jpg" alt="Hayder Labidi" />
              <AvatarFallback>HL</AvatarFallback>
            </Avatar>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-lg md:text-xl text-secondary">Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Hayder Labidi
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl text-accent font-poppins">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mb-12"
          >
            <a 
              href="/Hayder cv englais.pdf" 
              download
              className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-full px-6 py-2 transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex items-center justify-center space-x-4"
          >
            <motion.a
              href="https://github.com/HayderLabidi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-white hover:text-primary transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/hayder-labidi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -10 }}
              className="text-white hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:hayderlabidi2001@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-white hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-float"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
