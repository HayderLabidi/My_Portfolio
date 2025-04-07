
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Web Projects",
    items: [
      {
        title: "Portfolio Website",
        description: "A 3D interactive portfolio website showcasing my skills and projects.",
        image: "/project/portfolio.png",
        tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
        link: '#',
        featured: true
      },
      {
        title: "Blacklisted Traders",
        description: "A platform for traders with comprehensive information and resources.",
        image: "/project/blacklisted.png",
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        link: 'https://blacklistedtraders.netlify.app/',
        featured: true,
        github: 'https://github.com/HayderLabidi'
      },
      {
        title: "Jumanji Adventure",
        description: "An interactive adventure game inspired by Jumanji.",
        image: "/project/jumanji.png",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://hayderlabidi.github.io/JUMANJI/project.html',
        featured: true
      },
      {
        title: "Library Management System",
        description: "A comprehensive system for managing library resources and lending.",
        image: "/project/laravel_library2.png",
        tags: ['Laravel', 'MySQL', 'Bootstrap'],
        link: 'https://hayderlabidi.github.io/My.second.page/Art.html',
        featured: true
      },
      {
        title: "Ride Share Platform",
        description: "A carpooling platform connecting drivers and passengers for shared rides.",
        image: "/project/rideshare.png",
        tags: ['Angular', 'Node.js', 'Express', 'MongoDB'],
        link: 'https://couvoiturage-hayder-jacer.netlify.app/',
        featured: true
      },
      {
        title: "YouTOP Video Platform",
        description: "An innovative video-sharing platform allowing user engagement.",
        image: "/project/yotop.png",
        tags: ['React', 'Firebase', 'Redux'],
        link: 'https://hayderlabidi.github.io/My.second.page/Art.html',
        featured: true
      },
      {
        title: "Tic Tac Toe Game",
        description: "A modern implementation of the classic Tic Tac Toe game with enhanced UI.",
        image: "/project/tic_tac_to.png",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://hayderlabidi.github.io/TIC-TAC-TO/',
        featured: true
      },
      {
        title: "Calculator App",
        description: "A sleek and functional calculator application with advanced features.",
        image: "/project/HUD.png",
        tags: ['JavaScript', 'HTML', 'CSS'],
        link: 'https://hayderlabidi.github.io/Hayder_Calculator/claculator.html',
        featured: true
      }
    ]
  },
  {
    title: "Mobile Applications",
    items: [
      {
        title: "HAD Startup Platform",
        description: "A website for a startup specializing in digital development and graphic design.",
        image: "/project/travel.png",
        tags: ['Angular', 'NodeJs', 'MySQL', 'Vscode'],
        link: 'https://couvoiturage-hayder-jacer.netlify.app/'
      },
      {
        title: "YouTOP Video Platform",
        description: "An innovative video-sharing platform allowing user engagement.",
        image: "/lovable-uploads/logo.PNG",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://hayderlabidi.github.io/My.second.page/Art.html'
      }
    ]
  },
  {
    title: "Applications & Games",
    items: [
      {
        title: "Student Management Application",
        description: "A desktop application for managing students and teachers with useful queries.",
        image: "/lovable-uploads/logo.PNG",
        tags: ['Netbeans', 'Java', 'MySQL'],
        link: 'https://hayderlabidi.github.io/JUMANJI/project.html'
      },
      {
        title: "TIK TAK TO Game",
        description: "An interactive Tic-Tac-Toe game with engaging user interface.",
        image: "/lovable-uploads/logo.PNG",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://hayderlabidi.github.io/TIC-TAC-TO/'
      }
    ]
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">My Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my work across various technologies and platforms.
            Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {projects.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-primary"
            >
              {section.title}
            </motion.h3>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  link={project.link}
                  github={project.github}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/HayderLabidi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            View More on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
