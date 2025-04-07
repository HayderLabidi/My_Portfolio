
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

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
        title: "Traveler's Connection App",
        description: "A social app for travelers to connect, share stories, and explore destinations. Built during internship at Bee Coders.",
        image: "/project/HUD.png",
        tags: ['Flutter', 'SpringBoot', 'MySQL', 'Vscode'],
        link: 'https://blacklistedtraders.netlify.app/',
        featured: true
      },
      {
        title: "Traveler's Connection App",
        description: "A social app for travelers to connect, share stories, and explore destinations. Built during internship at Bee Coders.",
        image: "/project/blacklisted.png",
        tags: ['Flutter', 'SpringBoot', 'MySQL', 'Vscode'],
        link: 'https://blacklistedtraders.netlify.app/',
        featured: true
      },
      {
        title: "Traveler's Connection App",
        description: "A social app for travelers to connect, share stories, and explore destinations. Built during internship at Bee Coders.",
        image: "/project/jumanji.png",
        tags: ['Flutter', 'SpringBoot', 'MySQL', 'Vscode'],
        link: 'https://blacklistedtraders.netlify.app/',
        featured: true
      },
      {
        title: "Traveler's Connection App",
        description: "A social app for travelers to connect, share stories, and explore destinations. Built during internship at Bee Coders.",
        image: "/project/laravel_library2.png",
        tags: ['Flutter', 'SpringBoot', 'MySQL', 'Vscode'],
        link: 'https://blacklistedtraders.netlify.app/',
        featured: true
      },
      {
        title: "Traveler's Connection App",
        description: "A social app for travelers to connect, share stories, and explore destinations. Built during internship at Bee Coders.",
        image: "/project/rideshare.png",
        tags: ['Flutter', 'SpringBoot', 'MySQL', 'Vscode'],
        link: 'https://blacklistedtraders.netlify.app/',
        featured: true
      },
      {
        title: "Traveler's Connection App",
        description: "A social app for travelers to connect, share stories, and explore destinations. Built during internship at Bee Coders.",
        image: "/project/yotop.png",
        tags: ['Flutter', 'SpringBoot', 'MySQL', 'Vscode'],
        link: 'https://blacklistedtraders.netlify.app/',
        featured: true
      },
      {
        title: "Traveler's Connection App",
        description: "A social app for travelers to connect, share stories, and explore destinations. Built during internship at Bee Coders.",
        image: "/project/tic_tac_to.png",
        tags: ['Flutter', 'SpringBoot', 'MySQL', 'Vscode'],
        link: 'https://blacklistedtraders.netlify.app/',
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

            <div className={`grid gap-8 ${section.title === "Featured Projects" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
              {section.items.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`group relative overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 ${
                      section.title === "Featured Projects" ? "h-[400px]" : "h-[300px]"
                    }`}
                    onMouseEnter={() => setHoveredProject(project.title)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    </div>

                    <div className="relative h-full p-6 flex flex-col justify-end">
                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-primary/20 text-primary-foreground"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors"
                      >
                        View Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                  </Card>
                </motion.div>
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
